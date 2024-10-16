// SyncSnapshot.js
// Version: 1.0.0
// Event: On Awake
// Description: Used to track received network values and interpolate based on timestamps.

/**
 * @template T
 * @param {number} timestamp
 * @param {T} value
 */
function SyncSnapshot(timestamp, value) {
  /** @type {number} */
  this.time = timestamp;
  /** @type {T} */
  this.value = value;
}

/**
 * @template T
 * @typedef {object} SnapshotBufferOptionsObj
 * @property {StorageType<T>=} storageType
 * @property {number=} interpolationTarget Time delta in local seconds to target (default = -0.25)
 * @property {((a:T, b:T, t:number)=>T)=} lerpFunc Function used for interpolating
 * @property {number=} size Max number of snapshots stored (default = 20)
 */

/**
 * @template T
 * @class
 * @param {SnapshotBufferOptionsObj<T>=} optionDic
 */
function SnapshotBufferOptions(optionDic) {
  /** @type {StorageType<T>?} */
  this.storageType;

  /** @type {number?} */
  this.interpolationTarget;

  /** @type {((a:T, b:T, t:number)=>T)?} */
  this.lerpFunc;

  /** @type {number?} */
  this.size;

  if (optionDic) {
    for (k in optionDic) {
      if (optionDic.hasOwnProperty(k)) {
        this[k] = optionDic[k];
      }
    }
  }
}

/**
 * @template T
 * @class
 * @param {(SnapshotBufferOptions<T>|SnapshotBufferOptionsObj<T>)=} options
 */
function SnapshotBuffer(options) {
  options = options || {};

  /** @type {SyncSnapshot<T>[]} */
  this.snapshots = [];
  /** @type {number} */
  this.size = options.size === undefined ? 20 : options.size;

  /** @type {number} */
  this.interpolationTarget =
    options.interpolationTarget === undefined
      ? -0.25
      : options.interpolationTarget;

  this.allowExtrapolation = false;

  /** @type {(a:T, b:T, t:number)=>T} */
  this.lerpFunc = options.lerpFunc;

  /**
   * @private
   * @type {T?}
   */
  this.mostRecentValue = null;

  /**
   * @private
   * @type {StorageProperty<T>?}
   */
  this._storageType = options.storageType;

  /**
   * @private
   * @type {boolean}
   */
  this._isArrayType = false;

  /**
   * @private
   * @type {T[]?}
   */
  this._lerpBuffer;

  if (this._storageType) {
    this._isArrayType = StorageTypes.isArrayType(this._storageType);
    if (!this.lerpFunc) {
      var baseType = StorageTypes.getBaseStorageType(this._storageType);
      this.lerpFunc = StorageTypes.getLerpForStorageType(baseType);
    }
  }
}

/**
 * @template T
 * @param {(SnapshotBufferOptions<T>|SnapshotBufferOptionsObj<T>)=} options
 * @returns {SnapshotBuffer<T>}
 */
SnapshotBuffer.createFromOptions = function (options) {
  return new SnapshotBuffer(options);
};

/**
 *
 * @param {number} timestamp Time in local seconds
 * @param {T=} value
 * @returns {SyncSnapshot<T>}
 */
SnapshotBuffer.prototype.saveSnapshot = function (timestamp, value) {
  // TODO: use a circular buffer
  if (this.snapshots.length >= this.size) {
    this.snapshots.shift();
  }
  if (
    this.snapshots.length > 0 &&
    this.snapshots[this.snapshots.length - 1].time > timestamp
  ) {
    print(
      "WARNING: RECEIVED UPDATE TIMESTAMP OUT OF ORDER! " +
        this.snapshots[this.snapshots.length - 1].time +
        ">" +
        timestamp
    );
    return;
  }
  // TODO: pool and reuse snapshots
  var newValue = value;
  var snapshot = new SyncSnapshot(timestamp, newValue);
  this.snapshots.push(snapshot);
  return snapshot;
};

/**
 *
 * @param {number} timestamp
 * @returns {number}
 */
SnapshotBuffer.prototype.findNearestIndexBefore = function (timestamp) {
  for (var i = this.snapshots.length - 1; i >= 0; i--) {
    if (this.snapshots[i].time < timestamp) {
      return i;
    }
  }
  return -1;
};

SnapshotBuffer.prototype.setCurrentValue = function (currentTime, value) {
  this.snapshots = [];
  this.mostRecentValue = value;
  return this.saveSnapshot(currentTime, value);
};

/**
 * @returns {T?}
 */
SnapshotBuffer.prototype.getMostRecentValue = function () {
  return this.mostRecentValue;
};

/**
 *
 * @param {number} timestamp
 * @returns {T?}
 */
SnapshotBuffer.prototype.getLerpedValue = function (timestamp) {
  var beforeInd = this.findNearestIndexBefore(timestamp);
  if (beforeInd == -1) {
    return null;
  }

  /** @type {SyncSnapshot<T>} */
  var before = this.snapshots[beforeInd];
  /** @type {SyncSnapshot<T>?} */
  var after = null;

  // Check if we can interpolate
  if (beforeInd < this.snapshots.length - 1) {
    after = this.snapshots[beforeInd + 1];
    var t = inverseLerp(before.time, after.time, timestamp);
    this.mostRecentValue = this.lerpSnapshots(before, after, t);
  } else {
    // We have to extrapolate
    if (this.allowExtrapolation && beforeInd > 0) {
      after = before;
      before = this.snapshots[beforeInd - 1];
      var extrapolateT = inverseLerp(before.time, after.time, timestamp);
      this.mostRecentValue = this.lerpSnapshots(before, after, extrapolateT);
    }
    this.mostRecentValue = before.value;
  }

  return this.mostRecentValue;
};

/**
 *
 * @param {SyncSnapshot<T>} a
 * @param {SyncSnapshot<T>} b
 * @param {number} t
 * @returns {T}
 */
SnapshotBuffer.prototype.lerpSnapshots = function (a, b, t) {
  if (!this.lerpFunc) {
    print("missing lerp func");
    return b.value;
  }
  if (this._isArrayType) {
    if (!this._lerpBuffer || this._lerpBuffer.length != a.value.length) {
      this._lerpBuffer = new Array(a.value.length);
    }
    for (var i = 0; i < a.value.length; i++) {
      this._lerpBuffer[i] = this.lerpFunc(a.value[i], b.value[i], t);
    }
    return this._lerpBuffer;
  } else {
    return this.lerpFunc(a.value, b.value, t);
  }
};

global.SyncSnapshot = SyncSnapshot;
global.SnapshotBuffer = SnapshotBuffer;

function inverseLerp(min, max, value) {
  return (value - min) / (max - min);
}
