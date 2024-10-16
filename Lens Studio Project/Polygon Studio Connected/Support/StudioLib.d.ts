/**
 * @module Lens Scripting
 * @version 5.1.0
 * For Snapchat Version: 13.4
*/
interface ComponentNameMap {
    "AnimationPlayer": AnimationPlayer;
    "AudioChainComponent": AudioEffectComponent;
    "AudioComponent": AudioComponent;
    "AudioEffectComponent": AudioEffectComponent;
    "AudioListenerComponent": AudioListenerComponent;
    "AudioPlayer": AudioComponent;
    "BaseMeshVisual": BaseMeshVisual;
    "BlurNoiseEstimation": BlurNoiseEstimation;
    "Camera": Camera;
    "Canvas": Canvas;
    "ClearDepth": ClearDepth;
    "ClearScreen": ClearDepth;
    "ClothVisual": ClothVisual;
    "ColliderComponent": ColliderComponent;
    "ColocatedTrackingComponent": ColocatedTrackingComponent;
    "Component.AnimationPlayer": AnimationPlayer;
    "Component.AudioChainComponent": AudioEffectComponent;
    "Component.AudioComponent": AudioComponent;
    "Component.AudioEffectComponent": AudioEffectComponent;
    "Component.AudioListenerComponent": AudioListenerComponent;
    "Component.AudioPlayer": AudioComponent;
    "Component.BaseMeshVisual": BaseMeshVisual;
    "Component.BlurNoiseEstimation": BlurNoiseEstimation;
    "Component.Camera": Camera;
    "Component.Canvas": Canvas;
    "Component.ClearDepth": ClearDepth;
    "Component.ClearScreen": ClearDepth;
    "Component.ClothVisual": ClothVisual;
    "Component.ColliderComponent": ColliderComponent;
    "Component.ColocatedTrackingComponent": ColocatedTrackingComponent;
    "Component.DepthSetter": DepthSetter;
    "Component.DeviceLocationTrackingComponent": DeviceLocationTrackingComponent;
    "Component.DeviceTracking": DeviceTracking;
    "Component.EyeColorVisual": EyeColorVisual;
    "Component.FaceInsetVisual": FaceInsetVisual;
    "Component.FaceMaskVisual": FaceMaskVisual;
    "Component.FaceStretchVisual": FaceStretchVisual;
    "Component.FaceSubVisual": FaceMaskVisual;
    "Component.GaussianSplattingVisual": GaussianSplattingVisual;
    "Component.HairSimulationColliderComponent": ColliderComponent;
    "Component.HairVisual": HairVisual;
    "Component.Head": Head;
    "Component.Hints": HintsComponent;
    "Component.HintsComponent": HintsComponent;
    "Component.Image": Image;
    "Component.InteractionComponent": InteractionComponent;
    "Component.LightSource": LightSource;
    "Component.LiquifyVisual": LiquifyVisual;
    "Component.LocatedAtComponent": LocatedAtComponent;
    "Component.LookAtComponent": LookAtComponent;
    "Component.MLComponent": MLComponent;
    "Component.ManipulateComponent": ManipulateComponent;
    "Component.MarkerTrackingComponent": MarkerTrackingComponent;
    "Component.MaskingComponent": MaskingComponent;
    "Component.MaterialMeshVisual": MaterialMeshVisual;
    "Component.MeshVisual": RenderMeshVisual;
    "Component.ObjectTracker2D": ObjectTracking;
    "Component.ObjectTracking": ObjectTracking;
    "Component.ObjectTracking3D": ObjectTracking3D;
    "Component.PinToMeshComponent": PinToMeshComponent;
    "Component.PostEffectVisual": PostEffectVisual;
    "Component.RectangleSetter": RectangleSetter;
    "Component.RenderMeshVisual": RenderMeshVisual;
    "Component.RetouchVisual": RetouchVisual;
    "Component.ScreenRegionComponent": ScreenRegionComponent;
    "Component.ScreenTransform": ScreenTransform;
    "Component.Script": ScriptComponent;
    "Component.ScriptComponent": ScriptComponent;
    "Component.Skin": Skin;
    "Component.SplineComponent": SplineComponent;
    "Component.SpriteAligner": SpriteAligner;
    "Component.SpriteVisualV2": Image;
    "Component.Text": Text;
    "Component.Text3D": Text3D;
    "Component.Touch": InteractionComponent;
    "Component.TouchComponent": InteractionComponent;
    "Component.TrackedPointComponent": TrackedPointComponent;
    "Component.VFXComponent": VFXComponent;
    "Component.VertexCache": VertexCache;
    "Component.Visual": Visual;
    "Component.WorldTracking": DeviceTracking;
    "DepthSetter": DepthSetter;
    "DeviceLocationTrackingComponent": DeviceLocationTrackingComponent;
    "DeviceTracking": DeviceTracking;
    "EyeColorVisual": EyeColorVisual;
    "FaceInsetVisual": FaceInsetVisual;
    "FaceMaskVisual": FaceMaskVisual;
    "FaceStretchVisual": FaceStretchVisual;
    "FaceSubVisual": FaceMaskVisual;
    "GaussianSplattingVisual": GaussianSplattingVisual;
    "HairSimulationColliderComponent": ColliderComponent;
    "HairVisual": HairVisual;
    "Head": Head;
    "Hints": HintsComponent;
    "HintsComponent": HintsComponent;
    "Image": Image;
    "InteractionComponent": InteractionComponent;
    "LightSource": LightSource;
    "LiquifyVisual": LiquifyVisual;
    "LocatedAtComponent": LocatedAtComponent;
    "LookAtComponent": LookAtComponent;
    "MLComponent": MLComponent;
    "ManipulateComponent": ManipulateComponent;
    "MarkerTrackingComponent": MarkerTrackingComponent;
    "MaskingComponent": MaskingComponent;
    "MaterialMeshVisual": MaterialMeshVisual;
    "MeshVisual": RenderMeshVisual;
    "ObjectTracker2D": ObjectTracking;
    "ObjectTracking": ObjectTracking;
    "ObjectTracking3D": ObjectTracking3D;
    "Physics.BodyComponent": BodyComponent;
    "Physics.ColliderComponent": ColliderComponent;
    "Physics.ConstraintComponent": ConstraintComponent;
    "Physics.WorldComponent": WorldComponent;
    "PinToMeshComponent": PinToMeshComponent;
    "PostEffectVisual": PostEffectVisual;
    "RectangleSetter": RectangleSetter;
    "RenderMeshVisual": RenderMeshVisual;
    "RetouchVisual": RetouchVisual;
    "ScreenRegionComponent": ScreenRegionComponent;
    "ScreenTransform": ScreenTransform;
    "Script": ScriptComponent;
    "ScriptComponent": ScriptComponent;
    "Skin": Skin;
    "SplineComponent": SplineComponent;
    "SpriteAligner": SpriteAligner;
    "SpriteVisualV2": Image;
    "Text": Text;
    "Text3D": Text3D;
    "Touch": InteractionComponent;
    "TouchComponent": InteractionComponent;
    "TrackedPointComponent": TrackedPointComponent;
    "VFXComponent": VFXComponent;
    "VertexCache": VertexCache;
    "Visual": Visual;
    "WorldTracking": DeviceTracking;
}

interface EventNameMap {
    "BrowsLoweredEvent": BrowsLoweredEvent;
    "BrowsRaisedEvent": BrowsRaisedEvent;
    "BrowsReturnedToNormalEvent": BrowsReturnedToNormalEvent;
    "CameraBackEvent": CameraBackEvent;
    "CameraFrontEvent": CameraFrontEvent;
    "ClientInterfacePlayButtonTriggerEvent": ConnectedLensEnteredEvent;
    "ConnectedLensEnteredEvent": ConnectedLensEnteredEvent;
    "DelayedCallbackEvent": DelayedCallbackEvent;
    "FaceFoundEvent": FaceFoundEvent;
    "FaceLostEvent": FaceLostEvent;
    "FaceTrackingEvent": FaceTrackingEvent;
    "HoverEvent": HoverEvent;
    "KissFinishedEvent": KissFinishedEvent;
    "KissStartedEvent": KissStartedEvent;
    "LateUpdateEvent": LateUpdateEvent;
    "ManipulateEndEvent": ManipulateEndEvent;
    "ManipulateStartEvent": ManipulateStartEvent;
    "MouthClosedEvent": MouthClosedEvent;
    "MouthOpenedEvent": MouthOpenedEvent;
    "OnAwakeEvent": OnAwakeEvent;
    "OnDestroyEvent": OnDestroyEvent;
    "OnDisableEvent": OnDisableEvent;
    "OnEnableEvent": OnEnableEvent;
    "OnStartEvent": OnStartEvent;
    "SceneEvent.BrowsWereJustFrownedEvent": BrowsLoweredEvent;
    "SceneEvent.BrowsWereJustRaisedEvent": BrowsRaisedEvent;
    "SceneEvent.BrowsWereJustReturnedToNormalEvent": BrowsReturnedToNormalEvent;
    "SceneEvent.ClientInterfacePlayButtonTriggerEvent": ConnectedLensEnteredEvent;
    "SceneEvent.KissJustFinishedEvent": KissFinishedEvent;
    "SceneEvent.KissJustStartedEvent": KissStartedEvent;
    "SceneEvent.MouthWasJustClosedEvent": MouthClosedEvent;
    "SceneEvent.MouthWasJustOpenedEvent": MouthOpenedEvent;
    "SceneEvent.SmileJustFinishedEvent": SmileFinishedEvent;
    "SceneEvent.SmileJustStartedEvent": SmileStartedEvent;
    "SceneEvent.SurfaceTrackingResetEvent": SurfaceTrackingResetEvent;
    "SceneObjectEvent": SceneObjectEvent;
    "SinglePlaneTrackingUpdatedEvent": SinglePlaneTrackingUpdatedEvent;
    "SmileFinishedEvent": SmileFinishedEvent;
    "SmileStartedEvent": SmileStartedEvent;
    "SnapImageCaptureEvent": SnapImageCaptureEvent;
    "SnapRecordStartEvent": SnapRecordStartEvent;
    "SnapRecordStopEvent": SnapRecordStopEvent;
    "TapEvent": TapEvent;
    "TouchEndEvent": TouchEndEvent;
    "TouchMoveEvent": TouchMoveEvent;
    "TouchStartEvent": TouchStartEvent;
    "TriggerPrimaryEvent": TriggerPrimaryEvent;
    "TurnOffEvent": TurnOffEvent;
    "UpdateEvent": UpdateEvent;
    "WorldTrackingMeshesAddedEvent": WorldTrackingMeshesAddedEvent;
    "WorldTrackingMeshesRemovedEvent": WorldTrackingMeshesRemovedEvent;
    "WorldTrackingMeshesUpdatedEvent": WorldTrackingMeshesUpdatedEvent;
    "WorldTrackingPlanesAddedEvent": WorldTrackingPlanesAddedEvent;
    "WorldTrackingPlanesRemovedEvent": WorldTrackingPlanesRemovedEvent;
    "WorldTrackingPlanesUpdatedEvent": WorldTrackingPlanesUpdatedEvent;
    "WorldTrackingResetEvent": SurfaceTrackingResetEvent;
}

declare function failAsync(error: any): void

/**
* Returns the time difference in seconds between the current frame and previous frame.
*/
declare function getDeltaTime(): number

/**
* Get current time in Nanoseconds. Useful when optimizing a Lens to understand its performance.
*/
declare function getRealTimeNanos(): number

/**
* Returns the time in seconds since the lens was started.
*/
declare function getTime(): number

/**
* Returns true if the passed in object is null or destroyed. Useful as a safe way to check if a SceneObject or Component has been destroyed.
*/
declare function isNull(reference: any): boolean

/**
* Prints out a message to the Logger window.
*/
declare function print(message: any): void

/**
* Load a JavaScript module. Used for importing another JavaScript file found in the Resources panel to be used in the current script. Similar to `require` found in CommonJS specification. You can access Lens Studio specific modules (like `RemoteServiceModule`) using the `LensStudio` prefix, such as: `require("LensStudio:RemoteServiceModule)`. 

* You can use the modules name or path, meaning you can have two version of the same module in your project if needed. Both by name or by path will be relative to the script which is calling require, but by name will check the same folder as the script, then the parent folder, and so on. In addition, any require can be relative to your library folder. Take a look at the [Scripting guide](https://docs.snap.com/lens-studio/references/guides/lens-features/adding-interactivity/scripting-overview) to learn more.

*/
declare function require(moduleName: (ScriptAsset|string)): any

/**
* Load an asset like a `Texture`, `Material`, or `MLAsset` directly from script. 

* You can use the modules name or path. Both by name or by path will be relative to the script which is calling require, but by name will check the same folder as the script, then the parent folder, and so on. In addition, any require can be relative to your library folder. Take a look at the [Scripting guide](https://docs.snap.com/lens-studio/references/guides/lens-features/adding-interactivity/scripting-overview) to learn more.
*/
declare function requireAsset(name: string): Asset

/**
* Load a script by name or path in order to use that type to create or get a component at runtime. 

* You can use the modules name or path. Both by name or by path will be relative to the script which is calling require, but by name will check the same folder as the script, then the parent folder, and so on. In addition, any require can be relative to your library folder. Take a look at the [Scripting guide](https://docs.snap.com/lens-studio/references/guides/lens-features/adding-interactivity/scripting-overview) to learn more.
*/
declare function requireType(name: string): string

declare namespace global {
    /**
    * Returns the global DeviceInfoSystem, which provides information about the device running the Lens.
    */
    let deviceInfoSystem: DeviceInfoSystem
    
    let hapticFeedbackSystem: HapticFeedbackSystem
    
    /**
    * Returns the global `GeneralDataStore` for Launch Params, which provides any special data passed in when the Lens is launched.
    */
    let launchParams: GeneralDataStore
    
    /**
    * Returns the global [LocalizationSystem](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#LocalizationSystem), which helps convert times, dates, and other units to user friendly strings.
    */
    let localizationSystem: LocalizationSystem
    
    /**
    * Returns the global [PersistentStorageSystem](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#PersistentStorageSystem), which allows data to persist between Lens sessions.
    */
    let persistentStorageSystem: PersistentStorageSystem
    
    /**
    * Returns the global [ScriptScene](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#ScriptScene) object, which offers information and controls for the current scene.
    */
    let scene: ScriptScene
    
    let textInputSystem: TextInputSystem
    
    /**
    * Returns the global [TouchDataProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#TouchDataProvider), which controls how the Lens handles touch events.
    */
    let touchSystem: TouchDataProvider
    
    /**
    * Returns the global [UserContextSystem](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#UserContextSystem), which provides information about the user such as display name, birthday, and even current weather.
    */
    let userContextSystem: UserContextSystem
    
}

/**
* An object containing the position of an object relative to a LocationAsset. 
*/
interface Anchor extends ScriptObject {
    /**
    * The LocationAsset which this anchor is relative to.
    
    * @readonly
    */
    location: LocationAsset
    
    /**
    * The position of this anchor relative to the LocationAsset.
    
    * @readonly
    */
    position: vec3
    
}

/**
* Controls an animated texture resource. Can be accessed from [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#texture--control) on an animated texture.
* See also: [2D Animation Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/2d-animation).
*/
interface AnimatedTextureFileProvider extends TextureProvider {
    /**
    * Duplicates the AnimatedTextureFileProvider and returns the new copy. Can be used for playing the same animation at different offsets.
    */
    clone(): AnimatedTextureFileProvider
    
    /**
    * Returns the index of the frame that is currently playing.
    */
    getCurrentPlayingFrame(): number
    
    /**
    * Returns how long the animation is in seconds.
    */
    getDuration(): number
    
    /**
    * Returns the number of frames in the animation.
    */
    getFramesCount(): number
    
    /**
    * Returns whether the animation is finished playing.
    */
    isFinished(): boolean
    
    /**
    * Returns whether the animation is currently paused.
    */
    isPaused(): boolean
    
    /**
    * Returns whether the animation is currently playing.
    */
    isPlaying(): boolean
    
    /**
    * Pauses the animation.
    */
    pause(): void
    
    /**
    * Pauses the animation at frame `frameIndex`.
    */
    pauseAtFrame(frameIndex: number): void
    
    /**
    * Plays the animation `loops` times, starting with an offset of `offset` seconds.
    */
    play(loops: number, offset: number): void
    
    /**
    * Start playing the animation from frame `frameIndex`, `loops` times.
    */
    playFromFrame(frameIndex: number, loops: number): void
    
    /**
    * Resumes a paused animation from the frame that was last played.
    */
    resume(): void
    
    /**
    * Sets the callback function to be called whenever the animation stops playing.
    */
    setOnFinish(eventCallback: (animatedTexture: AnimatedTextureFileProvider) => void): void
    
    /**
    * Stops the animation.
    */
    stop(): void
    
    /**
    * Length of the animation in seconds.
    */
    duration: number
    
    /**
    * Returns whether the animation was set to automatically play and loop.
    */
    isAutoplay: boolean
    
    /**
    * If enabled, the animation will alternate between normal and reverse each time it loops.
    */
    isPingPong: boolean
    
    /**
    * Whether the animation plays in reverse.
    */
    isReversed: boolean
    
}

/**
* Asset that contains multiple animation layers. Animation assets themselves do not handle playing or orchestrating animations. This is left to the animation player component to handle.
*/
interface AnimationAsset extends Asset {
    /**
    * Adds AnimationPropertyLayer to Animation asset.
    */
    addLayer(layerName: string, layer: AnimationPropertyLayer): void
    
    /**
    * Delete all the AnimationPropertyLayer in this AnimationAsset.
    */
    clearLayers(): void
    
    createEvent(eventName: string, time: number): AnimationPropertyEventRegistration
    
    deleteEvent(layerName: AnimationPropertyEventRegistration): void
    
    /**
    * Delete the AnimationPropertyLayer named `layerName`.
    */
    deleteLayer(layerName: string): void
    
    /**
    * Retrieves an animation associated with a particular object.
    */
    getLayer(layerName: string): AnimationPropertyLayer
    
    /**
    * Animation duration in seconds.
    
    * @readonly
    */
    duration: number
    
    /**
    * Denotes how many key frames this animation was sampled at.
    
    * @readonly
    */
    fps: number
    
}

/**
* Animation Clip is what an Animation Player uses to manage playback for a specific animation. It defines that animation by referencing an Animation Asset and providing start and end points, playback speed and direction, and blending information. 
*/
interface AnimationClip extends ScriptObject {
    /**
    * Clones the existing clip with a new name.
    */
    clone(clipName: string): AnimationClip
    
    /**
    * Points to the animation asset to be played by the Animation Player.
    */
    animation: AnimationAsset
    
    /**
    * Returns begin time of clip.
    */
    begin: number
    
    /**
    * The blend mode for this particular clip.
    */
    blendMode: AnimationLayerBlendMode
    
    /**
    * Whether the animation clip is disabled.
    */
    disabled: boolean
    
    /**
    * Returns the duration of the clip which is calculated based on the begin and end times.
    
    * @readonly
    */
    duration: number
    
    /**
    * Returns end time of clip.
    */
    end: number
    
    /**
    * Name of the clip.
    
    * @readonly
    */
    name: string
    
    /**
    * Choose whether to play animation clip once, loop the clip, or ping pong it.
    */
    playbackMode: PlaybackMode
    
    /**
    * Scalar value to represent playback speed percentage. 1.0 is 100% playback speed.
    */
    playbackSpeed: number
    
    /**
    * Specifies if the clip should be played reversed.
    */
    reversed: boolean
    
    /**
    * How scale is accumulated. Usually does not need to be changed after import.
    */
    scaleMode: AnimationLayerScaleMode
    
    /**
    * Strength of animation clip contribution. Lies between [0.0, 1.0] inclusive. For default blending a 1.0 weight indicates this clip will override all earlier clips, a less than 1.0 weight indicates it will blend onto the calculated pose using a weighted average.
    */
    weight: number
    
}
declare namespace AnimationClip {
    /**
    * Creates a clip.
    */
    export function create(clipName: string): AnimationClip
    
    export function createFromAnimation(clipName: string, animation: AnimationAsset): AnimationClip
    

}

interface AnimationCurve extends ScriptObject {
    addKeyframe(frame: AnimationKeyFrame): void
    
    evaluate(time: number): number
    
    getKeyFrame(index: number): AnimationKeyFrame
    
    removeKeyFrame(t: number): void
    
    /**
    * @readonly
    */
    keyFrameCount: number
    
}
declare namespace AnimationCurve {
    export function create(): AnimationCurve
    
    export function createEasingCurve(startValue: number, endValue: number, x1: number, y1: number, x2: number, y2: number): AnimationCurve
    
    export function createKeyFrame(): AnimationKeyFrame
    

}

interface AnimationCurveTrack extends AnimationTrack {
    evaluateNumber(time: number): number
    
    evaluateRotation(time: number): quat
    
    evaluateVec2(time: number): vec2
    
    evaluateVec3(time: number): vec3
    
    evaluateVec4(time: number): vec4
    
    getProperty(key: string): AnimationCurve
    
    getPropertyKeys(): string[]
    
    setProperty(key: string, curve: AnimationCurve): void
    
}

interface AnimationKeyFrame extends ScriptObject {
    inWeightPoint: vec2
    
    leftTangentType: TangentType
    
    outWeightPoint: vec2
    
    rightTangentType: TangentType
    
    time: number
    
    value: number
    
    weightedMode: WeightedMode
    
}

declare enum AnimationLayerBlendMode {
    Default,
    Additive
}

declare enum AnimationLayerScaleMode {
    Multiply,
    Additive
}

/**
* Component that handles playing animation clips as well as binding callbacks to user defined events.
*/
interface AnimationPlayer extends Component {
    /**
    * Adds a clip to the player. If one exists, replace existing clip.
    */
    addClip(clip: AnimationClip): void
    
    /**
    * Updates the animation player forcing sampling, resulting in the setting of transforms and firing of animation events.
    */
    forceUpdate(deltaTime: number): void
    
    /**
    * Get currently playing clips.
    */
    getActiveClips(): string[]
    
    /**
    * Tries to get a clip from the player, returns null if it does not exist.
    */
    getClip(name: string): AnimationClip
    
    /**
    * Returns the current time for a clip.
    */
    getClipCurrentTime(name: string): number
    
    /**
    * Returns if a clip is enabled for playback.
    */
    getClipEnabled(name: string): boolean
    
    /**
    * Returns if a clip is playing.
    */
    getClipIsPlaying(name: string): boolean
    
    /**
    * Get currently inactive clips.
    */
    getInactiveClips(): string[]
    
    /**
    * Pauses all clips.
    */
    pauseAll(): void
    
    /**
    * Pause the clip with name.
    */
    pauseClip(name: string): void
    
    /**
    * Plays all clips.
    */
    playAll(): void
    
    /**
    * Plays clip with the given name and starting from the given time.
    */
    playClipAt(name: string, time: number): void
    
    /**
    * Removes a clip from the player.
    */
    removeClip(name: string): void
    
    /**
    * Resumes all clips.
    */
    resumeAll(): void
    
    /**
    * Resumes clip with name.
    */
    resumeClip(name: string): void
    
    /**
    * Sets the clip to be enabled.
    */
    setClipEnabled(name: string, enabled: boolean): void
    
    /**
    * Stops all clips and resets time to t = 0.
    */
    stopAll(): void
    
    /**
    * Stops the clip and resets time to t = 0.
    */
    stopClip(name: string): void
    
    /**
    * Array of animation clips
    
    * @readonly
    */
    clips: AnimationClip[]
    
    /**
    * @readonly
    */
    onEvent: event1<AnimationPlayerOnEventArgs, void>
    
}

interface AnimationPlayerOnEventArgs extends ScriptObject {
    /**
    * @readonly
    */
    eventName: string
    
}

interface AnimationPropertyEventRegistration extends ScriptObject {
}

/**
* A layer containing different properties. Examples include position, rotation, scale or any other arbitrary properties a user would like to add and sample from.
*/
interface AnimationPropertyLayer extends ScriptObject {
}

/**
* The base class for animation tracks.
*/
interface AnimationTrack extends Asset {
}

/**
* Base class for all assets used in the engine.
*/
interface Asset extends SerializableWithUID {
    /**
    * The name of the Asset in Lens Studio.
    */
    name: string
    
}

/**
* Used by [Head.setAttachmentPointType()](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Head) to specify the type of attachment used with a Head binding.
*/
declare enum AttachmentPointType {
    CandideCenter,
    Chin,
    Forehead,
    HeadCenter,
    LeftCheek,
    LeftEyeballCenter,
    LeftForehead,
    MouthCenter,
    RightCheek,
    RightEyeballCenter,
    RightForehead,
    TriangleBarycentric
}

declare namespace Audio {
    /**
    * The curve that specifies how sound fades with the distance from Audio Component to the Audio Listener.****
    */
    enum DistanceCurveType {
        /**
        * Linear Curve ~ y(x) = ax+b
        */
        Linear,
        /**
        * Inverse Curve ~ y(x) = (a/x)+b
        */
        Inverse,
        /**
        * Logarithmic Curve ~ -log(x)
        */
        Logarithm,
        /**
        * Inverse Logarithmic Curve ~ +log(x)
        */
        InverseLogarithm
    }

}

declare namespace Audio {
    /**
    * @snapOsOnly
    */
    enum PlaybackMode {
        LowPower,
        LowLatency
    }

}

/**
* Used to play audio in a Lens.
* You can assign an [AudioTrackAsset](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#AudioTrackAsset) to play through script or through the AudioComponent's inspector in Lens Studio.
* See the [Playing Audio](https://lensstudio.snapchat.com/guides/audio) guide for more information.
*/
interface AudioComponent extends Component {
    /**
    * Returns whether the sound is currently paused.
    */
    isPaused(): boolean
    
    /**
    * Returns whether the AudioComponent is currently playing sound.
    */
    isPlaying(): boolean
    
    /**
    * Pauses the sound.
    */
    pause(): boolean
    
    /**
    * Plays the current sound `loops` number of times.  If `loops` is -1, the sound will repeat forever.
    */
    play(loops: number): void
    
    /**
    * Resumes a paused sound.
    */
    resume(): boolean
    
    /**
    * Sets the callback function to be called whenever this sound stops playing.
    */
    setOnFinish(eventCallback: (audioComponent: AudioComponent) => void): void
    
    /**
    * Stops the current sound if already playing.
    */
    stop(fade: boolean): void
    
    /**
    * The audio asset currently assigned to play.
    */
    audioTrack: AudioTrackAsset
    
    /**
    * The length (in seconds) of the current sound assigned to play.
    
    * @readonly
    */
    duration: number
    
    /**
    * Length (in seconds) of a volume fade in applied to the beginning of sound playback.
    */
    fadeInTime: number
    
    /**
    * Length (in seconds) of a volume fade out applied to the end of sound playback.
    */
    fadeOutTime: number
    
    /**
    * When true, records sound directly into the snap. This mode works only when all Audio Components in the scene are using mix to snap. In this case input from microphone will be ignored.
    */
    mixToSnap: boolean
    
    /**
    * @snapOsOnly
    */
    playbackMode: Audio.PlaybackMode
    
    /**
    * The current playback time in seconds
    */
    position: number
    
    /**
    * The volume of audio recorded to the snap, from 0 to 1.
    */
    recordingVolume: number
    
    /**
    * Spatial Audio settings.
    
    * @readonly
    */
    spatialAudio: SpatialAudio
    
    /**
    * A volume multiplier for any sounds played by this AudioComponent.
    */
    volume: number
    
}

/**
* Configures an audio effect for [AudioEffectComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioEffectComponent).
*/
interface AudioEffectAsset extends Asset {
}

/**
* Used to add an audio effect to a Lens.
* When present in the scene, it will automatically apply the selected audio effect to recordings made with the Lens.
* See the [Audio Effect](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/audio/audio-effect) guide for more information.

*/
interface AudioEffectComponent extends Component {
}

/**
* Provider for [AudioEffectAsset](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#AudioEffectAsset).
*/
interface AudioEffectProvider extends Provider {
}

/**
* A component that receives input from Audio Components that have Spatial Audio enabled. Calculates their positions relative to the scene object it is attached to,and properly mixes them.
*/
interface AudioListenerComponent extends Component {
}

/**
* Provider of the Audio Output Audio Track asset. 
*/
interface AudioOutputProvider extends AudioTrackProvider {
    /**
    * Enqueue audio data into an audio playback system.
    
    * `shape.x` - buffer size, must be less or equal to `audioFrame` length.
    
    */
    enqueueAudioFrame(audioFrame: Float32Array, inShape: vec3): void
    
    /**
    * Preferred size for audio output at the current frame update.
    */
    getPreferredFrameSize(): number
    
}

/**
* Represents an audio file asset.
* See also: [AudioComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioComponent).
*/
interface AudioTrackAsset extends Asset {
    /**
    * The provider for this audio track asset.
    */
    control: AudioTrackProvider
    
}

/**
* Base class for Audio Track providers.
*/
interface AudioTrackProvider extends Provider {
    /**
    * The maximum frame size of the audio track asset.
    
    * @readonly
    */
    maxFrameSize: number
    
    /**
    * Sample rate (samples per second) of the audio track asset.
    */
    sampleRate: number
    
}

/**
* Cardinal axis enumeration.
*/
declare enum Axis {
    /**
    * The X axis.
    */
    X,
    /**
    * The Y axis.
    */
    Y,
    /**
    * The Z axis.
    */
    Z
}

/**
* Settings for rendering the background on a [Text](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) component.
* Accessible through the [Text](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) component's `backgroundSettings` property.
*/
interface BackgroundSettings extends ScriptObject {
    /**
    * Controls how rounded the corner of the background should be.
    */
    cornerRadius: number
    
    /**
    * If enabled, the background will be rendered.
    */
    enabled: boolean
    
    /**
    * Settings for how the inside of the background is drawn.
    */
    fill: TextFill
    
    /**
    * Controls how far in each direction the background should extend away from the text.
    */
    margins: Rect
    
}

/**
* The base class for all mesh rendering components.
* Comparable to the former class "MeshVisual", which was split into the classes:
* [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual),
* [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MaterialMeshVisual),
* and [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
*/
interface BaseMeshVisual extends Visual {
    /**
    * Range maximum of the local-space axis-aligned bounding box (AABB) of the visual.
    */
    localAabbMax(): vec3
    
    /**
    * Range minimum of the local-space axis-aligned bounding box (AABB) of the visual.
    */
    localAabbMin(): vec3
    
    /**
    * Projects screen positions from `camera`'s view onto the mesh's UVs.
    * If the MeshVisual's material uses the same texture as the camera input, the MeshVisual will look identical to the part of the screen it covers.
    */
    snap(camera: Camera): void
    
    /**
    * Range maximum of the world-space axis-aligned bounding box (AABB) of the visual.
    */
    worldAabbMax(): vec3
    
    /**
    * Range minimum of the world-space axis-aligned bounding box (AABB) of the visual.
    */
    worldAabbMin(): vec3
    
    /**
    * When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is present on this SceneObject,
    * and `extentsTarget` is a child of this SceneObject, `extentsTarget` will be repositioned to match the exact
    * area this MeshVisual is being rendered. Very useful for [Image](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Image) and [Text](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) components.
    */
    extentsTarget: ScreenTransform
    
    /**
    * When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is attached to the same SceneObject, this controls how the mesh will be positioned horizontally depending on `stretchMode`.
    */
    horizontalAlignment: HorizontalAlignment
    
    /**
    * None = 0, Caster = 1, Receiver = 2
    */
    meshShadowMode: MeshShadowMode
    
    /**
    * Affects the color of shadows being cast by this MeshVisual. The color of the cast shadow is a mix between shadowColor and the material's base texture color. The alpha value of shadowColor controls the mixing of these two colors, with 0 = shadowColor and 1 = shadowColor * textureColor.
    */
    shadowColor: vec4
    
    /**
    * Density of shadows cast by this MeshVisual.
    */
    shadowDensity: number
    
    /**
    * When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is attached to the same SceneObject, this controls how the mesh will be stretched relative to the ScreenTransform's boundaries.
    */
    stretchMode: StretchMode
    
    /**
    * When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is attached to the same SceneObject, this controls how the mesh will be positioned vertically depending on `stretchMode`.
    */
    verticalAlignment: VerticalAlignment
    
}

/**
* Base class for MultiplayerSession options. This class is not used directly - use ConnectedLensSessionOptions instead.
*/
interface BaseMultiplayerSessionOptions extends ScriptObject {
    /**
    * Provides a single host for every session. Useful when an experience has a single authority. This should not be used in latency sensitive situations. The creator of the session will by default be the host. If the host leaves, thee server will determine a new host and transfer all ownership of entities owned by the original host. Use with `onHostUpdated` API to get a callback.
    */
    hostManagementEnabled: boolean
    
    /**
    * Function to be called when a connection to the realtime backend is established. All realtime requests can be called after this callback. When you invite others to join, a new session will be created, hence you should update your session handler with the argument passed in this callback.
    */
    onConnected: (session: MultiplayerSession, connectionInfo: ConnectedLensModule.ConnectionInfo) => void
    
    /**
    * Function to be called when the connection to the realtime backend is lost, either via successful disconnect or passive disconnect due to error.
    */
    onDisconnected: (session: MultiplayerSession, disconnectInfo: string) => void
    
    /**
    * Function to be called when an error occurs in the session life cycle.
    */
    onError: (session: MultiplayerSession, code: string, description: string) => void
    
    onHostUpdated: (session: MultiplayerSession, removalInfo: ConnectedLensModule.HostUpdateInfo) => void
    
    /**
    * Function to be called when a string-based message sent by sendMessage() is received from another user via the realtime backend.
    */
    onMessageReceived: (session: MultiplayerSession, userId: string, message: string, senderInfo: ConnectedLensModule.UserInfo) => void
    
    /**
    * Callback function that will be executed when a realtime store is created.
    */
    onRealtimeStoreCreated: (session: MultiplayerSession, store: GeneralDataStore, ownerInfo: ConnectedLensModule.UserInfo, creationInfo: ConnectedLensModule.RealtimeStoreCreationInfo) => void
    
    /**
    * Callback function that will be executed when a realtime store is deleted.
    */
    onRealtimeStoreDeleted: (session: MultiplayerSession, store: GeneralDataStore, deleteInfo: ConnectedLensModule.RealtimeStoreDeleteInfo) => void
    
    /**
    * Function to be called when a key is removed from a RealtimeStore.
    */
    onRealtimeStoreKeyRemoved: (session: MultiplayerSession, removalInfo: ConnectedLensModule.RealtimeStoreKeyRemovalInfo) => void
    
    /**
    * Callback function that will be executed when ownership of a realtime store is updated.
    */
    onRealtimeStoreOwnershipUpdated: (session: MultiplayerSession, store: GeneralDataStore, ownerInfo: ConnectedLensModule.UserInfo, ownershipUpdateInfo: ConnectedLensModule.RealtimeStoreOwnershipUpdateInfo) => void
    
    /**
    * Callback function that will be executed when a realtime store is updated.
    */
    onRealtimeStoreUpdated: (session: MultiplayerSession, store: GeneralDataStore, key: string, updateInfo: ConnectedLensModule.RealtimeStoreUpdateInfo) => void
    
    /**
    * Function to be called when another user joins the session. When joining a session, the current user will get a callback for each of the existing active users in the current session. This way you can build a list of existing players in game.
    */
    onUserJoinedSession: (session: MultiplayerSession, userInfo: ConnectedLensModule.UserInfo) => void
    
    /**
    * Function to be called when another user leaves the session, either deliberately or via passive disconnect due to error.
    */
    onUserLeftSession: (session: MultiplayerSession, userInfo: ConnectedLensModule.UserInfo) => void
    
}

/**
* Base class for Input and Output Placeholders used by MLComponent.
*/
interface BasePlaceholder extends ScriptObject {
    /**
    * The name of the Placeholder.
    
    * @readonly
    */
    name: string
    
    /**
    * The shape of the Placeholder's data.
    
    * @readonly
    */
    shape: vec3
    
    /**
    * Transformer object for applying transformations on the PlaceHolder's data.
    
    * @readonly
    */
    transformer: Transformer
    
}

/**
* Provides basic information about a transformation.
* See also: [DeviceTracking](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking)
*/
interface BasicTransform extends ScriptObject {
    /**
    * Returns the inverted world matrix of the BasicTransform.
    */
    getInvertedMatrix(): mat4
    
    /**
    * Returns the world matrix of the BasicTransform.
    */
    getMatrix(): mat4
    
    /**
    * Returns the world position of the BasicTransform.
    */
    getPosition(): vec3
    
    /**
    * Returns the world rotation of the BasicTransform.
    */
    getRotation(): quat
    
    /**
    * Returns the world scale of the BasicTransform.
    */
    getScale(): vec3
    
}

/**
* File based asset.
*/
interface BinAsset extends Asset {
}

interface Bitmoji2DOptions extends ScriptObject {
    /**
    * The pose id for the 2D Bitmoji.
    */
    poseId: string
    
    user: SnapchatUser
    
}
declare namespace Bitmoji2DOptions {
    export function create(): Bitmoji2DOptions
    

}

interface Bitmoji2DResource extends DynamicResource {
}

interface Bitmoji3DOptions extends ScriptObject {
    user: SnapchatUser
    
}
declare namespace Bitmoji3DOptions {
    export function create(): Bitmoji3DOptions
    

}

/**
* Provides information about the current user's 3D Bitmoji avatar to be downloaded via the RemoteMediaModule.
*/
interface Bitmoji3DResource extends DynamicResource {
}

/**
* Provides access to getting information about the current user's Bitmoji.
*/
interface BitmojiModule extends Asset {
    /**
    * Returns a `DynamicResource` via the provided `callback`, which can be resolved into a texture using `RemoteMediaModule`. 
    */
    requestBitmoji2DResource(options: Bitmoji2DOptions, callback: (resource: Bitmoji2DResource) => void): void
    
    /**
    * Request the current user's 3D Bitmoji avatar.
    */
    requestBitmoji3DResource(callback: (resource: Bitmoji3DResource) => void): void
    
    requestBitmoji3DResourceWithOptions(options: Bitmoji3DOptions, callback: (resource: Bitmoji3DResource) => void): void
    
}

declare enum BlendMode {
    Normal,
    Screen,
    PremultipliedAlpha,
    AlphaToCoverage,
    Disabled,
    Add,
    AlphaTest,
    ColoredGlass,
    Multiply,
    Min,
    Max,
    PremultipliedAlphaHardware,
    PremultipliedAlphaAuto
}

/**
* Used to analyze the camera input and apply similar image artifacts to your AR objects in order to allow it to blend and match the real world better.
*/
interface BlurNoiseEstimation extends Component {
}

/**
* Derived from ColliderComponent, attaching this to a SceneObject turns it into a dynamic rigid-body that is automatically moved by the physics simulation in response to gravity, collisions, and other forces.
*/
interface BodyComponent extends ColliderComponent {
    /**
    * Apply linear force at the object's center-of-mass.
    */
    addForce(force: vec3, mode: Physics.ForceMode): void
    
    /**
    * Apply force at a point offset from the object's origin, effectively generating torque.
    */
    addForceAt(force: vec3, offset: vec3, mode: Physics.ForceMode): void
    
    /**
    * Add a point constraint between this body and the given collider, at the given position. `target` is optional. If null, it is statically constrained to the world.   This is a convenience function that creates a child SceneObject with a ConstraintComponent, and sets its type, target, and constraint parameters. To fully remove the constraint, its SceneObject must be removed - not the component. Call `removeConstraint()` to do this.
    */
    addPointConstraint(target: ColliderComponent, position: vec3): ConstraintComponent
    
    /**
    * Relative to local rotation, apply linear force at the object's center-of-mass.
    */
    addRelativeForce(force: vec3, mode: Physics.ForceMode): void
    
    /**
    * Relative to local rotation, apply force at a point offset from the object's origin, effectively generating torque.
    */
    addRelativeForceAt(force: vec3, position: vec3, mode: Physics.ForceMode): void
    
    /**
    * Relative to local rotation, apply torque (angular force).
    */
    addRelativeTorque(torque: vec3, mode: Physics.ForceMode): void
    
    /**
    * Apply torque (angular force).
    */
    addTorque(torque: vec3, mode: Physics.ForceMode): void
    
    /**
    * Removes a constraint that was added with one of the `add*Constraint()` functions.
    */
    removeConstraint(constraint: ConstraintComponent): void
    
    /**
    * Damping applied to angular velocity, in the range 0.0 (no damping) to 1.0 (maximum damping).
    */
    angularDamping: number
    
    /**
    * Damping applied to linear velocity, in the range 0.0 (no damping) to 1.0 (maximum damping). This produces an effect similar to drag in that it causes the object to slow down over time. It is not however physically accurate, and it doesn't take into account surface area or mass.
    */
    damping: number
    
    /**
    * Density (kg/L) of the object, used to derive mass from volume. If modified, mass changes according to shape and scale.
    */
    density: number
    
    /**
    * If enabled, the body is dynamically simulated, such that it responds to forces and collisions. Otherwise, it acts as a static collider, functionally equivalent to Physics.ColliderComponent.
    */
    dynamic: boolean
    
    /**
    * Mass (kg) of the object. If modified from this field, mass is constant irrespective of shape and scale.
    */
    mass: number
    
}

/**
* Provides depth values of the tracked body encoded as D24_UNORM_S8_UINT in screen resolution. Depth is normalized between 0-1, and the stencil component is ignored. The values may be remapped from normalized units (0 to 1) to negative centimeters from the camera (-near in cm to -far in cm) using the `Depth Map` mode of the `Texture 2D Sample` node in Material Editor.

*/
interface BodyDepthTextureProvider extends TextureProvider {
    /**
    * The index of the body to track. The first body detected is `0`.
    */
    bodyIndex: number
    
    /**
    * A background depth (where confidence < `minimumConfidence`) is represented by 1.0 (zFar). A value from 0.0 to 1.0 (default value 0.5). 
    
    */
    minimumConfidence: number
    
    /**
    * Far plane value in cm, Read only, always outputs 1000.0.
    
    
    * @readonly
    */
    zFar: number
    
    /**
    * Near plane value in cm, Read only, always outputs 1.0.
    
    
    * @readonly
    */
    zNear: number
    
}

/**
* Provides surface normal values of the tracked body encoded as RGBA (x, y, z, confidence) in `R8G8B8A8_UNORM` format in screen resolution. The XYZ values may need to be remapped from [0 -> 1] to [-1 -> 1] using the "Normal Map" mode of the `Texture 2D Sample` node in Material Editor.
*/
interface BodyNormalsTextureProvider extends TextureProvider {
    /**
    * The index of the body to track. The first body detected is `0`.
    */
    bodyIndex: number
    
}

/**
* Provider for full Body Mesh render object.
*/
interface BodyRenderObjectProvider extends RenderObjectProvider {
    /**
    * Enable main Body Mesh geometry.
    */
    bodyGeometryEnabled: boolean
    
    /**
    * Index of body in scene to track.
    */
    bodyIndex: number
    
    /**
    * Enable head mesh.
    */
    headGeometryEnabled: boolean
    
    /**
    * Enable left hand mesh.
    */
    leftHandGeometryEnabled: boolean
    
    /**
    * Enable right hand mesh.
    */
    rightHandGeometryEnabled: boolean
    
}

/**
* Asset used to configure Body Tracking for the [ObjectTracking3D](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ObjectTracking3D) component.
*/
interface BodyTrackingAsset extends Object3DAsset {
    /**
    * When true, hand tracking will be enabled.
    */
    handTrackingEnabled: boolean
    
}
declare namespace BodyTrackingAsset {
    /**
    * Key for Head attachment point.
    */
    let Head: string
    
    /**
    * Key for Hips attachment point.
    */
    let Hips: string
    
    /**
    * Key for Left Arm attachment point.
    */
    let LeftArm: string
    
    /**
    * Key for Left Foot attachment point.
    */
    let LeftFoot: string
    
    /**
    * Key for Left Forearm attachment point.
    */
    let LeftForeArm: string
    
    /**
    * Key for Left Hand attachment point.
    */
    let LeftHand: string
    
    /**
    * Key for Left Hand Index 1 attachment point.
    */
    let LeftHandIndex1: string
    
    /**
    * Key for Left Hand Index 2 attachment point.
    */
    let LeftHandIndex2: string
    
    /**
    * Key for Left Hand Index 3 attachment point.
    */
    let LeftHandIndex3: string
    
    /**
    * Key for Left Hand Middle 1 attachment point.
    */
    let LeftHandMiddle1: string
    
    /**
    * Key for Left Hand Middle 2 attachment point.
    */
    let LeftHandMiddle2: string
    
    /**
    * Key for Left Hand Middle 3 attachment point.
    */
    let LeftHandMiddle3: string
    
    /**
    * Key for Left Hand Pinky 1 attachment point.
    */
    let LeftHandPinky1: string
    
    /**
    * Key for Left Hand Pinky 2 attachment point.
    */
    let LeftHandPinky2: string
    
    /**
    * Key for Left Hand Pinky 3 attachment point.
    */
    let LeftHandPinky3: string
    
    /**
    * Key for Left Hand Ring 1 attachment point.
    */
    let LeftHandRing1: string
    
    /**
    * Key for Left Hand Ring 2 attachment point.
    */
    let LeftHandRing2: string
    
    /**
    * Key for Left Hand Ring 3 attachment point.
    */
    let LeftHandRing3: string
    
    /**
    * Key for Left Hand Thumb 1 attachment point.
    */
    let LeftHandThumb1: string
    
    /**
    * Key for Left Hand Thumb 2 attachment point.
    */
    let LeftHandThumb2: string
    
    /**
    * Key for Left Hand Thumb 3 attachment point.
    */
    let LeftHandThumb3: string
    
    /**
    * Key for Left Leg attachment point.
    */
    let LeftLeg: string
    
    /**
    * Key for Left Shoulder attachment point.
    */
    let LeftShoulder: string
    
    /**
    * Key for Left Toe Base attachment point.
    */
    let LeftToeBase: string
    
    /**
    * Key for Upper Left Leg attachment point.
    */
    let LeftUpLeg: string
    
    /**
    * Key for Neck attachment point.
    */
    let Neck: string
    
    /**
    * Key for Right Arm attachment point.
    */
    let RightArm: string
    
    /**
    * Key for Right Foot attachment point.
    */
    let RightFoot: string
    
    /**
    * Key for Right Forearm attachment point.
    */
    let RightForeArm: string
    
    /**
    * Key for Right Hand attachment point.
    */
    let RightHand: string
    
    /**
    * Key for Right Hand Index 1 attachment point.
    */
    let RightHandIndex1: string
    
    /**
    * Key for Right Hand Index 2 attachment point.
    */
    let RightHandIndex2: string
    
    /**
    * Key for Right Hand Index 3 attachment point.
    */
    let RightHandIndex3: string
    
    /**
    * Key for Right Hand Middle 1 attachment point.
    */
    let RightHandMiddle1: string
    
    /**
    * Key for Right Hand Middle 2 attachment point.
    */
    let RightHandMiddle2: string
    
    /**
    * Key for Right Hand Middle 3 attachment point.
    */
    let RightHandMiddle3: string
    
    /**
    * Key for Right Hand Pinky 1 attachment point.
    */
    let RightHandPinky1: string
    
    /**
    * Key for Right Hand Pinky 2 attachment point.
    */
    let RightHandPinky2: string
    
    /**
    * Key for Right Hand Pinky 3 attachment point.
    */
    let RightHandPinky3: string
    
    /**
    * Key for Right Hand Ring 1 attachment point.
    */
    let RightHandRing1: string
    
    /**
    * Key for Right Hand Ring 2 attachment point.
    */
    let RightHandRing2: string
    
    /**
    * Key for Right Hand Ring 3 attachment point.
    */
    let RightHandRing3: string
    
    /**
    * Key for Right Hand Thumb 1 attachment point.
    */
    let RightHandThumb1: string
    
    /**
    * Key for Right Hand Thumb 2 attachment point.
    */
    let RightHandThumb2: string
    
    /**
    * Key for Right Hand Thumb 3 attachment point.
    */
    let RightHandThumb3: string
    
    /**
    * Key for Right Leg attachment point.
    */
    let RightLeg: string
    
    /**
    * Key for Right Shoulder attachment point.
    */
    let RightShoulder: string
    
    /**
    * Key for Right Toe Base attachment point.
    */
    let RightToeBase: string
    
    /**
    * Key for Upper Right Leg attachment point.
    */
    let RightUpLeg: string
    
    /**
    * Key for Spine attachment point.
    */
    let Spine: string
    
    /**
    * Key for Spine1 attachment point.
    */
    let Spine1: string
    
    /**
    * Key for Spine2 attachment point.
    */
    let Spine2: string
    

}

/**
* A box collision shape.
*/
interface BoxShape extends Shape {
    /**
    * The size of the box on each local axis.
    */
    size: vec3
    
}

/**
* Triggered when eyebrows are lowered on the tracked face.
*/
interface BrowsLoweredEvent extends FaceTrackingEvent {
}

/**
* Triggered when eyebrows are raised on the tracked face.
*/
interface BrowsRaisedEvent extends FaceTrackingEvent {
}

/**
* Triggered when eyebrows are returned to normal on the tracked face.
*/
interface BrowsReturnedToNormalEvent extends FaceTrackingEvent {
}

/**
* Renders the scene to a Render Target texture.
* A Camera will only render a SceneObject if the SceneObject's render layer is enabled on the Camera.
* For more information, see the [Camera and Layers](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/camera) guide.
*/
interface Camera extends Component {
    /**
    * For orthographic cameras, returns the camera size as (width, height).
    */
    getOrthographicSize(): vec2
    
    /**
    * Returns true if a sphere with the specified world space center position and radius is visible within the camera frustum, false otherwise.
    
    */
    isSphereVisible(center: vec3, radius: number): boolean
    
    /**
    * Converts a world space position to a raw screen space position.
    * The screen space position will be returned as a `vec3` with `x`,`y` representing normalized screen space,
    * and `z` representing a raw depth value not directly convertible to world units.
    * This returned value will mostly be useful for passing into `unproject()`.
    */
    project(worldSpacePoint: vec3): vec3
    
    /**
    * Converts a screen space position to a world space position, given an absolute depth.
    * The screen space position should be provided as a `vec2` in the range ([0-1], [0-1]),
    * (0,0) being the top-left of the screen and (1,1) being the bottom-right.
    * The returned world space position will be the point `absoluteDepth` units away from the Camera's
    * `near` plane at the point specified in screen space.
    */
    screenSpaceToWorldSpace(normalizedScreenSpacePoint: vec2, absoluteDepth: number): vec3
    
    /**
    * Converts a raw screen space position to a world space position.
    * `clipSpacePoint` should be a `vec3` returned from a previous `project()` call, since the
    * `z` value represents a raw depth value not directly convertible to world units.
    */
    unproject(clipSpacePoint: vec3): vec3
    
    /**
    * Converts the world space position `worldSpacePoint` to a screen space position.
    * Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the top-left of the screen and (1,1) being the bottom-right.
    */
    worldSpaceToScreenSpace(worldSpacePoint: vec3): vec2
    
    /**
    * The aspect ratio of the camera (width/height).
    */
    aspect: number
    
    /**
    * When `enableClearColor` is true and `inputTexture` is null, this color is used to clear this Camera's `renderTarget` before drawing to it.
    */
    clearColor: vec4
    
    /**
    * Returns an array of Color Render Targets. The first color render target is always available.
    */
    colorRenderTargets: Camera.ColorRenderTarget[]
    
    /**
    * Determines the way depth is handled on this Camera. Changing this can help sort objects at different distance ranges.
    */
    depthBufferMode: Camera.DepthBufferMode
    
    /**
    * Descriptor of depth/stencil textures and clear options.
    */
    depthStencilRenderTarget: Camera.DepthStencilRenderTarget
    
    /**
    * Controls which Camera settings will be overridden by physical device properties.
    * For example, this can be used to override the `fov` property to match the device camera's actual field of view.
    */
    devicePropertyUsage: Camera.DeviceProperty
    
    /**
    * If enabled, this Camera will clear the color on its `renderTarget` before drawing to it.
    * `inputTexture` will be used to clear it unless it is null, in which case `clearColor` is used instead.
    */
    enableClearColor: boolean
    
    /**
    * If enabled, this Camera will clear the depth buffer on its `renderTarget` before drawing to it.
    */
    enableClearDepth: boolean
    
    /**
    * The distance of the far clipping plane.
    */
    far: number
    
    /**
    * The Camera's field of view in radians.
    */
    fov: number
    
    /**
    * When `enableClearColor` is true, this texture is used to clear this Camera's `renderTarget` before drawing.
    * If this texture is null, `clearColor` will be used instead.
    */
    inputTexture: Texture
    
    /**
    * A texture controlling which parts of the output texture the camera will draw to.
    * The "red" value of each pixel determines how strongly the camera will draw to that part of the image.
    * For example, a completely black section will cause the camera to not draw there at all. A completely
    * white (or red) section will cause the camera to draw normally. Colors in between, like gray, will be semitransparent.
    */
    maskTexture: Texture
    
    /**
    * The distance of the near clipping plane.
    */
    near: number
    
    /**
    * Toggles ray tracing for the camera. When true, ray tracing is enabled.
    */
    rayTracing: boolean
    
    /**
    * Controls the set of layers this Camera will render.
    */
    renderLayer: LayerSet
    
    /**
    * The sorting order the Camera renders in. Every frame, Cameras render in ascending order determined by their `renderOrder` properties.
    */
    renderOrder: number
    
    /**
    * The RenderTarget this Camera will draw to.
    */
    renderTarget: Texture
    
    /**
    * Sets which face of the cubemap this camera will render to.
    */
    renderTargetCubemapFace: Camera.CubemapFace
    
    /**
    * The orthographic size of the camera.
    */
    size: number
    
    /**
    * Controls which type of rendering the camera uses.
    
    */
    type: Camera.Type
    
}
declare namespace Camera {
    /**
    * Creates and returns a new Color Render Target.
    */
    export function createColorRenderTarget(): Camera.ColorRenderTarget
    
    /**
    * Create a depth/stencil render target descriptor for the camera.
    */
    export function createDepthStencilRenderTarget(): Camera.DepthStencilRenderTarget
    
    /**
    * Return true if the device supports stencil operations and render to depth texture.
    */
    export function depthStencilRenderTargetSupported(): boolean
    
    /**
    * Returns the number of possible render target bindings to the camera.
    */
    export function getSupportedColorRenderTargetCount(): number
    

}

declare namespace Camera {
    /**
    * The base class from which ColorRenderTarget and DepthStencilRenderTarget are derived from
    */
    interface BaseRenderTarget extends ScriptObject {
        /**
        * Color texture used in clear color operation in "CustomTexture" mode.
        */
        inputTexture: Texture
        
        /**
        * Texture used like a color mask for target texture.
        */
        maskTexture: Texture
        
        /**
        * Render target texture. Camera will render scene color values to this texture.
        */
        targetTexture: Texture
        
    }

}

declare namespace Camera {
    /**
    * Color based RenderTarget.
    */
    interface ColorRenderTarget extends Camera.BaseRenderTarget {
        /**
        * Sets the clear color of the camera when its `clearColorOption` is set to `ClearColorOption.CustomColor`
        */
        clearColor: vec4
        
        /**
        * Sets how the RenderTarget's color will be cleared before rendering during each frame.
        */
        clearColorOption: ClearColorOption
        
    }

}

declare namespace Camera {
    /**
    * Different faces of the cubemap that a camera can render into.
    */
    enum CubemapFace {
        /**
        * The positive X cubemap face.
        */
        PositiveX,
        /**
        * The negative X cubemap face.
        */
        NegativeX,
        /**
        * The positive Y cubemap face.
        */
        PositiveY,
        /**
        * The negative Y cubemap face.
        */
        NegativeY,
        /**
        * The positive Z cubemap face.
        */
        PositiveZ,
        /**
        * The negative Z cubemap face.
        */
        NegativeZ,
        /**
        * The left cubemap face, same as NegativeX.
        */
        Left,
        /**
        * The right cubemap face, same as PositiveX.
        */
        Right,
        /**
        * The top cubemap face, same as PositiveY.
        */
        Top,
        /**
        * The bottom cubemap face, same as NegativeY.
        */
        Bottom,
        /**
        * The front cubemap face, same as PositiveZ.
        */
        Front,
        /**
        * The back cubemap face, same as NegativeZ.
        */
        Back
    }

}

declare namespace Camera {
    /**
    * Used in [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `depthBufferMode` property.
    * Each mode is suited for handling objects at a certain distance range.
    * For more information on depth modes, see the [Camera and Layers](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/camera) guide.
    */
    enum DepthBufferMode {
        /**
        * Gives higher depth precision on nearby objects, so is better suited for scenes near to the camera.
        */
        Regular,
        /**
        * Gives higher depth precision on far away objects, so is better suited for scenes far away from the camera.
        */
        Logarithmic
    }

}

declare namespace Camera {
    /**
    * This class inherits from the BaseRenderTarget class. BaseRenderTarget class is not available for creation and is used like the base class for DepthStencilRenderTarget class to provide access to targetTexture, inputTexture and maskTexture properties.
    */
    interface DepthStencilRenderTarget extends Camera.BaseRenderTarget {
        /**
        * Float value in range [0.0..1.0] used in depth buffer clear operation in "CustomValue" mode. The initial value is 1.0.
        */
        clearDepthValue: number
        
        /**
        * Unsigned int value in range [0..0xFF] used in stencil buffer clear operation in "CustomValue" mode. The initial value is 0.
        */
        clearStencilValue: number
        
        /**
        * The same as "depthClearOption" property of DepthStencilRenderTargetProvider. But if Camera's depth clear option property is set to "CustomValue" or "CustomTexture" then this has priority over depth/stencil provider settings.
        */
        depthClearOption: DepthClearOption
        
        /**
        * The same as "stencilClearOption" property of DepthStencilRenderTargetProvider. But if Camera's stencil clear option property is set to "CustomValue" or "CustomTexture" then this has priority over depth/stencil provider settings.
        */
        stencilClearOption: StencilClearOption
        
    }

}

declare namespace Camera {
    /**
    * Used in [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `devicePropertyUsage` property.
    * Specifies which camera properties should be overridden by device properties.
    */
    enum DeviceProperty {
        /**
        * No Camera properties are overridden with device properties.
        */
        None,
        /**
        * Overrides the Camera's `aspect` property to use the device's aspect ratio instead.
        */
        Aspect,
        /**
        * Overrides the Camera's `fov` property to use the device's field of view instead.
        */
        Fov,
        /**
        * Overrides both `aspect` and `fov` with the device's properties.
        */
        All
    }

}

declare namespace Camera {
    /**
    * Returned from [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `type` property.
    */
    enum Type {
        /**
        * Simulates how perspective and depth perception work in the real world. Useful for rendering objects in 3D space.
        */
        Perspective,
        /**
        * Does not simulate perspective distortion. Useful for 2D effects like Images and Text.
        */
        Orthographic
    }

}

/**
* Triggered when the device's back facing camera becomes active.
*/
interface CameraBackEvent extends SceneEvent {
}

/**
* Triggered when the device's front facing camera becomes active.
*/
interface CameraFrontEvent extends SceneEvent {
}

interface CameraTextureProvider extends TextureProvider {
}

/**
* A 2D canvas anchored in 3D space that acts as the root of the ScreenTransform hierarchy. ScreenTransform SceneObjects can be placed on the Canvas, and the Canvas can be sized and placed anywhere in 3D space. It is like a painter’s canvas for ScreenTransforms.
*/
interface Canvas extends Component {
    /**
    * Get size of rectangle as (width, height)
    */
    getSize(): vec2
    
    /**
    * Set size of rectangle as (width, height)
    */
    setSize(value: vec2): void
    
    /**
    * The point about which the Canvas Rectangle will rotate. Defined as fractional coordinates of the Canvas's dimensions. e.g. (1 , 1) brings the pivot to the top right corner of the canvas. Or (0.5, 0) moves the pivot to the right by half the canvas width.
    */
    pivot: vec2
    
    sortingType: Canvas.SortingType
    
    unitType: Canvas.UnitType
    
    /**
    * World Space Rectangle that defines the Canvas as offsets in world units from the SceneObject's position
    */
    worldSpaceRect: Rect
    
}

declare namespace Canvas {
    enum SortingType {
        Hierarchy,
        Depth
    }

}

declare namespace Canvas {
    enum UnitType {
        World,
        Pixels,
        Points
    }

}

/**
* Changes the capitalization of the text component. Useful when using dynamic texts.
*/
declare enum CapitilizationOverride {
    /**
    * Display the capitalization of the displayed text as provided.
    */
    None,
    /**
    * Sets the capitalization of the displayed text to lowercase.
    */
    AllLower,
    /**
    * Sets the capitalization of the displayed text to uppercase.
    */
    AllUpper
}

/**
* A capsule collision shape. Also known as a capped cylinder.
*/
interface CapsuleShape extends Shape {
    /**
    * Lengthwise local axis along which the capsule is oriented.
    */
    axis: Axis
    
    /**
    * Length of the capsule along its local axis. This is the distance between the two end-cap centers.
    */
    length: number
    
    /**
    * Radius of the capsule cylinder, and its end-cap spheres.
    */
    radius: number
    
}

/**
* Settings for how color will be cleared before rendering.
*/
declare enum ClearColorOption {
    /**
    * The frame will not be cleared before being rendered to (draws over the previous frame).
    */
    None,
    /**
    * Use the Device Texture for the color color
    */
    Background,
    /**
    * The frame will be cleared with a color before being rendered to.
    */
    CustomColor,
    /**
    * The frame will be cleared with a texture before being rendered to.
    */
    CustomTexture
}

/**
* Clears depth in the drawing order.
*/
interface ClearDepth extends Visual {
}

/**
* Handles the mesh data of cloth and prepares it for cloth simulation. Also controls all the parameters of the cloth simulator and colliders.
*/
interface ClothVisual extends MaterialMeshVisual {
    /**
    * Adds a collider to the list of colliders.
    */
    addCollider(colliderComponent: ColliderComponent): void
    
    /**
    * Clears the colliders list.
    */
    clearColliders(): void
    
    /**
    * Returns all available vertex colors on cloth mesh.
    */
    getAllColors(): vec4[]
    
    /**
    * Returns the vertex color by vertex index.
    */
    getPointColorByIndex(index: number): vec4
    
    /**
    * Returns all the indices of vertices that are labeled by this color.
    */
    getPointIndicesByColor(color: vec4, colorMask: vec4b): number[]
    
    /**
    * Returns all the indices on the cloth mesh that are matching the color mask. Match means that the color has value on the channels which in colorMask is true.
    */
    getPointIndicesByMask(colorMask: vec4b): number[]
    
    /**
    * Gets binding SceneObject of the vertex.
    */
    getVertexBinding(index: number): SceneObject
    
    /**
    * Gets simulation settings of the vertex.
    */
    getVertexSettings(index: number): VertexSimulationSettings
    
    /**
    * Returns true if the Cloth Simulation feature is supported by the current device.
    */
    isHardwareSupported(): boolean
    
    /**
    * Returns true if the Cloth Simulation and resources are initialized. Always return false if device is not supported.
    */
    isInitialized(): boolean
    
    /**
    * Removes collider by its index and returns the removed collider.
    */
    removeColliderByIndex(index: number): ColliderComponent
    
    /**
    * Resets the cloth simulation.
    */
    resetSimulation(): void
    
    /**
    * Sets the binding SceneObject for the vertex.
    */
    setVertexBinding(index: number, bindingObj: SceneObject): void
    
    /**
    * Sets simulation settings of the vertex.
    */
    setVertexSettings(index: number, vertexSettings: VertexSimulationSettings): void
    
    /**
    * Select bend mode to use (Isometric bending/Linear bending).
    */
    bendMode: ClothVisual.BendMode
    
    /**
    * BendStiffness value.
    */
    bendStiffness: number
    
    /**
    * BendStiffness value weight on all the VertexSettings.
    */
    bendStiffnessVertexWeight: number
    
    /**
    * List of colliders assigned.
    */
    colliders: ColliderComponent[]
    
    /**
    * The influence of the external body mesh acting on the cloth visual.
    */
    externalBodyMeshWeight: number
    
    /**
    * Friction value.
    */
    friction: number
    
    /**
    * Friction value weight on all the VertexSettings.
    */
    frictionVertexWeight: number
    
    /**
    * Gravity force vector.
    */
    gravity: vec3
    
    /**
    * Number of simulation iterations to perform per each step. Higher number contributes to higher quality, but can be difficult for device performance.
    */
    iterationsPerStep: number
    
    /**
    * Mass value.
    */
    mass: number
    
    /**
    * Mass value weight on all the VertexSettings.
    */
    massVertexWeight: number
    
    /**
    * Control for the acceleration on motion of vertices in cloth simulation, by default set to 2000.
    */
    maxAcceleration: number
    
    /**
    * Whether to merge close vertices (Lens Studio might split vertices when loading FBX mesh). Changing this resets the simulation.
    */
    mergeCloseVerticesEnabled: boolean
    
    /**
    * Threshold of close vertices. Changing this value resets the simulation.
    */
    mergeCloseVerticesThreshold: number
    
    /**
    * Attached mesh.
    */
    mesh: RenderMesh
    
    /**
    * Function called when the ClothVisual is initialized.
    */
    onInitialized: (clothVisual: ClothVisual) => void
    
    /**
    * Indicates whether we will enable collision repulsion with collider models.
    */
    repulsionEnabled: boolean
    
    /**
    * Collision friction to dampen relative motion.
    */
    repulsionFriction: number
    
    /**
    * Indicates the offset we set when the cloth mesh is too close to the colliders.
    */
    repulsionOffset: number
    
    /**
    * Indicates the stiffness of repulsion when collision.
    */
    repulsionStiffness: number
    
    /**
    * Returns the modified simulated mesh which can be used in another [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual) if the same simulated mesh is needed. Useful when creating effects that might require the same mesh to be rendered twice, such as with a mirror effect. Prevents the need to run a simulation twice. 
    
    
    * @readonly
    */
    simulatedMesh: RenderMesh
    
    /**
    * StretchStiffness Value.
    */
    stretchStiffness: number
    
    /**
    * StretchStiffness Value weight on all the VertexSettings.
    */
    stretchStiffnessVertexWeight: number
    
    /**
    * Whether to update normals for the cloth mesh each frame in order to get reflection update.
    */
    updateNormalsEnabled: boolean
    
}
declare namespace ClothVisual {
    /**
    * Creates a new instance of vertex simulation settings.
    */
    export function createVertexSettings(): VertexSimulationSettings
    

}

declare namespace ClothVisual {
    /**
    * Cloth bend mode to use for cloth simulation.
    */
    enum BendMode {
        Isometric,
        Linear
    }

}

/**
* Options associated with the listValues method call.
*/
interface CloudStorageListOptions extends ScriptObject {
    /**
    * The position in the resulting list. Each time a list is requested, 10 entities are returned. If no cursor is provided, first 10 entities will be returned.
    */
    cursor: string
    
    /**
    * The scope of the listValues request. Required
    */
    scope: StorageScope
    
}
declare namespace CloudStorageListOptions {
    /**
    * Creates the listValues options object for Cloud Storage
    */
    export function create(): CloudStorageListOptions
    

}

/**
* Provides access to Cloud Storage.
*/
interface CloudStorageModule extends Asset {
    /**
    * Get the Cloud Store. Future calls to this method will return the same cloud store, even if the options change.
    */
    getCloudStore(options: CloudStorageOptions, onCloudStoreReady: (store: CloudStore) => void, onError: (code: string, description: string) => void): void
    
}

/**
* Used to configure `Cloud Storage Module` with various options. Note: if `session` scoped storage is required, this option must be provided.

*/
interface CloudStorageOptions extends ScriptObject {
    /**
    * If session scoped storage is required, set this property with the session object from [Connected Lenses Module](https://lensstudio.snapchat.com/api/classes/ConnectedLensModule).
    
    */
    session: MultiplayerSession
    
}
declare namespace CloudStorageOptions {
    /**
    * Create options for use with Cloud Storage.
    */
    export function create(): CloudStorageOptions
    

}

/**
* Options associated with the getValue/deleteValue methods for Cloud Storage.
*/
interface CloudStorageReadOptions extends ScriptObject {
    /**
    * The scope of the request.
    */
    scope: StorageScope
    
}
declare namespace CloudStorageReadOptions {
    /**
    * Options associated with the getValue/deleteValue methods for Cloud Storage.
    */
    export function create(): CloudStorageReadOptions
    

}

/**
* Options associated with the setValue method for Cloud Storage.
*/
interface CloudStorageWriteOptions extends ScriptObject {
    /**
    * The scope of the write option.
    */
    scope: StorageScope
    
}
declare namespace CloudStorageWriteOptions {
    /**
    * Creates the setValue options object for Cloud Storage.
    */
    export function create(): CloudStorageWriteOptions
    

}

/**
* An instance of Cloud Storage that can store data in a multiplayer experience.
*/
interface CloudStore extends ScriptObject {
    /**
    * Deletes a value from the persistence backend. Note that the scope must match that which was used when the value was originally saved.
    */
    deleteValue(key: string, readOptions: CloudStorageReadOptions, onDeleted: () => void, onError: (code: string, description: string) => void): void
    
    /**
    * Gets a value from the persistence backend. Note that scope must match that which was used when the value was originally saved.
    */
    getValue(key: string, readOptions: CloudStorageReadOptions, onRetrieved: (key: string, value: (mat4|mat3|mat2|vec4|vec2|vec3|boolean|quat|number|string)) => void, onError: (code: string, description: string) => void): void
    
    /**
    * Lists values from the persistence backend. Note that the scope must match that which was used when the values were originally saved.
    */
    listValues(listOptions: CloudStorageListOptions, onRetrieved: (values: (mat4|mat3|mat2|vec4|vec2|vec3|boolean|quat|number|string)[][], cursor: string) => void, onError: (code: string, description: string) => void): void
    
    /**
    * Sets a value in the persistence backend.
    */
    setValue(key: string, value: (mat4|mat3|mat2|vec4|vec2|vec3|boolean|quat|number|string), writeOptions: CloudStorageWriteOptions, onSaved: () => void, onError: (code: string, description: string) => void): void
    
}

/**
* Collider used by the [Hair Visual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#HairVisual) for its simulation.
*/
interface ColliderComponent extends Component {
    /**
    * Clears all velocities and forces on a collider.
    */
    clearMotion(): void
    
    /**
    * Angular velocity, expressed as an axis of rotation scaled by angular speed (radians/s).
    */
    angularVelocity: vec3
    
    /**
    * Toggle collider wire rendering for visualizing collider geometry shape and where it is placed.
    */
    debugDrawEnabled: boolean
    
    /**
    * Collision filter to use for this collider.
    */
    filter: Filter
    
    /**
    * If enabled, the collider shape extends to fit the visual mesh, if any. Only applicable for Box and Sphere shapes.
    */
    fitVisual: boolean
    
    /**
    * Nested collider/body components may be merged into compound shapes. By default, this occurs only for dynamic bodies and not for static colliders. If `forceCompound` is set, this occurs for static colliders as well.
    */
    forceCompound: boolean
    
    /**
    * If enabled, the collider doesn't interact with the world but may still be detected with ray casts and intersection events.
    */
    intangible: boolean
    
    /**
    * The matter used by the collider to define its physical substance, such as friction and bounciness.
    */
    matter: Matter
    
    /**
    * Signals when objects initially collide.
    
    * @readonly
    */
    onCollisionEnter: event1<CollisionEnterEventArgs, void>
    
    /**
    * Signals when objects stop colliding.
    
    * @readonly
    */
    onCollisionExit: event1<CollisionExitEventArgs, void>
    
    /**
    * Signals every frame while objects continue to collide.
    
    * @readonly
    */
    onCollisionStay: event1<CollisionStayEventArgs, void>
    
    /**
    * Signals when colliders first overlap.
    
    * @readonly
    */
    onOverlapEnter: event1<OverlapEnterEventArgs, void>
    
    /**
    * Signals when colliders stop overlapping.
    
    * @readonly
    */
    onOverlapExit: event1<OverlapExitEventArgs, void>
    
    /**
    * Signals every frame while colliders continue to overlap.
    
    * @readonly
    */
    onOverlapStay: event1<OverlapStayEventArgs, void>
    
    /**
    * Collision filter used for overlap events.
    */
    overlapFilter: Filter
    
    /**
    * Smoothing spring factor, for rotation.
    */
    rotateSmoothFactor: number
    
    /**
    * The Shape object used for collision.
    */
    shape: Shape
    
    /**
    * Smooth transform changes using a dampened spring. Useful to reduce motion noise. This only applies to the simulation and changes from outside the simulation. The scene object's transform is not affected. It has no effect for dynamic bodies. 
    */
    smooth: boolean
    
    /**
    * Smoothing spring factor, for translation. This controls the restitution strength of the spring, so low values are smoother but lag more.
    */
    translateSmoothFactor: number
    
    /**
    * Linear velocity (cm/s).
    */
    velocity: vec3
    
    /**
    * The WorldSettingsAsset used by the collider to define the physics simulation settings.
    */
    worldSettings: Physics.WorldSettingsAsset
    
}

/**
* A state generated for ColliderComponent collision events.
*/
interface Collision extends ScriptObject {
    /**
    * Primitive shapes that physics objects interact with, such as spheres, boxes, and meshes, or compound shapes formed from multiple shapes. Used with Physics, Hair Simulation and Cloth Simulation.
    
    * @readonly
    */
    collider: ColliderComponent
    
    /**
    * The number of contact points in the collision.
    
    * @readonly
    */
    contactCount: number
    
    /**
    * Array of contacts in the collision.
    
    * @readonly
    */
    contacts: Contact[]
    
    /**
    * ID of the collision, unique for this collider.
    
    * @readonly
    */
    id: number
    
}

/**
* Args used for [ColliderComponent.onCollisionEnter](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when a collision begins.
*/
interface CollisionEnterEventArgs extends ScriptObject {
    /**
    * Structure containing information about the current collision.
    
    * @readonly
    */
    collision: Collision
    
}

/**
* Args used for [ColliderComponent.onCollisionExit](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when a collision ends.
*/
interface CollisionExitEventArgs extends ScriptObject {
    /**
    * Structure containing information about the current collision.
    
    * @readonly
    */
    collision: Collision
    
}

interface CollisionMesh extends Asset {
}

/**
* Args used for [ColliderComponent.onCollisionStay](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered every frame while a collision continues.
*/
interface CollisionStayEventArgs extends ScriptObject {
    /**
    * Structure containing information about the current collision.
    
    * @readonly
    */
    collision: Collision
    
}

/**
* Not usable from JS. Accessed via the Colocated Landmarks 2D Mesh resource. Contains the 2D keypoints when creating a Colocated map. Expanded by the material provided with template.
*/
interface ColocatedLandmarks2DRenderObjectProvider extends ColocatedLandmarksRenderObjectProviderBase {
}

/**
* Not usable from JS. Accessed via the Colocated Landmarks 3D Mesh resource. Contains the 3D landmarks when creating a Colocated map. Expanded by the material provided with template.
*/
interface ColocatedLandmarks3DRenderObjectProvider extends ColocatedLandmarksRenderObjectProviderBase {
}

interface ColocatedLandmarksRenderObjectProviderBase extends RenderObjectProvider {
}

/**
* Creates Colocated Connected Lenses experiences by enabling the creation and tracking of a shared space which can be used to place several users in the same coordinate frame. This shared space will be made available and can be tracked by any friend you invite to join your session via Snapcode. Users are expected to be located in the same room when using the colocated feature. This component needs to be attached to the camera. 
*/
interface ColocatedTrackingComponent extends Component {
    /**
    * Joins an existing session, retrieving the shared space that the colocated session initiator just created. Throws an exception if a join or build operation is in progress or if a shared space is already present.
    */
    join(session: MultiplayerSession): void
    
    /**
    * Starts the shared space building process locally in the session initiator's device.
    
    * If a session is provided, the shared space is placed into the session after building has completed, which is required for Colocated experiences running on mobile devices. When running the experience in Lens Studio Preview or solo mode the session is not required.
    
    * Throws an exception if a join or build operation is in progress or if a map is already present.
    */
    startBuilding(session: MultiplayerSession): void
    
    /**
    * Provides the shared space building progress expressed in values 0-1. These values can be used to populate a progress bar. Once this value has reached 1, the colocated tracking component attempts to share the space which the user created.
    
    * @readonly
    */
    buildingProgress: number
    
    /**
    * Indicates whether a shared space can be built on this device. Colocated Tracking is available on devices with ARKit/ARCore in the rear camera. This flag should be checked before attempting to build or join a session. If it is false, you should inform users: "Sorry, your device does not support shared AR experiences."
    
    * @readonly
    */
    canBuild: boolean
    
    /**
    * Indicates whether a shared space is present and ready to be tracked.
    
    * @readonly
    */
    canTrack: boolean
    
    /**
    * Indicates whether a shared space building operation is in progress. Once the flag is false, the shared space still needs to be shared. Use `onTrackingAvailable` to determine when your space has been shared.
    
    * @readonly
    */
    isBuilding: boolean
    
    /**
    * Indicates whether a session joining operation is in progress.
    
    * @readonly
    */
    isJoining: boolean
    
    /**
    * Indicates whether a shared space is actively being tracked. This value will be true while tracking is active, either with or without the shared space in view. This property matches the equivalent one in `MarkerTrackingComponent`.
    
    * @readonly
    */
    isTracking: boolean
    
    /**
    * Event fired when the building operation fails (for example, sharing your space failed). Once `onTrackingAvailable` event is triggered, this event will not be triggered anymore. 
    
    * @readonly
    */
    onBuildFailed: event0<void>
    
    /**
    * Event fired when a shared space starts being actively tracked. This property is an analogue of the `onMarkerFound` property in `MarkerTrackingComponent`.
    
    * @readonly
    */
    onFound: event0<void>
    
    /**
    * Event fired when a join operation completes but no shared space was found in the session.
    
    * @readonly
    */
    onJoinFailed: event0<void>
    
    /**
    * Event fired when a shared space stops being actively tracked. This property is an analogue of the `onMarkerLost` property in `MarkerTrackingComponent`.
    
    * @readonly
    */
    onLost: event0<void>
    
    /**
    * Event fired when a shared space has been shared or received and the device can attempt to start tracking.  If this event is not being triggered for a long period, the process will time out and `onBuildFailed` event will be triggered.
    
    * @readonly
    */
    onTrackingAvailable: event0<void>
    
}

/**
* Data type used for color values.
*/
declare enum Colorspace {
    /**
    * Color data has one value: Red
    */
    R,
    /**
    * Color data has 2 values: Red, Green
    */
    RG,
    /**
    * Color data has 4 values: Red, Green, Blue, Alpha
    */
    RGBA
}

/**
* The base class for all components.  Components are attached to [SceneObjects](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject).
*/
interface Component extends SerializableWithUID {
    /**
    * Destroys the component.
    */
    destroy(): void
    
    /**
    * Returns the SceneObject the component is attached to.
    */
    getSceneObject(): SceneObject
    
    /**
    * Returns the Transform this component is attached to.
    */
    getTransform(): Transform
    
    /**
    * If disabled, the Component will stop enacting its behavior.
    */
    enabled: boolean
    
    /**
    * @readonly
    */
    sceneObject: SceneObject
    
}

/**
* A cone collision shape.
*/
interface ConeShape extends Shape {
    /**
    * Lengthwise local axis along which the cone is oriented.
    */
    axis: Axis
    
    /**
    * The length of the cone.
    */
    length: number
    
    /**
    * The radius of the cone.
    */
    radius: number
    
}

/**
* Event fired when the "Launch connected lens" button was pressed. Wait for this event to be triggered before creating a session, as having this event gaurantees the user has accepted the necessary disclosures to use a connected lens experience.
*/
interface ConnectedLensEnteredEvent extends SceneEvent {
}

/**
* Connected Lenses Module allows use of networked Lens communication capabilities (real-time communication, co-located session creation and joining, and shared persistent storage). It's recommended to only use one ConnectedLensModule per Lens.
*/
interface ConnectedLensModule extends Asset {
    /**
    * Create session with the provided options. Will also check if there is a session that can be created from a session sharetype received from other users.
    */
    createSession(sessionOptions: ConnectedLensSessionOptions): void
    
    /**
    * Share the session with other users, specified by the SessionShareType. Note that if shared via Invitation, a new session will be created. Expect a new onConnected callback with the new session being passed in.
    */
    shareSession(sessionShareType: ConnectedLensModule.SessionShareType, onSessionShared: (session: MultiplayerSession, snapcode: Texture) => void): void
    
}

declare namespace ConnectedLensModule {
    /**
    * Information that is bootstrapped to the user who just connected to the session.
    */
    interface ConnectionInfo extends ScriptObject {
        /**
        * Get the information about all the other users connected to the same session. 
        
        * @readonly
        */
        externalUsersInfo: ConnectedLensModule.UserInfo[]
        
        /**
        * @readonly
        */
        hostUserInfo: ConnectedLensModule.UserInfo
        
        /**
        * Get the information about the local user.
        
        * @readonly
        */
        localUserInfo: ConnectedLensModule.UserInfo
        
        /**
        * Get all the Realtime Stores that are being used in the session.
        
        * @readonly
        */
        realtimeStores: GeneralDataStore[]
        
        /**
        * Provides creation info about every existing RealtimeStore.
        
        * @readonly
        */
        realtimeStoresCreationInfos: ConnectedLensModule.RealtimeStoreCreationInfo[]
        
    }

}

declare namespace ConnectedLensModule {
    /**
    * Information about the host update.
    */
    interface HostUpdateInfo extends ScriptObject {
        /**
        * Provides the server timestamp (in milliseconds) of when the host was updated.
        
        * @readonly
        */
        sentServerTimeMilliseconds: number
        
        /**
        * Information about the new host user. 
        
        * @readonly
        */
        userInfo: ConnectedLensModule.UserInfo
        
    }

}

declare namespace ConnectedLensModule {
    /**
    * Provides extra context about a RealtimeStore's creation.
    */
    interface RealtimeStoreCreationInfo extends ScriptObject {
        /**
        * If true, ownership of the store can be claimed even if the store is already owned.
        
        * @readonly
        */
        allowOwnershipTakeOver: boolean
        
        /**
        * Provides the server timestamp (in milliseconds) of the last time the store was updated.
        
        * @readonly
        */
        lastUpdatedServerTimestamp: number
        
        /**
        * Provides the UserInfo of the current owner of the RealtimeStore. If the store is unowned, a UserInfo object with null fields will be returned.
        
        
        * @readonly
        */
        ownerInfo: ConnectedLensModule.UserInfo
        
        /**
        * The persistence setting that the store was created with.
        
        * @readonly
        */
        persistence: RealtimeStoreCreateOptions.Persistence
        
        /**
        * Provides the server timestamp (in milliseconds) of when the store was created.
        
        * @readonly
        */
        sentServerTimeMilliseconds: number
        
        /**
        * A string that can be used to identify the RealtimeStore.
        
        * @readonly
        */
        storeId: string
        
    }

}

declare namespace ConnectedLensModule {
    /**
    * Gives information about the Realtime Store delete operation. 
    */
    interface RealtimeStoreDeleteInfo extends ScriptObject {
        /**
        * Get the information of the user who deleted the Store.
        
        * @readonly
        */
        deleterInfo: ConnectedLensModule.UserInfo
        
        /**
        * Provides the server timestamp (in milliseconds) of when the store was deleted.
        
        * @readonly
        */
        sentServerTimeMilliseconds: number
        
    }

}

declare namespace ConnectedLensModule {
    /**
    * Provides information about a key being removed from a RealtimeStore.
    */
    interface RealtimeStoreKeyRemovalInfo extends ScriptObject {
        /**
        * Key of the property that was removed.
        
        * @readonly
        */
        key: string
        
        /**
        * User that removed the key.
        
        * @readonly
        */
        removerInfo: ConnectedLensModule.UserInfo
        
        /**
        * Provides the server timestamp (in milliseconds) of when the key was removed.
        
        * @readonly
        */
        sentServerTimeMilliseconds: number
        
        /**
        * The RealtimeStore that the key was removed from.
        
        * @readonly
        */
        store: GeneralDataStore
        
    }

}

declare namespace ConnectedLensModule {
    /**
    * Provides information about a RealtimeStore's ownership being updated.
    */
    interface RealtimeStoreOwnershipUpdateInfo extends ScriptObject {
        /**
        * Provides the server timestamp (in milliseconds) of when the store ownership was updated.
        
        * @readonly
        */
        sentServerTimeMilliseconds: number
        
    }

}

declare namespace ConnectedLensModule {
    /**
    * Gives information about the Realtime Store update operation.
    */
    interface RealtimeStoreUpdateInfo extends ScriptObject {
        /**
        * Provides the server timestamp (in milliseconds) of when the store was updated.
        
        * @readonly
        */
        sentServerTimeMilliseconds: number
        
        /**
        * Get the information of the user who updated the store.
        
        * @readonly
        */
        updaterInfo: ConnectedLensModule.UserInfo
        
    }

}

declare namespace ConnectedLensModule {
    /**
    * Used by ConnectedLensesModule to specify the session share type.
    */
    enum SessionShareType {
        /**
        * Share a session by inviting your friends, launching the "send to" screen.
        */
        Invitation,
        /**
        * Share session via Snapcode that your friends can scan.
        */
        Snapcode
    }

}

declare namespace ConnectedLensModule {
    /**
    * Provides information about a user in a Connected Lens session.
    */
    interface UserInfo extends ScriptObject {
        /**
        * @readonly
        */
        connectionId: string
        
        /**
        * The current display name of the user.
        
        * @readonly
        */
        displayName: string
        
        /**
        * Provides the server timestamp (in milliseconds) that the user joined the session.
        
        * @readonly
        */
        joinServerTimeMilliseconds: number
        
        /**
        * A unique identifier for each participant of connected lens experience. It is unique per lens for each user.
        
        * @readonly
        */
        userId: string
        
    }

}

/**
* Settings for configuring a Connected Lens session.
*/
interface ConnectedLensSessionOptions extends DirectMultiplayerSessionOptions {
    /**
    * Defines maximum number of receipients that a user of connected lens can select while sharing a connected lens session via Invitation flow.
    */
    maxNumberOfInvitations: number
    
    /**
    * Function called when the session is created. The session creation type in this callback can be used to tell if the session is being created from scratch, or is being received from another user.
    */
    onSessionCreated: (session: MultiplayerSession, sessionCreationType: ConnectedLensSessionOptions.SessionCreationType) => void
    
}
declare namespace ConnectedLensSessionOptions {
    /**
    * Create a new ConnectedLensesOptions object.
    */
    export function create(): ConnectedLensSessionOptions
    

}

declare namespace ConnectedLensSessionOptions {
    /**
    * Type of the created Connected Lens session.
    */
    enum SessionCreationType {
        /**
        * New Session was created.
        */
        New,
        /**
        * Session was joined via invite.
        */
        MultiplayerReceiver,
        /**
        * A Connected Lens session with only the current user.
        */
        NewSoloMode
    }

}

/**
* Constraints body motion in configurable ways, for simulating physical objects such as joints and hinges.
*/
interface Constraint extends ScriptObject {
    /**
    * The type of constraint that is applied.
    
    * @readonly
    */
    constraintType: Physics.ConstraintType
    
}

/**
* Used to apply a constraint to an object.
*/
interface ConstraintComponent extends Component {
    /**
    * The target is attached to the constraint by a fixed local-space matrix, calculated from the difference between the target's and the constraint's world-space transforms. This local-space matrix is generated on-load, or whenever the target is changed. Call this function to explicitly recalculate it for the current world-space transforms.
    */
    reanchorTarget(): void
    
    /**
    * Dictates constraint type and settings. Note, when setting this field it creates a copy of the constraint, rather than referencing it. So if you intend to modify the constraint after assigning it, you must do so on the component's constraint field, rather than the source constraint object.
    */
    constraint: Constraint
    
    /**
    * Show the constraint with debug-draw.
    */
    debugDrawEnabled: boolean
    
    /**
    * Reference to connected target collider. If null, constraint target is attached to a fixed world transform.
    */
    target: ColliderComponent
    
}

/**
* Contact point between two colliding objects.  See also: [ColliderComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), [CollisionEnterEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#CollisionEnterEventArgs), [CollisionExitEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#CollisionExitEventArgs), [CollisionStayEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#CollisionStayEventArgs).
*/
interface Contact extends ScriptObject {
    /**
    * Distance along the normal between the hit collider and this collider.
    
    * @readonly
    */
    distance: number
    
    /**
    * Impulse (kg*cm/s) applied along the normal in response to the collision.
    
    * @readonly
    */
    impulse: number
    
    /**
    * Normal on the hit collider.
    
    * @readonly
    */
    normal: vec3
    
    /**
    * Position on the hit collider.
    
    * @readonly
    */
    position: vec3
    
}

/**
* Base class for Texture Providers that crop an input texture.
*/
interface CropTextureProvider extends TextureProvider {
    /**
    * Input texture to crop.
    */
    inputTexture: Texture
    
}

/**
* Used with [Pass's](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass) `cullMode` property.
* Determines which faces of a surface are culled (not rendered).
*/
declare enum CullMode {
    /**
    * Front facing surfaces are not rendered.
    */
    Front,
    /**
    * Back facing surfaces are not rendered.
    */
    Back,
    /**
    * Neither front facing nor back facing surfaces are rendered.
    */
    FrontAndBack
}

/**
* A cylinder collision shape.
*/
interface CylinderShape extends Shape {
    /**
    * Lengthwise local axis along which the cylinder is oriented.
    */
    axis: Axis
    
    /**
    * The length of the cylinder.
    */
    length: number
    
    /**
    * The radius of the cylinder.
    */
    radius: number
    
}

interface DeformingCollisionMesh extends CollisionMesh {
}

/**
* Creates a buffer for the audio data.
*/
interface Delay extends ScriptObject {
    /**
    * Process current frame data passed in `inTensor` of shape `inShape`, writes the result (delayed frame) to the `outTensor` and returns the shape of `outTensor`.
    */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3
    
    /**
    * Maximum amount of features (channels).
    
    * @readonly
    */
    maxTensorSize: number
    
}

/**
* Builder class for the Delay.
*/
interface DelayBuilder extends ScriptObject {
    /**
    * Creates new Delay object.
    */
    build(): Delay
    
    /**
    * Set the delay of the Delay object in samples. Delay is equal to `sampleRate * delayInSeconds`.
    */
    setDelay(delay: number): DelayBuilder
    
    /**
    * Specify number of channels. Currently, only mono is supported, so should be set to `1`.
    */
    setNumFeatures(numFeatures: number): DelayBuilder
    
}

/**
* An event that gets triggered after a delay.
*/
interface DelayedCallbackEvent extends SceneEvent {
    /**
    * Cancel the callback in progress.
    */
    cancel(): void
    
    /**
    * Returns the total delay time in seconds set on the event.
    */
    getDelayTime(): number
    
    /**
    * Returns the current time in seconds left in the event's delay.
    */
    getTimeLeft(): number
    
    /**
    * Calling this will cause the event to trigger in `time` seconds.
    */
    reset(time: number): void
    
}

/**
* Local estimate of the derivative of the input data along the selected axis. Outputs the derivative of the input features along the window.
*/
interface Delta extends ScriptObject {
    /**
    * Process `inTensor` with shape `inShape` and writes the result to the `outTensor` and returns the shape of `outTensor`.
    */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3
    
    /**
    * Maximum amount of features (channels).
    
    * @readonly
    */
    maxTensorSize: number
    
}

/**
* Builder class for Delta.
*/
interface DeltaBuilder extends ScriptObject {
    /**
    * Create a new Delta object.
    */
    build(): Delta
    
    /**
    * Specify number of channels. Currently, only mono is supported, so should be set to `1`.
    */
    setNumFeatures(numFeatures: number): DeltaBuilder
    
    /**
    * Set the size of the window.
    */
    setWindowSize(winSize: number): DeltaBuilder
    
}

/**
* Settings for the depth clear option modes on a DepthStencilRenderTargetProvider.
*/
declare enum DepthClearOption {
    /**
    * Do not clear the depth buffer, just keep values. Equal to disabled clear depth checkbox in Camera in previous Studio version.
    */
    None,
    /**
    * Clear depth buffer by specific value. Equal to enabled clear depth checkbox in Camera in previous Studio version.
    */
    CustomValue,
    /**
    * Clear depth buffer by values from depth part of input texture. Will use custom value in case of unavailable input texture.
    */
    CustomTexture
}

/**
* Writes video feed depth information to the depth buffer, which automatically sets up depth occlusion for 3D visuals.
* Only works in some cases, such as in Lenses for Spectacles 3.
* See the [Lenses for Spectacles guide](https://lensstudio.snapchat.com/lens-studio/references/guides/distributing/spectacles/spectacles-3/lenses-for-spectacles-3) for more information.
*/
interface DepthSetter extends PostEffectVisual {
}

/**
* Access to a Depth Stencil Render Target that can output depth and stencil values from a Camera in Depth24/Stencil8 format.
*/
interface DepthStencilRenderTargetProvider extends TextureProvider {
    /**
    * Float value in range [0.0..1.0] used in depth buffer clear operation in "CustomValue" mode. The initial value is 1.0.
    */
    clearDepthValue: number
    
    /**
    * Unsigned int value in range [0..0xFF] used in stencil buffer clear operation in "CustomValue" mode. The initial value is 0.
    */
    clearStencilValue: number
    
    /**
    * Depth buffer clear option.  "None" - depth buffer clear operation will be skipped.  "CustomValue" - depth buffer will be cleared by "clearDepthValue" property value. "CustomTexture" - depth buffer will be cleared by texture from "inputTexture" property, if "inputTexture" is null then depth clear option will fallback to "CustomValue" mode.
    */
    depthClearOption: DepthClearOption
    
    /**
    * Texture with Depth24_Stencil8 format. Depth24 part used in depth clear operation in "CustomTexture" mode.
    */
    inputTexture: Texture
    
    /**
    * Texture with Depth24_Stencil8 format. Stencil8 part used in stencil clear operation in "CustomTexture" mode.
    */
    maskTexture: Texture
    
    /**
    * Custom render target resolution, this property will use if the "outputResolution" property is a "Custom".
    */
    resolution: vec2
    
    /**
    * Stencil buffer clear option.  "None" - stencil buffer clear operation will be skipped.  "CustomValue" - stencil buffer will be cleared by "clearStencilValue" property value. "CustomTexture" - stencil buffer will be cleared by texture from "maskTexture" property, if "maskTexture" is null then the stencil clear option will fallback to "CustomValue" mode.
    */
    stencilClearOption: StencilClearOption
    
}

/**
* Provides depth information of the video feed that the Lens is being applied to when available, such as in Lenses for Spectacles 3.
* Can be accessed from `mainPass.baseTex.control` of a Spectacles Depth material.

* See the [Lenses for Spectacles guide](https://lensstudio.snapchat.com/lens-studio/references/guides/distributing/spectacles/spectacles-2021/lenses-for-spectacles) for more information.
*/
interface DepthTextureProvider extends TextureProvider {
    /**
    * @exposesUserData
    */
    sampleDepthAtPoint(point: vec2): number
    
}

/**
* Provides information about the device's camera.
*/
interface DeviceCamera extends ScriptObject {
    project(pointInDeviceReferenceNode: vec3): vec2
    
    /**
    * Unprojects the normalized screen space point `normalizedScreenSpacePoint` based on some distance `absoluteDepth`.
    */
    unproject(normalizedScreenSpacePoint: vec2, absoluteDepth: number): vec3
    
    /**
    * Provides the focal length of the device's camera.
    
    * @readonly
    */
    focalLength: vec2
    
    /**
    * Provides the transform of the camera.
    
    * @readonly
    */
    pose: mat4
    
    /**
    * Provides the principal point, or center of image, of the device's camera.
    
    * @readonly
    */
    principalPoint: vec2
    
    /**
    * Provides the resolution of the image returned by the device's camera.
    
    * @readonly
    */
    resolution: vec2
    
}

/**
* Provides information about the device running the Lens. Accessible through `global.deviceInfoSystem`.
*/
interface DeviceInfoSystem extends ScriptObject {
    /**
    * Returns the operating system type of the device.
    
    * @exposesUserData
    */
    getOS(): OS
    
    /**
    * Provides the tracking camera's [DeviceCamera](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#DeviceCamera).
    */
    getTrackingCamera(): DeviceCamera
    
    /**
    * Returns whether the current Lens is running in a desktop computer.
    */
    isDesktop(): boolean
    
    /**
    * Returns whether the current Lens is running in Lens Studio.
    */
    isEditor(): boolean
    
    /**
    * Returns whether the current Lens is running in a mobile device.
    */
    isMobile(): boolean
    
    /**
    * Returns whether the current Lens is running in a Spectacles device.
    */
    isSpectacles(): boolean
    
    /**
    * @readonly
    */
    screenScale: number
    
}

/**
* Used to track a landmarker in the camera. Moves the SceneObject's transform to match the detected landmarker scene.
* See the [Landmarker guide](https://lensstudio.snapchat.com/templates/landmarker) for more information.
*/
interface DeviceLocationTrackingComponent extends Component {
    /**
    * Returns whether the location landmarker is currently being tracked.
    */
    isTracking(): boolean
    
    /**
    * Returns the distance, in meters, to the location. If the distance is unavailable, -1 is returned.
    
    * @readonly
    */
    distanceToLocation: number
    
    /**
    * The location that the tracker is tracking. Useful for dynamically controlling the target location being tracked.
    */
    location: LocationAsset
    
    /**
    * Returns the user's current LocationProximityStatus. Useful for telling if a user is close enough to the location to track it.
    
    * @readonly
    */
    locationProximityStatus: LocationProximityStatus
    
    /**
    * A function that gets called when location data fails to download.
    */
    onLocationDataDownloadFailed: () => void
    
    /**
    * A function that gets called when location data is downloaded.
    */
    onLocationDataDownloaded: () => void
    
    /**
    * A function that gets called when location is found.
    */
    onLocationFound: () => void
    
    /**
    * A function that gets called when location is lost. Note this will also happen when the user flips the camera.
    */
    onLocationLost: () => void
    
}

/**
* Moves or rotates the SceneObject to match device orientation.

* If using "Surface" tracking mode, adding this to a SceneObject enables surface tracking for the scene, and moves the
* object to a position and rotation that matches the physical camera's pose in the world. Surface tracking can also be enhanced
* with native AR by enabling the "Use Native AR" option in the Inspector panel, or through script by setting the
* component's [`surfaceOptions.enhanceWithNativeAR`](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SurfaceOptions) property.

* If using "Rotation" tracking mode, adding this to a SceneObject will apply the device's real world rotation to the object.

* If using "World" tracking mode, adding this to a SceneObject enables native AR tracking for the scene, and moves the
* object to a position and rotation that matches the physical camera's pose in the world.

* See the [Tracking Modes](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/tracking-modes) guide for more information.

**Note:** This component was named "WorldTracking" in previous versions of Lens Studio.
*/
interface DeviceTracking extends Component {
    /**
    * Calculates a histogram of world mesh surfaces within a sphere at the given world position and radius. Only available when world mesh tracking is supported and enabled.
    */
    calculateWorldMeshHistogram(center: vec3, radius: number): TrackedMeshHistogramResult
    
    /**
    * Creates a TrackedPoint at world position `worldPos` and world rotation `worldRot`.
    */
    createTrackedWorldPoint(worldPos: vec3, worldRot: quat): TrackedPoint
    
    /**
    * Returns the actual DeviceTrackingMode being used. This may be different from the requested DeviceTrackingMode.
    */
    getActualDeviceTrackingMode(): DeviceTrackingMode
    
    /**
    * Returns an array of BasicTransform objects describing each point that the camera travels through.
    * Each item in the array matches the camera's basic transform in the corresponding frame of the video feed that the Lens is applied to.
    * Only available in some cases, such as in Lenses for Spectacles 3. When not available, it will return an empty array.
    * See the [Lenses for Spectacles guide](https://lensstudio.snapchat.com/lens-studio/references/guides/distributing/spectacles/spectacles-2021/lenses-for-spectacles) for more information.
    */
    getDevicePath(): BasicTransform[]
    
    /**
    * Returns the current frame index of the video feed that the Lens is being applied to.
    * This can be used as an index to access the current BasicTransform in `getDevicePath()`.
    * Only available in some cases, such as in Lenses for Spectacles 3. When not available, it will return -1.
    * See the [Lenses for Spectacles guide](https://lensstudio.snapchat.com/lens-studio/references/guides/distributing/spectacles/spectacles-2021/lenses-for-spectacles) for more information.
    */
    getDevicePathIndex(): number
    
    /**
    * Returns the 3D point cloud representing important features visible by the camera.
    
    * @exposesUserData
    */
    getPointCloud(): PointCloud
    
    /**
    * Returns the DeviceTrackingMode currently requested to be used.
    * This may be different from the actual DeviceTrackingMode being used.
    */
    getRequestedDeviceTrackingMode(): DeviceTrackingMode
    
    /**
    * Returns an array of TrackedMeshHitTestResult that intersect with a ray cast from screen position screenPos. Only available when world mesh tracking is supported and enabled.
    */
    hitTestWorldMesh(screenPos: vec2): TrackedMeshHitTestResult[]
    
    /**
    * Returns whether the DeviceTrackingMode is supported.
    */
    isDeviceTrackingModeSupported(mode: DeviceTrackingMode): boolean
    
    /**
    * Returns an array of TrackedMeshHitTestResult that intersect with a ray cast from the world position `from` and continuing through the world position `to`. Only available when world mesh tracking is supported and enabled.
    */
    raycastWorldMesh(from: vec3, to: vec3): TrackedMeshHitTestResult[]
    
    /**
    * Requests that a DeviceTrackingMode be used. This requested change may not happen immediately.
    */
    requestDeviceTrackingMode(val: DeviceTrackingMode): void
    
    /**
    * Resets the World Tracking origin to the point on the surface plane aligned with the screen position `position`.
    * Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the top-left of the screen and (1,1) being the bottom-right.
    */
    resetTracking(position: vec2): void
    
    /**
    * Offsets the default position of the World Tracking surface origin by `offset`.
    * Avoid using a `y` value of zero in `offset`, because it may cause problems with tracking.
    * If used outside of `Initialized` or `TurnOnEvent`, you will need to call `resetTracking()` to apply the offset.
    * Note: calling `resetTracking()` will overwrite the `x` and `z` components of the offset.
    */
    setWorldOriginOffset(offset: vec3): void
    
    /**
    * Used to access rotation tracking settings.
    */
    rotationOptions: RotationOptions
    
    /**
    * Used to access surface tracking settings.
    */
    surfaceOptions: SurfaceOptions
    
    /**
    * Helps to improve surface tracking accuracy while the target `SceneObject` is being moved.
    */
    surfaceTrackingTarget: SceneObject
    
    /**
    * Returns the WorldOptions object of this component, which can be used to control World Tracking settings.
    */
    worldOptions: WorldOptions
    
    /**
    * Returns the World Tracking Capabilities of the current device.
    
    * @readonly
    */
    worldTrackingCapabilities: WorldTrackingCapabilities
    
}

/**
* Tracking modes used by the [DeviceTracking](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) component to specify what type of tracking to use.
*/
declare enum DeviceTrackingMode {
    /**
    * Use gyroscope tracking (rotation only)
    */
    Rotation,
    /**
    * Use surface tracking (position and rotation)
    */
    Surface,
    /**
    * Use native tracking (position and rotation)
    */
    World
}

interface DeviceTrackingModule extends Asset {
}

declare namespace Dialog {
    /**
    * Provides answer information in response to `DialogModule.askQuestions()`.
    */
    interface Answer extends ScriptObject {
        /**
        * The answer to the question.
        
        * @readonly
        */
        answer: string
        
        /**
        * The index of the question this is answering in the questions array.
        
        * @readonly
        */
        questionId: number
        
        /**
        * Status of the question response.
        
        * @readonly
        */
        status: number
        
    }

}

interface DialogModule extends Asset {
    /**
    * Sends a request to ask questions using the DialogModule. `context` is the text the model will use as context for answering the question. `questions` is a list of questions to ask. When answers are ready, `onQuestionsAnswerComplete` will be called with a list of `Dialog.Answer` objects corresponding to the questions in the `questions` list. `onQuestionsAnswerError` will be called if any error occurs.
    */
    askQuestions(context: string, questions: string[], onQuestionsAnswerComplete: (answers: Dialog.Answer[]) => void, onQuestionsAnswerError: (error: number, description: string) => void): void
    
}

/**
* An Audio Component effect that simulates sound attenuation based on the orientation of the transform relative to the [AudioListenerComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioListenerComponent). 
*/
interface DirectivityEffect extends ScriptObject {
    /**
    * Whether the audio directivity effect is applied or not.
    */
    enabled: boolean
    
    /**
    * The width of main lobe.
    */
    shapeDecay: number
    
    /**
    * A ratio that specifies the shape of pattern directivity from omnidirectional(0) to cardioid (1.0).
    */
    shapeFactor: number
    
}

interface DirectMultiplayerSessionOptions extends BaseMultiplayerSessionOptions {
}

/**
* An audio effect that simulates sound attenuation based on the distance between the Audio and the [AudioListenerComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioListenerComponent). 
*/
interface DistanceEffect extends ScriptObject {
    /**
    * If enabled, the distance effect will be applied.
    */
    enabled: boolean
    
    /**
    * If the distance is higher than this value, the sound cannot be heard at all.
    */
    maxDistance: number
    
    /**
    * If the distance is less than this value, the distance effect is not applied at all. 
    */
    minDistance: number
    
    /**
    * Curve type that describes how volume attenuates with distance.
    */
    type: Audio.DistanceCurveType
    
}

/**
* Used in [Text's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `dropShadowSettings` property.
* Configures how dropshadow will appear on a Text component.
*/
interface DropshadowSettings extends ScriptObject {
    /**
    * Whether dropshadow is enabled on the Text.
    */
    enabled: boolean
    
    /**
    * Settings for how the inside of the dropshadow is drawn.
    */
    fill: TextFill
    
    /**
    * An (x, y) offset controlling where the dropshadow is drawn relative to the Text.
    */
    offset: vec2
    
}

/**
* A resource that is resolved at runtime.
*/
interface DynamicResource extends ScriptObject {
}

interface EventRegistration extends ScriptObject {
}

/**
* Expression names used with `FaceRenderObjectProvider.getExpressionWeightByName()`
* and returned by `FaceRenderObjectProvider.getExpressionNames()`.
*/
interface Expressions {
}
declare namespace Expressions {
    /**
    * Left eyebrow downward movement
    */
    let BrowsDownLeft: string
    
    /**
    * Right eyebrow downward movement
    */
    let BrowsDownRight: string
    
    /**
    * Between eyebrows upward movement
    */
    let BrowsUpCenter: string
    
    /**
    * Left eyebrow upward movement
    */
    let BrowsUpLeft: string
    
    /**
    * Right eyebrow upward movement
    */
    let BrowsUpRight: string
    
    /**
    * Left cheek and below left eye upward movement
    */
    let CheekSquintLeft: string
    
    /**
    * Right cheek and below right eye upward movement
    */
    let CheekSquintRight: string
    
    /**
    * Left eyelids closing
    */
    let EyeBlinkLeft: string
    
    /**
    * Right eyelids closing
    */
    let EyeBlinkRight: string
    
    /**
    * Left eyelids downward look
    */
    let EyeDownLeft: string
    
    /**
    * Right eyelids downward look
    */
    let EyeDownRight: string
    
    /**
    * Left eyelids looking towards center
    */
    let EyeInLeft: string
    
    /**
    * Right eyelids looking towards center
    */
    let EyeInRight: string
    
    /**
    * Left eyelids opening
    */
    let EyeOpenLeft: string
    
    /**
    * Right eyelids opening
    */
    let EyeOpenRight: string
    
    /**
    * Left eyelids looking away from center
    */
    let EyeOutLeft: string
    
    /**
    * Right eyelids looking away from center
    */
    let EyeOutRight: string
    
    /**
    * Left eye squinting
    */
    let EyeSquintLeft: string
    
    /**
    * Right eye squinting
    */
    let EyeSquintRight: string
    
    /**
    * Left eyelids upward look
    */
    let EyeUpLeft: string
    
    /**
    * Right eyelids upward look
    */
    let EyeUpRight: string
    
    /**
    * Jaw forward movement
    */
    let JawForward: string
    
    /**
    * Jaw leftward movement
    */
    let JawLeft: string
    
    /**
    * Jaw opening
    */
    let JawOpen: string
    
    /**
    * Jaw rightward movement
    */
    let JawRight: string
    
    /**
    * Lips forming open circular shape together
    */
    let LipsFunnel: string
    
    /**
    * Lips compressing together while closed
    */
    let LipsPucker: string
    
    /**
    * Lower lip moving towards and behind upper lip
    */
    let LowerLipClose: string
    
    /**
    * Left lower lip downward movement
    */
    let LowerLipDownLeft: string
    
    /**
    * Right lower lip downward movement
    */
    let LowerLipDownRight: string
    
    /**
    * Lower lip upward movement
    */
    let LowerLipRaise: string
    
    /**
    * Lips moving together
    */
    let MouthClose: string
    
    /**
    * Left mouth corner back and leftward movement
    */
    let MouthDimpleLeft: string
    
    /**
    * Right mouth corner back and rightward movement
    */
    let MouthDimpleRight: string
    
    /**
    * Left mouth corner downward movement
    */
    let MouthFrownLeft: string
    
    /**
    * Right mouth corner downward movement
    */
    let MouthFrownRight: string
    
    /**
    * Both lips leftward movement
    */
    let MouthLeft: string
    
    /**
    * Both lips rightward movement
    */
    let MouthRight: string
    
    /**
    * Left mouth corner upward movement
    */
    let MouthSmileLeft: string
    
    /**
    * Right mouth corner upward movement
    */
    let MouthSmileRight: string
    
    /**
    * Left side of mouth leftward movement
    */
    let MouthStretchLeft: string
    
    /**
    * Right side of mouth rightward movement
    */
    let MouthStretchRight: string
    
    /**
    * Left side of mouth upward movement
    */
    let MouthUpLeft: string
    
    /**
    * Right side of mouth upward movement
    */
    let MouthUpRight: string
    
    /**
    * Both cheeks puffing outward movement
    */
    let Puff: string
    
    /**
    * Left nostril raising
    */
    let SneerLeft: string
    
    /**
    * Right nostril raising
    */
    let SneerRight: string
    
    /**
    * Upper lip moving towards and behind lower lip
    */
    let UpperLipClose: string
    
    /**
    * Upper lip upward movement
    */
    let UpperLipRaise: string
    
    /**
    * Left upper lip upward movement
    */
    let UpperLipUpLeft: string
    
    /**
    * Right upper lip upward movement
    */
    let UpperLipUpRight: string
    

}

/**
* Applies an eye color effect to a face.
*/
interface EyeColorVisual extends MaterialMeshVisual {
    /**
    * The index of the face this EyeColorVisual is attached to.
    */
    faceIndex: number
    
}

/**
* Texture Provider giving a cropped region of the input texture, calculated based on face position.
* Can be accessed using `Texture.control` on a FaceCropTexture asset.
* For more information, see the [Crop Textures](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/crop-textures#crop-textures) guide.
*/
interface FaceCropTextureProvider extends CropTextureProvider {
    /**
    * Ratio of the mouth position on the cropped texture. Value ranges from 0 to 1, with 0 having no effect and 1 centering the image on the mouth.
    */
    faceCenterMouthWeight: number
    
    /**
    * Index of the face being tracked.
    */
    faceIndex: number
    
    /**
    * Scaling of the cropped texture.
    */
    textureScale: vec2
    
}

/**
* Triggered when a new face is detected and starts being tracked.
*/
interface FaceFoundEvent extends FaceTrackingEvent {
}

/**
* Controls the face image picker texture resource.
* Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#texture--control) on a Face Image Picker texture.
* For more information, see the [Face Image Picker Texture guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-image-picker-texture).
*/
interface FaceImagePickerTextureProvider extends ImagePickerTextureProvider {
    /**
    * If enabled, the selected image will be cropped to only show the face region.
    */
    cropToFace: boolean
    
    /**
    * The FaceTextureProvider used to provide the face texture.
    */
    faceControl: FaceTextureProvider
    
}

/**
* Used with [FaceInsetVisual.faceRegion](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#FaceInsetVisual) for setting the face region to draw.
*/
declare enum FaceInsetRegion {
    /**
    * Targets the entire face
    */
    Face,
    /**
    * Targets the left eye
    */
    LeftEye,
    /**
    * Targets the mouth
    */
    Mouth,
    /**
    * Targets the nose
    */
    Nose,
    /**
    * Targets the right eye
    */
    RightEye
}

/**
* Draws a section of a tracked face.
*/
interface FaceInsetVisual extends MaterialMeshVisual {
    /**
    * The index of the face this FaceInsetVisual uses.
    */
    faceIndex: number
    
    /**
    * The region of the face this FaceInsetVisual draws.
    */
    faceRegion: FaceInsetRegion
    
    /**
    * Flips the drawn face region horizontally if enabled.
    */
    flipX: boolean
    
    /**
    * Flips the drawn face region vertically if enabled.
    */
    flipY: boolean
    
    /**
    * The amount of alpha fading applied from the border of the face inset inward.
    * This value must be in the range 0-1.
    */
    innerBorderRadius: number
    
    /**
    * The amount of alpha fading applied from the border of the face inset outward.
    * This value must be in the range 0-1.
    */
    outerBorderRadius: number
    
    /**
    * The x and y scaling used to draw the face region.
    * Think of scaling as meaning how many times the face region could fit into the drawing area.
    * Higher values will zoom away from the face region, and lower values will zoom into it.
    * The normal, unzoomed scaling value is (1,1).
    */
    sourceScale: vec2
    
    /**
    * Determines the quality of the face inset's borders.
    * A higher value means better looking borders but lower performance.
    * This value must be greater than 10 and less than 100.
    */
    subdivisionsCount: number
    
}

/**
* Triggered when a face can no longer be tracked.  For example, if a face gets blocked from the camera's view, or gets too far away.
*/
interface FaceLostEvent extends FaceTrackingEvent {
}

/**
* Applies a face mask effect. See the [Face Mask Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-mask) for more information.
*/
interface FaceMaskVisual extends MaterialMeshVisual {
    customMaskOnMouthClosed: Texture
    
    /**
    * The index of the face this effect is attached to.
    */
    faceIndex: number
    
    hidesMaskOnMouthClosed: boolean
    
    /**
    * If "Use Orig. Face" is enabled for this FaceMaskVisual in the Inspector panel, this property
    * specifies the face index to use for drawing the mask.
    */
    originalFaceIndex: number
    
    swapsMaskOnMouthClosed: boolean
    
    teethAlpha: number
    
    useOriginalTexCoords: boolean
    
}

/**
* Mesh provider for a Face Mesh. Accessible through the `control` property on a Face Mesh `RenderMesh`.
*/
interface FaceRenderObjectProvider extends RenderObjectProvider {
    /**
    * Returns a list of all expression names being tracked.
    */
    getExpressionNames(): string[]
    
    /**
    * Returns the weight of the expression with the passed in name. See [Expressions](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#Expressions) for valid expression names.
    */
    getExpressionWeightByName(expressionName: string): number
    
    /**
    * Returns a Float32Array of all expression weights being tracked.
    */
    getExpressionWeights(): Float32Array
    
    /**
    * When true, ears will be included in the Face Mesh geometry.
    */
    earGeometryEnabled: boolean
    
    /**
    * When true, a small area in the corners of the eyes will be included in the Face Mesh geometry.
    */
    eyeCornerGeometryEnabled: boolean
    
    /**
    * When true, eyes will be included in the Face Mesh geometry.
    */
    eyeGeometryEnabled: boolean
    
    /**
    * When true, the general face (not including eyes and mouth) will be included in the Face Mesh geometry.
    */
    faceGeometryEnabled: boolean
    
    /**
    * Index of the face this FaceRenderObjectProvider mirrors.
    */
    faceIndex: number
    
    /**
    * When true, the mouth will be included in the Face Mesh geometry.
    */
    mouthGeometryEnabled: boolean
    
    /**
    * When true, the skull will be included in the Face Mesh geometry.
    */
    skullGeometryEnabled: boolean
    
}

/**
* Applies a face stretch effect.
* Face stretch features can be added to a FaceStretchVisual through the Inspector panel in Lens Studio.
* See the [Face Stretch Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-stretch) for more information.
*/
interface FaceStretchVisual extends BaseMeshVisual {
    /**
    * Returns the weight of the face stretch feature named `feature`.
    */
    getFeatureWeight(feature: string): number
    
    /**
    * Sets the weight of the face stretch feature named `feature` to `intensity`.
    * The intensity must be greater than -0.5 and less than 2.
    */
    setFeatureWeight(feature: string, intensity: number): void
    
    /**
    * The index of the face the stretch will be applied to.
    */
    faceIndex: number
    
}

/**
* TextureProvider for face textures.
* See the [Face Texture Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-texture) for more information.
* Can be accessed using [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on a face texture asset.
*/
interface FaceTextureProvider extends TextureProvider {
    /**
    * Index of the face to track.
    */
    faceIndex: number
    
    /**
    * The source texture being drawn.
    * This is useful for controlling which effects are visible on the face texture, based on which camera output texture is being used.
    */
    inputTexture: Texture
    
    /**
    * The x and y scale used to draw the face within the texture region.
    * A lower scale will be more zoomed in on the face, and a higher scale will be more zoomed out.
    * The default scale is (1, 1).
    */
    scale: vec2
    
}

/**
* This is the base class for all face tracking events. This event won't actually get triggered itself, so use one of the child classes instead.
*/
interface FaceTrackingEvent extends SceneEvent {
    /**
    * The index of the face this event is tracking. Change this value to control which face the event tracks.
    */
    faceIndex: number
    
}

/**
* Provider for file based Audio Tracks.
*/
interface FileAudioTrackProvider extends AudioTrackProvider {
    /**
    * Writes readSize samples into the passed in audioBuffer Float32Array.
    */
    getAudioBuffer(audioBuffer: Float32Array, readSize: number): vec3
    
    /**
    * Writes current audio frame to the passed in `Float32Array` and returns the frame shape.
    */
    getAudioFrame(audioFrame: Float32Array): vec3
    
    /**
    * The duration of the AudioTrackAsset in seconds.
    
    * @readonly
    */
    duration: number
    
    /**
    * Loop count, if `-1` is provided, the audio track will loop forever.
    */
    loops: number
    
    /**
    * The current position of the AudioTrackAsset in seconds.
    */
    position: number
    
}

/**
* A file track provider of the Licensed Sounds from Asset LIbrary.
*/
interface FileLicensedSoundProvider extends AudioTrackProvider {
    /**
    * Writes readSize samples into the passed in audioBuffer Float32Array.
    */
    getAudioBuffer(audioBuffer: Float32Array, readSize: number): vec3
    
    /**
    * Writes current audio frame to the passed in Float32Array and returns the frame shape.
    */
    getAudioFrame(audioFrame: Float32Array): vec3
    
    /**
    * The duration of the AudioTrackAsset in seconds.
    
    * @readonly
    */
    duration: number
    
    /**
    * Loop count, if -1 is provided, the audio track will loop forever.
    */
    loops: number
    
}

/**
* A [TextureProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextureProvider) for textures originating from files.
*/
interface FileTextureProvider extends TextureProvider {
}

/**
* Intersection filter settings. Unifies settings for world probes and collider overlap tests.   See also: [ColliderComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), [Physics](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#Physics).
*/
interface Filter extends ScriptObject {
    /**
    * Include dynamic objects in intersection tests.
    */
    includeDynamic: boolean
    
    /**
    * Include intangible objects in intersection tests.
    */
    includeIntangible: boolean
    
    /**
    * Include static objects in intersection tests.
    */
    includeStatic: boolean
    
    /**
    * If non-empty, only perform collision with these colliders. In other words: the set of colliders to include when performing collision tests, excluding all others.  If empty, this setting is disabled (effectively including all colliders, minus skipColliders).
    */
    onlyColliders: ColliderComponent[]
    
    /**
    * If non-empty, only perform collision with colliders in these layers. In other words: the set of layers to include when performing collision tests, excluding all others.  If empty, this setting is disabled (effectively including all layers, minus skipLayers).
    */
    onlyLayers: LayerSet
    
    /**
    * Skip collision with these colliders. In other words: the set of colliders to exclude when performing collision tests. This takes precedence over onlyColliders, so a collider that is in both is skipped.
    */
    skipColliders: ColliderComponent[]
    
    /**
    * Skip collision with colliders in these layers. In other words: the set of layers to exclude when performing collision tests. This takes precedence over onlyLayers, so a layer that is in both is skipped.
    */
    skipLayers: LayerSet
    
}

declare enum FilteringMode {
    Nearest,
    Bilinear,
    Trilinear
}

interface FixedCollisionMesh extends CollisionMesh {
}

/**
* Fully constrain rotation and translation.  See also: [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
*/
interface FixedConstraint extends Constraint {
}

/**
* Arguments used with the `InteractionComponent.onFocusEnd` event.
*/
interface FocusEndEventArgs extends ScriptObject {
}

/**
* Arguments used with the `InteractionComponent.onFocusStart` event.
*/
interface FocusStartEventArgs extends ScriptObject {
}

/**
* A font asset used for rendering text.
* Used by [Text](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text).
* For more information, see the [Text guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/text/2d-text).
*/
interface Font extends Asset {
}

/**
* Mode for setting frustum culling on Pass
*/
declare enum FrustumCullMode {
    /**
    * Based on shader property, frustum culling will either be disabled or test with render object's aabb
    */
    Auto,
    /**
    * Enable frustum culling and extend render object's aabb to (1 + value)
    */
    Extend,
    /**
    * Users define the specific AABB which is used for culling test. Assumes frustumCullMin and frustumCullMax are calculated in local space of the object. frustumCullMin is the bottom-left-back and frustumCullMax is the top-right-front of the user defined AABB.
    
    */
    UserDefinedAABB
}

interface GaussianSplattingAsset extends Asset {
    getNumberOfFrames(): number
    
}

interface GaussianSplattingVisual extends MaterialMeshVisual {
    activeFrame: number
    
    asset: GaussianSplattingAsset
    
}

/**
* Class for storing and retrieving data based on keys.
* Used by [PersistentStorageSystem](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#PersistentStorageSystem).
* For more information, see the [Persistent Storage guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/persistent-storage).
*/
interface GeneralDataStore extends ScriptObject {
    /**
    * Clears all data stored in the General Data Store.
    */
    clear(): void
    
    /**
    * Returns an array with all the keys in the store.
    */
    getAllKeys(): string[]
    
    /**
    * Returns a boolean value stored under the given key, or false if none exists.
    */
    getBool(key: string): boolean
    
    /**
    * Returns a boolean array being stored under the given key, or an empty array if none exists.
    */
    getBoolArray(key: string): boolean[]
    
    /**
    * Returns a double precision floating point number stored under the given key, or 0 if none exists.
    */
    getDouble(key: string): number
    
    /**
    * Returns a floating point value stored under the given key, or 0 if none exists.
    */
    getFloat(key: string): number
    
    getFloat32Array(key: string): Float32Array
    
    getFloat64Array(key: string): any
    
    /**
    * Returns a floating point array being stored under the given key, or an empty array if none exists.
    */
    getFloatArray(key: string): number[]
    
    /**
    * Returns an integer number stored under the given key, or 0 if none exists.
    */
    getInt(key: string): number
    
    getInt16Array(key: string): any
    
    getInt32Array(key: string): any
    
    getInt8Array(key: string): any
    
    /**
    * Returns an integer array being stored under the given key, or an empty array if none exists.
    */
    getIntArray(key: string): number[]
    
    /**
    * Returns a mat2 value stored under the given key, or a default mat2 if none exists.
    */
    getMat2(key: string): mat2
    
    /**
    * Returns a mat2 array being stored under the given key, or an empty array if none exists.
    */
    getMat2Array(key: string): mat2[]
    
    /**
    * Stores a mat3 value under the given key.
    */
    getMat3(key: string): mat3
    
    /**
    * Returns a mat3 array being stored under the given key, or an empty array if none exists.
    */
    getMat3Array(key: string): mat3[]
    
    /**
    * Returns a mat4 value stored under the given key, or a default mat4 if none exists.
    */
    getMat4(key: string): mat4
    
    /**
    * Returns a mat4 array being stored under the given key, or an empty array if none exists.
    */
    getMat4Array(key: string): mat4[]
    
    /**
    * Returns the maximum total size allowed, in bytes, of all data stored in this General Data Store.
    */
    getMaxSizeInBytes(): number
    
    /**
    * Returns a quat value stored under the given key, or a default quat if none exists.
    */
    getQuat(key: string): quat
    
    /**
    * Returns a quat array being stored under the given key, or an empty array if none exists.
    */
    getQuatArray(key: string): quat[]
    
    /**
    * If `onStoreFull` has been set, this method returns the current total size, in bytes, of all data stored in this General Data Store. Otherwise, `0` is returned.
    */
    getSizeInBytes(): number
    
    /**
    * Returns a string value stored under the given key, or empty string if none exists.
    */
    getString(key: string): string
    
    /**
    * Returns a string array being stored under the given key, or an empty array if none exists.
    */
    getStringArray(key: string): string[]
    
    getUint16Array(key: string): Uint16Array
    
    getUint32Array(key: string): Uint32Array
    
    getUint8Array(key: string): Uint8Array
    
    /**
    * Returns a vec2 value stored under the given key, or a default vec2 if none exists.
    */
    getVec2(key: string): vec2
    
    /**
    * Returns a vec2 array being stored under the given key, or an empty array if none exists.
    */
    getVec2Array(key: string): vec2[]
    
    /**
    * Returns a vec3 value stored under the given key, or a default vec3 if none exists.
    */
    getVec3(key: string): vec3
    
    /**
    * Returns a vec3 array being stored under the given key, or an empty array if none exists.
    */
    getVec3Array(key: string): vec3[]
    
    /**
    * Returns a vec4 value stored under the given key, or a default vec4 if none exists.
    */
    getVec4(key: string): vec4
    
    /**
    * Returns a vec4 array being stored under the given key, or an empty array if none exists.
    */
    getVec4Array(key: string): vec4[]
    
    /**
    * Returns true if a value is being stored under the given key.
    */
    has(key: string): boolean
    
    /**
    * Stores a boolean value under the given key.
    */
    putBool(key: string, value: boolean): void
    
    /**
    * Stores a boolean array under the given key.
    */
    putBoolArray(key: string, value: boolean[]): void
    
    /**
    * Stores a double precision floating point number under the given key.
    */
    putDouble(key: string, value: number): void
    
    /**
    * Stores a floating point value under the given key.
    */
    putFloat(key: string, value: number): void
    
    putFloat32Array(key: string, value: Float32Array): void
    
    putFloat64Array(key: string, value: any): void
    
    /**
    * Stores a floating point array under the given key.
    */
    putFloatArray(key: string, value: number[]): void
    
    /**
    * Stores an integer number value under the given key.
    */
    putInt(key: string, value: number): void
    
    putInt16Array(key: string, value: any): void
    
    putInt32Array(key: string, value: any): void
    
    putInt8Array(key: string, value: any): void
    
    /**
    * Stores an integer array under the given key.
    */
    putIntArray(key: string, value: number[]): void
    
    /**
    * Stores a mat2 value under the given key.
    */
    putMat2(key: string, value: mat2): void
    
    /**
    * Stores a mat2 array under the given key.
    */
    putMat2Array(key: string, value: mat2[]): void
    
    /**
    * Stores a mat3 value under the given key.
    */
    putMat3(key: string, value: mat3): void
    
    /**
    * Stores a mat3 array under the given key.
    */
    putMat3Array(key: string, value: mat3[]): void
    
    /**
    * Stores a mat4 value under the given key.
    */
    putMat4(key: string, value: mat4): void
    
    /**
    * Stores a mat4 array under the given key.
    */
    putMat4Array(key: string, value: mat4[]): void
    
    /**
    * Stores a quat value under the given key.
    */
    putQuat(key: string, value: quat): void
    
    /**
    * Stores a quat array under the given key.
    */
    putQuatArray(key: string, value: quat[]): void
    
    /**
    * Stores a string value under the given key.
    */
    putString(key: string, value: string): void
    
    /**
    * Stores a string array under the given key.
    */
    putStringArray(key: string, value: string[]): void
    
    putUint16Array(key: string, value: Uint16Array): void
    
    putUint32Array(key: string, value: Uint32Array): void
    
    putUint8Array(key: string, value: Uint8Array): void
    
    /**
    * Stores a vec2 value under the given key.
    */
    putVec2(key: string, value: vec2): void
    
    /**
    * Stores a vec2 array under the given key.
    */
    putVec2Array(key: string, value: vec2[]): void
    
    /**
    * Stores a vec3 value under the given key.
    */
    putVec3(key: string, value: vec3): void
    
    /**
    * Stores a vec3 array under the given key.
    */
    putVec3Array(key: string, value: vec3[]): void
    
    /**
    * Stores a vec4 value under the given key.
    */
    putVec4(key: string, value: vec4): void
    
    /**
    * Stores a vec4 array under the given key.
    */
    putVec4Array(key: string, value: vec4[]): void
    
    /**
    * Removes the value being stored under the given key. If no value exists under the key, nothing will happen.
    */
    remove(key: string): void
    
    /**
    * Callback function that gets called when the allowed storage limit has been passed.
    * The store won't be saved if it is full, so if this is called make sure to remove data until back under the limit.
    */
    onStoreFull: () => void
    
}
declare namespace GeneralDataStore {
    /**
    * Creates a General Data Store.
    */
    export function create(): GeneralDataStore
    

}

/**
* Namespace for location functionality.
*/
interface GeoLocation {
}
declare namespace GeoLocation {
    /**
    * Creates a new `LocationService`.
    */
    export function createLocationService(): LocationService
    
    /**
    * Calculates heading based on north aligned device orientation.
    */
    export function getNorthAlignedHeading(northAlignedOrientation: quat): number
    

}

/**
* Enumeration of supported GPS location accuracy.
*/
declare enum GeoLocationAccuracy {
    /**
    * Used for guiding the user. Generally accurate up to 5 meters.
    */
    Navigation,
    /**
    * Best possible accuracy without navigation requirement. Generally accurate up to 5 meters.
    */
    High,
    /**
    * Generally accurate up to 10 meters. Power efficient option.
    */
    Medium,
    /**
    * Generally accurate up to 100 meters. The most power efficient option.
    */
    Low
}

/**
* The location of the device.
*/
interface GeoPosition extends ScriptObject {
    /**
    * Represents the direction towards which the device is facing. This value, specified in degrees, indicates how far off from heading true north the device is. 0 degrees represents true north, and the direction is determined clockwise.
    
    * @readonly
    */
    heading: number
    
    /**
    * The accuracy of the latitude and longitude properties, expressed in meters.
    */
    horizontalAccuracy: number
    
    /**
    * Indicates whether the device is able to provide heading information.
    
    * @readonly
    */
    isHeadingAvailable: boolean
    
    /**
    * The position's latitude in decimal degrees.
    */
    latitude: number
    
    /**
    * The position's longitude in decimal degrees.
    */
    longitude: number
    
    /**
    * The accuracy of the altitude property, expressed in meters.
    */
    verticalAccuracy: number
    
}
declare namespace GeoPosition {
    export function create(): GeoPosition
    

}

/**
* @wearableOnly
*/
interface GestureModule extends Asset {
    getPalmTapDownEvent(handType: GestureModule.HandType): any
    
    getPalmTapUpEvent(handType: GestureModule.HandType): any
    
    getPinchDownEvent(handType: GestureModule.HandType): any
    
    getPinchStrengthEvent(handType: GestureModule.HandType): any
    
    getPinchUpEvent(handType: GestureModule.HandType): any
    
    getTargetingDataEvent(handType: GestureModule.HandType): any
    
}

declare namespace GestureModule {
    /**
    * @wearableOnly
    */
    enum HandType {
        Left,
        Right
    }

}

/**
* Represents a GLTF 3D Model.
*/
interface GltfAsset extends Asset {
    /**
    * Try instantiating an object from the GLTF asset.
    */
    tryInstantiate(parent: SceneObject, material: Material): SceneObject
    
    /**
    * Try instantiating an object from the GLTF asset with supplied GltfSetting
    */
    tryInstantiateWithSetting(parent: SceneObject, material: Material, gltfSettings: GltfSettings): SceneObject
    
    /**
    * @readonly
    */
    extras: string
    
}

/**
* Settings for importing a glTF Asset.
* Use this with [GltfAsset](https://lensstudio.snapchat.com/api/classes/GltfAsset) component's `tryInstantiateWithSetting` method.
*/
interface GltfSettings extends ScriptObject {
    /**
    * Units for all linear distances in glTF are meters and in LensStudio are centimeters, enable this option if you want to automatically scale from meters into centimeters when importing the glTF file.
    */
    convertMetersToCentimeters: boolean
    
    /**
    * Whether the GLB Loader should optimize geometry. 
    */
    optimizeGeometry: boolean
    
}
declare namespace GltfSettings {
    export function create(): GltfSettings
    

}

/**
* Hair asset converted from an FBX containing splines to be used with [Hair Visual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#HairVisual).
*/
interface HairDataAsset extends Asset {
}

/**
* Component that renders hair simulation.
*/
interface HairVisual extends BaseMeshVisual {
    /**
    * Adds a collider to the simulation.
    */
    addCollider(colliderComponent: ColliderComponent): void
    
    /**
    * Removes all hair colliders from the hair simulation.
    */
    clearColliders(): void
    
    /**
    * Returns `true` if hair simulation is supported by the device.
    */
    isHardwareSupported(): boolean
    
    /**
    * Returns `true` if the hair resources are initialized.
    */
    isInitialized(): boolean
    
    /**
    * Removes a collider from the simulation by index and returns it.
    */
    removeColliderByIndex(index: number): ColliderComponent
    
    /**
    * Resets the simulation. May be called if the object with the hair simulation is toggled between enabled and disabled.
    */
    resetSimulation(): void
    
    /**
    * Density of each clump, higher number would result in "messier" looking hair.
    */
    clumpDensity: number
    
    /**
    * Offset amount of hair roots.
    */
    clumpRadius: number
    
    /**
    * Offset amount of hair tips.
    */
    clumpTipScale: number
    
    /**
    * List of all colliders assigned to the hair simulation of the current hair visual.
    */
    colliders: ColliderComponent[]
    
    /**
    * Determines if collision is enabled for hair.
    */
    collisionEnabled: boolean
    
    /**
    * Determines amount of friction for collision between hair strands.
    */
    collisionFriction: number
    
    /**
    * Determines how much position offset collision will cause.
    */
    collisionOffset: number
    
    /**
    * Determines how stiff the collision is.
    */
    collisionStiffness: number
    
    /**
    * Higher value of damp will cause hair to have less free movement.
    */
    damp: number
    
    /**
    * Amount of density created to thicken hair.
    */
    density: number
    
    /**
    * This enables fallback mode which turns off physics simulations; it is recommended to enable fallback mode on lower-end devices. It will be enabled automatically if device doesn't support hair simulation feature.
    */
    fallbackModeEnabled: boolean
    
    /**
    * Amount of friction for hair strands.
    */
    friction: number
    
    /**
    * Gravity force that gets added for hair's physics simulation.
    */
    gravity: vec3
    
    /**
    * Material used by this simulation to render hair.
    */
    hairMaterial: Material
    
    /**
    * Determines the amount of vertices on each strand. `0` means using original number of the strands. `1` is the smallest resolution for hair. Keep in mind when you change this property, the hair geometry will be regenerated.
    */
    hairResolution: number
    
    /**
    * Offset of hair density.
    */
    noise: number
    
    /**
    * This function gets called when the hair visual is initialized in the Lens.
    */
    onInitialized: (hairVisual: HairVisual) => void
    
    /**
    * If enabled, hair strands will collide with themselves.
    */
    selfCollisionEnabled: boolean
    
    /**
    * Friction of collisions between hair strands.
    */
    selfCollisionFriction: number
    
    /**
    * Radius limit of collisions between hair strands.
    */
    selfCollisionRadius: number
    
    /**
    * Determines how stiff collision between hair strands are.
    */
    selfCollisionStiffness: number
    
    /**
    * Higher value of stiffness will make hair move less.
    */
    stiffness: number
    
    /**
    * The taper size of each hair towards the tip.
    */
    strandTaper: number
    
    /**
    * The Width of each hair strand.
    */
    strandWidth: number
    
    /**
    * If checked will add wind force to hair simulation.
    */
    windEnabled: boolean
    
    /**
    * Amount of wind force added to hair simulation.
    */
    windForce: vec3
    
}

/**
* Provides additional data for the tracked hand. You can figure out whether the tracked hand is the left hand by accessing the *isLeft* property [true/false], as well as the probability of this data through the  *isLeftProbability*  property [0-1].

*/
interface HandSpecificData extends ObjectSpecificData {
}

/**
*     
*/
interface HandTracking3DAsset extends Object3DAsset {
}

/**
* Triggers haptic feedback on the device. (iOS Devices only)

*/
interface HapticFeedbackSystem extends ScriptObject {
    hapticFeedback(type: HapticFeedbackType): void
    
}

/**
* The method in which haptic feedback is provided. Use with the `HapticFeedbackSystem`.
*/
declare enum HapticFeedbackType {
    /**
    * Taptic engine based haptic feedback. Available only on some devices.
    */
    TapticEngine,
    /**
    * Vibration based haptic feedback.
    */
    Vibration
}

/**
* Binds the SceneObject to a tracked face.
* See the [Head Attached 3D Objects Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/head-attached-3d-objects) for more information.
*/
interface Head extends Component {
    /**
    * Returns the total number of faces currently being tracked.
    */
    getFacesCount(): number
    
    /**
    * Returns the screen position of the face landmark at the passed in index.
    */
    getLandmark(index: number): vec2
    
    /**
    * Returns the number of face landmarks being tracked.
    */
    getLandmarkCount(): number
    
    /**
    * Returns a list of screen positions of all tracked landmarks.
    */
    getLandmarks(): vec2[]
    
    /**
    * Changes the attachment point type used to anchor this object to a face.
    */
    setAttachmentPointType(attachmentPointType: AttachmentPointType): void
    
    /**
    * The index of the face this head is attached to.
    */
    faceIndex: number
    
}

/**
* Constraints translation and a single axis of rotation.  See also: [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
*/
interface HingeConstraint extends Constraint {
}

/**
* Used to show and hide hints to the user.
* For more information and useful helper scripts, see the [Scripting Hints Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/additional-examples/scripting-hints).

* <table cellspacing=0 cellpadding=0><thead><tr><th>Hint ID</th><th>Hint Message</th></tr></thead><tbody><tr><td>&#8220;lens_hint_blow_a_kiss&#8221;</td><td>&#8220;Blow A Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_come_closer&#8221;</td><td>&#8220;Come Closer&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_smile&#8221;</td><td>&#8220;Do Not Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_try_with_a_friend&#8221;</td><td>&#8220;Do Not Try With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_find_face&#8221;</td><td>&#8220;Find Face&#8221;</td></tr><tr><td>&#8220;lens_hint_keep_raising_your_eyebrows&#8221;</td><td>&#8220;Keep Raising Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss&#8221;</td><td>&#8220;Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss_again&#8221;</td><td>&#8220;Kiss Again&#8221;</td></tr><tr><td>&#8220;lens_hint_look_around&#8221;</td><td>&#8220;Look Around&#8221;</td></tr><tr><td>&#8220;lens_hint_look_down&#8221;</td><td>&#8220;Look Down&#8221;</td></tr><tr><td>&#8220;lens_hint_look_left&#8221;</td><td>&#8220;Look Left&#8221;</td></tr><tr><td>&#8220;lens_hint_look_right&#8221;</td><td>&#8220;Look Right&#8221;</td></tr><tr><td>&#8220;lens_hint_look_up&#8221;</td><td>&#8220;Look Up&#8221;</td></tr><tr><td>&#8220;lens_hint_make_some_noise&#8221;</td><td>&#8220;Make Some Noise!&#8221;</td></tr><tr><td>&#8220;lens_hint_nod_your_head&#8221;</td><td>&#8220;Nod Your Head&#8221;</td></tr><tr><td>&#8220;lens_hint_now_kiss&#8221;</td><td>&#8220;Now Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_now_open_your_mouth&#8221;</td><td>&#8220;Now Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_now_raise_your_eyebrows&#8221;</td><td>&#8220;Now Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_now_smile&#8221;</td><td>&#8220;Now Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth&#8221;</td><td>&#8220;Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth_again&#8221;</td><td>&#8220;Open Your Mouth Again&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_eyebrows_or_open_mouth&#8221;</td><td>&#8220;Raise Your Eyebrows / Or / Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows&#8221;</td><td>&#8220;Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows_again&#8221;</td><td>&#8220;Raise Your Eyebrows Again&#8221;</td></tr><tr><td>&#8220;lens_hint_smile&#8221;</td><td>&#8220;Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_smile_again&#8221;</td><td>&#8220;Smile Again&#8221;</td></tr><tr><td>&#8220;lens_hint_swap_camera&#8221;</td><td>&#8220;Swap Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_tap&#8221;</td><td>&#8220;Tap!&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_a_surface&#8221;</td><td>&#8220;Tap A Surface&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground&#8221;</td><td>&#8220;Tap The Ground&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground_to_place&#8221;</td><td>&#8220;Tap Ground To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_surface_to_place&#8221;</td><td>&#8220;Tap Surface To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_try_friend&#8221;</td><td>&#8220;Try It With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_try_rear_camera&#8221;</td><td>&#8220;Try It With Your Rear Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_turn_around&#8221;</td><td>&#8220;Turn Around&#8221;</td></tr><tr><td>&#8220;lens_hint_walk_through_the_door&#8221;</td><td>&#8220;Walk Through The Door&#8221;</td></tr></tbody></table>
*/
interface HintsComponent extends Component {
    /**
    * Hides the hint with id `hintID`.
    */
    hideHint(hintID: string): boolean
    
    /**
    * Shows the hint with id `hintID` for a duration of `duration` seconds. Use a duration of -1 to keep the hint onscreen forever.
    */
    showHint(hintID: string, duration: number): boolean
    
}

/**
* @wearableOnly
*/
interface HitTestSession extends ScriptObject {
    hitTest(rayStart: vec3, rayEnd: vec3, hitCallback: (hit: WorldQueryHitTestResult) => void): void
    
    reset(): void
    
    start(): void
    
    stop(): void
    
}

/**
* @wearableOnly
*/
interface HitTestSessionOptions extends ScriptObject {
    filter: boolean
    
}
declare namespace HitTestSessionOptions {
    /**
    * @wearableOnly
    */
    export function create(): HitTestSessionOptions
    

}

/**
* Used by the `horizontalAlignment` property in [MeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual).
* When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned horizontally.
*/
declare enum HorizontalAlignment {
    /**
    * The mesh will be aligned to the left side.
    */
    Left,
    /**
    * The mesh will be centered.
    */
    Center,
    /**
    * The mesh will be aligned to the right side.
    */
    Right
}

/**
* Options for wrapping text horizontally.
* Used by [Text component's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `horizontalOverflow` property.
*/
declare enum HorizontalOverflow {
    /**
    * Text will continue drawing past horizontal boundaries.
    */
    Overflow,
    /**
    * Text is clipped to the width of horizontal boundaries.
    */
    Truncate,
    /**
    * Text wraps when reaching horizontal boundaries and continues on the next line.
    */
    Wrap,
    /**
    * Text will shrink to fit within the horizontal boundaries.
    */
    Shrink
}

interface HoverEvent extends SceneObjectEvent {
    getHoverPosition(): vec2
    
}

/**
* The base class for parameter objects passed into event callbacks.
*/
interface IEventParameters extends ScriptObject {
}

/**
* A 2D visual used for drawing texture assets.
* Commonly used with [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) for drawing images on the screen.

* See the [Image guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/image) for more information.
*/
interface Image extends MaterialMeshVisual {
    /**
    * If enabled, the drawn image will be flipped horizontally.
    */
    flipX: boolean
    
    /**
    * If enabled, the drawn image will be flipped vertically.
    */
    flipY: boolean
    
    /**
    * The location of the Image's pivot point relative to its boundaries.
    * Where (-1, -1) is the bottom left corner, (0, 0) is the center, and (1, 1) is the top right corner of the Image.
    */
    pivot: vec2
    
}

/**
* Controls an image picker texture and UI.
* Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on an Image Picker texture.
* For more information, see the [Image Picker Texture](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/media-picker-texture) guide.
*/
interface ImagePickerTextureProvider extends MediaPickerTextureProvider {
    /**
    * Hides the image picker UI.
    */
    hideImagePicker(): void
    
    /**
    * Binds a callback function for when the user selects or changes an image from the picker.
    */
    setImageChangedCallback(callback: () => void): void
    
    /**
    * Shows the image picker UI.
    */
    showImagePicker(): void
    
    /**
    * If enabled, the image picker UI will be shown automatically when the Lens starts.
    */
    autoShowImagePicker: boolean
    
}

/**
* Builds InputPlaceHolders for MLComponent.
*/
interface InputBuilder extends ScriptObject {
    /**
    * Builds and returns a new InputPlaceholder.
    */
    build(): InputPlaceholder
    
    /**
    * Sets the input texture of the InputPlaceholder to be built.
    */
    setInputTexture(texture: Texture): InputBuilder
    
    /**
    * Sets the name of the InputPlaceholder to be built.
    */
    setName(name: string): InputBuilder
    
    /**
    * Sets sampler for input placeholder builder.
    */
    setSampler(sampler: Sampler): InputBuilder
    
    /**
    * Sets the shape of the InputPlaceholder to be built.
    */
    setShape(shape: vec3): InputBuilder
    
    /**
    * Sets the Transformer of the InputPlaceholder to be built.
    */
    setTransformer(transformer: Transformer): InputBuilder
    
}

/**
* Controls input data for a neural network used by an MLComponent.
* For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
*/
interface InputPlaceholder extends BasePlaceholder {
    /**
    * Data used as input.
    
    * @readonly
    */
    data: Float32Array
    
    /**
    * Texture used as input.
    */
    texture: Texture
    
}

/**
* Allows the `MeshVisual` provided to this component to handle touches on the screen (blocking Snapchat from receiving the touches), and optionally let certain touch types to pass through (let Snapchat handle the touch).

* Possible `TouchType` values:

* "TouchTypeNone"
* "TouchTypeTouch"
* "TouchTypeTap"
* "TouchTypeDoubleTap"
* "TouchTypeScale"
* "TouchTypePan"
* "TouchTypeSwipe"
*/
interface InteractionComponent extends Component {
    /**
    * Adds a MeshVisual as a target for interaction detection.
    */
    addMeshVisual(meshVisual: BaseMeshVisual): void
    
    /**
    * Adds a touch type that this component will ignore.
    */
    addTouchBlockingException(exception: string): void
    
    /**
    * Returns the minimum bounding box size used for detecting touches. Value range is from [0-1], relative to screen width.
    */
    getMinimumTouchSize(): number
    
    /**
    * Removes a MeshVisual as a target for interaction detection.
    */
    removeMeshVisual(meshVisual: BaseMeshVisual): void
    
    /**
    * Sets the camera that will be used for interaction detection.
    */
    setCamera(camera: Camera): void
    
    /**
    * Sets the minimum bounding box size used for detecting touches. Value range is from [0-1], relative to screen width.
    */
    setMinimumTouchSize(value: number): void
    
    /**
    * When enabled, interaction events will be invoked only on the"closest" object, where order is defined by distance from camera and camera render order.
    */
    isFilteredByDepth: boolean
    
    /**
    * Returns whether the user is currently gazing at the object on wearable devices, and when the user is touching on mobile devices.
    
    * @readonly
    */
    isFocused: boolean
    
    /**
    * Returns whether the user is currently selecting and gazing at an object on wearable devices, or touching it on mobile devices.
    
    * @readonly
    */
    isSelected: boolean
    
    /**
    * On mobile devices, this is triggered when the user releases their touch. On wearable devices, this is triggered when the user looks away from the current object. 
    
    * @readonly
    */
    onFocusEnd: event1<FocusEndEventArgs, void>
    
    /**
    * On mobile devices, this is triggered when the user starts touching. On wearable devices, this is triggered when the user gazes on the current object. 
    
    * @readonly
    */
    onFocusStart: event1<FocusStartEventArgs, void>
    
    /**
    * On mobile devices, this is triggered when the user releases their touch. On wearable devices, this is triggered when the user stops touching the current object. 
    
    * @readonly
    */
    onSelectEnd: event1<SelectEndEventArgs, void>
    
    /**
    * On mobile devices, this is triggered when the user starts touching the current object. On wearable devices, this is triggered when the user touches the touchpad while focusing on an object. 
    
    * @readonly
    */
    onSelectStart: event1<SelectStartEventArgs, void>
    
    /**
    * Triggered when the user taps on the screen.
    
    * @readonly
    */
    onTap: event1<TapEventArgs, void>
    
    /**
    * Triggered when a touch event ends.
    
    * @readonly
    */
    onTouchEnd: event1<TouchEndEventArgs, void>
    
    /**
    * Triggered when a touch position on the screen is moved.
    
    * @readonly
    */
    onTouchMove: event1<TouchMoveEventArgs, void>
    
    /**
    * Triggered when a touch event starts--either on the screen or on a touchpad. On wearables with touchpad, the coordinate returned are based on the touchpad and not the screen.
    
    * @readonly
    */
    onTouchStart: event1<TouchStartEventArgs, void>
    
    /**
    * Gets called when the user triggers the primary input on their device. For example touch on touch screens.
    
    * @readonly
    */
    onTriggerPrimary: event1<TriggerPrimaryEventArgs, void>
    
}

/**
* Triggered when the tracked face ends a kiss.
*/
interface KissFinishedEvent extends FaceTrackingEvent {
}

/**
* Triggered when the tracked face starts a kiss.
*/
interface KissStartedEvent extends FaceTrackingEvent {
}

/**
* This event is triggered at the end of every frame, after normal [UpdateEvents](https://lensstudio.snapchat.com/api/lens-studio/Classes/Events#UpdateEvent) trigger
* but before rendering occurs.
*/
interface LateUpdateEvent extends SceneEvent {
    /**
    * Returns the time elapsed (in seconds) between the current frame and previous frame.
    */
    getDeltaTime(): number
    
}

/**
* Used to describe a set of layers that an object belongs to or interacts with.

* See [SceneObject's](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject) `layer` property, [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `renderLayer` property, and [LightSource's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#LightSource) `renderLayer` property.
*/
interface LayerSet {
    /**
    * Returns true if all layers in the `other` LayerSet are also present in this one.
    */
    contains(other: LayerSet): boolean
    
    /**
    * Returns a new LayerSet that contains layers present in this LayerSet but not present in `other`.
    */
    except(other: LayerSet): LayerSet
    
    /**
    * Returns a new LayerSet that only contains layers present in both this LayerSet and `other`.
    */
    intersect(other: LayerSet): LayerSet
    
    /**
    * Returns true if this LayerSet contains no layers.
    */
    isEmpty(): boolean
    
    /**
    * Returns a string representation of this LayerSet.
    */
    toString(): string
    
    /**
    * Returns a new LayerSet combining this LayerSet and `other`.
    */
    union(other: LayerSet): LayerSet
    
    numbers: number[]
    
}
declare namespace LayerSet {
    /**
    * Returns a new LayerSet based on the passed in number.
    */
    export function fromNumber(layerId: number): LayerSet
    
    /**
    * Creates a new LayerSet that is guaranteed to be empty and not intersect existing layers. This bypasses the normal 32 layer limit in Studio, allowing for around 65,000 unique layers.
    */
    export function makeUnique(): LayerSet
    

}

interface Leaderboard extends ScriptObject {
    getLeaderboardInfo(options: Leaderboard.RetrievalOptions, successCallback: (othersInfo: Leaderboard.UserRecord[], currentUserInfo?: Leaderboard.UserRecord) => void, failureCallback: (status: number) => void): void
    
    submitScore(score: number, successCallback: (currentUserInfo: Leaderboard.UserRecord) => void, failureCallback: (status: number) => void): void
    
    /**
    * @readonly
    */
    name: string
    
    /**
    * @readonly
    */
    orderingType: Leaderboard.OrderingType
    
    /**
    * @readonly
    */
    ttlSeconds: number
    
}

declare namespace Leaderboard {
    interface CreateOptions extends ScriptObject {
        name: string
        
        orderingType: Leaderboard.OrderingType
        
        ttlSeconds: number
        
    }

}
declare namespace Leaderboard {
    namespace CreateOptions {
        export function create(): Leaderboard.CreateOptions
        
    
    }

}

declare namespace Leaderboard {
    enum OrderingType {
        Descending,
        Ascending
    }

}

declare namespace Leaderboard {
    interface RetrievalOptions extends ScriptObject {
        usersLimit: number
        
        usersType: Leaderboard.UsersType
        
    }

}
declare namespace Leaderboard {
    namespace RetrievalOptions {
        export function create(): Leaderboard.RetrievalOptions
        
    
    }

}

declare namespace Leaderboard {
    interface UserRecord extends ScriptObject {
        /**
        * @readonly
        */
        globalExactRank?: number
        
        /**
        * @readonly
        */
        globalRankPercentile: number
        
        /**
        * @readonly
        */
        score: number
        
        /**
        * @readonly
        */
        snapchatUser: SnapchatUser
        
    }

}

declare namespace Leaderboard {
    enum UsersType {
        Friends,
        Global
    }

}

interface LeaderboardModule extends Asset {
    /**
    * @exposesUserData
    */
    getLeaderboard(options: Leaderboard.CreateOptions, successCallback: (leaderboard: Leaderboard) => void, failureCallback: (message: string) => void): void
    
}

/**
* Collider asset generated from a mesh to be used with the [Hair Visual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#HairVisual) as part of the hair simulation.
*/
interface LevelsetColliderAsset extends BinAsset {
}

/**
* A levelset collision shape. A levelset is an asset that is generated to approximate a mesh.
*/
interface LevelsetShape extends Shape {
    /**
    * Reference to the levelset asset.
    */
    asset: LevelsetColliderAsset
    
}

/**
* Acts as a source of light in the scene.
* See the [Light and Shadows](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/graphics/light-and-shadow) guide for more information about lighting.
*/
interface LightSource extends Component {
    /**
    * If enabled, the LightSource will be automatically positioned based on its orientation relative to any shadow casting meshes in the scene.
    */
    autoLightSourcePosition: boolean
    
    /**
    * If enabled, `shadowFrustumSize` will be automatically updated based on its orientation relative to any shadow casting meshes in the scene.
    */
    autoShadowFrustumSize: boolean
    
    /**
    * If enabled, the LightSource will be able to cast shadows.
    */
    castsShadows: boolean
    
    /**
    * The color of the light.
    */
    color: vec3
    
    /**
    * A color image applied to an imaginary skybox the LightSource will use for color information.
    */
    diffuseEnvmapTexture: Texture
    
    /**
    * A value used to increase the intensity of light information derived from the `diffuseEnvmapTexture` exponentially.
    */
    envmapExposure: number
    
    /**
    * Controls the amount of rotation applied to the `diffuseEnvmapTexture`.
    */
    envmapRotation: number
    
    /**
    * The strength of the light on a scale of 0.0  1.0.
    */
    intensity: number
    
    /**
    * The set of layers this LightSource will affect.
    */
    renderLayer: LayerSet
    
    /**
    * Controls the blurring size used when casting shadows from this LightSource.
    */
    shadowBlurRadius: number
    
    /**
    * Controls the color used when casting shadows from this LightSource.
    */
    shadowColor: vec4
    
    /**
    * The lightness and darkness value of the shadow cast by objects from this light source.
    */
    shadowDensity: number
    
    /**
    * The maximum distance at which shadows will be calculated for this LightSource.
    */
    shadowFrustumFarClipPlane: number
    
    /**
    * The minimum distance at which shadows will be calculated for this LightSource.
    */
    shadowFrustumNearClipPlane: number
    
    /**
    * The simulated distance of the light source from objects to calculate the softness of the shadow.
    */
    shadowFrustumSize: number
    
    /**
    * A color image applied to an imaginary skybox the light source will use for specular and reflection information.
    */
    specularEnvmapTexture: Texture
    
    /**
    * Enable if you would like the LightSource to use information from the `diffuseEnvmapTexture` for light color information.
    */
    useEnvmap: boolean
    
}

/**
* Applies a liquify effect to anything rendered behind it.
*/
interface LiquifyVisual extends BaseMeshVisual {
    /**
    * How strong the liquify effect is.
    */
    intensity: number
    
    /**
    * The radius of the liquify effect circle.
    */
    radius: number
    
}

declare enum LoadStatus {
    Idle,
    Loading,
    Loaded
}

/**
* Asset used with the Localizations system to support custom localization strings.
*/
interface LocalizationsAsset extends Asset {
}

/**
* Helps convert data types to localized string representations. Accessible through `global.localizationSystem`.

* Note that formatted or localized strings may appear differently to users depending on their region.
* The example results given here are representative of a user in the United States, but may appear differently for users in other regions.
*/
interface LocalizationSystem extends ScriptObject {
    /**
    * Returns a localized string for the date and time of the passed in `Date` object.
    
    * Example: "Jan 1, 2019 at 12:34 AM"
    */
    getDateAndTimeFormatted(date: Date): string
    
    /**
    * Returns a localized string for the date of the passed in `Date` object.
    
    * Example: "Jan 1, 2019"
    */
    getDateFormatted(date: Date): string
    
    /**
    * Returns a short, localized string for the date of the passed in `Date` object.
    
    * Example: "1/1/19"
    */
    getDateShortFormatted(date: Date): string
    
    /**
    * Returns a localized string for the day of the week of the passed in `Date` object.
    
    * Example: "Tuesday"
    */
    getDayOfWeek(date: Date): string
    
    /**
    * Returns a localized, formatted string representation of the distance in meters passed in.
    
    * Example: "39.4 in" (from 1 passed in)
    */
    getFormattedDistanceFromMeters(meters: number): string
    
    /**
    * Returns a localized, formatted string representation of the number passed in.
    
    * Example: "1,234" (from 1234 passed in)
    */
    getFormattedNumber(number: number): string
    
    /**
    * Returns a localized, formatted string representing the number of seconds passed in.
    
    * Example: "2:06" (from 126 passed in)
    */
    getFormattedSeconds(seconds: number): string
    
    /**
    * Returns a localized, formatted string representation of the celsius temperature passed in.
    
    * Example: "32F" (from 0 passed in)
    */
    getFormattedTemperatureFromCelsius(temperature: number): string
    
    /**
    * Returns a localized, formatted string representation of the fahrenheit temperature passed in.
    
    * Example: "32F" (from 32 passed in)
    */
    getFormattedTemperatureFromFahrenheit(temperature: number): string
    
    /**
    * Returns the language code of the language being used on the device.
    
    * Example: "en" (for English)
    
    * @exposesUserData
    */
    getLanguage(): string
    
    /**
    * Returns a localized string for the month of the passed in `Date` object.
    
    * Example: "January"
    */
    getMonth(date: Date): string
    
    /**
    * Returns a localized string for the time of the passed in `Date` object.
    
    * Example: "12:34 AM"
    */
    getTimeFormatted(date: Date): string
    
    /**
    * The method takes a [localization key](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/text/localization) and returns the localized string according to device language. Useful for localizing strings before formatting them and assigning them to Text.
    
    * @exposesUserData
    */
    localize(key: string): string
    
    /**
    * Use this property to set the language. Intended for debugging.
    
    * @exposesUserData
    */
    language: string
    
}

/**
* A component which modifies the [Transform](https://lensstudio.snapchat.com/api/classes/Transform) of the object it is on to a position in the real world, based on a `LocationAsset` and a `position`.

*/
interface LocatedAtComponent extends Component {
    /**
    * @readonly
    */
    distanceToLocation: number
    
    /**
    * The LocationAsset which contains the position this object should be anchored to.
    
    */
    location: LocationAsset
    
    /**
    * @readonly
    */
    onCanTrack: event0<void>
    
    /**
    * @readonly
    */
    onCannotTrack: event0<void>
    
    /**
    * @readonly
    */
    onError: event0<void>
    
    /**
    * @readonly
    */
    onFound: event0<void>
    
    /**
    * @readonly
    */
    onLost: event0<void>
    
    /**
    * @readonly
    */
    onReady: event0<void>
    
    /**
    * The geo anchored position within a LocationAsset that this object should be anchored to.
    */
    position: vec3
    
    /**
    * @readonly
    */
    proximityStatus: LocationProximityStatus
    
}
declare namespace LocatedAtComponent {
    /**
    * Creates an option object for the `LocatedAtComponent`.
    */
    export function createMappingOptions(): MappingOptions
    
    /**
    * Creates a mapping session.
    */
    export function createMappingSession(options: MappingOptions): MappingSession
    

}

/**
* Provides a frame of reference in which to localize objects to the real world. Use with [LocatedAtComponent](https://lensstudio.snapchat.com/api/classes/LocatedAtComponent).
*/
interface LocationAsset extends Asset {
    /**
    * Returns the `LocationAsset` Tile that is  specified by the containing tile and the specified `xOffset`, `yOffset` and `zoomOffset`. When zooming in, index offset is relative to the center. When zooming out or not zooming, index offset is relative to the containing tile.
    */
    adjacentTile(xOffset: number, yOffset: number, zoomOffset: number): LocationAsset
    
    /**
    * Gets the Proxy LocationID if the LocationAsset is a proxyLocation; returns null otherwise. This is useful in instances where a callback may return a mix of different location assets, and the creator of the proxy asset has specific handling in mind for particular proxy locations.
    */
    getProxyId(): string | undefined
    
}
declare namespace LocationAsset {
    /**
    * Gets the origin position of the `LocationAsset`.
    */
    export function getAROrigin(): LocationAsset
    
    /**
    * Get an [Anchor](https://lensstudio.snapchat.com/api/classes/anchor) based on the given GPS coordinate.
    */
    export function getGeoAnchoredPosition(longitude: number, latitude: number): Anchor
    
    /**
    * Gets nearby LocationAsset tiles, where each argument represents the x,y,z position relative to the current LocationAsset.
    */
    export function getNearby(xOffset: number, yOffset: number, zoomOffset: number): LocationAsset
    
    /**
    * Get a Proxy LocationAsset with the proxyId embedded in the locationId. proxyId must not be null, must start with an alpha char, and consist only of alphanumerics or ".".
    */
    export function getProxy(proxyId: string): LocationAsset
    

}

/**
* Provides access to location cloud storage depending upon the LocationCloudStorageOptions.
*/
interface LocationCloudStorageModule extends Asset {
    /**
    * Request discovery of LocationCloudStores based on the user location.
    */
    getNearbyLocationStores(options: LocationCloudStorageOptions): void
    
    /**
    * Retrieves the specified `LocationAsset`.
    */
    retrieveLocation(persistedLocationId: string, onRetrievedLocation: (location: LocationAsset) => void, onError: (error: string) => void): void
    
    /**
    * Stores the specified `LocationAsset`.
    */
    storeLocation(location: LocationAsset, onStoredLocation: (persistedLocationId: string) => void, onError: (error: string) => void): void
    
}

/**
* Used to configure LocationCloudStorage module with various options. 
*/
interface LocationCloudStorageOptions extends ScriptObject {
    /**
    * Tag to represent a collection of objects/entities
    */
    collection: string
    
    /**
    * Provides a frame of reference in which to localize objects to the real world. Could be any location type.
    */
    location: LocationAsset
    
    /**
    * Event raised on discovery of nearby cloud stores.
    
    
    * @readonly
    */
    onDiscoveredNearby: event2<LocationAsset, LocationCloudStore, void>
    
    /**
    * Error event raised when failing to instantiate a location cloud store associated with that location asset.
    
    * @readonly
    */
    onError: event3<LocationAsset, string, string, void>
    
}
declare namespace LocationCloudStorageOptions {
    /**
    * Create options to provide to LocationCloudStorageModule  
    */
    export function create(): LocationCloudStorageOptions
    

}

/**
* Instance of location cloud store which has a similar interface as cloud store.
*/
interface LocationCloudStore extends ScriptObject {
    /**
    * Deletes a value on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
    */
    deleteValue(key: string, readOptions: CloudStorageReadOptions, onDeleted: () => void, onError: (code: string, description: string) => void): void
    
    /**
    * Gets a value on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
    */
    getValue(key: string, readOptions: CloudStorageReadOptions, onRetrieved: (key: string, value: (mat4|mat3|mat2|vec4|vec2|vec3|boolean|quat|number|string), collection: string) => void, onError: (code: string, description: string) => void): void
    
    /**
    * List values on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
    */
    listValues(listOptions: CloudStorageListOptions, onRetrieved: (values: (mat4|mat3|mat2|vec4|vec2|vec3|boolean|quat|number|string)[][], cursor: string, collection: string) => void, onError: (code: string, description: string) => void): void
    
    /**
    * Create/update a value on the location cloud store. Note: when updating a value, the scope and collection must match that of the original value.
    */
    setValue(key: string, value: (mat4|mat3|mat2|vec4|vec2|vec3|boolean|quat|number|string), writeOptions: CloudStorageWriteOptions, onSaved: () => void, onError: (code: string, description: string) => void): void
    
}

/**
* Used by [DeviceLocationTrackingComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceLocationTrackingComponent) to indicate the user's distance from the landmarker location.
* See the [Landmarker guide](https://lensstudio.snapchat.com/templates/landmarker) for more information.
*/
declare enum LocationProximityStatus {
    /**
    * User's distance cannot be determined or has not been determined yet.
    */
    Unknown,
    /**
    * User is close enough to the landmarker location to begin tracking.
    */
    WithinRange,
    /**
    * User is too far away from the landmarker location to track it.
    */
    OutOfRange
}

/**
* Provides access to a location's Mesh--such as when working with City Scale AR. Usually used in conjunction with `LocationTextureProvider`.
*/
interface LocationRenderObjectProvider extends RenderObjectProvider {
    /**
    * The Render Object's `LocationAsset` nearby tile.
    */
    location: LocationAsset
    
    /**
    * @readonly
    */
    onLocationDataDownloadFailed: event0<void>
    
    /**
    * @readonly
    */
    onLocationDataDownloaded: event0<void>
    
}
declare namespace LocationRenderObjectProvider {
    /**
    * Creates the location mesh.
    */
    export function create(): RenderMesh
    

}

/**
* The LocationService allows the user to provide their location to lens applications if they so desire. For privacy reasons, the user is asked for permission to report location information.
*/
interface LocationService extends ScriptObject {
    /**
    * Retrieves the device's current location.
    * `onSuccess`: a callback function that takes a GeoPosition object as its sole input parameter.
    * `onError`: a callback function that takes a string error message as its sole input parameter.
    
    * @exposesUserData
    */
    getCurrentPosition(onSucess: (geoPosition: GeoPosition) => void, onError: (error: string) => void): void
    
    /**
    * The accuracy of the provided position.
    */
    accuracy: GeoLocationAccuracy
    
    /**
    * Event to notify when north aligned orientation data is available to use.
    
    * @readonly
    */
    onNorthAlignedOrientationUpdate: event1<quat, void>
    
}

/**
* Provides access to a location's texture--such as when working with City Scale AR.
*/
interface LocationTextureProvider extends TextureProvider {
    /**
    * The location texture's `LocationAsset` nearby tile.
    */
    location: LocationAsset
    
}
declare namespace LocationTextureProvider {
    /**
    * Create location texture.
    */
    export function create(): Texture
    

}

/**
* Every frame, LookAtComponent rotates its SceneObject to face towards a target SceneObject.
*/
interface LookAtComponent extends Component {
    /**
    * The "aim" and "up" vectors used when determining rotation.
    * LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
    * while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
    */
    aimVectors: LookAtComponent.AimVectors
    
    /**
    * Controls the method of rotation being used.
    */
    lookAtMode: LookAtComponent.LookAtMode
    
    /**
    * Adds an additional rotation offset.
    */
    offsetRotation: quat
    
    /**
    * The SceneObject this LookAtComponent targets.
    */
    target: SceneObject
    
    /**
    * The vector to be considered the "up" vector when determining rotation.
    */
    worldUpVector: LookAtComponent.WorldUpVector
    
}

declare namespace LookAtComponent {
    /**
    * The "aim" and "up" vectors used with [LookAtComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#LookAtComponent) when determining rotation.
    * LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
    * while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
    */
    enum AimVectors {
        /**
        * X Aim, Y Up
        */
        XAimYUp,
        /**
        * X Aim, Z Up
        */
        XAimZUp,
        /**
        * Y Aim, X Up
        */
        YAimXUp,
        /**
        * Y Aim, Z Up
        */
        YAimZUp,
        /**
        * Z Aim, X Up
        */
        ZAimXUp,
        /**
        * Z Aim, Y Up
        */
        ZAimYUp,
        /**
        * X Aim, -Y Up
        */
        XAimNegativeYUp,
        /**
        * X Aim, -Z Up
        */
        XAimNegativeZUp,
        /**
        * Y Aim, -X Up
        */
        YAimNegativeXUp,
        /**
        * Y Aim, -Z Up
        */
        YAimNegativeZUp,
        /**
        * Z Aim, -X Up
        */
        ZAimNegativeXUp,
        /**
        * Z Aim, -Y Up
        */
        ZAimNegativeYUp,
        /**
        * -X Aim, Y Up
        */
        NegativeXAimYUp,
        /**
        * -X Aim, Z Up
        */
        NegativeXAimZUp,
        /**
        * -Y Aim, X Up
        */
        NegativeYAimXUp,
        /**
        * -Y Aim, Z Up
        */
        NegativeYAimZUp,
        /**
        * -Z Aim, X Up
        */
        NegativeZAimXUp,
        /**
        * -Z Aim, Y Up
        */
        NegativeZAimYUp,
        /**
        * -X Aim, -Y Up
        */
        NegativeXAimNegativeYUp,
        /**
        * -X Aim, -Z Up
        */
        NegativeXAimNegativeZUp,
        /**
        * -Y Aim, -X Up
        */
        NegativeYAimNegativeXUp,
        /**
        * -Y Aim, -Z Up
        */
        NegativeYAimNegativeZUp,
        /**
        * -Z Aim, -X Up
        */
        NegativeZAimNegativeXUp,
        /**
        * -Z Aim, -Y Up
        */
        NegativeZAimNegativeYUp
    }

}

declare namespace LookAtComponent {
    /**
    * Modes used in `LookAtComponent.lookAtMode` to determine the rotation method being used.
    */
    enum LookAtMode {
        /**
        * Rotation is based on the target object's position
        */
        LookAtPoint,
        /**
        * Rotation is based on the target object's rotation
        */
        LookAtDirection
    }

}

declare namespace LookAtComponent {
    /**
    * Used with [LookAtComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#LookAtComponent) to set the "up" vector when determining rotation.
    */
    enum WorldUpVector {
        /**
        * Scene's X vector
        */
        SceneX,
        /**
        * Scene's Y vector
        */
        SceneY,
        /**
        * Scene's Z vector
        */
        SceneZ,
        /**
        * Target object's X vector
        */
        TargetX,
        /**
        * Target object's Y vector
        */
        TargetY,
        /**
        * Target object's Z vector
        */
        TargetZ,
        /**
        * Current object's X vector
        */
        ObjectX,
        /**
        * Current object's Y vector
        */
        ObjectY,
        /**
        * Current object's Z vector
        */
        ObjectZ
    }

}

/**
* Namespace for Machine Learning related classes and methods.
* For more information, see the [Machine Learning Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-overview).
*/
interface MachineLearning {
}
declare namespace MachineLearning {
    /**
    * Creates a new DelayBuilder object.
    */
    export function createDelayBuilder(): DelayBuilder
    
    /**
    * Creates a new DeltaBuilder object.
    */
    export function createDeltaBuilder(): DeltaBuilder
    
    /**
    * Creates a new InputBuilder object.
    */
    export function createInputBuilder(): InputBuilder
    
    /**
    * Creates a new MFCCBuilder object.
    */
    export function createMFCCBuilder(): MFCCBuilder
    
    /**
    * Creates a new MelSpectrogramBuilder object.
    */
    export function createMelSpectrogramBuilder(): MelSpectrogramBuilder
    
    export function createNoiseReductionBuilder(): NoiseReductionBuilder
    
    /**
    * Creates a new OutputBuilder object.
    */
    export function createOutputBuilder(): OutputBuilder
    
    export function createPitchShifterBuilder(): PitchShifterBuilder
    
    /**
    * Creates SamplerBuilder.
    */
    export function createSamplerBuilder(): SamplerBuilder
    
    /**
    * Creates a new SpectrogramBuilder object.
    */
    export function createSpectrogramBuilder(): SpectrogramBuilder
    
    /**
    * Creates a new TransformerBuilder object.
    */
    export function createTransformerBuilder(): TransformerBuilder
    

}

declare namespace MachineLearning {
    /**
    * Timing options for when MLComponent should start or stop running. Used with `MLComponent.runScheduled()`.
    * For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
    */
    enum FrameTiming {
        /**
        * Only valid as an end timing. There is no exact time specified when MLComponent should finish its run.
        */
        None,
        /**
        * Run during MLComponent update, before script update.
        */
        Update,
        /**
        * Run in MLComponent LateUpdate, after all scripts update, but before they get LateUpdate.
        */
        LateUpdate,
        /**
        * Run at a specific point during frame rendering.
        */
        OnRender
    }

}

declare namespace MachineLearning {
    /**
    * Inference modes used by `MLComponent.inferenceMode`. Each mode describes how the neural network will be run.
    */
    enum InferenceMode {
        /**
        * MLComponent will run the neural network on CPU. Available on all devices.
        */
        CPU,
        /**
        * MLComponent will attempt to run the neural network on GPU. If the device doesn't support it, CPU mode will be used instead.
        */
        GPU,
        /**
        * MLComponent will attempt to use a dedicated hardware accelerator to run the neural network. If the device doesn't support it, GPU mode will be used instead.
        */
        Accelerator,
        /**
        * MLComponent will automatically decide how to run the neural network based on what is supported. It will start with Accelerator, then fall back to GPU, then CPU.
        */
        Auto
    }

}

declare namespace MachineLearning {
    /**
    * Describes the current state of the MLComponent model.
    * For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
    */
    enum ModelState {
        /**
        * Model is running
        */
        Running,
        /**
        * Model is loading
        */
        Loading,
        /**
        * Model is built and ready to run
        */
        Idle,
        /**
        * Model is not ready to run
        */
        NotReady
    }

}

declare namespace MachineLearning {
    /**
    * Types of output used by OutputPlaceholder.
    */
    enum OutputMode {
        /**
        * The output will be in the form of a Texture.
        */
        Texture,
        /**
        * The output will be in the form of a Float32Array.
        */
        Data
    }

}

/**
* Handles input information from user touch input via the [TouchComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TouchComponent) to control Scale, Rotation, and Translation of objects.
*/
interface ManipulateComponent extends Component {
    /**
    * Repositions the object to be within the bounds of `minDistance`, `maxDistance`.
    */
    clampWorldPosition(): void
    
    /**
    * Enables or disables the specified ManipulateType for this ManipulateComponent.
    */
    enableManipulateType(type: ManipulateType, enable: boolean): void
    
    /**
    * Checks for an intersection point between the manipulation plane and a line extending
    * from the camera through the specified screen space point. The screen point is passed in as (x, y) with both values
    * ranging from ([0-1], [0-1]), (0,0) being left-top and (1,1) being right-bottom. The result is returned as a
    * [ManipulateFrameIntersectResult](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#ManipulateFrameIntersectResult) object.
    */
    intersectManipulateFrame(screenSpacePoint: vec2): ManipulateFrameIntersectResult
    
    /**
    * Returns whether the specified ManipulateType is enabled for this ManipulateComponent.
    */
    isManipulateTypeEnabled(type: ManipulateType): boolean
    
    /**
    * Changes swivel behavior based on the object's height relative to the camera.
    */
    isContextualSwivel: boolean
    
    /**
    * Returns whether the object that the Manipulate Component is on is currently being manipulated
    
    * @readonly
    */
    isManipulating: boolean
    
    /**
    * The maximum distance the object can travel from the user.
    */
    maxDistance: number
    
    /**
    * The maximum height of the object.
    */
    maxHeight: number
    
    /**
    * The maximum size the object can scale to.
    */
    maxScale: number
    
    /**
    * The minimum distance the object can be from the user.
    */
    minDistance: number
    
    /**
    * The minimum height of the object.
    */
    minHeight: number
    
    /**
    * The minimum size the object can shrink to.
    */
    minScale: number
    
    /**
    * Event fired when manipulation ends.
    
    * @readonly
    */
    onManipulateEnd: event1<ManipulateEndEventArgs, void>
    
    /**
    * Event fired when manipulation starts.
    
    * @readonly
    */
    onManipulateStart: event1<ManipulateStartEventArgs, void>
    
    /**
    * Multiplier for swivel rotation speed.
    * For example, a value of 0.5 will cut rotation speed in half,
    * and a value of 2.0 will double rotation speed.
    */
    rotationScale: number
    
}

/**
* This event is triggered when manipulation on the object ends.
*/
interface ManipulateEndEvent extends SceneObjectEvent {
}

/**
* Arguments used with the `ManipulateComponent.onManipulateEnd` event.
*/
interface ManipulateEndEventArgs extends ScriptObject {
}

/**
* Result object returned from [ManipulateComponent.intersectManipulateFrame()](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ManipulateComponent).
*/
interface ManipulateFrameIntersectResult {
    /**
    * If there was a valid intersection, returns the intersection point in world space.
    */
    getIntersectionPoint(): vec3
    
    /**
    * Returns whether there was a valid intersection.
    */
    isValid(): boolean
    
}

/**
* This event is triggered when manipulation on the object begins.
*/
interface ManipulateStartEvent extends SceneObjectEvent {
}

/**
* Arguments used with the `ManipulateComponent.onManipulateStart` event.
*/
interface ManipulateStartEventArgs extends ScriptObject {
}

/**
* Enum values specifying each type of manipulation. See [ManipulateComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ManipulateComponent).
*/
declare enum ManipulateType {
    /**
    * The object can be scaled by pinching with two fingers.
    */
    Scale,
    /**
    * The object can be rotated by swiveling with two fingers.
    */
    Swivel,
    /**
    * The object can be moved by touching and dragging.
    */
    Drag
}

/**
* Module for providing Map utils. 
*/
interface MapModule extends Asset {
    /**
    * Creates a new texture which holds a `MapTextureProvider`.
    */
    createMapTextureProvider(): Texture
    
    /**
    * Returns the position of the marker (relative to the associated map tile) based on the specified `longitude`, `latitude` and `location`. The top left corner of the provided `location` has a value of `[0,0]` and the right down corner has a value of `[1.1]`.
    */
    longLatToImageRatio(longitude: number, latitude: number, location: LocationAsset): vec2
    
}

interface MappingOptions extends ScriptObject {
    location: LocationAsset
    
    locationCloudStorageModule: LocationCloudStorageModule
    
    policy: string
    
}

interface MappingSession extends ScriptObject {
    cancel(): void
    
    checkpoint(): void
    
    /**
    * @readonly
    */
    canCheckpoint: boolean
    
    /**
    * @readonly
    */
    capacityUsed: number
    
    handheldMaximumSize: number
    
    handheldMinimumSize: number
    
    /**
    * @readonly
    */
    onMapped: event1<LocationAsset, void>
    
    /**
    * @readonly
    */
    quality: number
    
    throttling: MappingSession.MappingThrottling
    
    wearableMaximumSize: number
    
    wearableMinimumSize: number
    
}

declare namespace MappingSession {
    enum MappingThrottling {
        Auto,
        Foreground,
        Background,
        Off
    }

}

interface MapTextureProvider extends TextureProvider {
    /**
    * The location asset associated with the `MapTextureProvider`.
    */
    location: LocationAsset
    
    /**
    * A function that gets called when location data fails to download.
    
    * @readonly
    */
    onFailed: event0<void>
    
    /**
    * A function that gets called when location data is downloaded.
    
    * @readonly
    */
    onReady: event0<void>
    
}

/**
* Defines a marker to use for Marker Tracking with [MarkerTrackingComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MarkerTrackingComponent).
* For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
*/
interface MarkerAsset extends Asset {
    /**
    * Returns the aspect ratio (width / height) of the texture used by the marker asset.
    */
    getAspectRatio(): number
    
    /**
    * The height of the marker asset in real-life centimeters. Used to provide accurate transformation.
    * A [MarkerTrackingComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MarkerTrackingComponent) using this MarkerAsset will be scaled so that
    * one unit in the SceneObject's local space is equal to one centimeter in real life.
    */
    height: number
    
}

/**
* Base class for marker providers.
* For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
*/
interface MarkerProvider extends Provider {
}

/**
* Used to track images in the camera. Moves the containing object's transform to match the detected image.
* For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
*/
interface MarkerTrackingComponent extends Component {
    /**
    * Returns whether the marker image is currently being tracked in camera.
    */
    isTracking(): boolean
    
    /**
    * If true, child objects of this Component's [SceneObject](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject) will be disabled when the marker image is not being tracked.
    */
    autoEnableWhenTracking: boolean
    
    /**
    * The marker asset describing the tracking target.
    */
    marker: MarkerAsset
    
    /**
    * A function that gets called when marker tracking begins.
    */
    onMarkerFound: () => void
    
    /**
    * A function that gets called when marker tracking is lost.
    */
    onMarkerLost: () => void
    
}

/**
* Clips visuals and Interaction Component events within a tree hierarchy. Any Visual or Interaction Components will be clipped user defined 2D bounds. These 2D bounds are defined by a Screen Transform. Useful for clipping some screen transforms--for example a scroll view. 
*/
interface MaskingComponent extends BaseMeshVisual {
    /**
    * The radius of the mask's corner.
    */
    cornerRadius: number
    
}

/**
* A 2x2 matrix.
*/
declare class mat2 {
    /**
    * Creates a new mat2, defaulting to identity values.
    */
    constructor()
    
    /**
    * Returns the result of adding the two matrices together.
    */
    add(mat: mat2): mat2
    
    /**
    * Returns the determinant of the matrix.
    */
    determinant(): number
    
    /**
    * Returns the result of dividing the two matrices.
    */
    div(mat: mat2): mat2
    
    /**
    * Returns whether the two matrices are equal.
    */
    equal(mat: mat2): boolean
    
    /**
    * Returns the inverse of the matrix.
    */
    inverse(): mat2
    
    /**
    * Returns the result of multiplying the two matrices.
    */
    mult(mat: mat2): mat2
    
    /**
    * Returns the result of scalar multiplying the matrix.
    */
    multiplyScalar(scalar: number): mat2
    
    /**
    * Returns the result of subtracting the two matrices.
    */
    sub(mat: mat2): mat2
    
    /**
    * Returns a string representation of the matrix.
    */
    toString(): string
    
    /**
    * Returns the transpose of this matrix.
    */
    transpose(): mat2
    
    /**
    * The first column of the matrix.
    */
    column0: vec2
    
    /**
    * The second column of the matrix.
    */
    column1: vec2
    
    /**
    * Returns a string representation of the matrix.
    */
    description: string
    
}
declare namespace mat2 {
    /**
    * Returns the identity matrix.
    */
    export function identity(): mat2
    
    /**
    * Returns a matrix with all zero values.
    */
    export function zero(): mat2
    

}

/**
* A 3x3 matrix.
*/
declare class mat3 {
    /**
    * Creates a new mat3, defaulting to identity values.
    */
    constructor()
    
    /**
    * Returns the result of adding the two matrices together.
    */
    add(mat: mat3): mat3
    
    /**
    * Returns the determinant of the matrix.
    */
    determinant(): number
    
    /**
    * Returns the result of dividing the two matrices.
    */
    div(mat: mat3): mat3
    
    /**
    * Returns whether the two matrices are equal.
    */
    equal(mat: mat3): boolean
    
    /**
    * Returns the inverse of the matrix.
    */
    inverse(): mat3
    
    /**
    * Returns the result of multiplying the two matrices.
    */
    mult(mat: mat3): mat3
    
    /**
    * Returns the result of scalar multiplying the matrix.
    */
    multiplyScalar(scalar: number): mat3
    
    /**
    * Returns the result of subtracting the two matrices.
    */
    sub(mat: mat3): mat3
    
    /**
    * Returns a string representation of the matrix.
    */
    toString(): string
    
    /**
    * Returns the transpose of this matrix.
    */
    transpose(): mat3
    
    /**
    * The first column of the matrix.
    */
    column0: vec3
    
    /**
    * The second column of the matrix.
    */
    column1: vec3
    
    /**
    * The third column of the matrix.
    */
    column2: vec3
    
    /**
    * Returns a string representation of the matrix.
    */
    description: string
    
}
declare namespace mat3 {
    /**
    * Returns the identity matrix.
    */
    export function identity(): mat3
    
    /**
    * Returns a matrix representing the specified rotation.
    */
    export function makeFromRotation(arg1: quat): mat3
    
    /**
    * Returns a matrix with all zero values.
    */
    export function zero(): mat3
    

}

/**
* A 4x4 matrix.
*/
declare class mat4 {
    /**
    * Creates a new mat4, defaulting to identity values.
    */
    constructor()
    
    /**
    * Returns the result of adding the two matrices together.
    */
    add(mat: mat4): mat4
    
    /**
    * Returns the determinant of the matrix.
    */
    determinant(): number
    
    /**
    * Returns the result of dividing the two matrices.
    */
    div(mat: mat4): mat4
    
    /**
    * Returns whether the two matrices are equal.
    */
    equal(mat: mat4): boolean
    
    /**
    * Returns an euler angle representation of this matrix's rotation, in radians.
    */
    extractEulerAngles(): vec3
    
    /**
    * Returns the inverse of the matrix.
    */
    inverse(): mat4
    
    /**
    * Returns the result of multiplying the two matrices.
    */
    mult(mat: mat4): mat4
    
    /**
    * Returns the direction vector multiplied by this matrix.
    */
    multiplyDirection(direction: vec3): vec3
    
    /**
    * Returns the point `point` multiplied by this matrix.
    */
    multiplyPoint(point: vec3): vec3
    
    /**
    * Returns the result of scalar multiplying the matrix.
    */
    multiplyScalar(scalar: number): mat4
    
    /**
    * Returns the vector multiplied by this matrix.
    */
    multiplyVector(vector: vec4): vec4
    
    /**
    * Returns the result of subtracting the two matrices.
    */
    sub(mat: mat4): mat4
    
    /**
    * Returns a string representation of the matrix.
    */
    toString(): string
    
    /**
    * Returns the transpose of this matrix.
    */
    transpose(): mat4
    
    /**
    * The first column of the matrix.
    */
    column0: vec4
    
    /**
    * The second column of the matrix.
    */
    column1: vec4
    
    /**
    * The third column of the matrix.
    */
    column2: vec4
    
    /**
    * The fourth column of the matrix.
    */
    column3: vec4
    
    /**
    * Returns a string representation of the matrix.
    */
    description: string
    
}
declare namespace mat4 {
    /**
    * Returns the two matrices multiplied component-wise.
    */
    export function compMult(arg1: mat4, arg2: mat4): mat4
    
    /**
    * Returns a new matrix with translation `translation`, rotation `rotation`, and scale `scale`.
    */
    export function compose(translation: vec3, rotation: quat, scale: vec3): mat4
    
    /**
    * Returns a new matrix with the specified euler angles (in radians).
    */
    export function fromEulerAngles(euler: vec3): mat4
    
    /**
    * Returns a new matrix with x euler angle `xAngle` (in radians).
    */
    export function fromEulerX(xAngle: number): mat4
    
    /**
    * Returns a new matrix with y euler angle `yAngle` (in radians).
    */
    export function fromEulerY(yAngle: number): mat4
    
    /**
    * Returns a new matrix with z euler angle `zAngle` (in radians).
    */
    export function fromEulerZ(zAngle: number): mat4
    
    /**
    * Returns a new matrix with rotation `rotation`.
    */
    export function fromRotation(rotation: quat): mat4
    
    /**
    * Returns a new matrix with scale `scale`.
    */
    export function fromScale(scale: vec3): mat4
    
    /**
    * Returns a new matrix with the translation `translation`.
    */
    export function fromTranslation(translation: vec3): mat4
    
    /**
    * Returns the identity matrix.
    */
    export function identity(): mat4
    
    /**
    * Returns a new matrix generated using the provided arguments.
    */
    export function lookAt(eye: vec3, center: vec3, up: vec3): mat4
    
    /**
    * Returns a new matrix using the provided vectors.
    */
    export function makeBasis(x: vec3, y: vec3, z: vec3): mat4
    
    /**
    * Returns a new matrix generated using the provided arguments.
    */
    export function orthographic(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): mat4
    
    /**
    * Returns the outer product of the two matrices.
    */
    export function outerProduct(arg1: vec4, arg2: vec4): mat4
    
    /**
    * Returns a new matrix generated using the provided arguments.
    */
    export function perspective(fovY: number, aspect: number, zNear: number, zFar: number): mat4
    
    /**
    * Returns a matrix with all zero values.
    */
    export function zero(): mat4
    

}

/**
* An asset that describes how visual objects should appear.
* Each Material is a collection of [Passes](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass) which define the actual rendering passes.
* Materials are used by [MeshVisuals](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual) for drawing meshes in the scene.
*/
interface Material extends Asset {
    /**
    * Returns a copy of the Material.
    */
    clone(): Material
    
    /**
    * Returns the [Pass](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass) of the Material at index `index`.
    */
    getPass(index: number): Pass
    
    /**
    * Returns the number of [Passes](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass) for the Material.
    */
    getPassCount(): number
    
    /**
    * The first Pass of the Material.
    */
    mainPass: Pass
    
}

/**
* Base class for all MeshVisual components using [Materials](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#Material) to render.
* Comparable to the former class "MeshVisual", which was split into the classes:
* [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual),
* [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#MaterialMeshVisual),
* and [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
*/
interface MaterialMeshVisual extends BaseMeshVisual {
    /**
    * Adds a Material to use for rendering.
    */
    addMaterial(material: Material): void
    
    /**
    * Clears all Materials.
    */
    clearMaterials(): void
    
    /**
    * Returns the Material at index `index`.
    */
    getMaterial(index: number): Material
    
    /**
    * Returns the number of Materials used for rendering.
    */
    getMaterialsCount(): number
    
    /**
    * Returns the first Material.
    */
    mainMaterial: Material
    
    /**
    * Returns the `mainPass` of the `mainMaterial`.
    */
    mainPass: Pass
    
    /**
    * Get the array of materials used by the MaterialMeshVisual.
    */
    materials: Material[]
    
}

/**
* Provides useful math utility functions.
*/
interface MathUtils {
}
declare namespace MathUtils {
    /**
    * Clamp floating-point value `v` in the range `[lo, hi]` (inclusive).
    */
    export function clamp(v: number, lo: number, hi: number): number
    
    /**
    * Linearly interpolate from floating-point `a` to `b`, based on fraction `t` (where t=0.0 returns a, and t=1.0 returns b). This is equivalent to the vec2 and vec3 lerp() functions, but operates on scalar floating-point values.
    */
    export function lerp(a: number, b: number, time: number): number
    
    /**
    * Generate a random floating-point value in the range `[lo, hi)`. Note, the range is inclusive at the lower end, and exclusive at the upper.
    */
    export function randomRange(lo: number, hi: number): number
    
    /**
    * Map floating-point `v` from range [inMin, inMax] to [outMin, outMax].
    */
    export function remap(v: number, inMin: number, inMax: number, outMin: number, outMax: number): number
    
    /**
    * Constant mapping degrees to radians. This equals pi/180.
    */
    let DegToRad: number
    
    /**
    * Constant mapping radians to degrees. This equals 180/pi.
    */
    let RadToDeg: number
    

}

/**
* Settings for the physical substance, such as friction and bounciness, of a collider. If unset, uses the default matter from the world settings.
*/
interface Matter extends Asset {
    /**
    * Bounciness, or restitution, for dynamic bodies. This is the proportion of energy preserved after a collision, in the range 0 to 1. 
    * This defaults to 0.0. Dynamic bounciness should usually be less than 1.0, to prevent energy from accumulating excessively (there is a certain amount of energy gained due to collision response). 
    * The effective bounciness for a collision is the product of both colliding objects. So if your bounciness setting appears to have no effect, it probably means the object it's colliding with has 0 bounciness.
    */
    dynamicBounciness: number
    
    /**
    * Coefficient of friction. 
    * The effective friction between two objects is the product of both objects' friction. So for example, the default between two objects is 0.5*0.5=0.25. 
    * Typical ranges are between 0 and 1, but larger values (up to 10) are allowed. This may be used to increase the effective friction when colliding against another object with low friction. 
    * This is a very simplified approximation of realistic friction, since it does not correctly take into account the combined surface characteristics of both objects. It also doesn't distinguish between static and dynamic friction.
    */
    friction: number
    
    /**
    * Friction applied to rolling objects. This isn't physically realistic, but helps prevent objects from rolling indefinitely.
    */
    rollingFriction: number
    
    /**
    * Friction applied to spinning objects. This isn't physically realistic, but helps prevent objects from spinning indefinitely.
    */
    spinningFriction: number
    
    /**
    * Bounciness (AKA restitution), for static colliders. This is the proportion of energy preserved after a collision, in the range 0 to 1. 
    * This defaults to 1.0. Typically we use high bounciness for static colliders because they are unaffected by collision, and thus maximally preserve energy. 
    * The effective bounciness for a collision is the product of both colliding objects. So if your bounciness setting appears to have no effect, it probably means the object it's colliding with has 0 bounciness.
    */
    staticBounciness: number
    
}

/**
* Base class for Texture Providers based on selectable media.
*/
interface MediaPickerTextureProvider extends TextureProvider {
    /**
    * Requests SDK to hide media picking UI.
    */
    hideMediaPicker(): void
    
    /**
    * Requests face mesh and sets a callback to fire when it's ready.
    */
    setFaceMeshReadyCallback(callback: () => void): void
    
    /**
    * Sets a callback to fire when a file is picked through media picking UI.
    */
    setFilePickedCallback(callback: () => void): void
    
    /**
    * Requests SDK to show media picking UI.
    */
    showMediaPicker(): void
    
    /**
    * If set to true, MediaPickerTextureProvider will request media picker UI automatically during loading.
    */
    autoShowMediaPicker: boolean
    
    /**
    * If set to true, MediaPickerTextureProvider will provide a proper texture transform for image with face(s), that will "zoom" UVs to the first found face on the image.
    */
    cropFace: boolean
    
    /**
    * Returns underlying TextureProvider for the last selected media file. If the last media file was not image with at least one face, null is returned.
    */
    faceImageControl: FaceTextureProvider
    
    /**
    * Returns underlying TextureProvider for the last selected media file. If the last media file was not image, null is returned.
    
    * @readonly
    */
    imageControl: TextureProvider
    
    /**
    * Returns true if an image is selected, or a video file has been loaded and is ready for decoding, false otherwise.
    
    * @readonly
    */
    isContentReady: boolean
    
    /**
    * MediaPickerTextureProvider will allow users to select only images with detected faces through media picker UI. See also "cropFace" option.
    */
    isFaceImagePickingEnabled: boolean
    
    /**
    * MediaPickerTextureProvider will allow users to select all images files through media picker UI.
    */
    isImagePickingEnabled: boolean
    
    /**
    * MediaPickerTextureProvider will allow users to select video files through media picker UI.
    */
    isVideoPickingEnabled: boolean
    
    /**
    * Returns underlying VideoTextureProvider for the last selected media file. If the last media file was not video, null is returned. 
    
    * @readonly
    */
    videoControl: VideoTextureProvider
    
}

/**
* Computes a mel scale spectrogram - a spectrogram where the frequencies are converted to the mel scale.
*/
interface MelSpectrogram extends ScriptObject {
    /**
    * Process in tensor with shape, write result to the outTensor and return the shape of outTensor.
    */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3
    
}

/**
* A builder class for MelSpectrogram.
*/
interface MelSpectrogramBuilder extends ScriptObject {
    /**
    * Create new MelSpectrogram object.
    */
    build(): MelSpectrogram
    
    /**
    * Set length of the fft window.
    */
    setFFTSize(fftSize: number): MelSpectrogramBuilder
    
    /**
    * Length of the window, which is the length of frameSize and then padded with zeros to match fftSize.
    */
    setFrameSize(frameSize: number): MelSpectrogramBuilder
    
    /**
    * Set number of samples between successive fft segments.
    */
    setHopSize(hopSize: number): MelSpectrogramBuilder
    
    /**
    * Set max frequency.
    */
    setMaxFreq(maxFreq: number): MelSpectrogramBuilder
    
    /**
    * Set min frequency.
    */
    setMinFreq(minFreq: number): MelSpectrogramBuilder
    
    /**
    * Set number of mel bins.
    */
    setNumMel(numMel: number): MelSpectrogramBuilder
    
    /**
    * Set number of samples per second.
    */
    setSampleRate(sampleRate: number): MelSpectrogramBuilder
    
}

/**
* A class for generating meshes at runtime.
*/
declare class MeshBuilder {
    /**
    * Creates a new MeshBuilder with the specified vertex layout.
    
    * Layout is given as a list of "attribute" objects with the following properties:
    
    * __name__ - Attribute name
    * __components__ - Size of the attribute (how many float values it uses)
    * __normalized__ (optional) - Optional property declaring that the attribute should be normalized
    
    * ```js
    * var builder = new MeshBuilder([
    *     // vertex position (x,y,z)
    *     { name: "position", components: 3 },
    *     // normal vector (x,y,z)
    *     { name: "normal", components: 3, normalized: true },
    *     // texture UV (u,v)
    *     { name: "texture0", components: 2 },
    * ]);
    * ```
    */
    constructor(layout: any[])
    
    /**
    * Appends indices to the index list.
    */
    appendIndices(indices: number[]): void
    
    /**
    * Takes a list of list of vertex values according to the layout.
    */
    appendVertices(verts: number[][]): void
    
    /**
    * Similar to `appendVertices`, but takes all values in one large array.
    */
    appendVerticesInterleaved(verts: number[]): void
    
    /**
    * Removes all indices starting at index `from` and ending before index `to`.
    */
    eraseIndices(from: number, to: number): void
    
    /**
    * Removes all vertex data starting at vertex index `from` and ending before vertex index `to`.
    */
    eraseVertices(from: number, to: number): void
    
    /**
    * Returns the number of indices in the index list.
    */
    getIndicesCount(): number
    
    /**
    * Returns a RenderMesh asset that can be applied to a MeshVisual's `mesh` property. This asset stays linked to the MeshBuilder that provided it, so making changes to the mesh data and calling `updateMesh()` will update the RenderMesh as well.
    */
    getMesh(): RenderMesh
    
    /**
    * Returns the number of vertices in the vertex list.
    */
    getVerticesCount(): number
    
    /**
    * Checks whether the current data entered will create a valid mesh.
    */
    isValid(): boolean
    
    /**
    * Sets data for a single vertex at vertex index `index`.
    */
    setVertexInterleaved(index: number, verts: number[]): void
    
    /**
    * Rebuilds the MeshAsset controlled by this MeshBuilder using the current mesh data.
    */
    updateMesh(): void
    
    /**
    * The index data type used by this MeshBuilder. `MeshIndexType.UInt16` is the value normally used for this.
    */
    indexType: MeshIndexType
    
    /**
    * The topology type used for the mesh.
    */
    topology: MeshTopology
    
}

/**
* Formats of mesh classification used by WorldRenderObjectProvider.
*/
declare enum MeshClassificationFormat {
    /**
    * Do not bake classifications to mesh
    */
    None,
    /**
    * Classifications are baked per vertex - vertices with multiple classes will use the value from the last face
    */
    PerVertexFast
}

/**
* Possible index data types used by [MeshBuilder](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#MeshBuilder). `MeshIndexType.UInt16` is the value normally used.
*/
declare enum MeshIndexType {
    /**
    * No index data type
    */
    None,
    /**
    * Unsigned integer, this is the value normally used
    */
    UInt16
}

interface MeshRenderObjectProvider extends RenderObjectProvider {
}

declare enum MeshShadowMode {
    None,
    Caster,
    Receiver
}

/**
* Allows meshes to be used as collision shapes, for ColliderComponent and BodyComponent.
*/
interface MeshShape extends Shape {
    /**
    * Bake mesh as a convex hull, generated from mesh colliders. This allows for irregular shapes to be used as dynamic bodies.
    
    **Limitations:**
    
    * They are non-deforming. A hull may be generated from a deforming render mesh, but it will not deform with it. Because of this, intrinsically deforming mesh types will not work as convex hulls. For instance world and face meshes. In these cases the convex hull will exist, but be empty and wont simulate.
    
    * It produces an approximation of the source mesh, reducing triangle count and eliminating concave areas.
    * Concave shapes may be composed of convex hulls in the scene graph. Splitting a concave mesh into convex hulls is known as "convex decomposition". It is an expensive process not supported by Studio, but there are many standalone tools available for this purpose (including plugins for 3D modeling apps). The resulting split mesh can be imported into Studio as a prefab.
    
    * Original triangle data is lost, so it is not available to script in ray casts.
    */
    convex: boolean
    
    /**
    * Sets geometry from a render mesh. The render mesh is automatically converted to a collision mesh.
    */
    mesh: RenderMesh
    
    /**
    * Specifies skinning component used to animate skinned meshes.
    */
    skin: Skin
    
}

/**
* Mesh topology types used by [MeshBuilder](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#MeshBuilder).
*/
declare enum MeshTopology {
    /**
    * Draws unconnected line segments. Each group of two vertices specifies a new line segment.
    */
    Lines,
    /**
    * Draws connected line segments. Starting with the second vertex, a line is drawn between each vertex and the preceding one.
    */
    LineStrip,
    /**
    * Draws individual points. Each vertex specifies a new point to draw.
    */
    Points,
    /**
    * Draws unconnected triangles. Each group of three vertices specifies a new triangle.
    */
    Triangles,
    /**
    * Draws connected triangles sharing one central vertex. The first vertex is the shared one, or "hub" vertex. Starting with the third vertex, each vertex forms a triangle connecting with the previous vertex and hub vertex.
    */
    TriangleFan,
    /**
    * Draws connected triangles in a strip. After the first two vertices, each vertex defines the third point on a new triangle extending from the previous one.
    */
    TriangleStrip
}

/**
* This class has been DEPRECATED starting in Lens Studio 2.3.
* The `Component.MeshVisual` typename is now an alias for [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual).
* When upgrading a project to Lens Studio 2.3 or higher, any instances of the MeshVisual component will be upgraded to [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).

* This class was split into the following three classes, to better distinguish the behaviors of child classes.

* [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual): Base class for all visual classes using meshes to render

* [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#MaterialMeshVisual): Child class of BaseMeshVisual, gives access to the [Materials](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#Material) used to render

* [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual): Child class of MaterialMeshVisual, gives access to the [RenderMesh](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#RenderMesh) used to render
*/
interface MeshVisual extends Component {
}

/**
* Mel-frequency cepstral coefficients.
*/
interface MFCC extends ScriptObject {
    /**
    * Process in tensor with `shape`, write result to the `outTensor`, and returns the shape of `outTensor`.
    */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3
    
    /**
    * Max tensor size.
    
    * @readonly
    */
    maxTensorSize: number
    
}

/**
* Builder class for the MFCC (Mel Frequency Cepstral Co-efficients).
*/
interface MFCCBuilder extends ScriptObject {
    /**
    * Create a new MFCC object.
    */
    build(): MFCC
    
    /**
    * Sets the length of the FFT window.
    */
    setFFTSize(fftSize: number): MFCCBuilder
    
    /**
    * Length of the window, the window will be the length of frameSize and then padded with zeros to mach FFTSize.
    */
    setFrameSize(frameSize: number): MFCCBuilder
    
    /**
    * Sets the number of samples between successive FFT segments.
    */
    setHopSize(hopSize: number): MFCCBuilder
    
    /**
    * If lifter > 0, apply liftering to the MFCCs.
    */
    setLifter(lifter: number): MFCCBuilder
    
    /**
    * Sets the max frequency.
    */
    setMaxFreq(maxFreq: number): MFCCBuilder
    
    /**
    * Sets the min frequency.
    */
    setMinFreq(minFreq: number): MFCCBuilder
    
    /**
    * Sets the number of MFCCs to return.
    */
    setNumMFCC(numMFCC: number): MFCCBuilder
    
    /**
    * Sets number of mel bins.
    */
    setNumMel(numMel: number): MFCCBuilder
    
    /**
    * Sets the number of samples per second.
    */
    setSampleRate(sampleRate: number): MFCCBuilder
    
}

/**
* The Audio Track Provider of the audio from microphone.
*/
interface MicrophoneAudioProvider extends AudioTrackProvider {
    /**
    * Writes current frame audio data to the passed in `Float32Array` and returns its shape. The length of the array can't be more than `maxFrameSize`.
    
    * @exposesUserData
    */
    getAudioFrame(audioFrame: Float32Array): vec3
    
    /**
    * Start processing audio from microphone. Useful to avoid redundant processing.
    */
    start(): void
    
    /**
    * Stop processing audio from microphone.
    */
    stop(): void
    
}

/**
* Binary ML model supplied by the user.
*/
interface MLAsset extends BinAsset {
    /**
    * Returns model metadata as JSON object. 
    
    */
    getMetadata(): object
    
}

/**
* Transforms inputs (Textures or Float32Array) into outputs (Textures or Float32Array) using a neural network.
* The neural network is represented by an MLAsset, which is set as the `model` property.
* For more information, see the [MLComponent Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/ml-component-overview).
*/
interface MLComponent extends Component {
    /**
    * Builds the MLComponent model when all placeholders are determined. Config is an array of Input and Output placeholders.
    */
    build(placeholders: BasePlaceholder[]): void
    
    /**
    * Stops running the MLComponent. The `onRunningFinished` callback will not be executed.
    */
    cancel(): void
    
    /**
    * Returns the InputPlaceholder with the matching name.
    */
    getInput(name: string): InputPlaceholder
    
    /**
    * Returns an array of InputPlaceholders of the MLComponent's model with default settings. Returns empty array if the model asset is not set.
    
    */
    getInputs(): InputPlaceholder[]
    
    /**
    * Returns the OutputPlaceholder with the matching name.
    */
    getOutput(name: string): OutputPlaceholder
    
    /**
    * Returns an array of OutputPlaceholders of MLComponent's model with default settings. Returns empty array if the model is not set.
    
    */
    getOutputs(): OutputPlaceholder[]
    
    /**
    * Returns the end time of the scheduled MLComponent run.
    */
    getScheduledEnd(): MachineLearning.FrameTiming
    
    /**
    * Returns the start time of the scheduled MLComponent run.
    */
    getScheduledStart(): MachineLearning.FrameTiming
    
    /**
    * Returns true if running is requested on each frame.
    */
    isRecurring(): boolean
    
    /**
    * Runs the MLComponent once.
    */
    runImmediate(sync: boolean): void
    
    /**
    * Schedules the MLComponent to run at the start timing and terminate at the end timing. The scheduled running will recur if `recurring` is true.
    */
    runScheduled(recurring: boolean, startTiming: MachineLearning.FrameTiming, endTiming: MachineLearning.FrameTiming): void
    
    /**
    * Stops running the MLComponent.
    */
    stop(): void
    
    /**
    * If loading asynchronously, makes the entire system wait until loading is finished.
    */
    waitOnLoading(): void
    
    /**
    * If running asynchronously, makes the entire system wait until the last run is finished.
    */
    waitOnRunning(): void
    
    /**
    * Runs the MLComponent automatically when the object or component it's on is enabled.
    */
    autoRun: boolean
    
    /**
    * Controls the inference mode that MLComponent will run in. For example, GPU, CPU, etc.
    */
    inferenceMode: MachineLearning.InferenceMode
    
    /**
    * Binary ML model supplied by the user.
    */
    model: MLAsset
    
    /**
    * Function that gets called when model loading is finished.
    */
    onLoadingFinished: () => void
    
    /**
    * Function that gets called when the model stops running.
    */
    onRunningFinished: () => void
    
    /**
    * Render order of the MLComponent.
    */
    renderOrder: number
    
    /**
    * Returns the current status of the neural network model.
    
    * @readonly
    */
    state: MachineLearning.ModelState
    
}

/**
* @wearableOnly
*/
interface MotionController extends ScriptObject {
    getMotionState(): MotionController.MotionType
    
    getTouchpadPhysicalSize(): vec2 | undefined
    
    getTouchpadPointSize(): vec2 | undefined
    
    getTrackingQuality(): MotionController.TrackingQuality
    
    getWorldPosition(): vec3
    
    getWorldRotation(): quat
    
    invokeHaptic(hapticRequest: MotionController.HapticRequest): void
    
    isControllerAvailable(): boolean
    
    /**
    * @readonly
    */
    onControllerStateChange: event1<boolean, void>
    
    /**
    * @readonly
    */
    onMotionTypeChange: event1<MotionController.MotionType, void>
    
    /**
    * @readonly
    */
    onTouchEvent: event4<vec2, number, number, MotionController.TouchPhase, void>
    
    /**
    * @readonly
    */
    onTouchpadSizeChange: event2<vec2, vec2, void>
    
    /**
    * @readonly
    */
    onTrackingQualityChange: event1<MotionController.TrackingQuality, void>
    
    /**
    * @readonly
    */
    onTransformEvent: event2<vec3, quat, void>
    
    /**
    * @readonly
    */
    options: MotionController.MotionControllerOptions
    
}

declare namespace MotionController {
    /**
    * @wearableOnly
    */
    enum HapticFeedback {
        Default,
        Tick,
        Select,
        Success,
        Error,
        VibrationLow,
        VibrationMedium,
        VibrationHigh
    }

}

declare namespace MotionController {
    /**
    * @wearableOnly
    */
    interface HapticRequest extends ScriptObject {
        duration: number
        
        hapticFeedback: MotionController.HapticFeedback
        
    }

}
declare namespace MotionController {
    namespace HapticRequest {
        /**
        * @wearableOnly
        */
        export function create(): MotionController.HapticRequest
        
    
    }

}

declare namespace MotionController {
    /**
    * @wearableOnly
    */
    interface MotionControllerOptions extends ScriptObject {
        controllerId: string
        
        motionType: MotionController.MotionType
        
    }

}

declare namespace MotionController {
    /**
    * @wearableOnly
    */
    enum MotionType {
        NoMotion,
        ThreeDoF,
        SixDoF
    }

}

declare namespace MotionController {
    interface Options {
    }

}
declare namespace MotionController {
    namespace Options {
        /**
        * @wearableOnly
        */
        export function create(): MotionController.MotionControllerOptions
        
    
    }

}

declare namespace MotionController {
    /**
    * @wearableOnly
    */
    enum TouchPhase {
        Began,
        Moved,
        Ended,
        Canceled
    }

}

declare namespace MotionController {
    /**
    * @wearableOnly
    */
    enum TrackingQuality {
        Unknown,
        Normal,
        Limited
    }

}

/**
* @wearableOnly
*/
interface MotionControllerModule extends ScriptObject {
    getController(options: MotionController.MotionControllerOptions): MotionController
    
}

/**
* Triggered when the tracked face's mouth closes.
*/
interface MouthClosedEvent extends FaceTrackingEvent {
}

/**
* Triggered when the tracked face's mouth opens.
*/
interface MouthOpenedEvent extends FaceTrackingEvent {
}

/**
* An instance of a Connected Lens session among a group of participants who were successfully invited into the experience. 
*/
interface MultiplayerSession extends ScriptObject {
    /**
    * Sets the realtime store to unowned.
    */
    clearRealtimeStoreOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void
    
    /**
    * Creates a realtime store to share data within a multiplayer session. The realtime store will allow you to pass data between multiple connected users in the same experience, such as: syncing the position of objects in the scene, syncing the current game score, etc.
    
    */
    createRealtimeStore(options: RealtimeStoreCreateOptions, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void
    
    /**
    * Deletes a realtime store. 
    */
    deleteRealtimeStore(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void
    
    getLocalUserId(localUserIdCallback: (userId: string) => void): void
    
    /**
    * Gets information about the current user, which includes their display name and unique `userID` which can be used to identify them in session.
    
    */
    getLocalUserInfo(localUserInfoCallback: (userInfo: ConnectedLensModule.UserInfo) => void): void
    
    /**
    * Returns information about the passed in RealtimeStore.
    */
    getRealtimeStoreInfo(store: GeneralDataStore): ConnectedLensModule.RealtimeStoreCreationInfo
    
    /**
    * Returns a unix timestamp in milliseconds of the current time according to the server. Useful for synchronizing time-based game events across devices.
    * `-1` will be returned if session is not connected to the server.
    */
    getServerTimestamp(): number
    
    /**
    * Requests for ownership of the realtime store.
    */
    requestRealtimeStoreOwnership(store: GeneralDataStore, onSuccess: (store: GeneralDataStore) => void, onError: (message: string) => void): void
    
    /**
    * Sends a string message via the realtime backend.
    */
    sendMessage(message: string): void
    
    /**
    * Sends a string message with a timeout in milliseconds. Allows messages to be dropped from the outgoing message queue when they become too old. Useful to ensure the quick delivery of subsequent messages.
    */
    sendMessageWithTimeout(message: string, timeoutMs: number): void
    
    /**
    * Get the number of active users in the Session.
    
    
    * @readonly
    */
    activeUserCount: number
    
    /**
    * @readonly
    */
    activeUsersInfo: ConnectedLensModule.UserInfo[]
    
    /**
    * Get all the Realtime Stores in the current session.
    
    * @readonly
    */
    allRealtimeStores: GeneralDataStore[]
    
}

/**
* Tracking type used by the [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component to specify what type of plane to detect. 
*/
declare enum NativePlaneTrackingType {
    /**
    * No planes will be detected.
    */
    None,
    /**
    * Only horizontal planes will be detected.
    */
    Horizontal,
    /**
    * Only vertical planes will be detected.
    */
    Vertical,
    /**
    * Both horizontal and vertical planes will be detected. 
    */
    Both
}

interface NoiseReduction extends ScriptObject {
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3
    
    amount: number
    
    /**
    * @readonly
    */
    maxTensorSize: number
    
}

interface NoiseReductionBuilder extends ScriptObject {
    build(): NoiseReduction
    
    setSampleRate(sampleRate: number): NoiseReductionBuilder
    
}

/**
* Base class for configuring object tracking in the [ObjectTracking3D](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ObjectTracking3D) component.
*/
interface Object3DAsset extends Asset {
}

/**
* A reusable object hierarchy stored as a resource.
* Can be instantiated through script or brought into the scene through Lens Studio.
* For more information, see the [Prefabs](https://lensstudio.snapchat.com/lens-studio/references/guides/general/prefabs) guide.
*/
interface ObjectPrefab extends Asset {
    /**
    * Creates and returns a new instance of this object hierarchy underneath the specified parent object.
    * If parent is null, the object will be created with no parent.
    */
    instantiate(parent: SceneObject): SceneObject
    
    instantiateAsync(parent: SceneObject, onSuccess: (sceneObject: SceneObject) => void, onFailure: (error: string) => void, onProgress: (progress: number) => void): void
    
}

/**
* Provides additional data for the tracked object. For example, with hand tracking, you can figure out whether the tracked hand is the left hand by accessing the `isLeft` property [true/false], as well as the probability of this data through the `isLeftProbability` property [0-1]. 
*/
interface ObjectSpecificData extends ScriptObject {
}

/**
* Used to track objects in the camera. Moves the local [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) to match the detected image.

* See the [Object Tracking guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/object-tracking) and the [Hand Gestures Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/body/hand-gestures) for more information.
*/
interface ObjectTracking extends Component {
    /**
    * Returns true if the object is currently being tracked on camera.
    */
    isTracking(): boolean
    
    /**
    * Registers a callback to be executed when the passed in descriptor ends for this tracked object. For example, the possible descriptors for hand tracking are: "victory", "open", "index_finger", "horns", "close", "thumb". 
    */
    registerDescriptorEnd(descriptor: string, callback: (descriptor: string) => void): void
    
    /**
    * Registers a callback to be executed when the passed in descriptor starts for this tracked object. For example, the possible descriptors for hand tracking are: "victory", "open", "index_finger", "horns", "close", "thumb".
    */
    registerDescriptorStart(descriptor: string, callback: (descriptor: string) => void): void
    
    /**
    * If true, child objects of this Component's [SceneObject](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject) will be disabled when the object is not being tracked.
    */
    autoEnableWhenTracking: boolean
    
    /**
    * The index of the object being tracked.
    */
    objectIndex: number
    
    /**
    * Gets additional data of the current object being tracked.
    
    * @readonly
    */
    objectSpecificData: ObjectSpecificData
    
    /**
    * Function that gets called when the tracked object is found.
    */
    onObjectFound: () => void
    
    /**
    * Function that gets called when the tracked object is lost.
    */
    onObjectLost: () => void
    
}

/**
* Component used for tracking objects in 3D space.
*/
interface ObjectTracking3D extends Component {
    /**
    * Attaches the SceneObject to the specified attachment point.
    */
    addAttachmentPoint(name: string, object: SceneObject): void
    
    /**
    * Creates a SceneObject which is attached to the specified attachment point.
    */
    createAttachmentPoint(name: string): SceneObject
    
    /**
    * Returns all SceneObjects currently attached to the specified point.
    */
    getAttachedObjects(name: string): SceneObject[]
    
    /**
    * Returns whether the specified attachment point is being tracked.
    */
    isAttachmentPointTracking(name: string): boolean
    
    /**
    * Returns whether this object is currently being tracked.
    */
    isTracking(): boolean
    
    removeAttachmentPoint(object: SceneObject): void
    
    /**
    * Whether world rotation is applied or not.
    */
    attachmentModeInheritRotation: boolean
    
    /**
    * Whether world scale is applied or not.
    */
    attachmentModeInheritScale: boolean
    
    /**
    * Index of the object to track, starting at 0. Useful when tracking multiple instances of the same type of object.
    */
    objectIndex: number
    
    /**
    * Function called when tracking is lost.
    */
    onTrackingLost: () => void
    
    /**
    * Function called when tracking begins.
    */
    onTrackingStarted: () => void
    
    /**
    * When true, the attached root SceneObject's world position will be updated to match the tracked object's world position.
    */
    trackPosition: boolean
    
    /**
    * Asset containing tracking parameters, such as the tracking model and specific options.
    */
    trackingAsset: Object3DAsset
    
    /**
    * Strategy for updating attached SceneObjects.
    */
    trackingMode: ObjectTracking3D.TrackingMode
    
}

declare namespace ObjectTracking3D {
    /**
    * Strategies for updating attached objects. Used by the [ObjectTracking3D](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ObjectTracking3D) component.
    */
    enum TrackingMode {
        /**
        * Update the local transform's rotation and scale
        */
        ProportionsAndPose,
        /**
        * Update the local transform's rotation only
        */
        PoseOnly,
        /**
        * Applies world position and world rotation by default, and optionally world scale. Additionally, the world rotation can be opt-out via the `attachmentModeInheritRotation` property
        */
        Attachment
    }

}

interface ObjectTrackingMaskedTextureProvider extends CropTextureProvider {
    objectIndex: number
    
}

interface ObjectTrackingNormalsTextureProvider extends ObjectTrackingMaskedTextureProvider {
}

/**
* Controls a segmentation texture and its placement using information provided by Object tracking.
*/
interface ObjectTrackingTextureProvider extends ObjectTrackingMaskedTextureProvider {
}

/**
* Triggered when the Lens starts, earlier than all OnStart events. Also fires immediately on a newly instantiated or copied object.
*/
interface OnAwakeEvent extends SceneEvent {
}

/**
* Triggered when the associated ScriptComponent is destroyed while the lens is running.
*/
interface OnDestroyEvent extends SceneEvent {
}

/**
* Triggered when the `ScriptComponent` this event is bound to is disabled.

*/
interface OnDisableEvent extends SceneEvent {
}

/**
* Triggered when the `ScriptComponent` this event is bound to is enabled.

*/
interface OnEnableEvent extends SceneEvent {
}

/**
* Triggered when the Lens starts, after all OnAwakeEvents have triggered. Also triggers later on newly instantiated or copied objects.
*/
interface OnStartEvent extends SceneEvent {
}

/**
* Types of operating system that may be running on the device.
*/
declare enum OS {
    /**
    * Android device
    */
    Android,
    /**
    * iOS device
    */
    iOS,
    /**
    * MacOS device
    */
    MacOS,
    /**
    * Windows device
    */
    Windows
}

/**
* Used in [Text's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `outlineSettings` property.
* Configures how text outlining will appear on a Text component.
*/
interface OutlineSettings extends ScriptObject {
    /**
    * Whether outline is enabled on the Text.
    */
    enabled: boolean
    
    /**
    * Settings for how the outline is drawn.
    */
    fill: TextFill
    
    /**
    * The strength of the outline effect, ranging from 0.0 (no outline) to 1.0 (very strong outline).
    */
    size: number
    
}

/**
* Builds OutputPlaceholders for MLComponent.
*/
interface OutputBuilder extends ScriptObject {
    /**
    * Builds and returns a new OutputPlaceholder.
    */
    build(): OutputPlaceholder
    
    /**
    * Sets the name of the OutputPlaceholder to be built.
    */
    setName(name: string): OutputBuilder
    
    /**
    * Sets the OutputMode of the OutputPlaceholder to be built.
    */
    setOutputMode(outputMode: MachineLearning.OutputMode): OutputBuilder
    
    /**
    * Sets the Transformer of the OutputPlaceholder to be built.
    */
    setTransformer(transformer: Transformer): OutputBuilder
    
}

/**
* Provides output data from the neural network used by an MLComponent.
* For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
*/
interface OutputPlaceholder extends BasePlaceholder {
    /**
    * Output as a Float32Array. Usable when `mode` is set to `MachineLearning.OutputMode.Data`.
    
    * @readonly
    
    * @exposesUserData
    */
    data: Float32Array
    
    /**
    * Which type of data the output is provided as. For example, Texture or Data.
    */
    mode: MachineLearning.OutputMode
    
    /**
    * Output as a Texture. Usable when `mode` is set to `MachineLearning.OutputMode.Texture`.
    
    * @readonly
    */
    texture: Texture
    
}

/**
* Exposes state generated for ColliderComponent overlap events.  See also: [ColliderComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), [OverlapEnterEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OverlapEnterEventArgs), [OverlapExitEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OverlapExitEventArgs), [OverlapStayEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OverlapStayEventArgs).
*/
interface Overlap extends ScriptObject {
    /**
    * The collider which is overlapping.
    
    * @readonly
    */
    collider: ColliderComponent
    
    /**
    * ID of the overlap, unique for this overlap.
    
    * @readonly
    */
    id: number
    
}

/**
* Args used for [ColliderComponent.onOverlapEnter](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when the collider begins overlapping another object. Typically used for volume triggers.
*/
interface OverlapEnterEventArgs extends ScriptObject {
    /**
    * Number of objects currently overlapping.
    
    * @readonly
    */
    currentOverlapCount: number
    
    /**
    * Array of all current overlaps.
    
    * @readonly
    */
    currentOverlaps: Overlap[]
    
    /**
    * Structure containing information about the current overlap.
    
    * @readonly
    */
    overlap: Overlap
    
}

/**
* Args used for [ColliderComponent.onOverlapEnd](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when the collider stops overlapping another object. Typically used for volume triggers.
*/
interface OverlapExitEventArgs extends ScriptObject {
    /**
    * Number of objects currently overlapping.
    
    * @readonly
    */
    currentOverlapCount: number
    
    /**
    * Array of all current overlaps.
    
    * @readonly
    */
    currentOverlaps: Overlap[]
    
    /**
    * Structure containing information about the current overlap.
    
    * @readonly
    */
    overlap: Overlap
    
}

/**
* Args used for [ColliderComponent.onOverlapStay](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered every frame while the collider continues overlapping another object. Typically used for volume triggers.
*/
interface OverlapStayEventArgs extends ScriptObject {
    /**
    * Number of objects currently overlapping.
    
    * @readonly
    */
    currentOverlapCount: number
    
    /**
    * Array of all current overlaps.
    
    * @readonly
    */
    currentOverlaps: Overlap[]
    
    /**
    * Structure containing information about the current overlap.
    
    * @readonly
    */
    overlap: Overlap
    
}

/**
* @wearableOnly
*/
interface PalmTapDownArgs extends ScriptObject {
    /**
    * @readonly
    */
    confidence: number
    
}

/**
* @wearableOnly
*/
interface PalmTapUpArgs extends ScriptObject {
    /**
    * @readonly
    */
    confidence: number
    
}

/**
* Controls how a mesh will get rendered. Each Pass acts as an interface for the shader it's associated with.
* Any properties on a Pass's shader will automatically become properties on that Pass.
* For example, if the shader defines a variable named `baseColor`, a script would be able to access that property as `material.mainPass.baseColor`.
*/
interface Pass extends ScriptObject {
    [index:string]: any
    
    baseTex: Texture
    
    baseColor: vec4
    
    /**
    * The blend mode used for rendering. Possible values:
    
    * | BlendMode                     | Value | Expression                    |
    * | ----------------------------- | ----- | ----------------------------- |
    * | Normal                        | 0     | SrcAlpha, OneMinusSrcAlpha    |
    * | MultiplyLegacy [DEPRECATED]	| 1	    | DstColor, OneMinusSrcAlpha    |
    * | AddLegacy [DEPRECATED]        | 2     | One, One                      |
    * | Screen	                    | 3	    | One, OneMinusSrcColor         |
    * | PremultipliedAlpha            | 4	    | One, OneMinusSrcAlpha         |
    * | AlphaToCoverage               | 5	    | Blend Disabled                |
    * | Disabled                      | 6	    | Blend Disabled                |
    * | Add                           | 7	    | SrcAlpha, One                 |
    * | AlphaTest                     | 8	    | Blend Disabled                |
    * | ColoredGlass                  | 9	    | Blend Disabled                |
    * | Multiply                      | 10    | DstColor, Zero                |
    * | Min                           | 11    | One, One                      |
    * | Max                           | 12    | One, One                      |
    
    * ```
    * // Sets the blend mode of the main pass for a material to Screen
    * //@input Asset.Material material
    
    * script.material.mainPass.blendMode = 3;
    * ```
    */
    blendMode: BlendMode
    
    /**
    * Controls the masking of color channels with a vec4b representing each channel with a boolean.
    */
    colorMask: vec4b
    
    /**
    * The cull mode used for rendering.
    */
    cullMode: CullMode
    
    /**
    * Enables depth-sorting.
    */
    depthTest: boolean
    
    /**
    * Enables writing pixels to the depth buffer.
    */
    depthWrite: boolean
    
    /**
    * Set max corner of aabb. It only applys when user selects FrustumCullMode.UserDefinedAABB
    */
    frustumCullMax: vec3
    
    /**
    * Set min corner of aabb. It only applys when user selects FrustumCullMode.UserDefinedAABB
    */
    frustumCullMin: vec3
    
    /**
    * Mode for setting frustum culling on Pass
    */
    frustumCullMode: FrustumCullMode
    
    /**
    * Extend render object's aabb to (1 + value). Only applys when user select FrustumCullMode.Extend
    */
    frustumCullPad: number
    
    /**
    * Number of times the pass will be rendered. Useful with the Instance ID node in Material Editor.
    */
    instanceCount: number
    
    /**
    * Line width used for rendering.
    */
    lineWidth: number
    
    /**
    * The name of the Pass.
    */
    name: string
    
    /**
    * Changes the position that each polygon gets drawn.
    */
    polygonOffset: vec2
    
    /**
    * Returns texture samplers used by this pass to set filtering and wrap modes.
    
    * @readonly
    */
    samplers: SamplerWrappers
    
    /**
    * The stencil test state for Pass.
    */
    stencilState: StencilState
    
    /**
    * Whether the material renders on both sides of a mesh face.
    */
    twoSided: boolean
    
}

/**
* Similar to [Pass](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass), except used by [VFX Assets](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#VFXAsset).
*/
interface PassWrapper extends ScriptObject {
    /**
    * The blend mode used for rendering. 
    */
    blendMode: BlendMode
    
    /**
    * Controls the masking of color channels with a vec4b representing each channel with a boolean.
    */
    colorMask: vec4b
    
    /**
    * The cull mode used for rendering.
    */
    cullMode: CullMode
    
    /**
    * Enables depth-sorting.
    */
    depthTest: boolean
    
    /**
    * Enables writing pixels to the depth buffer.
    */
    depthWrite: boolean
    
    /**
    * Number of times the pass will be rendered. Useful with the Instance ID node in Material Editor.
    */
    instanceCount: number
    
    /**
    * Line width used for rendering.
    */
    lineWidth: number
    
    /**
    * The name of the pass wrapper.
    */
    name: string
    
    /**
    * Changes the position that each polygon gets drawn.
    */
    polygonOffset: vec2
    
    /**
    * A proxy class that provides the access to the properties of the passes under the hood of [VFX Asset](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#VFXAsset/). PassWrapper.samplers property which is tied to the Pass.samplers one. For example:  
    * ```js
    * pass.samplers.texture_name.Fitering = FilteringMode.Nearest
    * ```
    
    * @readonly
    */
    samplers: SamplerWrappers
    
    /**
    * Whether the material renders on both sides of a mesh face.
    */
    twoSided: boolean
    
}

/**
* Allows for retrieval of a collection of Pass objects used by VFXAsset
*/
interface PassWrappers extends ScriptObject {
    /**
    * Returns an array of Pass objects
    
    * @readonly
    */
    allPasses: PassWrapper[]
    
}

/**
* Allows data to be stored and retrieved between Lens sessions.
* In other words, data can be saved on device and loaded back in the next time the Lens is opened.
* Can be accessed with `global.persistentStorageSystem`.

* See the [Persistent Storage guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/persistent-storage) for more information.
*/
interface PersistentStorageSystem extends ScriptObject {
    /**
    * The `GeneralDataStore` object used to store and retrieve data.
    */
    store: GeneralDataStore
    
}

/**
* Namespace containing physics classes and static physics methods.
*/
interface Physics {
}
declare namespace Physics {
    /**
    * Create an intersection probe that spans all worlds.
    */
    export function createGlobalProbe(): Probe
    
    /**
    * Create an intersection probe for the implicit root world.
    */
    export function createRootProbe(): Probe
    
    /**
    * Get settings that apply to the implicit root world.
    */
    export function getRootWorldSettings(): Physics.WorldSettingsAsset
    

}

declare namespace Physics {
    /**
    * Namespace containing static helper methods for [Constraints](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Constraint).
    */
    interface Constraint {
    }

}
declare namespace Physics {
    namespace Constraint {
        /**
        * Create a constraint of the given type, with default settings.
        */
        export function create(type: Physics.ConstraintType): Constraint
        
    
    }

}

declare namespace Physics {
    /**
    * Constraint type used by a [Constraint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Contraint).   See also: [Physics.Constraint.create()](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#PhysicsConstraint), [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
    */
    enum ConstraintType {
        /**
        * Constrains colliders to fixed rotation and position. See [FixedConstraint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#FixedConstraint).
        */
        Fixed,
        /**
        * Constrains colliders to rotate around a point. See [PointConstraint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#PointConstraint).
        */
        Point,
        /**
        * Constrains colliders to rotate around a single axis. See [HingeConstraint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#HingeConstraint).
        */
        Hinge
    }

}

declare namespace Physics {
    /**
    * Script interface for applying collision filtering to colliders and ray/shape-casts.
    */
    interface Filter {
    }

}
declare namespace Physics {
    namespace Filter {
        /**
        * Create an instance with default settings.
        */
        export function create(): Filter
        
    
    }

}

declare namespace Physics {
    /**
    * Type of force to use when applying force or torque to a [BodyComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BodyComponent).
    */
    enum ForceMode {
        /**
        * Continuous force (kg*cm/s^2), used for cases where force is applied over multiple frames.
        */
        Force,
        /**
        * Instantaneous force impulse (kg*cm/s).
        
        */
        Impulse,
        /**
        * Continuous acceleration (cm/s^2), applied without respect to mass, used for cases where force is applied over multiple frames.
        
        */
        Acceleration,
        /**
        * Instantaneous change in velocity (cm/s), applied without respect to mass.
        */
        VelocityChange
    }

}

declare namespace Physics {
    /**
    * Stores reusable settings uniform for a world (such as gravity magnitude and direction). See also: [WorldComponent.worldSettings](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#WorldComponent).
    */
    interface WorldSettingsAsset extends Asset {
        /**
        * Given 2 layer numbers A and B, returns true if colliders in A collide with colliders in B, and vice-versa. The layer numbers correspond to those used to form a `LayerSet` with `LayerSet.fromNumber()`. The relationship is symmetric, so if collision is disabled for (A, B), it is also disabled for (B, A). This accesses a flag in the "Layer Collision Matrix", as viewable in Studio. Note however that layer numbers are not the same as layer IDs. To get the number of a Studio-created layer, use `LayerSet.numbers`.
        */
        getLayersCollidable(layerNumberA: number, layerNumberB: number): boolean
        
        /**
        * Resets the layer collision matrix such that all layer pairs are enabled.
        */
        resetLayerCollisionMatrix(): void
        
        /**
        * Given 2 layer numbers A and B, enables or disables collision between colliders in those layers. The layer numbers correspond to those used to form a `LayerSet` with `LayerSet.fromNumber()`. The relationship is symmetric, so if collision is disabled for (A, B), it is also disabled for (B, A). This accesses a flag in the "Layer Collision Matrix", as viewable in Studio. Note however that layer numbers are not the same as layer IDs. To get the number of a Studio-created layer, use LayerSet.numbers.
        
        */
        setLayersCollidable(layerNumberA: number, layerNumberB: number, enable: boolean): void
        
        /**
        * Speed limit, in world space cm/s. Set to 0 to disable this.
        */
        absoluteSpeedLimit: number
        
        /**
        * Default Filter used for colliders in the world.
        */
        defaultFilter: Filter
        
        /**
        * Default Matter used for colliders in the world. This is used for a collider when its matter field is unset.
        */
        defaultMatter: Matter
        
        /**
        * Gravity acceleration vector (cm/s^2). Defaults to real-world gravity of 980 cm/s^2, downward.
        */
        gravity: vec3
        
        /**
        * Speed limit, relative to shape size. Set to 0 to disable this. The effective world space speed limit is scaled by simulation rate, so this is the maximum distance the object can move in a single step. The default of 0.5 only allows the object to move by half its size in a single step, which should prevent tunneling.
        */
        relativeSpeedLimit: number
        
        /**
        * Simulation rate, in steps per second. Larger values improve simulation accuracy at the cost of performance. This is limited to intervals of 30hz, in the range 30-240hz, with 60hz as the default.
        */
        simulationRate: number
        
        /**
        * Slow down simulation step frequency (higher values are slower). Limited to >=1.0. This achieves a slow-motion effect by reducing the number of simulation steps each frame. Useful for debugging as large values will cause noticeably discrete steps.
        */
        slowDownStep: number
        
        /**
        * Slow down simulation time (higher values are slower). This achieves a slow-motion effect by scaling simulation time. Unlike slowDownStep, it will maintain smooth motion, but has accuracy problems at large scales.
        */
        slowDownTime: number
        
    }

}
declare namespace Physics {
    namespace WorldSettingsAsset {
        /**
        * Create an instance with default settings.
        */
        export function create(): Physics.WorldSettingsAsset
        
    
    }

}

/**
* @wearableOnly
*/
interface PinchDownArgs extends ScriptObject {
    /**
    * @readonly
    */
    palmOrientation: vec3
    
}

/**
* @wearableOnly
*/
interface PinchStrengthArgs extends ScriptObject {
    /**
    * @readonly
    */
    strength: number
    
}

/**
* @wearableOnly
*/
interface PinchUpArgs extends ScriptObject {
    /**
    * @readonly
    */
    palmOrientation: vec3
    
}

/**
* Attaches the SceneObject to the mesh surface of a different SceneObject.
* See the [Pin To Mesh](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/3d/pin-to-mesh#adding-a-pin-to-mesh-component) guide for more information.
*/
interface PinToMeshComponent extends Component {
    /**
    * The position offset to apply.
    */
    offsetPosition: vec3
    
    /**
    * The euler angle offset to apply. Only has an effect when `orientation` is set to `PositionAndDirection`.
    */
    offsetRotation: vec3
    
    /**
    * The orientation type to use.
    */
    orientation: PinToMeshComponent.Orientation
    
    /**
    * The UV coordinates on the target mesh to attach to.
    */
    pinUV: vec2
    
    /**
    * The preferred triangle index to attach to when multiple triangles contain the desired UV coordinate.
    */
    preferredTriangle: number
    
    /**
    * Index of the UV coordinate set to use for pinning.
    */
    preferredUVLayerIndex: number
    
    /**
    * The target mesh to attach to.
    */
    target: BaseMeshVisual
    
    /**
    * If enabled, interpolated vertex normals will be used when calculating the attachment position.
    */
    useInterpolatedVertexNormal: boolean
    
}

declare namespace PinToMeshComponent {
    /**
    * Used with [PinToMeshComponent.orientation](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#PinToMeshComponent).
    */
    enum Orientation {
        /**
        * Pins only the position. Rotation is independent from the target mesh.
        */
        OnlyPosition,
        /**
        * Pins both the position and direction. The normal of the target mesh is the Y axis.
        * The U texture coordinate of the target mesh's UV is the X axis.
        */
        PositionAndDirection
    }

}

interface PitchShifter extends ScriptObject {
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3
    
    /**
    * @readonly
    */
    maxTensorSize: number
    
    pitch: number
    
}

interface PitchShifterBuilder extends ScriptObject {
    build(): PitchShifter
    
    setSampleRate(sampleRate: number): PitchShifterBuilder
    
}

declare enum PlaybackMode {
    Single,
    Loop,
    PingPong
}

/**
* Represents 3D locations of stationary features in the environment. The resulting cloud of points provides a sparse description of the 3D environment.

*/
interface PointCloud extends ScriptObject {
    /**
    * A list of numeric identifiers for each unique 3D point in the cloud.
    
    * @readonly
    */
    ids: number[]
    
    /**
    * A list of vec3 objects representing the 3D position of every point.
    
    * @readonly
    */
    positions: vec3[]
    
}

/**
* A type of constraint that only allows rotation.  See also: [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
*/
interface PointConstraint extends Constraint {
}

/**
* An Audio Component effect that allows the Lens to simulate sound based on the direction of the Audio Listener relative to the Audio Component.
*/
interface PositionEffect extends ScriptObject {
    /**
    * If enabled, the position effect will be applied.
    */
    enabled: boolean
    
}

/**
* Uses an input color lookup table image to adjust the coloring of the Lens.
* See the [Color Correction Post Effect guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/graphics/materials/post-effects#color-correction) for more information.
*/
interface PostEffectVisual extends MaterialMeshVisual {
}

/**
* Performs collision tests (such as ray casts) in one or more world. See [Physics.createGlobalProbe()](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#Physics), [Physics.createRootProbe()](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#Physics), [WorldComponent.createProbe()](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#WorldComponent).
*/
interface Probe extends ScriptObject {
    /**
    * Returns (via callback) the nearest intersection in any world. If there is no hit, the callback is called with a null hit argument.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
    */
    rayCast(start: vec3, end: vec3, hitCB: (hit: RayCastHit) => void): void
    
    /**
    * Returns (via callback) all intersections in every world. The callback receives an array of hits, in order of nearest to farthest. If there were no hits, the array length is 0.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
    */
    rayCastAll(start: vec3, end: vec3, hitCB: (hit: RayCastHit[]) => void): void
    
    /**
    * Like rayCast(), but sweeps a sphere from start to end positions. This is shorthand for calling shapeCast() with a SphereShape. Returns (via callback) the nearest intersection. If there is no hit, the callback is called with a null hit argument. Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
    */
    shapeCast(shape: Shape, start: vec3, startRot: quat, end: vec3, endRot: quat, hitCB: (hit: RayCastHit) => void): void
    
    /**
    * Like rayCastAll(), but sweeps a shape from start to end transforms (expressed as position and rotation).  The provided shape can be created with one of the Shape.create*() functions, or referenced from a Physics.ColliderComponent.  Does not support MeshShape, and will throw an exception if attempted.  Returns (via callback) all intersections.  The callback receives an array of hits, in order of nearest to farthest. If there were no hits, the array length is 0. Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
    */
    shapeCastAll(shape: Shape, start: vec3, startRot: quat, end: vec3, endRot: quat, hitCB: (hit: RayCastHit[]) => void): void
    
    /**
    * Like rayCast(), but sweeps a sphere from start to end positions.  This is shorthand for calling shapeCast() with a SphereShape.  Returns (via callback) the nearest intersection.  If there is no hit, the callback is called with a null hit argument.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
    */
    sphereCast(radius: number, start: vec3, end: vec3, hitCB: (hit: RayCastHit) => void): void
    
    /**
    * Like rayCastAll(), but sweeps a sphere from start to end positions. This is shorthand for calling shapeCastAll() with a SphereShape. Returns (via callback) all intersections. The callback receives an array of hits, in order of nearest to farthest. If there were no hits, the array length is 0.  Ray casts are performed after simulation update, which occurs after script Update but prior to LateUpdate.
    */
    sphereCastAll(radius: number, start: vec3, end: vec3, hitCB: (hit: RayCastHit[]) => void): void
    
    /**
    * Show intersection tests with debug-draw.
    */
    debugDrawEnabled: boolean
    
    /**
    * Filter settings applied to intersection tests.
    */
    filter: Filter
    
}

/**
* RenderObjectProvider for mesh objects generated procedurally.
*/
interface ProceduralMeshRenderObjectProvider extends MeshRenderObjectProvider {
}

/**
* Provides a texture that can be written to or read from. Can be accessed using Texture.control on a Procedural Texture.
*/
interface ProceduralTextureProvider extends TextureProvider {
    /**
    * Returns a Uint8 array containing the pixel values in a region of the texture. The region starts at the pixel coordinates x, y, and extends rightward by width and upward by height. Values returned are integers ranging from 0 to 255.
    
    * @exposesUserData
    */
    getPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void
    
    /**
    * Sets a region of pixels on the texture. The region starts at the pixel coordinates x, y, and extends rightward by width and upward by height. Uses the values of the passed in Uint8Array data, which should be integer values ranging from 0 to 255.
    */
    setPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void
    
}
declare namespace ProceduralTextureProvider {
    /**
    * Creates a new, blank Texture Provider using the passed in dimensions and Colorspace. The ProceduralTextureProvider can be accessed through the control property on the returned texture.
    */
    export function create(width: number, height: number, colorspace: Colorspace): Texture
    
    /**
    * Creates a new Procedural Texture based on the passed in texture. The ProceduralTextureProvider can be accessed through the control property on the returned texture.
    */
    export function createFromTexture(texture: Texture): Texture
    

}

interface ProcessedLocationModule extends Asset {
}

interface Properties extends ScriptObject {
}

interface PropertyOnEventArgs extends ScriptObject {
}

/**
* Base class for all resource providers.
*/
interface Provider extends ScriptObject {
    getLoadStatus(): LoadStatus
    
}

/**
* A quaternion, used to represent rotation.
*/
declare class quat {
    /**
    * Creates a new quat.
    */
    constructor(w: number, x: number, y: number, z: number)
    
    /**
    * Returns the dot product of the two quats.
    */
    dot(quat: quat): number
    
    /**
    * Returns whether this quat and `b` are equal.
    */
    equal(b: quat): boolean
    
    /**
    * Returns the rotation angle of the quat.
    */
    getAngle(): number
    
    /**
    * Returns the rotation axis of the quat.
    */
    getAxis(): vec3
    
    /**
    * Returns an inverted version of the quat.
    */
    invert(): quat
    
    /**
    * Returns the product of this quat and `b`.
    */
    multiply(b: quat): quat
    
    /**
    * Returns the result of rotating direction vector `vec3` by this quat.
    */
    multiplyVec3(vec3: vec3): vec3
    
    /**
    * Normalizes the quat.
    */
    normalize(): void
    
    /**
    * Returns an euler angle representation of the quat, in radians.
    */
    toEulerAngles(): vec3
    
    /**
    * Returns a string representation of the quat.
    */
    toString(): string
    
    /**
    * w component of the quat.
    */
    w: number
    
    /**
    * x component of the quat.
    */
    x: number
    
    /**
    * y component of the quat.
    */
    y: number
    
    /**
    * z component of the quat.
    */
    z: number
    
}
declare namespace quat {
    /**
    * Returns a new quat with angle `angle` and axis `axis`.
    */
    export function angleAxis(angle: number, axis: vec3): quat
    
    /**
    * Returns the angle between `a` and `b`.
    */
    export function angleBetween(a: quat, b: quat): number
    
    /**
    * Returns a new quat using the euler angles `x`, `y`, `z` (in radians).
    */
    export function fromEulerAngles(x: number, y: number, z: number): quat
    
    /**
    * Returns a new quat using the euler angle `eulerVec` (in radians).
    */
    export function fromEulerVec(eulerVec: vec3): quat
    
    /**
    * Creates a quaternion from a matrix.
    */
    export function fromRotationMat(rotationMat: mat3): quat
    
    /**
    * Returns a new quat linearly interpolated between `a` and `b`.
    */
    export function lerp(a: quat, b: quat, t: number): quat
    
    /**
    * Returns a new quat with a forward vector `forward` and up vector `up`.
    */
    export function lookAt(forward: vec3, up: vec3): quat
    
    /**
    * Returns the identity quaternion.
    */
    export function quatIdentity(): quat
    
    /**
    * Returns a rotation quat between direction vectors `from` and `to`.
    */
    export function rotationFromTo(from: vec3, to: vec3): quat
    
    /**
    * Returns a new quat spherically linearly interpolated between `a` and `b`.
    */
    export function slerp(a: quat, b: quat, t: number): quat
    

}

interface RawLocationModule extends Asset {
}

/**
* Hit results of a ray-cast provided to script. See [Probe](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Probe).
*/
interface RayCastHit extends ScriptObject {
    /**
    * The collider that was hit.
    
    * @readonly
    */
    collider: ColliderComponent
    
    /**
    * Distance from the ray origin to the point of intersection.
    
    * @readonly
    */
    distance: number
    
    /**
    * Surface normal on the collider at the point of intersection.
    
    * @readonly
    */
    normal: vec3
    
    /**
    * Position at the point of intersection.
    
    * @readonly
    */
    position: vec3
    
    /**
    * Set to `true` to skip remaining results, if any.
    */
    skipRemaining: boolean
    
    /**
    * Ray interpolant at the point of intersection, in the range [0, 1].
    
    * @readonly
    */
    t: number
    
    /**
    * The hit triangle, if it exists. This is set on intersection with mesh-based colliders, and null otherwise.
    
    * @readonly
    */
    triangle: TriangleHit
    
}

/**
* The options for the realtime store.
*/
interface RealtimeStoreCreateOptions extends ScriptObject {
    allowOwnershipTakeOver: boolean
    
    /**
    * An existing store to be used as the initial values for the real time store.
    
    */
    initialStore: GeneralDataStore
    
    /**
    * The ownership model for the realtime store.
    */
    ownership: RealtimeStoreCreateOptions.Ownership
    
    /**
    * The persistence model for the realtime store.
    */
    persistence: RealtimeStoreCreateOptions.Persistence
    
    /**
    * Writes an id string to the store that can be used to identify it later.
    */
    storeId: string
    
}
declare namespace RealtimeStoreCreateOptions {
    /**
    * Creates the realtime store options object.
    
    */
    export function create(): RealtimeStoreCreateOptions
    

}

declare namespace RealtimeStoreCreateOptions {
    /**
    * The ownership model of a realtime store.
    */
    enum Ownership {
        /**
        * Indicates ownership of an entity. Only the owner can edit a store.
        */
        Owned,
        /**
        * Indicates ownership of an entity. Any user in the session can edit an unowned store.
        */
        Unowned
    }

}

declare namespace RealtimeStoreCreateOptions {
    /**
    * The persistence model for a realtime store.
    */
    enum Persistence {
        /**
        * Indicates that the entity will be deleted after it is broadcast.
        */
        Ephemeral,
        /**
        * Indicates that the entity will be deleted when the owner leaves.
        */
        Owner,
        /**
        * Indicates that the entity will be marked as unowned when the owner leaves. The Entity will be deleted when all clients leave.
        */
        Session,
        /**
        * Indicates that the entity will be marked as unowned when the owner leaves. The Entity will be created as unowned when any client rejoins.
        */
        Persist
    }

}

/**
* An axis aligned rectangle.
* Used by `anchors` and `offsets` in [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) to represent screen boundaries.
* Rect can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.

*/
interface Rect extends ScriptObject {
    /**
    * Returns the rectangle's center position as (x, y).
    */
    getCenter(): vec2
    
    /**
    * Returns the size of the rectangle as (width, height).
    */
    getSize(): vec2
    
    /**
    * Sets the rectangle's center position while maintaining its size.
    */
    setCenter(value: vec2): void
    
    /**
    * Sets the rectangle's size while maintaining its center position.
    */
    setSize(value: vec2): void
    
    /**
    * Returns a string representation of the Rect.
    */
    toString(): string
    
    /**
    * The y position of the rectangle's bottom side.
    */
    bottom: number
    
    /**
    * The x position of the rectangle's left side.
    */
    left: number
    
    /**
    * The x position of the rectangle's right side.
    */
    right: number
    
    /**
    * The y position of the rectangle's top side.
    */
    top: number
    
}
declare namespace Rect {
    /**
    * Creates a new Rect with the given properties.
    */
    export function create(left: number, right: number, bottom: number, top: number): Rect
    

}

/**
* Applies ScreenTransform positioning to match the cropped region of a texture.
* For more information, see the [Crop Textures](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/crop-textures) guide.
*/
interface RectangleSetter extends Component {
    /**
    * Cropped texture to match the screen region of. Should be a texture using a RectCropTextureProvider, such as a Screen Crop Texture or Face Crop Texture.
    */
    cropTexture: Texture
    
}

/**
* Texture Provider providing a cropped region of the input texture. The region is specified by the cropRect in local space and rotation.
* Can be accessed using Texture.control on a RectCropTexture asset, such as a Screen Crop Texture.
* For more information, see the [Crop Textures](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/crop-textures) guide.
*/
interface RectCropTextureProvider extends CropTextureProvider {
    /**
    * The cropped region to draw.
    */
    cropRect: Rect
    
    /**
    * Angle, in radians, the cropped region is rotated by.
    */
    rotation: number
    
}

interface RemoteApiRequest extends ScriptObject {
    body: (Uint8Array|number[]|string)
    
    endpoint: string
    
    parameters: object
    
}
declare namespace RemoteApiRequest {
    export function create(): RemoteApiRequest
    

}

interface RemoteApiResponse extends ScriptObject {
    /**
    * Converts the response into a DynamicResource object, which can be used by RemoteMediaModule to load the media content in the response body.
    */
    asResource(): DynamicResource
    
    /**
    * @readonly
    */
    body: string
    
    /**
    * @readonly
    */
    metadata: object
    
    /**
    * The integer status code of the response.
    
    * The meaning of possible status code values are defined as follows:
    * - 1: Success. This code corresponds to the 2XX HTTP response status codes.
    * - 2: Redirected. This code corresponds to the 3XX HTTP response status codes.
    * - 3: Bad request. This code corresponds to the 4XX HTTP response status codes other than 401, 403, 404, 408, 413, 414, and 431 which are mapped separately below.
    * - 4: Access denied. This code corresponds to the HTTP response status codes 401 and 403.
    * - 5: Not found. This code corresponds to the HTTP response status code 404. It is also returned when the API spec is not found by the remote API service.
    * - 6: Timeout. This code corresponds to the HTTP response status codes 408 and 504.
    * - 7: Request too large. This code corresponds to the HTTP response status codes 413, 414, and 431.
    * - 8: Server error. This code corresponds to the 5XX HTTP response status codes other than 504 (timeout).
    * - 9: Request cancelled by the caller.
    * - 10: Internal error happened inside the remote API framework (i.e., not from the remote service being called).
    
    * All other values have undefined meaning and should be treated as internal error (code 10).
    
    
    * @readonly
    */
    statusCode: number
    
    /**
    * @readonly
    */
    uriResources: DynamicResource[]
    
}

/**
* Provides access to a remote media.
*/
interface RemoteMediaModule extends Asset {
    /**
    * Downloads the remote image resource from the [`DynamicResource`](https://lensstudio.snapchat.com/api/classes/dynamicresource) object and loads the resource as [AudioTrackAsset](https://lensstudio.snapchat.com/api/classes/AudioTrackAsset).
    */
    loadResourceAsAudioTrackAsset(resource: DynamicResource, onSuccess: (glTFAsset: AudioTrackAsset) => void, onFailure: (errorMessage: string) => void): void
    
    /**
    * Downloads a remote 3D GLTF file given a [`DynamicResource`](https://lensstudio.snapchat.com/api/classes/dynamicresource).
    
    */
    loadResourceAsGltfAsset(resource: DynamicResource, onSuccess: (glTFAsset: GltfAsset) => void, onFailure: (errorMessage: string) => void): void
    
    /**
    * Downloads the remote image resource from the [`DynamicResource`](https://lensstudio.snapchat.com/api/classes/dynamicresource) object and loads the resource as an [Image](https://lensstudio.snapchat.com/api/classes/Image) Texture.
    */
    loadResourceAsImageTexture(resource: DynamicResource, onSuccess: (texture: Texture) => void, onFailure: (errorMessage: string) => void): void
    
    /**
    * Downloads the remote image resource from the [`DynamicResource`](https://lensstudio.snapchat.com/api/classes/dynamicresource) object and loads the resource as a [VideoTextureProvider](https://lensstudio.snapchat.com/api/classes/VideoTextureProvider).
    */
    loadResourceAsVideoTexture(resource: DynamicResource, onSuccess: (texture: Texture) => void, onFailure: (errorMessage: string) => void): void
    
}

/**
* Provides a reference to a remote asset (i.e. assets outside of the Lens size limit) that can be downloaded at runtime using script.
*/
interface RemoteReferenceAsset extends Asset {
    /**
    * Request to download the Remote Reference Asset.
    */
    downloadAsset(onDownloaded: (asset: Asset) => void, onFailed: () => void): void
    
}

/**
* @snapOsOnly
*/
interface RemoteServiceHttpRequest extends ScriptObject {
    getHeader(name: string): string
    
    setHeader(name: string, value: string): void
    
    body: (Uint8Array|number[]|string)
    
    contentType: string
    
    headers: object
    
    method: RemoteServiceHttpRequest.HttpRequestMethod
    
    url: string
    
}
declare namespace RemoteServiceHttpRequest {
    /**
    * @snapOsOnly
    */
    export function create(): RemoteServiceHttpRequest
    

}

declare namespace RemoteServiceHttpRequest {
    /**
    * @snapOsOnly
    */
    enum HttpRequestMethod {
        Get,
        Post,
        Put,
        Delete
    }

}

/**
* @snapOsOnly
*/
interface RemoteServiceHttpResponse extends ScriptObject {
    asResource(): DynamicResource
    
    getHeader(name: string): string
    
    /**
    * @readonly
    */
    body: string
    
    /**
    * @readonly
    */
    contentType: string
    
    /**
    * @readonly
    */
    headers: object
    
    /**
    * @readonly
    */
    statusCode: number
    
}

interface RemoteServiceModule extends Asset {
    /**
    * @snapOsOnly
    */
    makeResourceFromUrl(mediaUrl: string): DynamicResource
    
    performApiRequest(request: RemoteApiRequest, onApiResponse: (response: RemoteApiResponse) => void): void
    
    /**
    * @snapOsOnly
    */
    performHttpRequest(requestOptions: RemoteServiceHttpRequest, onHttpResponse: (response: RemoteServiceHttpResponse) => void): void
    
}

/**
* Represents a mesh asset.
* See also: [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
*/
interface RenderMesh extends Asset {
    /**
    * Returns a list of indices of each vertices in the RenderMesh.
    */
    extractIndices(): number[]
    
    /**
    * Returns a list of values of each vertices in the RenderMesh for the specified attribute.
    */
    extractVerticesForAttribute(attributeName: string): number[]
    
    /**
    * Returns the maximum value in each dimension of the axis-aligned bounding box containing this mesh.
    
    * @readonly
    */
    aabbMax: vec3
    
    /**
    * Returns the minimum value in each dimension of the axis-aligned bounding box containing this mesh.
    
    * @readonly
    */
    aabbMin: vec3
    
    /**
    * The RenderObjectProvider for this RenderMesh, which can provide more controls depending on the mesh type.
    * See also: [FaceRenderObjectProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#FaceRenderObjectProvider)
    */
    control: RenderObjectProvider
    
    /**
    * The index data type used by this mesh.
    
    * @readonly
    */
    indexType: MeshIndexType
    
    /**
    * The topology type used by this mesh.
    
    * @readonly
    */
    topology: MeshTopology
    
}

/**
* Renders a [RenderMesh](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#RenderMesh) asset in the scene.
* Comparable to the former class "MeshVisual", which was split into the classes:
* [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual),
* [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#MaterialMeshVisual),
* and [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
*/
interface RenderMeshVisual extends MaterialMeshVisual {
    /**
    * Resets all blend shape weights on the component.
    */
    clearBlendShapeWeights(): void
    
    /**
    * Returns the names of the blend shapes on this RenderMeshVisual.
    */
    getBlendShapeNames(): string[]
    
    /**
    * Returns the weight of the blend shape with the matching name.
    */
    getBlendShapeWeight(name: string): number
    
    /**
    * Returns whether this component has a weight for the blend shape with matching name.
    */
    hasBlendShapeWeight(name: string): boolean
    
    /**
    * Sets the weight of the blend shape with the matching name.
    */
    setBlendShapeWeight(name: string, weight: number): void
    
    /**
    * Sets the [Skin](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Skin) to use for rendering this mesh.
    */
    setSkin(value: Skin): void
    
    /**
    *  Clears the blend shape with the matching name.
    */
    unsetBlendShapeWeight(name: string): void
    
    /**
    * If enabled, normal directions are also blended by blend shapes.
    */
    blendNormals: boolean
    
    /**
    * If enabled, blend shapes will affect the component.
    */
    blendShapesEnabled: boolean
    
    /**
    * If enabled, rays are generated from this object during raytracing so that it can receive ray-traced reflections.
    */
    emitter: boolean
    
    /**
    * The [RenderMesh](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#RenderMesh) asset to render.
    */
    mesh: RenderMesh
    
    /**
    * If enabled, rays can hit this object during raytracing so that it may be visible in ray-traced reflections.
    */
    receiver: boolean
    
}

/**
* Provider for RenderMesh data.
*/
interface RenderObjectProvider extends Provider {
}

/**
* Controls a camera texture resource.
* Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on a Camera texture.
* For more information, see the [Camera and Layers](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/camera) guide.
*/
interface RenderTargetProvider extends TextureProvider {
    /**
    * When `clearColorEnabled` is true and `inputTexture` is null, this color is used to clear this RenderTarget the first time it is drawn to each frame.
    */
    clearColor: vec4
    
    /**
    * If true, the color on this RenderTarget will be cleared the first time it is drawn to each frame.
    * `inputTexture` will be used to clear it unless it is null, in which case `clearColor` is used instead.
    */
    clearColorEnabled: boolean
    
    /**
    * Sets the clear color option.
    */
    clearColorOption: ClearColorOption
    
    /**
    * If true, the depth buffer will be cleared on this RenderTarget the first time it is drawn to each frame.
    */
    clearDepthEnabled: boolean
    
    /**
    * When `clearColorEnabled` is true, this texture is used to clear this RenderTarget the first time it is drawn to each frame.
    * If this texture is null, `clearColor` will be used instead.
    */
    inputTexture: Texture
    
    /**
    * When `useScreenResolution` is false, controls the horizontal and vertical resolution of the Render Target.
    */
    resolution: vec2
    
    /**
    * When Use Screen Resolution is enabled, this scales the render target resolution relative to the device resolution.
    */
    resolutionScale: number
    
    /**
    * The texture type of the render target.
    */
    textureType: RenderTargetProvider.TextureType
    
    /**
    * If true, the Render Target's resolution will match the device's screen resolution.
    */
    useScreenResolution: boolean
    
}

declare namespace RenderTargetProvider {
    /**
    * Specifies what kind of render target it is. Some texture types, for example TextureCubemap, need additional properties set on the rendering camera to work correctly.
    */
    enum TextureType {
        /**
        * A 2d texture. Render targets are this type by default.
        */
        Texture2D,
        /**
        * A cubemap render target.
        */
        TextureCubemap
    }

}

/**
* Visual effect used to add subtle retouching effects to detected faces (soft skin, teeth whitening, etc.).
* To learn more, visit the [Retouch Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-retouch).
*/
interface RetouchVisual extends MaterialMeshVisual {
    isAuto(): boolean
    
    /**
    * @readonly
    */
    eyeSharpeningEnabled: boolean
    
    /**
    * @readonly
    */
    eyeWhiteningEnabled: boolean
    
    /**
    * The strength of the eye whitening effect.
    */
    eyeWhiteningIntensity: number
    
    /**
    * The index of the face the effect is being applied to.
    */
    faceIndex: number
    
    /**
    * The strength of the eye sharpening effect.
    */
    sharpenEyeIntensity: number
    
    /**
    * @readonly
    */
    softSkinEnabled: boolean
    
    /**
    * The strength of the soft-skin effect.
    */
    softSkinIntensity: number
    
    /**
    * @readonly
    */
    teethWhiteningEnabled: boolean
    
    /**
    * The strength of the teeth whitening effect.
    */
    teethWhiteningIntensity: number
    
}

interface RotatedRect extends ScriptObject {
    /**
    * Returns the description of RotatedRect.
    */
    toString(): string
    
    /**
    * The rotation angle in degrees.
    */
    angle: number
    
    /**
    * The center point (mass center) of RotatedRect.
    */
    center: vec2
    
    /**
    * The width and height of RotatedRect.
    */
    size: vec2
    
}
declare namespace RotatedRect {
    /**
    * Creates a RotatedRect object.
    */
    export function create(center: vec2, size: vec2, angle: number): RotatedRect
    

}

/**
* Used with [DeviceTracking.rotationOptions](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) to change settings for Rotation tracking mode.
*/
interface RotationOptions extends ScriptObject {
    /**
    * If enabled, rotation will be inverted.
    */
    invertRotation: boolean
    
}

interface Sampler extends ScriptObject {
}

/**
* Class for building Sampler.
*/
interface SamplerBuilder extends ScriptObject {
    /**
    * Builds Sampler.
    */
    build(): Sampler
    
    /**
    * Sets border color that will be used for `WrapMode.ClampToBorder` case.
    */
    setBorderColor(borderColor: vec4): SamplerBuilder
    
    /**
    * Sets the filtering mode used for textures sampling.
    */
    setFilteringMode(filteringMode: FilteringMode): SamplerBuilder
    
    /**
    * Sets the flag to use/generate texture mipmaps if they exist/requested.
    */
    setUseMipmaps(value: boolean): SamplerBuilder
    
    /**
    * Sets the same wrap mode for all U, V and W axes.
    */
    setWrapMode(wrapMode: WrapMode): SamplerBuilder
    
    /**
    * Sets the wrap mode U axis.
    */
    setWrapUMode(wrapMode: WrapMode): SamplerBuilder
    
    /**
    * Sets the wrap mode V axis.
    */
    setWrapVMode(wrapMode: WrapMode): SamplerBuilder
    
    /**
    * Sets the wrap mode W axis.
    */
    setWrapWMode(wrapMode: WrapMode): SamplerBuilder
    
}

/**
* An accessor for Pass.samplers when using PassWrappers
*/
interface SamplerWrapper extends ScriptObject {
    /**
    * How the texture will be filtered by the sampler.
    */
    filtering: FilteringMode
    
    /**
    * The texture used by the sampler.
    */
    texture: Texture
    
    /**
    * Whether the texture should wrap.
    */
    wrap: WrapMode
    
    /**
    * Whether the texture should wrap in the x-axis.
    */
    wrapU: WrapMode
    
    /**
    * Whether the texture should wrap in the y-axis.
    */
    wrapV: WrapMode
    
    /**
    * Whether the texture should wrap in the z-axis.
    */
    wrapW: WrapMode
    
}

interface SamplerWrappers extends ScriptObject {
}

/**
* Asset for detecting an object through the Scan system.

* @exposesUserData
*/
interface ScanModule extends Asset {
    /**
    * Starts a single Scan call using the provided list of ScanModule.Contexts. On success it will invoke `scanComplete` providing a JSON string. On failure it will invoke `onFailure` with a failure message passed in as an argument.
    */
    scan(contexts: string[], scanComplete: (resultJson: string) => void, scanFailed: (failureMessage: string) => void): void
    
    /**
    * Optional property to pass in a texture for Scan to use.
    */
    scanTarget: Texture
    
}

declare namespace ScanModule {
    /**
    * Contexts used in `ScanModule.scan()`.
    */
    interface Contexts {
    }

}
declare namespace ScanModule {
    namespace Contexts {
        /**
        * Category containing cars.
        */
        let Cars: string
        
        /**
        * Category containing dogs.
        */
        let Dogs: string
        
        /**
        * Category containing objects.
        */
        let Objects: string
        
        /**
        * Category containing places.
        */
        let Places: string
        
    
    }

}

/**
* The base class for scenewide events.  SceneEvents can be created using [ScriptComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScriptComponent)'s [createEvent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#scriptcomponent--createEvent) method.
*/
interface SceneEvent extends IEventParameters {
    /**
    * Binds a callback function to this event.
    */
    bind(evCallback: (arg1: this) => void): void
    
    /**
    * Returns the typename of the SceneEvent.
    */
    getTypeName(): string
    
    /**
    * If true, the event is able to trigger. If false, the event will not trigger.
    */
    enabled: boolean
    
}

/**
* An object in the scene hierarchy, containing a [Transform](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Transform) and possibly [Components](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components).
* A script can access the SceneObject holding it through the method `script.getSceneObject()`.
*/
interface SceneObject extends SerializableWithUID {
    /**
    * Copies `component` and adds it to the SceneObject, then returns it.
    */
    copyComponent<K extends Component>(component: K): K
    
    /**
    * Creates a shallow copy of the passed in `sceneObject` (not including its hierarchy), and parents it to this SceneObject.
    */
    copySceneObject(sceneObject: SceneObject): SceneObject
    
    /**
    * Creates a deep copy of the passed in `sceneObject` (including its hierarchy), and parents it to this SceneObject.
    */
    copyWholeHierarchy(sceneObject: SceneObject): SceneObject
    
    /**
    * Adds a new component of type `typeName` to the SceneObject.
    */
    createComponent<K extends keyof ComponentNameMap>(typeName: K): ComponentNameMap[K]
    
    /**
    * Destroys the SceneObject.
    */
    destroy(): void
    
    /**
    * Returns this SceneObject's child at index `index`.
    */
    getChild(index: number): SceneObject
    
    /**
    * Returns the number of children the SceneObject has.
    */
    getChildrenCount(): number
    
    /**
    * Returns the first attached Component with type matching or deriving from `componentType`.
    */
    getComponent<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K]
    
    /**
    * Returns a list of attached components with types matching or deriving from `componentType`.
    */
    getComponents<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K][]
    
    /**
    * Returns the SceneObject's parent in the hierarchy, or null if there isn't one.
    */
    getParent(): SceneObject
    
    /**
    * Returns the Transform attached to the SceneObject.
    */
    getTransform(): Transform
    
    /**
    * Returns whether the SceneObject has a parent in the scene hierarchy.
    */
    hasParent(): boolean
    
    /**
    * Unparents the SceneObject in the hierarchy, making it an orphan.
    */
    removeParent(): void
    
    /**
    * Sets the SceneObject's parent to `newParent` in the scene hierarchy.
    */
    setParent(newParent: SceneObject): void
    
    /**
    * Changes the parent of the SceneObject without altering its world position, rotation, or scale.
    */
    setParentPreserveWorldTransform(newParent: SceneObject): void
    
    /**
    * Get an array of the scene object's children.
    
    * @readonly
    */
    children: SceneObject[]
    
    /**
    * Whether the SceneObject, including its components and children, is enabled or disabled.
    */
    enabled: boolean
    
    /**
    * Returns true if this SceneObject and all of its parents are enabled.
    
    * @readonly
    */
    isEnabledInHierarchy: boolean
    
    /**
    * Gets or sets the LayerSet of layers this SceneObject belongs to.
    * This is used to determine which [Cameras](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) will render the SceneObject.
    */
    layer: LayerSet
    
    /**
    * The name of the SceneObject.
    */
    name: string
    
    /**
    * An event that will trigger when a SceneObject goes from enabled in the hiearchy to disabled in the hiearchy.
    
    * @readonly
    */
    onDisabled: event0<void>
    
    /**
    * An event that will trigger when a SceneObject goes from disabled in the hiearchy to enabled in the hiearchy.
    
    * @readonly
    */
    onEnabled: event0<void>
    
}

/**
* Base class for all object-based Event types in Lens Studio (ManipulateStartEvent, TapEvent, etc.).
*/
interface SceneObjectEvent extends SceneEvent {
    /**
    * Returns the SceneObject this Event is associated with.
    */
    getSceneObject(): SceneObject
    
}

/**
* Overrides the settings on a local [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) to fit a screen region on the device.
* See the [Screen Transform guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/2d/screen-transform-overview) for more information.
*/
interface ScreenRegionComponent extends Component {
    /**
    * The region of the screen the local [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) will be fit to.
    */
    region: ScreenRegionType
    
}

/**
* Types of screen regions that can be used with [ScreenRegionComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenRegionComponent).
*/
declare enum ScreenRegionType {
    /**
    * The entire screen area of the device.
    */
    FullFrame,
    /**
    * The screen area shown to the user when recording. On some devices, this region is a subset of FullFrame region.
    */
    Capture,
    /**
    * The screen area shown to the user when previewing a Snap. On some devices, this region is a subset of Capture region.
    */
    Preview,
    /**
    * A screen area that will be visible on all devices and won't overlap Snapchat UI. Safe area to place any UI elements.
    */
    SafeRender,
    /**
    * The screen area where the round "Snap" button is drawn.
    */
    RoundButton
}

/**
* Texture providing the current Render Target being rendered.
*/
interface ScreenTextureProvider extends TextureProvider {
}

/**
* Used for positioning objects in 2d screen space. It overrides the regular [Transform](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Transform) component on the SceneObject it's attached to.

* See the [Screen Transform guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/2d/screen-transform-overview) for more information.
*/
interface ScreenTransform extends Component {
    /**
    * Returns true if the local point is within the boundaries of this ScreenTransform--that is: its position is within `-1` and `1` in both the x and y coordinates.
    
    */
    containsLocalPoint(localPoint: vec2): boolean
    
    /**
    * Returns true if the screen position is within the boundaries of this ScreenTransform.
    * Useful for checking if a touch event overlaps with this object. 
    * This function will calculate the ScreenPoint by heuristically looking for a camera: first checking for a camera in it's parent's hierarchy, then looking for a camera with the same render layer, and finally just choosing the first camera in the scene.
    
    */
    containsScreenPoint(screenPoint: vec2): boolean
    
    /**
    * Returns true if the world position is within the boundaries of this ScreenTransform.
    * The `z` value of the world position is ignored.
    */
    containsWorldPoint(worldPoint: vec3): boolean
    
    /**
    * Returns true if this ScreenTransform is in a valid screen hierarchy, which is required for anchoring to work.
    * To be in a valid screen hierarchy there must be a [Camera](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) component upward in the parent hierarchy, and every
    * object between the Camera and this one must also have a ScreenTransform.
    */
    isInScreenHierarchy(): boolean
    
    /**
    * Converts from a normalized (-1 to 1) position within this ScreenTransform's bounds to a screen position. This function will calculate the ScreenPoint by heuristically looking for a camera: first checking for a camera in it's parent's hierarchy, then looking for a camera with the same render layer, and finally just choosing the first camera in the scene.
    
    */
    localPointToScreenPoint(relativeLocalPoint: vec2): vec2
    
    /**
    * Converts from a normalized (-1 to 1) position within this ScreenTransform's bounds to a world position.
    */
    localPointToWorldPoint(relativeLocalPoint: vec2): vec3
    
    /**
    * Converts from a screen position to a normalized (-1 to 1) position within this ScreenTransform's bounds.
    */
    screenPointToLocalPoint(screenPoint: vec2): vec2 | undefined
    
    /**
    * Converts from a screen position to a normalized (-1 to 1) position within the parent object's bounds.
    * This value is useful because it can be used directly for this ScreenTransform's anchor positioning.
    */
    screenPointToParentPoint(screenPoint: vec2): vec2 | undefined
    
    /**
    * Converts from a world position to a normalized (-1 to 1) position within this ScreenTransform's bounds.
    */
    worldPointToLocalPoint(worldPoint: vec3): vec2
    
    /**
    * Converts from a world position to a normalized (-1 to 1) position within the parent object's bounds.
    * This value is useful because it can be used directly for this ScreenTransform's anchor positioning.
    */
    worldPointToParentPoint(worldPoint: vec3): vec2
    
    /**
    * The anchor rect positioning this ScreenTransform proportional to its parent's bounds.
    * For each field, a value of `0` equals the parent's center point, and value of `-1` or `1` (depending on the side) equals the parent's full boundary.
    
    * For example, a `top` value of `1.0` means this ScreenTransform's top edge will be exactly at the top edge of its parent.
    
    * A `bottom` value of `-0.5` means this ScreenTransform's bottom edge will be halfway between its parent's bottom edge and center.
    
    * A `right` value of `0` means this ScreenTransform's right edge will be exactly at its parent's center.
    
    * A `left` value of `-2` means this ScreenTransform's left edge will be twice as far from its parent's center as its parent's left edge is.
    */
    anchors: Rect
    
    enableDebugRendering: boolean
    
    /**
    * This rect is applied after `anchors` to determine the final boundaries of the ScreenTransform.
    * It adds an offset in world units (based on the parent [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `size` property) to each edge of the ScreenTransform's boundaries.
    
    * For example, a value of `0` for any side will have no effect on boundaries.
    
    *  A value of `1.0` for any side will offset that edge by `1.0` world unit.
    */
    offsets: Rect
    
    /**
    * Normalized (x, y) position of the center point used in rotation. (-1, -1) being bottom left, (0, 0) being center, and (1, 1) being top right of the image.
    */
    pivot: vec2
    
    /**
    * Basic local position in world units relative to the parent's center. Useful for animating screen elements with a simple offset.
    */
    position: vec3
    
    /**
    * Basic local rotation applied to the SceneObject.
    */
    rotation: quat
    
    /**
    * Basic local scaling applied to the SceneObject.
    */
    scale: vec3
    
}

/**
* Represents a JavaScript script which can be used to add logic in your Lens.
*/
interface ScriptAsset extends Asset {
}

/**
* Binds scripts to Events and executes them when triggered. Any script can access the ScriptComponent executing them through the variable `script`.
* See also: [Scripting Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/scripting-overview#script-components), [Script Events Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/script-events#introduction).
*/
interface ScriptComponent extends Component {
    [index:string]: any
    
    /**
    * Adds a new SceneEvent, triggered by `eventType` events, to the ScriptComponent.
    */
    createEvent<K extends keyof EventNameMap>(eventType: K): EventNameMap[K]
    
    /**
    * Removes a previously added SceneEvent from the ScriptComponent.
    */
    removeEvent(event: SceneEvent): void
    
}

/**
* Base class for objects representing Script data.
*/
interface ScriptObject {
    /**
    * Returns the name of this object's type.
    */
    getTypeName(): string
    
    /**
    * Returns true if the object matches or derives from the passed in type.
    */
    isOfType(type: string): boolean
    
    /**
    * Returns true if this object is the same as `other`. Useful for checking if two references point to the same thing.
    */
    isSame(other: ScriptObject): boolean
    
}

/**
* Represents the Lens scene. Accessible through `global.scene`.
*/
interface ScriptScene extends ScriptObject {
    /**
    * Create a texture containing the DepthStencilRenderTargetProvider.
    */
    createDepthStencilRenderTargetTexture(): Texture
    
    /**
    * Creates a new Render Target texture with a [RenderTargetProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#RenderTargetProvider) as its `control` property.
    */
    createRenderTargetTexture(): Texture
    
    /**
    * Adds a new [SceneObject](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject) named `name` to the scene.
    */
    createSceneObject(name: string): SceneObject
    
    /**
    * Returns a string describing the currently active device camera.
    
    * Returns "back" if the rear-facing (aka World) camera is active.
    
    * Returns "front" if the front-facing (aka Selfie) camera is active.
    
    * Otherwise, the camera is not initialized.
    */
    getCameraType(): string
    
    /**
    * Returns the root [SceneObject](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject) at index `index` in the current scene.
    */
    getRootObject(index: number): SceneObject
    
    /**
    * Returns the number of [SceneObjects](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject) in the current scene.
    */
    getRootObjectsCount(): number
    
    /**
    * Returns whether or not the scene is currently being recorded.
    */
    isRecording(): boolean
    
    /**
    * The output Render Target of the actual recorded video.
    */
    captureTarget: Texture
    
    /**
    * Returns true if the device supports Raytracing and Advanced Graphics Features is enabled in the project settings.
    
    * @readonly
    */
    isRayTracingSupported: boolean
    
    /**
    * Similar to `liveTarget`, but this RenderTarget will not have predictive motion adjustments applied to it (only applicable on supported devices). [Learn more](https://docs.snap.com/spectacles/guides/lens-studio-integration/creating-lenses/#overlay-target)
    */
    liveOverlayTarget: Texture
    
    /**
    * The output Render Target that users will see in the live camera and during recording.
    */
    liveTarget: Texture
    
}

/**
* Segmentation model used for [SegmentationTextureProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#SegmentationTextureProvider).
*/
interface SegmentationModel extends BinAsset {
}

/**
* Controls a segmentation texture resource.
* Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on a Segmentation texture.
* For more information, see the [Segmentation](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/segmentation/fullscreen-segmentation) guide.
*/
interface SegmentationTextureProvider extends TextureProvider {
    /**
    * Triggered when the area segmented changes.
    
    * @readonly
    */
    onMaskPercentageUpdated: event1<number, void>
    
}

/**
* Arguments used with the `InteractionComponent.onSelectEnd` event.
*/
interface SelectEndEventArgs extends ScriptObject {
}

/**
* Arguments used with the `InteractionComponent.onSelectStart` event.
*/
interface SelectStartEventArgs extends ScriptObject {
}

/**
* Low-level data class.
*/
interface SerializableWithUID extends ScriptObject {
    /**
    * @readonly
    */
    uniqueIdentifier: string
    
}

/**
* Base type for collision shapes.
*/
interface Shape extends ScriptObject {
}
declare namespace Shape {
    /**
    * Create a BoxShape with default settings.
    */
    export function createBoxShape(): BoxShape
    
    /**
    * Create a CapsuleShape with default settings.
    */
    export function createCapsuleShape(): CapsuleShape
    
    /**
    * Create a ConeShape with default settings.
    */
    export function createConeShape(): ConeShape
    
    /**
    * Create a CylinderShape with default settings.
    */
    export function createCylinderShape(): CylinderShape
    
    /**
    * Create a LevelsetShape with default settings.
    */
    export function createLevelsetShape(): LevelsetShape
    
    /**
    * Creates a new MeshShape.
    */
    export function createMeshShape(): MeshShape
    
    /**
    * Create a SphereShape with default settings.
    */
    export function createSphereShape(): SphereShape
    

}

interface SinglePlaneTrackingUpdatedEvent extends SceneEvent {
}

/**
* Represents skinning data for rigged meshes. See also: [MeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual).
*/
interface Skin extends Component {
    /**
    * Remove all bones on the skin.
    */
    clearBones(): void
    
    /**
    * Get the bone on the skin.
    */
    getSkinBone(boneName: string): SceneObject
    
    /**
    * Get all the bone names on the skin.
    */
    getSkinBoneNames(): string[]
    
    setSkinBone(boneName: string, bone: SceneObject): void
    
}

/**
* Triggered when a smile ends on the tracked face.
*/
interface SmileFinishedEvent extends FaceTrackingEvent {
}

/**
* Triggered when a smile begins on the tracked face.
*/
interface SmileStartedEvent extends FaceTrackingEvent {
}

/**
* Details about friendship between the active user and another user.
*/
interface SnapchatFriendUserInfo {
    /**
    * When this friendship started.
    
    * @readonly
    */
    friendshipStart?: Date
    
    /**
    * Last interaction between this user and the active one.
    
    * @readonly
    */
    lastInteractionTime?: Date
    
}

/**
* Represents a Snapchat user in order to pass to other APIs or to retrieve certain details about the user like display name. 
*/
interface SnapchatUser extends ScriptObject {
    /**
    * User's birth month and day. The month and day will start with the index of 1.
    
    * @readonly
    */
    birthday?: SnapchatUserBirthday
    
    /**
    * Name a Snapchat user has chosen to be shown as. Note that not all users set their display name, so you should treat this value as such.
    
    * @readonly
    */
    displayName?: string
    
    /**
    * Information about friendship between this friend and the active user like start date and streak.
    
    * @readonly
    */
    friendInfo?: SnapchatFriendUserInfo
    
    /**
    * Whether this user has a bitmoji that can be retireved via BitmojiModule.
    
    * @readonly
    */
    hasBitmoji: boolean
    
    /**
    * Snapchat user's unique userName. Should not be relied on as a key because it can be changed.
    
    * @readonly
    */
    userName: string
    
    /**
    * This user's zodiac.
    
    * @readonly
    */
    zodiac?: Zodiac
    
}

/**
* Set the bone on the skin.
*/
interface SnapchatUserBirthday {
    /**
    * @readonly
    */
    day: number
    
    /**
    * @readonly
    */
    month: number
    
}

/**
* Provides a marker for tracking Snapcodes.
* For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
*/
interface SnapcodeMarkerProvider extends MarkerProvider {
}

/**
* Called when the user taps on the capture button to record an image.
*/
interface SnapImageCaptureEvent extends SceneEvent {
}

/**
* Gets called when the user starts long pressing the capture button to record a Snap.
*/
interface SnapRecordStartEvent extends SceneEvent {
}

/**
* Gets called when the user stops long pressing the Snap button to end recording of a Snap.
*/
interface SnapRecordStopEvent extends SceneEvent {
}

/**
* Order that inTensor will be sorted when applying `TensorMath.argSortMasked()`.
*/
declare enum SortOrder {
    /**
    * Applies ascending sorting order when returning indices in TensorMath.argSortMasked().
    */
    Ascending,
    Descending
}

interface SpatialAudio extends ScriptObject {
    /**
    * Directivity effect settings.
    
    * @readonly
    */
    directivityEffect: DirectivityEffect
    
    /**
    * Distance effect settings.
    
    * @readonly
    */
    distanceEffect: DistanceEffect
    
    /**
    * Sets whether spatial audio is enabled or not.
    */
    enabled: boolean
    
    /**
    * Position effect settings.
    
    * @readonly
    */
    positionEffect: PositionEffect
    
}

/**
* Representation the signal strength over time at various frequencies present in a particular waveform. Created by applying Fast Fourier Transform (FFT) on the overlapping segments of the audio data.
*/
interface Spectrogram extends ScriptObject {
    /**
    * Processes audio data from the inTensor of inShape, writes result to the outTensor and returns the outTensor shape.
    */
    process(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): vec3
    
    /**
    * Returns the maximum buffer length.
    
    * @readonly
    */
    maxTensorSize: number
    
}

/**
* The builder class for Spectrogram.
*/
interface SpectrogramBuilder extends ScriptObject {
    /**
    * Creates a new Spectrogram.
    */
    build(): Spectrogram
    
    /**
    * Sets the length of the window.
    */
    setFFTSize(fftSize: number): SpectrogramBuilder
    
    /**
    * Sets the frame size.
    */
    setFrameSize(frameSize: number): SpectrogramBuilder
    
    /**
    * Sets the number of samples between successive FFT segments.
    */
    setHopSize(hopSize: number): SpectrogramBuilder
    
}

/**
* A sphere collision shape.
*/
interface SphereShape extends Shape {
    /**
    * Local radius of the sphere.
    */
    radius: number
    
}

interface SplineComponent extends Component {
}

/**
* Represents transform data for screen-aligned 2D sprites. Use on SceneObjects with a SpriteVisual Component.
* See also: [SpriteVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#deprecated-spritevisual).
*/
interface SpriteAligner extends Component {
    /**
    * The location of the point this sprite is bound to.
    */
    bindingPoint: vec2
    
    /**
    * The width and height of the SpriteVisual.
    */
    size: vec2
    
}

/**
* Stencil buffer clear option.
*/
declare enum StencilClearOption {
    /**
    * Stencil buffer clear operation will be skipped.
    */
    None,
    /**
    * Stencil buffer will be cleared by "clearStencilValue" property value.
    */
    CustomValue,
    /**
    * Stencil buffer will be cleared by texture from "maskTexture" property, if "maskTexture" is null then the stencil clear option will fallback to "CustomValue" mode.
    */
    CustomTexture
}

/**
* Specifies whether the front and/or back face stencil test will be applied. The initial value is "FrontAndBack"
*/
declare enum StencilFace {
    /**
    * The stencil test will be applied to the both front and back faces.
    */
    FrontAndBack,
    /**
    * The stencil test will be applied to the front face only.
    */
    Front,
    /**
    * The stencil test will be applied to the back face only.
    */
    Back
}

/**
* Specifies the stencil test function. The initial value is "Always".
*/
declare enum StencilFunction {
    /**
    * Always passes.
    */
    Always,
    /**
    * Always fails.
    */
    Never,
    /**
    * Passes if (referenceValue & readMask) < (stencil buffer value & readMask).
    */
    Less,
    /**
    * Passes if (referenceValue & readMask) <= (stencil buffer value & readMask).
    */
    LessEqual,
    /**
    * Passes if (referenceValue & readMask) > (stencil buffer value & readMask).
    */
    Greater,
    /**
    * Passes if (referenceValue & readMask) >= (stencil buffer value & readMask).
    */
    GreaterEqual,
    /**
    * Passes if (referenceValue & readMask) = (stencil buffer value & readMask).
    */
    Equal,
    /**
    * Passes if (referenceValue & readMask) != (stencil buffer value & readMask).
    */
    NotEqual
}

/**
* Options for specifying the action to take when stencil and depth tests resolve.
*/
declare enum StencilOperation {
    /**
    * Keep the current value.
    */
    Keep,
    /**
    * Set the stencil buffer value to 0.
    */
    Zero,
    /**
    * Sets the stencil buffer value to "referenceValue" property of StencilState.
    */
    Replace,
    /**
    * Increments the current stencil buffer value. Clamps to the maximum representable unsigned value.
    */
    IncrementClamp,
    /**
    * Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing the maximum representable unsigned value.
    */
    IncrementWrap,
    /**
    * Decrements the current stencil buffer value. Clamps to 0.
    */
    DecrementClamp,
    /**
    * Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable unsigned value when decrementing a stencil buffer value of zero.
    */
    DecrementWrap,
    /**
    * Bitwise inverts the current stencil buffer value.
    */
    Invert
}

/**
* The stencil test state for Pass.
*/
interface StencilState extends ScriptObject {
    /**
    * Specifies the stencil action when the stencil test passes, but the depth test fails. The initial value is "Keep".
    */
    depthFailureOperation: StencilOperation
    
    /**
    * Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. The initial value is "Keep".
    */
    depthStencilPassOperation: StencilOperation
    
    /**
    * Enable or disable the stencil test for pass. The initial value is false.
    */
    enabled: boolean
    
    /**
    * Specifies whether the front and/or back face stencil test will be applied. The initial value is "FrontAndBack"
    */
    face: StencilFace
    
    /**
    * Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is 0xFF.
    */
    readMask: number
    
    /**
    * Specifies the reference value for the stencil test. It is clamped to the range [0..pow(2, n)1], where n is the number of bitplanes in the stencil buffer. The initial value is 0.
    */
    referenceValue: number
    
    /**
    * Specifies the stencil test function. The initial value is "Always".
    */
    stencilCompareFunction: StencilFunction
    
    /**
    * Specifies the action to take when the stencil test fails. The initial value is "Keep".
    */
    stencilFailureOperation: StencilOperation
    
    /**
    * Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is 0xFF.
    */
    writeMask: number
    
}

/**
* Settings for saving values in a MultiplayerSession.
*/
interface StorageOptions extends ScriptObject {
    /**
    * The Storage Scope to set, get, or delete values from.
    */
    scope: StorageScope
    
}
declare namespace StorageOptions {
    /**
    * Create a new StorageOptions object.
    */
    export function create(): StorageOptions
    

}

/**
* Specifies a scope for storing or retrieving values from a MultiplayerSession.
*/
declare enum StorageScope {
    /**
    * Stored variables are visible to the user only, and accessible until lens cache is cleared.
    */
    User,
    /**
    * Stored values are visible and editable by any user who is using the same session. Values are stored as long as the session that corresponds to chat exists.
    */
    Session
}

/**
* Options for stretching a mesh to fit a [ScreenTransform's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) bounding box.
* Used in [MeshVisual's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual) `stretchMode` property, as long as the SceneObject has a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) attached.
* Also used in [TextFill's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextFill) `textureStretch` property to control texture stretching when drawing text.

* See the [Image guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/image) for more information about stretch modes.
*/
declare enum StretchMode {
    /**
    * Scale uniformly so that both width and height fit within the bounds.
    */
    Fit,
    /**
    * Scale uniformly so that both width and height meet or exceed the bounds.
    */
    Fill,
    /**
    * Scale non-uniformly to match the exact width and height of the bounds.
    */
    Stretch,
    /**
    * Scale uniformly to match the same height as the bounds.
    */
    FitHeight,
    /**
    * Scale uniformly to match the same width as the bounds.
    */
    FitWidth,
    /**
    * Same as `Fill`, but when used with the [Image component](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Image) any area outside of the bounds is cropped out.
    */
    FillAndCut
}

interface Studio {
}
declare namespace Studio {
    /**
    * Prints out a message to the Logger window in Studio. When running on a device paired to Lens Studio, it will send the message directly to the Logger window in Studio to help with debugging.
    */
    export function log(message: any): void
    

}

/**
* Used with [DeviceTracking.surfaceOptions](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) to change settings for Surface tracking mode.
*/
interface SurfaceOptions extends ScriptObject {
    /**
    * If enabled, surface tracking will be improved using native AR tracking.
    */
    enhanceWithNativeAR: boolean
    
}

/**
* If a [DeviceTracking](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) component is present in the scene, this event is triggered when
* the tracking is restarted (typically when the Lens starts, or if the user taps the ground).
*/
interface SurfaceTrackingResetEvent extends SceneEvent {
}

declare enum TangentType {
    Const,
    Broken,
    Clamped,
    Free,
    Linear
}

/**
* This event is triggered when the user taps on the screen.
*/
interface TapEvent extends SceneObjectEvent {
}

/**
* Arguments used with the `InteractionComponent.onTap` event.
*/
interface TapEventArgs extends ScriptObject {
    /**
    * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
    
    * @readonly
    */
    position: vec2
    
}

/**
* @wearableOnly
*/
interface TargetingDataArgs extends ScriptObject {
    /**
    * @readonly
    */
    isValid: boolean
    
    /**
    * @readonly
    */
    rayDirectionInWorld: vec3
    
    /**
    * @readonly
    */
    rayOriginInWorld: vec3
    
}

/**
* Namespace for mathematical operations on tensors. Useful with MLComponent.

**Tensor broadcasting rules**

* Tensor (channels, width, height) op Tensor (1, 1, 1)  =  the same as applying op with scalar

* Tensor (channels, width, height) op Tensor (channels, 1, 1)  =  the same as applying op per channel
*/
interface TensorMath {
}
declare namespace TensorMath {
    /**
    * Adds a scalar value to each element of `inTensor` and puts the result into `outTensor`.
    */
    export function addScalar(inTensor: Float32Array, scalar: number, outTensor: Float32Array): void
    
    /**
    * Adds `inTensorA` to `inTensorB` and puts the result into `outTensor`. See the broadcasting rules for elementwise operations.
    */
    export function addTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void
    
    /**
    * Converts inTensor from the amplitude scale to the decibel scale.
    */
    export function amplitudeToDb(inTensor: Float32Array, outTensor: Float32Array): void
    
    /**
    * Blurs an image tensor using the box filter.
    */
    export function applyBoxFilter(inTensor: Float32Array, inShape: vec3, kernelSize: vec2, anchor: vec2, normalize: boolean, borderType: TensorMath.BorderType, outTensor: Float32Array): void
    
    export function applyNMS(inTensor: Float32Array, inShape: vec3, scores: Float32Array, scoreThreshold: number, iouThreshold: number, outTensor: Uint32Array): number
    
    /**
    * Applies a fixed-level threshold to each array element.
    */
    export function applyThreshold(inTensor: Float32Array, threshold: number, maxValue: number, type: TensorMath.ThresholdMethod, outTensor: Float32Array): void
    
    /**
    * Approximates a polygonal curve with the specified precision.
    */
    export function approximatePolygonalCurve(inTensor: Float32Array, inShape: vec3, epsilon: number, closed: boolean, outTensor: Float32Array): number
    
    /**
    * Returns the indices of the maximum values along an the channels of `inTensor`, with the specified `inShape`. The result is put into `outTensor`.
    
    * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 2, channels}.
    */
    export function argMax(inTensor: Float32Array, inShape: vec3, outTensor: Uint32Array): void
    
    /**
    * Similar to `numpy.argsort()`, but in TensorMath, we have no kind and order parameters. Also, tensor is always 3D, and axis can be equal to 0(x), 1(y) or 2(z).
    */
    export function argSort(inTensor: Float32Array, shape: vec3, axis: number, outTensor: Uint32Array): void
    
    /**
    * Applies a list of indices of a tensor in sorted order of their corresponding values in the tensor to the given outTensor. Only indices whose corresponding values are not equal to 0 in the provided mask will be returned. Indices from the original tensor, before applying the mask, will be returned in the provided array. Returns the size of the list of indices applied to the outTensor (note: this will be equal to the number of non-zero values provided in the mask). eg:
    *  
    * ```js
    * var inTensor = [5.0, 2.0, 1.0, 3.0, 7.0, -1.0, -5.0]; 
    * var mask = [1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0]; 
    * var outTensor = new Uint32Array(7); 
    * var order = SortOrder.Ascending;
    * var size = TensorMath.argSortMasked(inTensor, mask, outTensor, order); 
    * print(outTensor.subarray(size)); // Expected: [2, 1, 3, 0, 4]
    * ```
    
    */
    export function argSortMasked(inTensor: Float32Array, mask: Float32Array, outTensor: Uint32Array, order: SortOrder): number
    
    /**
    * Clamps all values of `inTensor` between `minVal` and `maxVal`, and puts the result into `outTensor`.
    */
    export function clamp(inTensor: Float32Array, minVal: number, maxVal: number, outTensor: Float32Array): void
    
    /**
    * Concatenates inTensorA and inTensorB along the specified axis and puts the result to the outTensor. Input arrays have to have same dimension along other 2 axes.
    */
    export function concat(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, axis: number, outTensor: Float32Array): void
    
    /**
    * Dilates an image by using a specific structuring element.
    */
    export function dilate(inTensor: Float32Array, inShape: vec3, kernelTensor: Float32Array, kernelShape: vec3, anchor: vec2, iterations: number, borderType: TensorMath.BorderType, borderValue: vec4, outTensor: Float32Array): void
    
    /**
    * Divides `inTensorA` by `inTensorB` and puts the result into `outTensor`. See broadcasting rules for elementwise operations.
    */
    export function divTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void
    
    /**
    * Draws a line segment connecting two points.
    */
    export function drawLine(imgTensor: Float32Array, imgShape: vec3, point1: vec2, point2: vec2, color: vec4, thickness: number, lineType: number, shift: number): void
    
    /**
    * Erodes an image by using a specific structuring element.
    */
    export function erode(inTensor: Float32Array, inShape: vec3, kernelTensor: Float32Array, kernelShape: vec3, anchor: vec2, iterations: number, borderType: TensorMath.BorderType, borderValue: vec4, outTensor: Float32Array): void
    
    /**
    * Fills a convex polygon.
    */
    export function fillConvexPoly(imgTensor: Float32Array, imgShape: vec3, pointsTensor: any, pointsShape: vec3, color: vec4, lineType: number, shift: number): void
    
    /**
    * Fills a polygon. Note that you should pass an Array of Int32Array-s (polygonsTensors).
    
    */
    export function fillPoly(imgTensor: Float32Array, imgShape: vec3, polygonsTensors: any[], color: vec4, lineType: number, shift: number, offset: vec2): void
    
    /**
    * Returns contours. Note that: contours are sorted from the largest to the smallest; 2) We cannot return Array of TypedArray-s, so all contours data is stored in single outTensor and Array with sizes of each contour is returned.
    
    */
    export function findContours(inTensor: Uint8Array, inShape: vec3, mode: number, method: number, offset: vec2, outTensor: any): number[]
    
    /**
    * Finds minimum distances between each 2D point from one array, to 2D points in another array.
    
    * `from` - Float32Array of size ("from" point count * 2). 2D points from which min distances should be found
    
    * `fromShape` - Should be {2, "from" point count, 1}
    
    * `to` - Float32Array of size ("to" point count * 2). 2D points to which min distances should be found
    
    * `toShape` - Should be {2, "to" point count, 1}
    
    * `output` - Float32Array of size ("from" point count). For each point in the `from` array, the minimum distance to points from the `to` array will be written to this array.
    */
    export function findMinDistancesBetween(from: Float32Array, fromShape: vec3, to: Float32Array, toShape: vec3, output: Float32Array): void
    
    /**
    * Looks for contour points in a grayscale texture, or any one-channel tensor.
    
    * `grayscaledTexture` - Float32Array of size (width * height). Grayscale texture or one-channel tensor to evaluate
    
    * `textureShape` - Should be {width, height, 1}
    
    * `threshold` - Quality value threshold for found contour points
    
    * Each contour point found must satisfy these conditions:
    
    * 1. The point's quality value should be >= `threshold`
    
    * 2. The number of points which have values < `threshold` and lie in the rectangle with left corner vec2(x-`winSize`, y-`winSize`) and right corner vec2(x+`winSize`-1, y+`winSize`-1) should be <= `maxNearCount`
    
    * `outTensor` - Float32Array where results are written. Found contour points are written in the format: x0, y0, x1, y1, etc.
    * The number of points found will not exceed outTensor's size / 2.
    */
    export function getContour(grayscaledTexture: Float32Array, textureShape: vec3, threshold: number, winSize: number, maxNearCount: number, outTensor: Float32Array): number
    
    export function getRotatedRectPoints(rotatedRect: RotatedRect, outTensor: Float32Array): void
    
    /**
    * Calculates the length of all vectors in an array. Vectors can be of any dimension count.
    
    * `vectors` - Float32Array of size (vector dimension count * vector count). Vectors to measure the length of
    
    * `vectorsShape` - Should be {vector dimension count, vector count, 1}
    
    * `output` - Float32Array of size (vector count). For each vector in `vectors`, its length will be written to this array
    */
    export function getVectorsLength(vectors: Float32Array, vectorsShape: vec3, output: Float32Array): void
    
    /**
    * Checks for each 2D point whether it is inside of a rectangle.
    
    * `points` - Float32Array of size (point count * 2). 2D points to check
    
    * `pointsShape` - Should be {2, point count, 1}
    
    * `rect` - 2D rectangle points will be checked against
    
    * `output` - Uint8Array of size (point count). For each point, this will be filled with 1 if the point is inside the rectangle, or 0 otherwise.
    */
    export function isInRectangle(points: Float32Array, pointsShape: vec3, rect: Rect, output: Uint8Array): void
    
    /**
    * Places the maximum values of `inTensor` into `outTensor`.
    
    * `outTensor` should have the shape {1, 1, channels}.
    */
    export function max(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): void
    
    /**
    * From the input points, finds the two points with the maximum distance between them and returns this distance. Works with points of any dimension count.
    
    * `points` - Float32Array of size (point dimension count * point count). Points to find the max distance between.
    
    * `pointsShape` - Should be {point dimension count, point count, 1}
    */
    export function maxDistanceBetweenPoints(points: Float32Array, pointsShape: vec3): number
    
    /**
    * If we consider the tensor as a 3D array, this function finds the indexes of the maximum element in each subarray of size `window`.
    
    * `tensor` - Float32Array of size (width * height * depth). 3D array of input data
    
    * `tensorShape` - Should be {width, height, depth}
    
    * `window` - Size of each subarray, in each of which will be found the index of the max element
    
    * `output` - Float32Array of size (width * height * depth). The index of the max value will be written into this array for each subarray.
    */
    export function maxInSlideWindow(tensor: Float32Array, tensorShape: vec3, window: vec3, output: Uint32Array): void
    
    /**
    * Places the minimum values of `inTensor` into `outTensor`.
    
    * `outTensor` should have the shape {1, 1, channels}.
    */
    export function min(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): void
    
    /**
    * Return TensorMath's format of RotatedRect.
    
    */
    export function minAreaRect(inTensor: Float32Array, inShape: vec3): RotatedRect
    
    /**
    * If we consider the tensor as a 3D array, this function finds the indexes of the minimum element in each subarray of size `window`.
    
    * `tensor` - Float32Array of size (width * height * depth). 3D array of input data
    
    * `tensorShape` - Should be {width, height, depth}
    
    * `window` - Size of each subarray, in each of which will be found the index of the min element
    
    * `output` - Float32Array of size (width * height * depth). The index of the min value will be written into this array for each subarray.
    */
    export function minInSlideWindow(tensor: Float32Array, tensorShape: vec3, window: vec3, output: Uint32Array): void
    
    /**
    * Multiply a matrix by a set of points through an efficient batch operation.
    */
    export function mulMatToPoints(pointsTensor: Float32Array, pointsShape: vec3, matrix: mat4, outTensor: Float32Array): void
    
    /**
    * Multiplies each element of `inTensor` by a scalar value and puts the result into `outTensor`.
    */
    export function mulScalar(inTensor: Float32Array, scalar: number, outTensor: Float32Array): void
    
    /**
    * Multiplies `inTensorA` and `inTensorB` and puts the result into `outTensor`. See broadcasting rules for elementwise operations.
    */
    export function mulTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void
    
    /**
    * Stabilizes image objects between two consecutive frames caused by camera or object movement.
    * Results are written to the `points` array.
    
    * `prevGrayscale` - Uint8Array of size (width * height). Grayscale data of previous frame
    
    * `grayscale` - Uint8Array of size (width * height). Grayscale data of current frame
    
    * `textureShape` - Should be {width, height, 1}
    
    * `prevPoints` - Float32Array of size (point count * 2). Positions of 2D points on the previous frame
    
    * `points` - Float32Array of size (point count * 2). Results are written here - positions of 2D points on the current frame
    
    * `pointsShape` - Should be {2, point count, 1}
    
    * `winSize` - Size of the search window for each pyramid level
    
    * `maxLevel` - Maximal pyramid level number, with zero based index
    
    * `maxCount` - Terminate if iteration count exceeds maxCount
    
    * `epsilon` - Terminate if window movement is less than epsilon
    */
    export function opticalFlow(prevGrayscale: Uint8Array, grayscale: Uint8Array, textureShape: vec3, prevPoints: Float32Array, points: Float32Array, pointsShape: vec3, winSize: vec2, maxLevel: number, maxCount: number, epsilon: number): void
    
    /**
    * Rearranges the inTensor of inShape according to the desired ordering and puts the result into outTensor.
    */
    export function permute(inTensor: Float32Array, inShape: vec3, permuteAxis: vec3, outTensor: Float32Array): void
    
    /**
    * Sorts 2D points by polar angle relative to the `center` point.
    
    * `inTensor` - Float32Array with size (point count * 2). 2D points to sort
    
    * `tensorShape` - Should be {2, point count, 1}
    
    * `center` - Center point to use for polar angle sorting
    */
    export function polarSort2d(inTensor: Float32Array, tensorShape: vec3, center: vec2): void
    
    /**
    * Raises elements of `inTensor` to the power of `val`, and puts the results into `outTensor`.
    */
    export function power(inTensor: Float32Array, val: number, outTensor: Float32Array): void
    
    /**
    * Converts inTensor from the power scale to the decibel scale.
    */
    export function powerToDb(inTensor: Float32Array, topDb: number, outTensor: Float32Array): void
    
    /**
    * Project 3D points into 2D space using an efficient batch operation.
    */
    export function projectPoints(pointsTensor: Float32Array, pointsShape: vec3, projectionMatrix: mat4, outTensor: Float32Array): void
    
    /**
    * Duplicates inTensor elements and store result in the outTensor.
    
    * Axis specifies the number of repeats along the axis e.g:
    
    * axis(1, 1, 1): outTensor will be the same as inTensor
    
    * axis(2, 1, 2): inTesnor = [1 2 3 | 4 5 6], inShape = [3 2 1] => 
    
    * outTensor = [[1 1 2 2 3 3 | 4 4 5 5 6 6] [1 1 2 2 3 3 | 4 4 5 5 6 6]] outShape = [6 2 2]
    */
    export function repeat(inTensor: Float32Array, inShape: vec3, axis: vec3, outTensor: Float32Array): void
    
    /**
    * Applies a rotation to each point in a set of 3D points, and places the results in `outPoints`.
    
    * `points` - Float32Array of size (point count * 3). Points to rotate
    
    * `pointsShape` - Should be {3, point count, 1}
    
    * `rotation` - Quaternion rotation to apply
    
    * `outPoints` - Float32Array of size (point count * 3). Resulting rotated points are placed here
    */
    export function rotatePoints3d(points: Float32Array, pointsShape: vec3, rotation: quat, outPoints: Float32Array): void
    
    /**
    * Smooths a polygon formed by input points. Works with points of any dimension count, for example `2` for 2D points or `3` for 3D points.
    * Results are written to `outTensor`.
    
    * `inTensor` - Float32Array of size (point dimension count * point count). Points of polygon to smooth out
    
    * `tensorShape` - Should be {point dimension count, point count, 1}
    
    * `step` - Smoothing value, higher value meaning higher smoothness
    
    * `outTensor` - Float32Array of size (point dimension count * point count). Smoothed points are written to this array
    */
    export function smoothPoints(inTensor: Float32Array, tensorShape: vec3, step: number, outTensor: Float32Array): void
    
    /**
    * Applies softArgMax function to the `inTensor`, with the specified `inShape`. The result is put into `outTensor`.
    
    * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 2, channels}.
    */
    export function softArgMax(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array, normalized: boolean): void
    
    /**
    * Applies softMax function to `inTensor`, with the specified `inShape`. The result is put into `outTensor`.
    
    * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 1, channels}.
    */
    export function softMax(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array): void
    
    /**
    * Estimates the object pose given a set of object points (`inObjectPoints`), their corresponding image projections (`inImagePoints`), and the intrinsic camera matrix (`transform`).
    
    * `inObjectPoints` - Float32Array of size (point count * 3). 3D points of the object
    
    * `inImagePoints` - Float32Array of size (point count * 2). 2D points which are projections of the points in `inObjectPoints`, with some applied transformation we are attempting to find
    
    * `imagePointsShape` - Should be {2, point count, 1}
    
    * `transform` - Intrinsic camera matrix
    
    * `flags` - Currently unused, can be left as 0. Further functionality may be added in the future.
    
    * `outRotTrans` - Float32Array of size 6 where results are written. Describes object transformation:
    
    **vec3(outRotTrans[0], outRotTrans[1], outRotTrans[2])** - object rotation in Rodrigues format
    
    **vec3(outRotTrans[3], outRotTrans[4], outRotTrans[5])** - object position in 3D space
    */
    export function solvePnP(inObjectPoints: Float32Array, inImagePoints: Float32Array, imagePointsShape: vec3, transform: mat3, flags: number, outRotTrans: Float32Array): boolean
    
    /**
    * Estimates the object pose given a set of object points (inObjectPoints), their corresponding image projections (inImagePoints), and the intrinsic camera matrix (cameraIntrinsicsMatrix). Similar to solvePnP but has additional camera distortion coefficient settings.
    
    * `distortionCoeff` - Input vector of distortion coefficients. If the vector is null - the zero distortion coefficients are assumed. 
    
    * `distortionCoeffShape` - {numElements, 1, 1} where numElements can be 4, 5, 8 or 12.
    
    * `useExtrinsicGuess` - The function uses the provided outRotTrans values as initial approximations of the rotation and translation vectors and further optimizes them.
    
    */
    export function solvePnPExtended(inObjectPoints: Float32Array, inImagePoints: Float32Array, imagePointsShape: vec3, cameraIntrinsicsMatrix: mat3, distortionCoeff: Float32Array, distortionCoeffShape: vec3, useExtrinsicGuess: boolean, flags: number, outRotTrans: Float32Array): boolean
    
    /**
    * `solvePnPRansac` is very similar to `solvePnPExtended` except that it uses Random Sample Consensus ( RANSAC ) for robustly estimating the pose.
    
    * `iterationsCount` - The number of times the minimum number of points are picked and the parameters estimated
    
    * `reprojectionError` - As mentioned earlier in RANSAC the points for which the predictions are close enough are called inliers. This parameter value is the maximum allowed distance between the observed and computed point projections to consider it an inlier.
    
    * `confidence` -  Number of inliers. If the algorithm at some stage finds more inliers than confidence, it finishes.
    * `outInliers` - Output array that contains indices of inliers in objectPoints and imagePoints .
    * outRotTrans
    */
    export function solvePnPRansac(inObjectPoints: Float32Array, inImagePoints: Float32Array, imagePointsShape: vec3, cameraIntrinsicsMatrix: mat3, distortionCoeff: Float32Array, distortionCoeffShape: vec3, useExtrinsicGuess: boolean, iterationsCount: number, reprojectionError: number, confidence: number, flags: number, outInliers: Uint8Array, outRotTrans: Float32Array): boolean
    
    /**
    * Subtracts `inTensorB` from `inTensorA` and puts the result into `outTensor`. See the broadcasting rules for elementwise operations.
    */
    export function subTensors(inTensorA: Float32Array, inShapeA: vec3, inTensorB: Float32Array, inShapeB: vec3, outTensor: Float32Array): void
    
    /**
    * Applies subpixelArgMax function to the `inTensor`, with the specified `inShape` and kernel size. The result is put into `outTensor`.
    
    * If `inShape` = {width, height, channels}, then the shape of `outTensor` should be {1, 2, channels}.
    */
    export function subpixelArgMax(inTensor: Float32Array, inShape: vec3, outTensor: Float32Array, kernelSize: number): void
    
    /**
    * Calculate the sum of the inTensor elements and store result in the outTensor.
    
    * Axis specifies axis along which a sum is performed., e.g:
    
    * axis(0, 0, 0): the sum will be performed on the whole tensor
    
    * axis(0, 0, 1): the sum will be performed along the z axis. outTensor will store inShape.z values
    
    * axis(1, 1, 0): the sum will be performed along x and y axes. outTensor will store 
    
    * inShape.x * inShape.y values, where outTensor[y][x] is the sum of all inTensor[0..inShape.z-1][y][x] values
    */
    export function sum(inTensor: Float32Array, inShape: vec3, axis: vec3, outTensor: Float32Array): void
    
    /**
    * Converts the texture to a set of 0-255 grayscale values, and outputs the result into `outTensor`.
    
    * `outTensor` should be a Uint8Array of shape {width, height, 1}.
    
    * @exposesUserData
    */
    export function textureToGrayscale(texture: Texture, grayscaleBuffer: Uint8Array, grayscaleBufferShape: vec3): void
    

}

declare namespace TensorMath {
    enum BorderType {
        Constant,
        Replicate,
        Reflect,
        Reflect101
    }

}

declare namespace TensorMath {
    enum ThresholdMethod {
        Binary,
        BinaryInv,
        Trunc,
        ToZero,
        ToZeroInv
    }

}

/**
* Visual component that renders dynamic text.
* See the [Text guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/text/2d-text) for more information.
*/
interface Text extends BaseMeshVisual {
    /**
    * Settings for drawing a background behind the text.
    */
    backgroundSettings: BackgroundSettings
    
    capitilizationOverride: CapitilizationOverride
    
    /**
    * Controls the masking of color channels with a vec4b representing each channel with a boolean.
    */
    colorMask: vec4b
    
    /**
    * If enabled, the text material will use Depth Testing. Useful when Text exists in 3D space.
    */
    depthTest: boolean
    
    /**
    * Settings for how dropshadow is used in text drawing.
    */
    dropshadowSettings: DropshadowSettings
    
    /**
    * Makes the Text component editable. When this is enabled the Text can be clicked to open up the device keyboard and edit the contents.
    */
    editable: boolean
    
    /**
    * Font asset used.
    */
    font: Font
    
    /**
    * Controls how text should be handled when it goes past the horizontal boundaries defined by the world space rect or ScreenTransform.
    
    */
    horizontalOverflow: HorizontalOverflow
    
    /**
    * Modifies the spacing between letters. Set to 0 by default, which uses the font's normal letter spacing.
    * Negative values will remove space between letters, and positive values will add more space between letters.
    */
    letterSpacing: number
    
    /**
    * Modifies the vertical spacing between lines, as a multiple of lines. 1 will be single spacing, 2 will be double spaced, and 0.5 would be half the normal line height.
    */
    lineSpacing: number
    
    /**
    * This event will notify you when the user finishes editing the text.
    
    * @readonly
    */
    onEditingFinished: event1<string, void>
    
    /**
    * This event will notify you when the input keyboard opens.
    
    * @readonly
    */
    onEditingStarted: event0<void>
    
    /**
    * This event will notify you on every edit to the text while the user is typing.
    
    * @readonly
    */
    onEditingUpdated: event1<string, void>
    
    /**
    * Settings for how text outline is used in text drawing.
    */
    outlineSettings: OutlineSettings
    
    /**
    * Use this property to control whether to show the input preview the keyboard. Note this preview also enables cursor movement.
    */
    showEditingPreview: boolean
    
    /**
    * Font size used.
    */
    size: number
    
    /**
    * If enabled, the rendered text will always scale to fit the boundaries defined by the world space rect or ScreenTransform.
    
    */
    sizeToFit: boolean
    
    /**
    * Text string to be drawn.
    */
    text: string
    
    /**
    * Settings for how the text is drawn, such as fill color or texture.
    */
    textFill: TextFill
    
    /**
    * Use this property to override the touch handling for when to open the device keyboard when the Text is editable.
    */
    touchHandler: InteractionComponent
    
    /**
    * Controls how text should be handled when it goes past the vertical boundaries defined by the world space rect or ScreenTransform.
    
    */
    verticalOverflow: VerticalOverflow
    
    /**
    * Controls the boundaries the text is aligned and wraps within when not using ScreenTransform. Referred to as the Layout Rect in the Inspector panel.
    
    */
    worldSpaceRect: Rect
    
}

/**
* Renders a given text with a 3D mesh.
*/
interface Text3D extends MaterialMeshVisual {
    /**
    * Splits the Text3D into individual RenderMeshVisuals. This destroys the Text3D component and you can no longer edit its properties like text.
    */
    split(): RenderMeshVisual[]
    
    capitilizationOverride: CapitilizationOverride
    
    /**
    * Makes the Text component editable. When this is enabled the Text can be clicked to open up the device keyboard and edit the contents.
    */
    editable: boolean
    
    /**
    * Starting from the Text3D's local position control whether the meshes are extruded forwards, backwards, or both directions
    */
    extrudeDirection: number
    
    /**
    * How deep the text meshes should be relative to the line height. 0-1 portion of the basic height which will be used for mesh depth. Values > 1 are valid.
    */
    extrusionDepth: number
    
    /**
    * Font asset used.
    */
    font: Font
    
    /**
    * Controls how text should be handled when it goes past the horizontal boundaries defined by the world space rect or ScreenTransform.
    
    */
    horizontalOverflow: HorizontalOverflow
    
    /**
    * Modifies the spacing between letters. Set to 0 by default, which uses the fonts normal letter spacing. Negative values will remove space between letters, and positive values will add more space between letters.
    */
    letterSpacing: number
    
    /**
    * Modifies the vertical spacing between lines, as a multiple of lines. 1 will be single spacing, 2 will be double spaced, and 0.5 would be half the normal line height.
    */
    lineSpacing: number
    
    /**
    * This event will notify you when the user finishes editing the text.
    
    * @readonly
    */
    onEditingFinished: event1<string, void>
    
    /**
    * This event will notify you when the user starts typing.
    
    * @readonly
    */
    onEditingStarted: event0<void>
    
    /**
    * This event will notify you on every edit to the text while the user is typing.
    
    * @readonly
    */
    onEditingUpdated: event1<string, void>
    
    /**
    * Use this property to control whether to show the input preview the keyboard. Note this preview also enables cursor movement.
    */
    showEditingPreview: boolean
    
    /**
    * Font size used.
    */
    size: number
    
    /**
    * If enabled, the rendered text will always scale to fit the boundaries defined by the world space rect or ScreenTransform.
    
    */
    sizeToFit: boolean
    
    /**
    * Text string to be drawn.
    */
    text: string
    
    /**
    * Use this property to override the touch handling for when to open the device keyboard when the Text is editable.
    */
    touchHandler: InteractionComponent
    
    /**
    * Controls how text should be handled when it goes past the vertical boundaries defined by the world space rect or ScreenTransform.
    
    */
    verticalOverflow: VerticalOverflow
    
    /**
    * Controls the boundaries the text is aligned and wraps within when not using ScreenTransform. Referred to as the Layout Rect in the Inspector panel.
    
    */
    worldSpaceRect: Rect
    
}

/**
* Fill settings used by several text related classes.
* Used in [Text's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `textFill` property, [DropshadowSettings'](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#DropshadowSettings) `fill` property, and [OutlineSettings'](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OutlineSettings) `fill` property.
*/
interface TextFill extends ScriptObject {
    /**
    * If `mode` is set to `TextFillMode.Solid`, this will be used as the solid color used in drawing.
    */
    color: vec4
    
    /**
    * Controls which drawing method is used. Can switch between `Texture` mode (for drawing using a tiled texture) or `Solid` mode (for drawing a solid color).
    */
    mode: TextFillMode
    
    /**
    * If `mode` is set to `TextFillMode.Texture`, this will be used as the texture asset used in drawing.
    */
    texture: Texture
    
    /**
    * If `mode` is set to `TextFillMode.Texture`, this defines what type of stretching is used when the
    * Texture's aspect ratio doesn't match the drawing area's aspect ratio.
    */
    textureStretch: StretchMode
    
    /**
    * If `mode` is set to `TextFillMode.Texture`, this defines how many times the texture will tile across its drawing zone.
    */
    tileCount: number
    
    /**
    * If `mode` is set to `TextFillMode.Texture`, this defines what area should be used for tiling the texture.
    */
    tileZone: TileZone
    
}

/**
* Used in [TextFill's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextFill) `mode` property. Controls which drawing method is used for the TextFill.
*/
declare enum TextFillMode {
    /**
    * Solid color will be used for drawing.
    */
    Solid,
    /**
    * Tiled texture will be used for drawing.
    */
    Texture
}

interface TextInputModule extends Asset {
}

/**
* Provides access to the device's input system. Accessible through `global.textInputSystem`. 
*/
interface TextInputSystem extends ScriptObject {
    /**
    * Requests the client to hide the keyboard and clear any existing text in the inivisible text view.
    */
    dismissKeyboard(): void
    
    /**
    * Requests the client to pop up the keyboard with specific type and return key type, fill the inivisible text view with the initial text, and set the selected text range. When user starts editing the text, the new text string and the new selected range are returned to the lens by invoking the onTextChanged function.
    */
    requestKeyboard(options: TextInputSystem.KeyboardOptions): void
    
    /**
    * Requests the client to set the editing ("cursor") position on the invisible text view.
    */
    setEditingPosition(position: number): void
    
    /**
    * Requests the client to set the selected text range on the invisible text view.
    */
    setSelectedTextRange(range: vec2): void
    
}

declare namespace TextInputSystem {
    /**
    * The settings used for how the input keyboard should work.
    */
    class KeyboardOptions {
        /**
        * The type of keyboard to be used for input.
        */
        constructor()
        
        /**
        * Sets whether a preview should be visible above the input keyboard.
        */
        enablePreview: boolean
        
        /**
        * Initial selected text range to set on the inivisible text view.
        */
        initialSelectedRange: vec2
        
        /**
        * Initial text to fill into the invisible text view.
        */
        initialText: string
        
        /**
        * Requested keyboard type.
        */
        keyboardType: TextInputSystem.KeyboardType
        
        /**
        * Callback to be invoked when there is an error.
        */
        onError: (error: number, description: string) => void
        
        /**
        * Callback to be invoked when keyboard is shown or dismissed.
        */
        onKeyboardStateChanged: (keyboardIsOpen: boolean) => void
        
        /**
        * Callback to be invoked when the user presses the return key.
        */
        onReturnKeyPressed: () => void
        
        /**
        * Callback to be invoked every time the user presses a (non-return) key.
        */
        onTextChanged: (text: string, range: vec2) => void
        
        /**
        * Requested return key type.
        */
        returnKeyType: TextInputSystem.ReturnKeyType
        
    }

}

declare namespace TextInputSystem {
    /**
    * The different input style of keyboard input.
    */
    enum KeyboardType {
        /**
        * A keyboard type for entering normal text
        */
        Text,
        /**
        * A keyboard type for entering digits
        */
        Num,
        /**
        * A keyboard type for entering phone numbers
        */
        Phone,
        /**
        * A keyboard type for entering URLs
        */
        Url
    }

}

declare namespace TextInputSystem {
    /**
    * The return key style of keyboard input.
    */
    enum ReturnKeyType {
        /**
        * Return key label shows "Done"
        */
        Done,
        /**
        * Return key label shows "Go"
        */
        Go,
        /**
        * Return key label shows "Next"
        */
        Next,
        /**
        * Return key label shows "return"
        */
        Return,
        /**
        * Return key label shows "Search"
        */
        Search,
        /**
        * Return key label shows "Send"
        */
        Send
    }

}

/**
* Controls a text rendering texture. Can be accessed through the main rendering pass on a [Label](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#deprecated-label) component.
* The properties here mirror those on Label.
*/
interface TextProvider extends TextureProvider {
    /**
    * The font used for rendering text.
    */
    fontAsset: Font
    
    /**
    * The color used for the outline effect.
    */
    outlineColor: vec4
    
    /**
    * The strength of the outline effect.
    */
    outlineSize: number
    
    /**
    * The color used for dropshadow.
    */
    shadowColor: vec4
    
    /**
    * The horizontal and vertical offset used for dropshadow.
    */
    shadowOffset: vec2
    
    /**
    * The font size being used.
    */
    size: number
    
    /**
    * The text being rendered.
    */
    text: string
    
    /**
    * The color for rendering text.
    */
    textColor: vec4
    
    /**
    * If enabled, adds a dropshadow to the text.
    */
    useDropshadow: boolean
    
    /**
    * If enabled, renders an outline around the text.
    */
    useOutline: boolean
    
}

interface TextToSpeech {
}

declare namespace TextToSpeech {
    /**
    * Provides the configuration for the [Text to Speech Module](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextToSpeechModule).   It is used to control the language of the generated voice, the voice’s style and pace.
    */
    interface Options extends ScriptObject {
    }

}
declare namespace TextToSpeech {
    namespace Options {
        /**
        * Creates options for the [Text to Speech Module](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextToSpeechModule).
        */
        export function create(): TextToSpeech.Options
        
    
    }

}

declare namespace TextToSpeech {
    /**
    * Provides a map of what phoneme is said at what time in the synthesized speech.
    */
    interface PhonemeInfo extends ScriptObject {
        /**
        * Phoneme end time in milliseconds.
        
        * @readonly
        */
        endTime: number
        
        /**
        * Is the phonemes part of an abusive word.
        
        * @readonly
        */
        isAbusive: boolean
        
        /**
        * The phoneme found for the alloted time.
        
        * @readonly
        */
        phoneme: string
        
        /**
        * Phoneme start time in milliseconds.
        
        * @readonly
        */
        startTime: number
        
    }

}

declare namespace TextToSpeech {
    /**
    * The voice style on which the TextToSpeech will be synthesized, Varying from neutral style, to a more elaborated styles depending on the voice. Note that Sam’s voice still doesn’t have more than the neutral style, this will be added throughout the coming releases.
    */
    interface VoiceNames {
    }

}

declare namespace TextToSpeech {
    /**
    * Parameter returned in the `onTTSCompleteHandler` callback providing timing details for word pronunciation. 
    */
    interface WordInfo extends ScriptObject {
        /**
        * The time in milliseconds when the word ended in the audio. 
        
        * @readonly
        */
        endTime: number
        
        /**
        * The time in milliseconds when the word started in the audio. 
        
        * @readonly
        */
        startTime: number
        
        /**
        * The words the synthesized audio was generated for (as text might be expanded during the synthesize process, there might be a slight variation between the input text and the words returned). 
        
        * @readonly
        */
        word: string
        
    }

}

/**
* Allows generation of speech from a given text. You can use only one `TextToSpeechModule` in a Lens. However, its methods can be called multiple times in parallel if needed. 
*/
interface TextToSpeechModule extends Asset {
    /**
    * Generates speech ([AudioTrackAsset](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#AudioTrackAsset)) of a given text. `Input` should be the text to synthesize (Currently supports text in English only. Non English characters will be stripped). `Options` should be a [TextToSpeechOptions](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#TextToSpeechOptions). `onTTsComplete` should be a callback function which will be called once the audio generation is completed. The callback will receive two parameters: the generated audio file ([AudioTrackAsset](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#AudioTrackAsset)) and maps of word/timing ([WordInfos](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#TextToSpeechWordInfo)). `onTTSError` should be a callback function which will be called if there is an error. This callback will receive a message of the error code and its description. 
    */
    synthesize(input: string, options: TextToSpeech.Options, onTTSComplete: (audioTrackAsset: AudioTrackAsset, wordInfo: TextToSpeech.WordInfo[], phonemeInfo: TextToSpeech.PhonemeInfo[], voiceStyle: any) => void, onTTSError: (error: number, description: string) => void): void
    
}

/**
* Represents a texture file asset.
*/
interface Texture extends Asset {
    /**
    * Returns a Texture that captures the current state of this Texture Asset.
    */
    copyFrame(): Texture
    
    /**
    * Creates a marker asset from the texture. 
    */
    createMarkerAsset(): MarkerAsset
    
    /**
    * Returns the Colorspace of the Texture.
    */
    getColorspace(): Colorspace
    
    /**
    * Returns the height of the texture.
    */
    getHeight(): number
    
    /**
    * Returns the width of the texture.
    */
    getWidth(): number
    
    /**
    * The TextureProvider for the texture, which may control things like animation depending on the texture type.
    * See also: [AnimatedTextureFileProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#AnimatedTextureFileProvider).
    */
    control: TextureProvider
    
}

/**
* The base class for specialized Texture providers. Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider).
*/
interface TextureProvider extends Provider {
    /**
    * Returns the texture's aspect ratio, which is calculated as width / height.
    */
    getAspect(): number
    
    /**
    * Returns the height of the texture in pixels.
    */
    getHeight(): number
    
    /**
    * Returns the width of the texture in pixels.
    */
    getWidth(): number
    
}

/**
* Defines the bounding area used for texture tiling with [TextFill's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextFill) `tileZone` property.
*/
declare enum TileZone {
    /**
    * The attached [ScreenTransform's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) bounding rectangle is used for texture tiling
    */
    Rect,
    /**
    * The Text component's drawn area (extents) is used for texture tiling
    */
    Extents,
    /**
    * Each character uses its own drawn area for texture tiling
    */
    Character,
    /**
    * The position of each character in screen space is used for tiling
    */
    Screen
}

/**
* This provider is returned by `global.touchSystem` and allows your lens to handle any touches on the screen, and optionally let certain touch types to pass through (let Snapchat handle the touch).

* Possible TouchType exception values:

* "TouchTypeNone"
* "TouchTypeTouch"
* "TouchTypeTap"
* "TouchTypeDoubleTap"
* "TouchTypeScale"
* "TouchTypePan"
* "TouchTypeSwipe"
*/
interface TouchDataProvider extends ScriptObject {
    /**
    * Returns a copy of `currentMask` with the `newException` flag set to true.
    */
    composeTouchBlockingExceptionMask(currentMask: number, newException: string): number
    
    /**
    * Allow or stop allowing a certain `TouchType` to pass through your lens. Useful for allowing Snapchat to handle certain `TouchType`, e.g. allowing `TouchTypeDoubleTap` to flip the camera.
    */
    enableTouchBlockingException(exception: string, enable: boolean): void
    
    /**
    * Set your lens to handle touches on the screen, preventing default Snapchat touch behavior from occuring. Useful for enabling full screen touches without any touch components. It is similar to creating a plane the size of the screen in front of the camera.
    */
    touchBlocking: boolean
    
    /**
    * The current touch mask.
    */
    touchBlockingExceptionMask: number
    
}

/**
* Triggered when a touch event ends.
*/
interface TouchEndEvent extends SceneObjectEvent {
    /**
    * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
    */
    getTouchId(): number
    
    /**
    * Returns the normalized 2D screen position of the users touch.
    * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
    */
    getTouchPosition(): vec2
    
}

interface TouchEndEventArgs extends ScriptObject {
    /**
    * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
    
    * @readonly
    */
    position: vec2
    
    /**
    * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
    
    * @readonly
    */
    touchId: number
    
}

/**
* Triggered when a touch position on the screen is moved.
*/
interface TouchMoveEvent extends SceneObjectEvent {
    /**
    * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
    */
    getTouchId(): number
    
    /**
    * Returns the normalized 2D screen position of the users touch.
    * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
    */
    getTouchPosition(): vec2
    
}

/**
* Arguments used with the `InteractionComponent.onTouchMove` event.
*/
interface TouchMoveEventArgs extends ScriptObject {
    /**
    * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
    
    * @readonly
    */
    position: vec2
    
    /**
    * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
    
    * @readonly
    */
    touchId: number
    
}

/**
* Triggered when a touch event starts.
*/
interface TouchStartEvent extends SceneObjectEvent {
    /**
    * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
    */
    getTouchId(): number
    
    /**
    * Returns the normalized 2D screen position of the users touch.
    * The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right.
    */
    getTouchPosition(): vec2
    
}

/**
* Arguments used with the `InteractionComponent.onTouchStart` event.
*/
interface TouchStartEventArgs extends ScriptObject {
    /**
    * The position of the touch on the screen. [0,0] being top left, and [1,1] being bottom right.
    
    * @readonly
    */
    position: vec2
    
    /**
    * Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously.
    
    * @readonly
    */
    touchId: number
    
}

/**
* Represents a mesh generated by world tracking. Only available when world mesh tracking is supported and enabled.
*/
interface TrackedMesh extends ScriptObject {
    /**
    * Returns whether the tracked mesh is valid.
    
    * @readonly
    */
    isValid: boolean
    
    /**
    * Returns the World Transformation matrix of the detected mesh.
    
    * @readonly
    */
    transform: mat4
    
}

/**
* Classifications of mesh face. See [TrackedMeshHitTestResult](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#TrackedMeshHitTestResult).
*/
declare enum TrackedMeshFaceClassification {
    /**
    * None
    */
    None,
    /**
    * Wall
    */
    Wall,
    /**
    * Floor
    */
    Floor,
    /**
    * Ceiling
    */
    Ceiling,
    /**
    * Table
    */
    Table,
    /**
    * Seat
    */
    Seat,
    /**
    * Window
    */
    Window,
    /**
    * Door
    */
    Door
}

/**
* Provides histogram information about tracked world mesh faces in a given area. Returned by `DeviceTracking.calculateWorldMeshHistogram()`.
*/
interface TrackedMeshHistogramResult extends ScriptObject {
    /**
    * Average normal direction, in world space, of the mesh faces.
    
    * @readonly
    */
    avgNormal: vec3
    
    /**
    * Array of relative proportions for each classification, in the order described below. The values all add up to a total of 1.0.
    
    * The classification value order is:
    * 0: None
    * 1: Wall
    * 2: Floor
    * 3: Ceiling
    * 4: Table
    * 5: Seat
    * 6: Window
    * 7: Door
    
    * @readonly
    */
    histogram: number[]
    
}

/**
* Provides information about a TrackedMesh surface hit during a raycast. Is returned in an array when calling `DeviceTracking.hitTestWorldMesh()` or `DeviceTracking.raycastWorldMesh()`.
*/
interface TrackedMeshHitTestResult extends ScriptObject {
    /**
    * Returns the classification of the mesh face at the intersection point. 
    
    * @readonly
    */
    classification: TrackedMeshFaceClassification
    
    /**
    * Returns the TrackedMesh that was hit.
    
    * @readonly
    */
    mesh: TrackedMesh
    
    /**
    * Returns the world space normal direction of the intersection point.
    
    * @readonly
    */
    normal: vec3
    
    /**
    * Returns the world space position of the intersection point.
    
    * @readonly
    */
    position: vec3
    
}

/**
* A representation for plane detected by native tracking. Can be used with TrackedPoint.
*/
interface TrackedPlane extends ScriptObject {
    /**
    * Whether the detected plane is still available to utilize
    
    * @readonly
    */
    isValid: boolean
    
    /**
    * A coarse mesh describing the shape of the tracked plane. Can be displayed by RenderMeshVisual
    
    * @readonly
    */
    mesh: RenderMesh
    
    /**
    * Returns the orientation of the detected plane, either vertical or horizontal.
    
    
    * @readonly
    */
    orientation: TrackedPlaneOrientation
    
    /**
    * The center point of the detected plane
    
    * @readonly
    */
    pivot: vec3
    
    /**
    * The size of the detected plane, where it is described as width, 0, depth
    
    * @readonly
    */
    size: vec3
    
    /**
    * The position, rotation, and scale of the detected plane
    
    * @readonly
    */
    transform: mat4
    
}

declare enum TrackedPlaneOrientation {
    Horizontal,
    Vertical
}

/**
* A point on the real world not attached to any detected plane.
*/
interface TrackedPoint extends ScriptObject {
    /**
    * Provides the orientation of the tracked point.
    
    * @readonly
    */
    orientation: quat
    
    /**
    * Provides the world position of the tracked point.
    
    * @readonly
    */
    position: vec3
    
}

/**
* Allows you to bind the position and rotation of an object with this component to a [TrackedPoint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#TrackedPoint).
*/
interface TrackedPointComponent extends Component {
    /**
    * Returns whether the trackedPoint is valid.
    
    * @readonly
    */
    isValid: boolean
    
    /**
    * The [TrackedPoint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#TrackedPoint/) which this component will copy the position and rotation from.
    */
    trackedPoint: TrackedPoint
    
}

/**
* Controls the position, rotation, and scale of a [SceneObject](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject).  Every SceneObject automatically has a Transform attached.
*/
interface Transform extends ScriptObject {
    /**
    * Returns the Transform's world-to-local transformation matrix.
    */
    getInvertedWorldTransform(): mat4
    
    /**
    * Returns the Transform's position relative to its parent.
    */
    getLocalPosition(): vec3
    
    /**
    * Returns the Transform's rotation relative to its parent.
    */
    getLocalRotation(): quat
    
    /**
    * Returns the Transform's scale relative to its parent.
    */
    getLocalScale(): vec3
    
    /**
    * Returns the SceneObject the Transform is attached to.
    */
    getSceneObject(): SceneObject
    
    /**
    * Returns the Transform's position relative to the world.
    */
    getWorldPosition(): vec3
    
    /**
    * Returns the Transform's rotation relative to the world.
    */
    getWorldRotation(): quat
    
    /**
    * Returns the Transform's scale relative to the world.
    */
    getWorldScale(): vec3
    
    /**
    * Returns the Transform's local-to-world transformation matrix.
    */
    getWorldTransform(): mat4
    
    /**
    * Sets the Transform's position relative to its parent.
    */
    setLocalPosition(pos: vec3): void
    
    /**
    * Sets the Transform's rotation relative to its parent.
    */
    setLocalRotation(rotation: quat): void
    
    /**
    * Sets the Transform's scale relative to its parent.
    */
    setLocalScale(scale: vec3): void
    
    /**
    * Sets the Transform's local transformation matrix.
    */
    setLocalTransform(transformMat: mat4): void
    
    /**
    * Sets the Transform's position relative to the world.
    */
    setWorldPosition(pos: vec3): void
    
    /**
    * Sets the Transform's rotation relative to the world.
    */
    setWorldRotation(rotation: quat): void
    
    /**
    * Sets the Transform's scale relative to the world.
    * This may produce lossy results when parent objects are rotated, so use `setLocalScale()` instead if possible.
    */
    setWorldScale(scale: vec3): void
    
    /**
    * Sets the Transform's transformation matrix.
    */
    setWorldTransform(transformMat: mat4): void
    
    /**
    * Returns the Transform's back directional vector.
    
    * @readonly
    */
    back: vec3
    
    /**
    * Returns the Transform's down directional vector.
    
    * @readonly
    */
    down: vec3
    
    /**
    * Returns the Transform's forward directional vector.
    
    * @readonly
    */
    forward: vec3
    
    /**
    * Returns the Transform's left directional vector.
    
    * @readonly
    */
    left: vec3
    
    /**
    * Returns the Transform's right directional vector.
    
    * @readonly
    */
    right: vec3
    
    /**
    * When scaling a parent with segment scale enabled, instead of scaling child objects, it creates position offsets. This setting is used when exporting from certain 3d authoring tools.
    */
    segmentScaleCompensate: boolean
    
    /**
    * Returns the Transform's up directional vector.
    
    * @readonly
    */
    up: vec3
    
}

/**
* Applies additional transform processing on data for InputPlaceholders and OutputPlaceholders used with MLComponent.
* For more information, see the [MLComponent Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/ml-component-overview).
*/
interface Transformer extends ScriptObject {
    /**
    * Inverse transformation matrix of this Transformer.
    
    * @readonly
    */
    inverseMatrix: mat3
    
    /**
    * Transformation matrix of this Transformer.
    
    * @readonly
    */
    matrix: mat3
    
}

/**
* Builds Transformer objects for MLComponent.
*/
interface TransformerBuilder extends ScriptObject {
    /**
    * Builds and returns a Transformer object based on the current settings.
    */
    build(): Transformer
    
    /**
    * Sets the fill value used.
    */
    setFillColor(color: vec4): TransformerBuilder
    
    /**
    * Enables or disables horizontal flipping.
    */
    setFlipX(value: boolean): TransformerBuilder
    
    /**
    * Enables or disables vertical flipping.
    */
    setFlipY(value: boolean): TransformerBuilder
    
    /**
    * Sets the horizontal alignment type used.
    */
    setHorizontalAlignment(mode: HorizontalAlignment): TransformerBuilder
    
    /**
    * Sets the rotation type used.
    */
    setRotation(mode: TransformerRotation): TransformerBuilder
    
    /**
    * Sets the stretching type used.
    */
    setStretch(value: boolean): TransformerBuilder
    
    /**
    * Sets the vertical alignment type used.
    */
    setVerticalAlignment(mode: VerticalAlignment): TransformerBuilder
    
}

/**
* Rotation types used by TransformBuilder.
*/
declare enum TransformerRotation {
    /**
    * No rotation
    */
    None,
    /**
    * Rotates by 90 degrees
    */
    Rotate90,
    /**
    * Rotates by 180 degrees
    */
    Rotate180,
    /**
    * Rotates by 270 degrees
    */
    Rotate270
}

/**
* Triangle hit information, available when a ray cast intersects a collision mesh.
*/
interface TriangleHit extends ScriptObject {
    /**
    * Barycentric coordinate of the hit on the triangle. This is used to interpolate values over the triangle surface. Essentially, these are weights for each of the 3 triangle vertices. For example, you can compute the hit position from vertex positions as: (V0\*b0 + V1\*b1 + V2\*b2). We already have the hit position in RayCastHit, but 'V' can be any interpolated value, such as color or texture coordinate.
    
    
    * @readonly
    */
    barycentricCoordinate: vec3
    
    /**
    * Index of the triangle in the mesh. Note, this is the index of the triangle in the collision mesh, which won't necessarily correspond to the same index on the render mesh (depending on type and bake settings).
    
    * @readonly
    */
    index: number
    
    /**
    * Collision mesh containing the triangle.
    
    * @readonly
    */
    mesh: CollisionMesh
    
    /**
    * Vertex indices in the mesh. Note, these are the indices of the vertices in the collision mesh, which won't necessarily correspond to the same indices in the render mesh (depending on type and bake settings).
    
    * @readonly
    */
    vertexIndices: number[]
    
    /**
    * World-space vertex positions.
    
    * @readonly
    */
    vertexPositions: vec3[]
    
}

/**
* Gets called when the user triggers the primary input on their device. For example touch on touch screens.
*/
interface TriggerPrimaryEvent extends SceneObjectEvent {
    /**
    * @readonly
    */
    position: vec2
    
}

/**
* Arguments used with the `InteractionComponent.onTriggerPrimary` event.
*/
interface TriggerPrimaryEventArgs extends ScriptObject {
}

/**
* Triggered when the lens turns off.
*/
interface TurnOffEvent extends SceneEvent {
}

/**
* Triggered every frame.
*/
interface UpdateEvent extends SceneEvent {
    /**
    * Returns the time elapsed (in seconds) between the current frame and previous frame.
    */
    getDeltaTime(): number
    
}

/**
* Provides information about the user such as display name, birthday, and current weather. Accessible through `global.userContextSystem`.

* All callbacks will execute as soon as the requested information is available. In some rare cases, the requested information may be completely unavailable, and the callback will never occur.

* Note that formatted or localized strings may appear differently to users depending on their region.
*/
interface UserContextSystem extends ScriptObject {
    /**
    * Retrieve the Snapchatter's friends list in order to access details like display name, birthdate, or Bitmoji
    
    * @exposesUserData
    */
    getAllFriends(callback: (data: SnapchatUser[]) => void): void
    
    /**
    * Retrieve the Snapchatter's best friends in order to access details like display name, birthdate, or Bitmoji.
    
    * @exposesUserData
    */
    getBestFriends(callback: (data: SnapchatUser[]) => void): void
    
    /**
    * Retrieve a SnapchatUser representing the current user.
    
    * @exposesUserData
    */
    getCurrentUser(callback: (data: SnapchatUser) => void): void
    
    /**
    * Retrieve a SnapchatUser object for MyAI which you can use to access the MyAI Bitmoji or other details.
    
    * @exposesUserData
    */
    getMyAIUser(callback: (data: SnapchatUser) => void): void
    
    /**
    * Gets the list of friends in the current context, such as 1:1 chats, 1:many chats, and group chats. 
    
    * @exposesUserData
    */
    getUsersInCurrentContext(callback: (data: SnapchatUser[]) => void): void
    
    /**
    * Provides the user's current altitude as a localized string.
    */
    requestAltitudeFormatted(callback: (formattedData: string) => void): void
    
    /**
    * Provides the user's current altitude in meters.
    */
    requestAltitudeInMeters(callback: (data: number) => void): void
    
    /**
    * Provides the user's birth date as a Date object.
    
    * @exposesUserData
    */
    requestBirthdate(callback: (data: Date) => void): void
    
    /**
    * Provides the user's birth date as localized string.
    
    * @exposesUserData
    */
    requestBirthdateFormatted(callback: (formattedData: string) => void): void
    
    /**
    * Provides the name of the city the user is currently located in.
    
    * @exposesUserData
    */
    requestCity(callback: (data: string) => void): void
    
    /**
    * Provides the user's display name.
    */
    requestDisplayName(callback: (data: string) => void): void
    
    /**
    * Provides the user's current temperature in celsius.
    */
    requestTemperatureCelsius(callback: (data: number) => void): void
    
    /**
    * Provides the user's current temperature in fahrenheit.
    */
    requestTemperatureFahrenheit(callback: (data: number) => void): void
    
    /**
    * Provides the user's current temperature as a localized string.
    */
    requestTemperatureFormatted(callback: (formattedData: string) => void): void
    
    /**
    * Provides the user's username.
    
    * @exposesUserData
    */
    requestUsername(callback: (data: string) => void): void
    
    /**
    * Provides the user's current weather condition.
    */
    requestWeatherCondition(callback: (data: WeatherCondition) => void): void
    
    /**
    * Provides the user's current weather condition as a localized string.
    */
    requestWeatherLocalized(callback: (formattedData: string) => void): void
    
}

/**
* A two dimensional vector.
* Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.

*/
declare class vec2 {
    /**
    * Creates a new instance of a vec2.
    */
    constructor(x: number, y: number)
    
    /**
    * Returns the vector plus `vec`.
    */
    add(vec: vec2): vec2
    
    /**
    * Returns the angle between the vector and `vec`.
    */
    angleTo(vec: vec2): number
    
    /**
    * Returns a copy of the vector with its length clamped to `length`.
    */
    clampLength(length: number): vec2
    
    /**
    * Returns the distance between the vector and the vector `vec`.
    */
    distance(vec: vec2): number
    
    /**
    * Like `distance()`, but returns the squared distance between vectors.
    */
    distanceSquared(vec: vec2): number
    
    /**
    * Returns the division of the vector by the vector `vec`.
    */
    div(vec: vec2): vec2
    
    /**
    * Returns the dot product of the vector and `vec`.
    */
    dot(vec: vec2): number
    
    /**
    * Returns whether this is equal to `vec`.
    */
    equal(vec: vec2): boolean
    
    /**
    * Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
    */
    moveTowards(point: vec2, magnitude: number): vec2
    
    /**
    * Returns the component-wise multiplication product of the vector and `vec`.
    */
    mult(vec: vec2): vec2
    
    /**
    * Returns a copy of the vector with its length scaled to 1.
    */
    normalize(): vec2
    
    /**
    * Returns a copy of the vector projected onto the vector `vec`.
    */
    project(vec: vec2): vec2
    
    /**
    * Projects the vector onto the plane represented by the normal `normal`.
    */
    projectOnPlane(normal: vec2): vec2
    
    /**
    * Returns a copy of the vector reflected across the plane defined by the normal `vec`.
    */
    reflect(vec: vec2): vec2
    
    /**
    * Returns the component-wise multiplication product of the vector and `vec`.
    */
    scale(vec: vec2): vec2
    
    /**
    * Returns the vector minus `vec`.
    */
    sub(vec: vec2): vec2
    
    /**
    * Returns a string representation of the vector.
    */
    toString(): string
    
    /**
    * Multiplies the components by the number `scale`.
    */
    uniformScale(scale: number): vec2
    
    /**
    * Alternate name for the y component.
    */
    g: number
    
    /**
    * Returns the length of the vector.
    */
    length: number
    
    /**
    * Returns the squared length of the vector.
    */
    lengthSquared: number
    
    /**
    * Alternate name for the x component.
    */
    r: number
    
    /**
    * x component of the vec2.
    */
    x: number
    
    /**
    * y component of the vec2.
    */
    y: number
    
}
declare namespace vec2 {
    /**
    * Returns the vector (0, -1).
    */
    export function down(): vec2
    
    /**
    * Returns the vector (-1, 0).
    */
    export function left(): vec2
    
    /**
    * Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
    */
    export function lerp(vecA: vec2, vecB: vec2, t: number): vec2
    
    /**
    * Returns a new vector containing the largest value of each component in the two vectors.
    */
    export function max(vecA: vec2, vecB: vec2): vec2
    
    /**
    * Returns a new vector containing the smallest value of each component in the two vectors.
    */
    export function min(vecA: vec2, vecB: vec2): vec2
    
    /**
    * Returns the vector (1, 1).
    */
    export function one(): vec2
    
    /**
    * Generate a random 2D direction vector. This is equivalent to a random point on a unit-radius circle.
    */
    export function randomDirection(): vec2
    
    /**
    * Returns the vector (1, 0).
    */
    export function right(): vec2
    
    /**
    * Returns the vector (0, 1).
    */
    export function up(): vec2
    
    /**
    * Returns the vector (0, 0).
    */
    export function zero(): vec2
    

}

/**
* A three dimensional vector. 
* Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.

*/
declare class vec3 {
    /**
    * Creates a new instance of a vec3.
    */
    constructor(x: number, y: number, z: number)
    
    /**
    * Returns the vector plus `vec`.
    */
    add(vec: vec3): vec3
    
    /**
    * Returns the angle in radians between the vector and `vec`.
    */
    angleTo(vec: vec3): number
    
    /**
    * Returns a copy of the vector with its length clamped to `length`.
    */
    clampLength(length: number): vec3
    
    /**
    * Returns the cross product of the vector and `vec`
    */
    cross(vec: vec3): vec3
    
    /**
    * Returns the distance between the vector and the vector `vec`.
    */
    distance(vec: vec3): number
    
    /**
    * Like `distance()`, but returns the squared distance between vectors.
    */
    distanceSquared(vec: vec3): number
    
    /**
    * Returns the division of the vector by the vector `vec`.
    */
    div(vec: vec3): vec3
    
    /**
    * Returns the dot product of the vector and `vec`.
    */
    dot(vec: vec3): number
    
    /**
    * Returns whether this is equal to `vec`.
    */
    equal(vec: vec3): boolean
    
    /**
    * Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
    */
    moveTowards(point: vec3, magnitude: number): vec3
    
    /**
    * Returns the component-wise multiplication product of the vector and `vec`.
    */
    mult(vec: vec3): vec3
    
    /**
    * Returns a copy of the vector with its length scaled to 1.
    */
    normalize(): vec3
    
    /**
    * Returns a copy of the vector projected onto the vector `vec`.
    */
    project(vec: vec3): vec3
    
    /**
    * Projects the vector onto the plane represented by the normal `normal`.
    */
    projectOnPlane(normal: vec3): vec3
    
    /**
    * Returns a copy of the vector reflected across the plane defined by the normal `vec`.
    */
    reflect(vec: vec3): vec3
    
    /**
    * Returns a copy of the vector rotated towards the `target` vector by `step` radians.
    
    * The vectors may be non-normalized. The function always returns a vector with the source vector's magnitude.
    * This prevents overshoot. If `step` exceeds the angle between vectors, it stops at the `target` direction.
    * If `step` is negative, this rotates the source vector away from `target`. It stops when the direction is precisely opposite to `target`.
    * If the vectors are in opposite directions, the result is rotated along an arbitrary (but consistent) axis.
    * If either vector is zero magnitude, it returns the source vector.
    
    */
    rotateTowards(target: vec3, step: number): vec3
    
    /**
    * Returns the component-wise multiplication product of the vector and `vec`.
    */
    scale(vec: vec3): vec3
    
    /**
    * Returns the vector minus `vec`.
    */
    sub(vec: vec3): vec3
    
    /**
    * Returns a string representation of the vector.
    */
    toString(): string
    
    /**
    * Multiplies the components by the number `scale`.
    */
    uniformScale(scale: number): vec3
    
    /**
    * Alternate name for the z component.
    */
    b: number
    
    /**
    * Alternate name for the y component.
    */
    g: number
    
    /**
    * Returns the length of the vector.
    */
    length: number
    
    /**
    * Returns the squared length of the vector.
    */
    lengthSquared: number
    
    /**
    * Alternate name for the x component.
    */
    r: number
    
    /**
    * x component of the vec3.
    */
    x: number
    
    /**
    * y component of the vec3.
    */
    y: number
    
    /**
    * z component of the vec3.
    */
    z: number
    
}
declare namespace vec3 {
    /**
    * Returns the vector (0, 0, -1).
    */
    export function back(): vec3
    
    /**
    * Returns the vector (0, -1, 0).
    */
    export function down(): vec3
    
    /**
    * Returns the vector (0, 0, 1).
    */
    export function forward(): vec3
    
    /**
    * Returns the vector (-1, 0, 0).
    */
    export function left(): vec3
    
    /**
    * Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
    */
    export function lerp(vecA: vec3, vecB: vec3, t: number): vec3
    
    /**
    * Returns a new vector containing the largest value of each component in the two vectors.
    */
    export function max(vecA: vec3, vecB: vec3): vec3
    
    /**
    * Returns a new vector containing the smallest value of each component in the two vectors.
    */
    export function min(vecA: vec3, vecB: vec3): vec3
    
    /**
    * Returns the vector (1, 1, 1).
    */
    export function one(): vec3
    
    /**
    * Makes the vectors `vecA` and `vecB` normalized and orthogonal to each other.
    */
    export function orthonormalize(vecA: vec3, vecB: vec3): void
    
    /**
    * Generate random 3D direction vector. This is equivalent to a random point on a unit-radius sphere.
    */
    export function randomDirection(): vec3
    
    /**
    * Returns the vector (1, 0, 0).
    */
    export function right(): vec3
    
    /**
    * Spherically interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
    */
    export function slerp(vecA: vec3, vecB: vec3, t: number): vec3
    
    /**
    * Returns the vector (0, 1, 0).
    */
    export function up(): vec3
    
    /**
    * Returns the vector (0, 0, 0).
    */
    export function zero(): vec3
    

}

/**
* A four dimensional vector.
* Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.

*/
declare class vec4 {
    /**
    * Creates a new instance of a vec4.
    */
    constructor(x: number, y: number, z: number, w: number)
    
    /**
    * Returns the vector plus `vec`.
    */
    add(vec: vec4): vec4
    
    /**
    * Returns the angle between the vector and `vec`.
    */
    angleTo(vec: vec4): number
    
    /**
    * Returns a copy of the vector with its length clamped to `length`.
    */
    clampLength(length: number): vec4
    
    /**
    * Returns the distance between the vector and the vector `vec`.
    */
    distance(vec: vec4): number
    
    /**
    * Like `distance()`, but returns the squared distance between vectors.
    */
    distanceSquared(vec: vec4): number
    
    /**
    * Returns the division of the vector by the vector `vec`.
    */
    div(vec: vec4): vec4
    
    /**
    * Returns the dot product of the vector and `vec`.
    */
    dot(vec: vec4): number
    
    /**
    * Returns whether this is equal to `vec`.
    */
    equal(vec: vec4): boolean
    
    /**
    * Returns a copy of the vector moved towards the point `point` by the amount `magnitude`.
    */
    moveTowards(point: vec4, magnitude: number): vec4
    
    /**
    * Returns the component-wise multiplication product of the vector and `vec`.
    */
    mult(vec: vec4): vec4
    
    /**
    * Returns a copy of the vector with its length scaled to 1.
    */
    normalize(): vec4
    
    /**
    * Returns a copy of the vector projected onto the vector `vec`.
    */
    project(vec: vec4): vec4
    
    /**
    * Projects the vector onto the plane represented by the normal `normal`.
    */
    projectOnPlane(normal: vec4): vec4
    
    /**
    * Returns a copy of the vector reflected across the plane defined by the normal `vec`.
    */
    reflect(vec: vec4): vec4
    
    /**
    * Returns the component-wise multiplication product of the vector and `vec`.
    */
    scale(vec: vec4): vec4
    
    /**
    * Returns the vector minus `vec`.
    */
    sub(vec: vec4): vec4
    
    /**
    * Returns a string representation of the vector.
    */
    toString(): string
    
    /**
    * Multiplies the components by the number `scale`.
    */
    uniformScale(scale: number): vec4
    
    /**
    * Alternate name for the w component.
    */
    a: number
    
    /**
    * Alternate name for the z component.
    */
    b: number
    
    /**
    * Alternate name for the y component.
    */
    g: number
    
    /**
    * Returns the length of the vector.
    */
    length: number
    
    /**
    * Returns the squared length of the vector.
    */
    lengthSquared: number
    
    /**
    * Alternate name for the x component.
    */
    r: number
    
    /**
    * w component of the vec4.
    */
    w: number
    
    /**
    * x component of the vec4.
    */
    x: number
    
    /**
    * y component of the vec4.
    */
    y: number
    
    /**
    * z component of the vec4.
    */
    z: number
    
}
declare namespace vec4 {
    /**
    * Linearly interpolates between the two vectors `vecA` and `vecB` by the factor `t`.
    */
    export function lerp(vecA: vec4, vecB: vec4, t: number): vec4
    
    /**
    * Returns a new vector containing the largest value of each component in the two vectors.
    */
    export function max(vecA: vec4, vecB: vec4): vec4
    
    /**
    * Returns a new vector containing the smallest value of each component in the two vectors.
    */
    export function min(vecA: vec4, vecB: vec4): vec4
    
    /**
    * Returns the vector (1, 1, 1, 1).
    */
    export function one(): vec4
    
    /**
    * Returns the vector (0, 0, 0, 0).
    */
    export function zero(): vec4
    

}

/**
* A vector containing 4 boolean values.
*/
declare class vec4b {
    /**
    * Creates a new instance of a vec4b.
    */
    constructor(x: boolean, y: boolean, z: boolean, w: boolean)
    
    /**
    * Returns a string representation of the vector.
    */
    toString(): string
    
    /**
    * Alternate name for the w component.
    */
    a: boolean
    
    /**
    * Alternate name for the z component.
    */
    b: boolean
    
    /**
    * Alternate name for the y component.
    */
    g: boolean
    
    /**
    * Alternate name for the x component.
    */
    r: boolean
    
    /**
    * w component of the vec4b.
    */
    w: boolean
    
    /**
    * x component of the vec4b.
    */
    x: boolean
    
    /**
    * y component of the vec4b.
    */
    y: boolean
    
    /**
    * z component of the vec4b.
    */
    z: boolean
    
}

/**
* Used to help control vertex animations on the SceneObject.
*/
interface VertexCache extends Component {
    /**
    * The current time of vertex animations on this SceneObject.
    */
    currentTime: number
    
    /**
    * The weight applied to vertex animations on this SceneObject.
    */
    weight: number
    
}

/**
* Provides settings for vertex physics in the ClothVisual component.
*/
interface VertexSimulationSettings extends ScriptObject {
    /**
    * Bend Stiffness value.
    */
    bendStiffness: number
    
    /**
    * BendStiffness value weight on Global Simulation Settings for this vertex.
    */
    bendStiffnessGlobalWeight: number
    
    /**
    * Friction value.
    */
    friction: number
    
    /**
    * Friction value weight on Global Simulation Settings for this vertex.
    */
    frictionGlobalWeight: number
    
    /**
    * Mass value.
    */
    mass: number
    
    /**
    * Mass value weight on Global Simulation Settings for this vertex.
    */
    massGlobalWeight: number
    
    /**
    * Stretch Stiffness value.
    */
    stretchStiffness: number
    
    /**
    * StretchStiffness value weight on Global Simulation Settings for this vertex.
    */
    stretchStiffnessGlobalWeight: number
    
}

/**
* Used by the `verticalAlignment` property in [MeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual).
* When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned vertically.
*/
declare enum VerticalAlignment {
    /**
    * The mesh will be aligned to the bottom side.
    */
    Bottom,
    /**
    * The mesh will be centered.
    */
    Center,
    /**
    * The mesh will be aligned to the top side.
    */
    Top
}

/**
* Options for handling vertical text overflow. Used by [Text component's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `verticalOverflow` property.
*/
declare enum VerticalOverflow {
    /**
    * Text will continue to draw past the end of the vertical boundaries.
    */
    Overflow,
    /**
    * Text will be clipped at the end of the vertical boundaries.
    */
    Truncate,
    /**
    * Text will shrink to fit within the vertical boundaries.
    */
    Shrink
}

/**
* Defines a VFX to use with [VFX Component](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#VFXComponent). For more information, see the [VFX Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/graphics/particles/vfx-editor/introduction-and-concepts).
*/
interface VFXAsset extends Asset {
    /**
    * Clones the VFX asset and returns a copy. 
    */
    clone(): VFXAsset
    
    /**
    * Returns a PassWrapper containing all feedback passes in a VFX asset
    
    * @readonly
    */
    feedbacks: PassWrappers
    
    /**
    * When `Mesh` is selected as a Geometry Type in the VFX Output Container, the system will render particles using this mesh, otherwise particles will be rendered as quads. Refer to the Custom Mesh Emitter built-in asset as a starting point when working with custom meshes.
    */
    mesh: RenderMesh
    
    /**
    * Returns a PassWrapper containing all output passes in a VFX asset
    
    * @readonly
    */
    outputs: PassWrappers
    
    /**
    * Controls properties for the VFXAsset. Any scriptable properties on a VFX Graph will automatically become properties of this Properties class. For example, if the VFX Graph defines a variable named `baseColor`, a script would be able to access that property as `vfxAsset.properties.baseColor`.
    
    * @readonly
    */
    properties: Properties
    
    /**
    * Returns a PassWrapper containing all simulation passes in a VFX asset
    
    * @readonly
    */
    simulations: PassWrappers
    
}

/**
* A VFX visual used to show a [VFX Asset](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#VFXAsset).
*/
interface VFXComponent extends BaseMeshVisual {
    /**
    * Clear the VFX system.
    */
    clear(): void
    
    /**
    * Restart the VFX system.
    */
    restart(): void
    
    /**
    * The [VFX Asset](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#VFXAsset) that describes the VFX simulation.
    */
    asset: VFXAsset
    
}

/**
* Describes the current status of a [VideoTextureProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#VideoTextureProvider).
*/
declare enum VideoStatus {
    /**
    * The video playback has stopped
    */
    Stopped,
    /**
    * The video is being prepared
    */
    Preparing,
    /**
    * The video is playing
    */
    Playing,
    /**
    * The video playback is paused
    */
    Paused
}

/**
* Controls a video texture resource. Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider).
*/
interface VideoTextureProvider extends TextureProvider {
    /**
    * Pauses the video playback.
    */
    pause(): void
    
    /**
    * Plays the video `playCount` times. If `playCount` is less than 0, it loops infinitely.
    */
    play(playCount: number): void
    
    /**
    * Resumes the video playback.
    */
    resume(): void
    
    /**
    * Sets the current playback time to the specified time in seconds.
    */
    seek(value: number): boolean
    
    /**
    * Stops the video playback.
    */
    stop(): void
    
    /**
    * Returns the number of played cycles.
    
    * @readonly
    */
    currentPlayCount: number
    
    /**
    * Returns the current time in seconds, or zero if accessed during playback being in unprepared state.
    
    * @readonly
    */
    currentTime: number
    
    /**
    * Returns the duration of playback range in seconds, or zero if accessed while playback is in an unprepared state.
    
    * @readonly
    */
    duration: number
    
    /**
    * Returns true if video file has been loaded and is ready for decoding and false otherwise.
    
    * @readonly
    */
    isPlaybackReady: boolean
    
    /**
    * Returns the time of the last acquired texture in seconds, or zero if accessed during playback being in unprepared state.
    
    * @readonly
    */
    lastFrameTime: number
    
    /**
    * The event for being reported about playback finished. When this event is triggered, lens developers can evict this texture from material slots to avoid disrupting user's experience.
    
    * @readonly
    */
    onPlaybackDone: event0<void>
    
    /**
    * The event for being reported about playback start. When this event is triggered, lens developers can set video texture to material slots and see actual video frames.
    
    * @readonly
    */
    onPlaybackReady: event0<void>
    
    /**
    * The playback rate of the video. The rate is set when starting playback, meaning that updates to this property does not take effect until the video is stopped and started again. Defaults to 1.
    
    */
    playbackRate: number
    
    /**
    * Sets or returns playback end time in unit range.
    */
    relativeEndTime: number
    
    /**
    * Sets or returns playback start time in unit range.
    */
    relativeStartTime: number
    
    /**
    * A read-only property that returns the status of provider. Suggested as a substitution for the existing getStatus()
    
    * @readonly
    */
    status: VideoStatus
    
    /**
    * Returns the duration of loaded video file in seconds, or zero if accessed during playback being in unprepared state.
    
    * @readonly
    */
    totalDuration: number
    
    /**
    * The audio volume of the video resource, normalized from 0 to 1.
    */
    volume: number
    
}

/**
* Base class for all visual Components (e.g. MeshVisual).
*/
interface Visual extends Component {
    /**
    * Returns the order of this Visual in the render queue.
    */
    getRenderOrder(): number
    
    /**
    * Sets the order of this Visual in the render queue.
    */
    setRenderOrder(value: number): void
    
}

interface VoiceML {
}

declare namespace VoiceML {
    /**
    * Additional parameters are used to provide additional data for NlpModels and NlpResponses. 
    */
    interface AdditionalParam extends ScriptObject {
        /**
        * The key of the additional parameter.
        
        * @readonly
        */
        key: string
        
        /**
        * The value of the additional parameter.
        
        * @readonly
        */
        value: string
        
    }

}

declare namespace VoiceML {
    /**
    * NlpModels are used to provide the VoiceML NLP engine information about how the transcript of the input audio should be processed. BaseNlpModels is the abstract base class all NlpModels ([NlpKeywordModel](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpKeywordModel), [NlpIntentModel](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpIntentModel)) inherit from.
    
    * You can specify multiple NlpModels to process the same audio, all of their results will be returned in [ListeningUpdateEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLListeningUpdateEventArgs)
    */
    interface BaseNlpModel extends ScriptObject {
        /**
        * Adds additional params to set in the ML engine.
        */
        addParam(key: string, value: string): void
        
    }

}

declare namespace VoiceML {
    /**
    * The abstract base class all NlpResponses inherit from. NlpResponses are used as the result from the VoiceML NLP engine with information after processing the transcript of the input audio.
    */
    interface BaseNlpResponse extends ScriptObject {
        /**
        * Additional params to send in the response.
        
        * @readonly
        */
        additionalParams: VoiceML.AdditionalParam[]
        
        /**
        * Name of the model that sent the response.  In current studio release, you can expect the result to contain either  `VOICE_ENABLED_UI` like described in [NlpModel](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpIntentModel).  If using `enableSystemCommands()`, `SYSTEM_COMMANDS` will be returned as well. 
        
        * @readonly
        */
        modelName: string
        
        /**
        * The status of the NLP response. in case of successful result, the value should be `VoiceMLModule.NlpResponsesStatusCodes.OK`, in case of failure, the value should be `VoiceMLModule.NlpResponsesStatusCodes.ERROR`. 
        
        * @readonly
        */
        status: VoiceML.NlpResponseStatus
        
    }

}

declare namespace VoiceML {
    /**
    * An NLP model used to detect keywords in the transcript of the input audio.  For example, you can have keyword detection which will trigger every time the word "red" is said, and another trigger for the word "yellow". 
    */
    interface KeywordModelGroup extends ScriptObject {
        /**
        * Array of keywords that are being sent to the ML model for detection with similar meaning. For example, putting the word "yellow" would trigger a response in the sentence "I saw a yellow bird". The keyword detection model supports slight variation in the word transcription. We recommend adding possible synonyms of the same keyword. So for example, should you want to detect "movie", you might want to consider adding "video" and possibly "feature" and "flick" as well to the list resulting in `["movie", "video", "feature","flick"]` as different people might express themselves differently.  
        
        * @readonly
        */
        keywords: string[]
        
        /**
        * Name of the keyword group. 
        
        * @readonly
        */
        name: string
        
    }

}

declare namespace VoiceML {
    /**
    * ListeningErrorEventArgs object returns in onListeningError callback. It contains the error code and description of the error. 
    */
    interface ListeningErrorEventArgs extends ScriptObject {
        /**
        * Returns the description of the error. 
        
        * @readonly
        */
        description: string
        
        /**
        * Returns the Error code number. 
        
        * @readonly
        */
        error: number
        
    }

}

declare namespace VoiceML {
    /**
    * Provides the configuration for the audio input processing output. This can either include NLP processing using the ([nlpModels](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLBaseNlpModel)) or directly retrieving the transcription.  `speechContext` provides the ability to further improve the transcription accuracy given an assumed context. 
    */
    interface ListeningOptions extends ScriptObject {
        /**
        * In cases where specific words are expected from the users, the transcription accuracy of these words can be improved, by strengthening their likelihood in context. The strength is scaled `1-10` (10 being the strongest increase) the default value is `5`. 
        */
        addSpeechContext(phrases: string[], boost: number): void
        
        /**
        * The language which VoiceML should listen to.
        */
        languageCode: string
        
        /**
        * Options for the ML model to be used. 
        */
        nlpModels: VoiceML.BaseNlpModel[]
        
        /**
        * An array of VoiceML.QnaAction elements. It is used to pass the context in each QnaAction to the DialogML.
        */
        postProcessingActions: VoiceML.PostProcessingAction[]
        
        /**
        * Should complete transcription returned. Such transcriptions after the user stopped speaking. This transcription is marked with `isFinalTranscription=true` in the `OnListeningUpdate`. 
        */
        shouldReturnAsrTranscription: boolean
        
        /**
        * Should interim transcription returned. Such transcriptions are returned while the user still speaks, however they may be less accurate, and can be changed on following transcriptions. This interim results are marked with `isFinalTranscription=false` in the `OnListeningUpdate`. 
        */
        shouldReturnInterimAsrTranscription: boolean
        
        /**
        * Supports multiple speech contexts for increased transcription accuracy. 
        */
        speechContexts: VoiceML.SpeechContext[]
        
        /**
        * An optional attribute to specify which speech recognizer ML model to use when transcribing.  When creating a new `ListeningOptions` the value of this attrbute is defaulted to `SPEECH_RECOGNIZER`.   The supported values are: `SPEECH_RECOGNIZER`. 
        */
        speechRecognizer: string
        
    }

}
declare namespace VoiceML {
    namespace ListeningOptions {
        /**
        * Creates voice command options. 
        */
        export function create(): VoiceML.ListeningOptions
        
    
    }

}

declare namespace VoiceML {
    /**
    * The parameter when the callback registered on from `VoiceMLModule.onListeningUpdate` is called. This is to mark the input audio transcription (and possibly NlpModels as a result) was updated.
    */
    interface ListeningUpdateEventArgs extends ScriptObject {
        /**
        * In case `enableSystemCommands()` function used, returns the command executed by the system. 
        */
        getCommandResponses(): VoiceML.NlpCommandResponse[]
        
        /**
        * In case an NLP intent model used, returns intent response from the ML engine. 
        */
        getIntentResponses(): VoiceML.NlpIntentResponse[]
        
        /**
        * In case a keyword detection model used, returns results from the keywords model.
        */
        getKeywordResponses(): VoiceML.NlpKeywordResponse[]
        
        /**
        * Returns an array of QnaResponse elements, each representing an answer to the question in the eventArgs.transcript. It has properties answer(a string with the ML's response) and answerStatusCode, which can take values 
        */
        getQnaResponses(): VoiceML.QnaResponse[]
        
        /**
        * Specifies whether the transcription returned is final, or partial (interim) which can be updated later as the sentence continues.
        
        * @readonly
        */
        isFinalTranscription: boolean
        
        /**
        * Returns the transcription from the Automatic Speech Recognition. 
        
        * @readonly
        */
        transcription: string
        
    }

}

declare namespace VoiceML {
    /**
    * May be returned when [enableSystemCommands()](https://lensstudio.snapchat.com/api/classes/VoiceMLModule#enableSystemCommands) API is used.
    * The NlpCommandResponse contains the results of the servers' NLP command model classification on the last sentence and indicates that a predetermined system command was detected.
    * Current supported commands:
    
    * “Take a Snap”: takes a snapshot.
    * “Start Recording”: starts a video recording if not already started.
    * "Stop Recording”: stops an ongoing video recording, if applicable.
    
    */
    interface NlpCommandResponse extends VoiceML.BaseNlpResponse {
        /**
        * The classification result of the NLP command model for the sentence. For example, for the sentence "Take a snap!" with the [enableSystemCommands()](https://lensstudio.snapchat.com/api/classes/VoiceMLModule#enableSystemCommands) API enabled, the result will be a [NlpCommandResponse](https://lensstudio.snapchat.com/api/classes/VoiceMLModule/NlpCommandResponse) holding a `take a snap` [Command](https://lensstudio.snapchat.com/api/classes/VoiceMLModule/NlpCommandRespons#command). In addition, the following values could be returned: 
        
        * `#SNAP_ERROR_INCONCLUSIVE`: two or more commands detected.
        * `#SNAP_ERROR_INDECISIVE`: no command detected.
        * `#SNAP_ERROR_NONVERBAL`: no transcribable human voice was detected.
        * `#SNAP_ERROR_SILENCE`: silence was detected. 
        
        * Anything starting with `#SNAP_ERROR_`: Errors that are not currently defined in this documentation and should be ignored.
        
        
        * @readonly
        */
        command: string
        
    }

}

declare namespace VoiceML {
    /**
    * Specifies which NLP Intent model should run to classify the transcription of the input audio. NLP Intent classification meant to extract the meaning of a sentence rather than detecting certain keywords. Multiple intent models can be used on the same transcription, and will run only on complete sentences (`isFinalTranscription = True`). Supported intent models: `VOICE_ENABLED_UI`. 
    */
    interface NlpIntentModel extends VoiceML.BaseNlpModel {
        /**
        * A list of the intents the `Intent ML` engine should use when classifying the sentence, for example `["back", "next"]`, in case no list provided, all possible intents of the model are used.  
        
        * Supported intents for `VOICE_ENABLED_UI`: `next`, `back`, `left`, `right`, `up`, `down`, `first`, `second`, `third`, `fourth`, `fifth`, `sixth`, `seventh`, `eighth`, `ninth`, `tenth`. 
        */
        possibleIntents: string[]
        
    }

}

declare namespace VoiceML {
    /**
    * Returned when [NlpIntentModel](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpIntentModel) was specificed in the ListeningOptions, it contains the results of the NLP Intent model classification on the last sentence. `NlpIntentResponse` will only run on complete sentences (`isFinalTranscription = true`).  
    
    */
    interface NlpIntentResponse extends VoiceML.BaseNlpResponse {
        /**
        * The classification result of the NLP intent model for the sentence. For example for the sentence "show me the next item" with the model `VOICE_ENABLED_UI`, the result will be `next` for `VOICE_ENABLED_UI` the following intents are valid: `next`, `back`, `left`, `right`, `up`, `down`, `first`, `second`, `third`, `fourth`, `fifth`, `sixth`, `seventh`, `eighth`, `ninth`, `tenth`. In addition, the following values could be returned: 
        
        * `#SNAP_ERROR_INCONCLUSIVE`: two or more intents detected.
        * `#SNAP_ERROR_INDECISIVE`: no intent detected.
        * `#SNAP_ERROR_NONVERBAL`: no transcribable human voice was detected.
        * `#SNAP_ERROR_SILENCE`: silence was detected. 
        
        * Anything starting with `#SNAP_ERROR_`: Errors that are not currently defined in this documentation and should be ignored.
        
        * @readonly
        */
        intent: string
        
    }

}

declare namespace VoiceML {
    /**
    * Contains helper functions for NlpIntentModel.
    */
    interface NlpIntentsModelOptions {
    }

}
declare namespace VoiceML {
    namespace NlpIntentsModelOptions {
        /**
        * Creates a new NlpIntentModel.
        */
        export function create(intentModelName: string): VoiceML.NlpIntentModel
        
    
    }

}

declare namespace VoiceML {
    /**
    * Used to detect usage of certain keywords from the input audio.
    
    * Keyword detection (whose results will be returned in [NlpKeywordResponse](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpKeywordResponse) in the [ListeningUpdateEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLListeningUpdateEventArgs)) can happen in the mid input sentence (and in such case the the isFinalTranscription=false) or can happen at the end of the sentence (isFinalTranscription=true). Mid sentence detection have closer proximity to the time the word was spoken, but might be less accurate. 
    */
    interface NlpKeywordModel extends VoiceML.BaseNlpModel {
        /**
        * Adds a keyword group to the keywords model, the group name will be returned in NlpKeywordResponse to indicate one of the keywords in the group has been detected. Groups are used to include synonyms, or context similar words.  `addKeywordGroup("walk", ["walk", "jog", "strolls"])`. 
        */
        addKeywordGroup(name: string, keywords: string[]): void
        
        /**
        * Holds group of keywords to be used in the ML model. 
        
        * @readonly
        */
        keywordGroups: VoiceML.KeywordModelGroup[]
        
    }

}

declare namespace VoiceML {
    /**
    * Contains helper functions for NlpKeywordModel.
    */
    interface NlpKeywordModelOptions {
    }

}
declare namespace VoiceML {
    namespace NlpKeywordModelOptions {
        /**
        * Creates a new NlpKeywordModel.
        */
        export function create(): VoiceML.NlpKeywordModel
        
    
    }

}

declare namespace VoiceML {
    /**
    * NlpKeywordResponse will be returned if KeywordModel has been supplied as an input model in the ListeningOptions.  The keyword model allows detection of keywords (or short phrases) in an input audio. 
    */
    interface NlpKeywordResponse extends VoiceML.BaseNlpResponse {
        /**
        * The keywords detected by the NLP keyword detection model.  In addition, the following values could be returned: 
        
        * `#SNAP_ERROR_INCONCLUSIVE`: two or more intents detected.
        * `#SNAP_ERROR_INDECISIVE`: no intent detected.
        * `#SNAP_ERROR_NONVERBAL`: no transcribable human voice was detected.
        * `#SNAP_ERROR_SILENCE`: silence was detected.
        
        * Anything starting with `#SNAP_ERROR_`: Errors that are not currently defined in this documentation and should be ignored
        
        * @readonly
        */
        keywords: string[]
        
    }

}

declare namespace VoiceML {
    /**
    * The NLP Response Status indicates wether the NLP was successful in parsing the sentence. 
    */
    interface NlpResponseStatus extends ScriptObject {
        /**
        * Nlp status code coming from the ML engine. 
        
        * @readonly
        */
        code: number
        
        /**
        * Nlp status description coming from the ML engine. 
        
        * @readonly
        */
        description: string
        
    }

}

declare namespace VoiceML {
    /**
    * The `PostProcessingAction` is the base class for `QnaAction` and other post processing actions that need to processed after the transcription phase.
    */
    interface PostProcessingAction extends ScriptObject {
    }

}

declare namespace VoiceML {
    /**
    * The `PostProcessingActionResponse` is the base class for `QnaActionRespose` and other post processing actions responses. It holds the id and status properties for all deriving objects.
    */
    interface PostProcessingActionResponse extends ScriptObject {
        /**
        * The id of the `PostProcessingAction` so returning results can be tied to post processing actions
        
        * @readonly
        */
        id: number
        
        /**
        * The status holds the description and code for the post processing actions. In case of success the description will be empty and the code will be 0
        
        * @readonly
        */
        status: VoiceML.PostProcessingActionResponseStatus
        
    }

}

declare namespace VoiceML {
    interface PostProcessingActionResponseStatus extends ScriptObject {
        /**
        * @readonly
        */
        code: number
        
        /**
        * @readonly
        */
        description: string
        
    }

}

declare namespace VoiceML {
    interface QnaAction extends VoiceML.PostProcessingAction {
        /**
        * The context passed to the QnaAction. The QnaAction is passed to VoiceML.listeningOptions to use the DialogML within the VoiceML automatically
        */
        context: string
        
    }

}
declare namespace VoiceML {
    namespace QnaAction {
        /**
        * Parameter: string context. Creates a QnaAction object with a given context i.e. source text for the Dialog ML. 
        */
        export function create(context: string): VoiceML.QnaAction
        
    
    }

}

declare namespace VoiceML {
    interface QnaResponse extends VoiceML.PostProcessingActionResponse {
        /**
        * The response string the module came up with in response to the eventArgs.transcript
        
        * @readonly
        */
        answer: string
        
        /**
        * The status of the QnaResponse
        
        * @readonly
        */
        answerStatusCode: number
        
    }

}

declare namespace VoiceML {
    /**
    * Speech context is used in cases where specific words are expected from the users, the transcription accuracy of these words can be improved, by straightening their likelihood in context. The strength is scaled 1-10 (10 being the strongest increase) the default value is 5.
    */
    interface SpeechContext extends ScriptObject {
        /**
        * The strength is scaled 1-10 (10 being the strongest increase) the default value is 5.
        
        * @readonly
        */
        boost: number
        
        /**
        * Array of keyword to enhance by the ML engine. 
        
        * @readonly
        */
        phrases: string[]
        
    }

}

/**
* VoiceML Module allows voice input and commands. It enables transciption of the speech, detecting keywords within the transcription, intents as well as system commands (such as "Take a Snap"). You can use one VoiceML Module per Lens. 
*/
interface VoiceMLModule extends Asset {
    /**
    * Allows the user to provide voice commands for the VoiceML to execute on behalf of the users.  Current supported commands: "Take a Snap", "Start Recording", "Stop Recording". In case a command was detected, it will be automtically executed by the system and returned as part of the [NlpCommandResponse](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpCommandResponse) in the `onListeningUpdate` callback. You can retrieve the command that was executed using the following snippet: 
    
    * ```js
    * var onUpdateListeningEventHandler = function(eventArgs) {
    *     var commandResponses = eventArgs.getCommandResponses();
    *     var nlpResponseText = "";
    
    *     for (var i = 0; i < commandResponses.length; i++) {
    *         var commandResponse = commandResponses[i];
    *         nlpResponseText += "Command Response: " + commandResponse.modelName + "\n command: " + commandResponse.command;     
    *     }
    * }
    * ``` 
    */
    enableSystemCommands(): void
    
    /**
    * Starts transcribing the user audio, the NLP model is connected and sends back results using an event, optionally could request for transcription and interim results.  Notice, you can only `startListening`, after microphone permissions have been granted. It is recommended to use `startListening` method only after `onListeningEnabled` callback was called.
    
    * @exposesUserData
    */
    startListening(options: VoiceML.ListeningOptions): void
    
    /**
    * Stops voice commands. 
    */
    stopListening(): void
    
    /**
    * Registers a callback which will be called when microphone permissions are taken from the lens. `stopListening()` is implicitly called in such case. 
    
    * @readonly
    */
    onListeningDisabled: event0<void>
    
    /**
    * Registers a callback which will be called when microphone permissions are granted to the Lens, the microphone is initialized, and is actively listening. The expected design pattern is to start the listening session once those permissions have been granted: 
    
    * ```js
    * //@input Asset.VoiceMLModule vmlModule
    * var onListeningEnabledHandler = function(){
    *     script.vmlModule.startListening(options);  
    * }
    * script.vmlModule.onListeningEnabled.add(onListeningEnabledHandler); 
    * ```
    
    
    * @readonly
    */
    onListeningEnabled: event0<void>
    
    /**
    * Registers a callback, which will be called in case the VoiceML module can't process the inputs. Most errors are due to network connectivity, or misconfigured NLP inputs. 
    
    * @readonly
    */
    onListeningError: event1<VoiceML.ListeningErrorEventArgs, void>
    
    /**
    * Registers a callback, which will be called with interim transcription or related NLP models. 
    
    * @readonly
    */
    onListeningUpdate: event1<VoiceML.ListeningUpdateEventArgs, void>
    
}

declare namespace VoiceMLModule {
    enum AnswerStatusCodes {
        /**
        * Should never show up in javascript frontend. Default value.
        */
        UNSET,
        /**
        * Answer found
        */
        STATUS_OK,
        /**
        * User transcript was not a question
        */
        NOT_A_QUESTION,
        /**
        * There was a question, but we don't know the answer
        */
        NO_ANSWER_FOUND
    }

}

declare namespace VoiceMLModule {
    /**
    * Status Codes for NLP Responses. 
    */
    enum NlpResponsesStatusCodes {
        /**
        * Ok Status Code for NLP Responses, this indicates a successful processing of the NLP model. 
        */
        OK,
        /**
        * Error Status Code for NLP Responses, this indicates an unsuccessful processing of the NLP model. 
        */
        ERROR
    }

}

declare namespace VoiceMLModule {
    interface SpeechRecognizer {
    }

}
declare namespace VoiceMLModule {
    namespace SpeechRecognizer {
        let Default: string
        
    
    }

}

/**
* Types of weather returned by [UserContextSystem's](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#UserContextSystem) `requestWeatherCondition()` callback.
*/
declare enum WeatherCondition {
    /**
    * Unknown or unsupported weather condition
    */
    Unknown,
    /**
    * Lightning
    */
    Lightning,
    /**
    * Low Visibility
    */
    LowVisibility,
    /**
    * Partly Cloudy
    */
    PartlyCloudy,
    /**
    * Clear Night
    */
    ClearNight,
    /**
    * Cloudy
    */
    Cloudy,
    /**
    * Rainy
    */
    Rainy,
    /**
    * Hail
    */
    Hail,
    /**
    * Snow
    */
    Snow,
    /**
    * Windy
    */
    Windy,
    /**
    * Sunny
    */
    Sunny
}

declare enum WeightedMode {
    Both,
    Left,
    None,
    Right
}

/**
* Groups physics objects in its subtree into an independent world simulation.
*/
interface WorldComponent extends Component {
    /**
    * Create an intersection probe for a specific world.
    */
    createProbe(): Probe
    
    /**
    * Update order of this world relative to other worlds (lower values are earlier). The implicit root world order is 0, so worlds with negative order will update before the root world, and worlds with non-negative order update after.
    */
    updateOrder: number
    
    /**
    * Reference to world settings. If not set, use the default world settings for the project.
    */
    worldSettings: Physics.WorldSettingsAsset
    
}

/**
* Holds settings for world mesh tracking in DeviceTracking component. Accessible through DeviceTracking.worldOptions.
*/
interface WorldOptions extends ScriptObject {
    /**
    * Enables or disables world mesh classification gathering.
    */
    enableWorldMeshesClassificationTracking: boolean
    
    /**
    * Enables or disables the generation of world meshes.
    */
    enableWorldMeshesTracking: boolean
    
    nativePlaneTrackingType: NativePlaneTrackingType
    
    pointCloudEnabled: boolean
    
}

/**
* @wearableOnly
*/
interface WorldQueryHitTestResult extends ScriptObject {
    /**
    * @readonly
    
    * @wearableOnly
    */
    normal: vec3
    
    /**
    * @readonly
    
    * @wearableOnly
    */
    position: vec3
    
}

/**
* @wearableOnly
*/
interface WorldQueryModule extends Asset {
    /**
    * @wearableOnly
    */
    createHitTestSession(): HitTestSession
    
    /**
    * @wearableOnly
    */
    createHitTestSessionWithOptions(options: HitTestSessionOptions): HitTestSession
    
}

/**
* Provider for RenderMesh data representing the estimated shape of real world objects generated from depth information. Only available when world mesh tracking is supported and enabled.
*/
interface WorldRenderObjectProvider extends RenderObjectProvider {
    /**
    * Enable or disable world mesh tracking.
    */
    enableWorldMeshesTracking: boolean
    
    /**
    * Returns the number of faces of the mesh.
    
    * @readonly
    */
    faceCount: number
    
    /**
    * Mesh classification format being used.
    */
    meshClassificationFormat: MeshClassificationFormat
    
    /**
    * Enable or disable normal direction usage.
    */
    useNormals: boolean
    
    /**
    * Returns the number of vertices of the mesh.
    
    * @readonly
    */
    vertexCount: number
    
}

/**
* Provides information about whether certain world tracking features are supported by the device.
*/
interface WorldTrackingCapabilities extends ScriptObject {
    /**
    * @readonly
    */
    planesTrackingSupported: boolean
    
    /**
    * Returns true if the device supports scene reconstruction.
    
    * @readonly
    */
    sceneReconstructionSupported: boolean
    
    /**
    * @readonly
    */
    trackedWorldPointsSupported: boolean
    
}

/**
* Triggered when new world tracking meshes are detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
*/
interface WorldTrackingMeshesAddedEvent extends SceneEvent {
    /**
    * Returns an array of newly added Tracked Meshes.
    */
    getMeshes(): TrackedMesh[]
    
}

/**
* Triggered when some world tracking meshes are no longer detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
*/
interface WorldTrackingMeshesRemovedEvent extends SceneEvent {
    /**
    * Returns an array of TrackedMeshes that are no longer detected.
    */
    getMeshes(): TrackedMesh[]
    
}

/**
* Triggered when world tracking meshes are updated. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
*/
interface WorldTrackingMeshesUpdatedEvent extends SceneEvent {
    /**
    * Returns an array of TrackedMeshes that were updated.
    */
    getMeshes(): TrackedMesh[]
    
}

/**
* Triggered when plane(s) are newly detected. The `worldOptions.nativePlaneTrackingType` must be set to anything other than `NativePlaneTrackingType.None`. In addition, [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component must be set to `World` mode to orient the Camera relative to the planes correctly.

*/
interface WorldTrackingPlanesAddedEvent extends SceneEvent {
    /**
    * Returns an array of newly added [TrackedPlanes](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#trackedplane).
    */
    getPlanes(): TrackedPlane[]
    
}

/**
* Triggered when plane(s) are no longer detected.  This usually happens when two planes merge into one.  Planes persist when no longer seen by camera(s) and when previously detected objects move (e.g. a door is opened) to create a static scene. [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component must be set to `World` mode to orient the Camera relative to the planes correctly.

*/
interface WorldTrackingPlanesRemovedEvent extends SceneEvent {
    /**
    * Returns an array of [TrackedPlanes](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#trackedplane) that are no longer detected. 
    */
    getPlanes(): TrackedPlane[]
    
}

/**
* Triggered when currently detected plane(s) are updated.  This usually happens when a plane grows in size. The `worldOptions.nativePlaneTrackingType` must be set to anything other than `NativePlaneTrackingType.None`. In addition, [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component must be set to `World` mode to orient the Camera relative to the planes correctly.

*/
interface WorldTrackingPlanesUpdatedEvent extends SceneEvent {
    /**
    * Returns an array of [TrackedPlanes](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#trackedplane) that were updated.
    */
    getPlanes(): TrackedPlane[]
    
}

interface WorldUnderstandingModule extends Asset {
}

/**
* Describes how a texture should be sampled when using coordinates outside of the normal range.
*/
declare enum WrapMode {
    /**
    * Take the average of the border color and stretch it out.
    */
    ClampToEdge,
    /**
    * Repeats the current texture at the edge again.
    */
    Repeat,
    /**
    * Repeats the current texture at the edge again, but flipping the orientation.
    */
    MirroredRepeat,
    /**
    * Take the border color at the edge of a texture and stretch it out.
    */
    ClampToBorder
}

declare enum Zodiac {
    Aquarius,
    Aries,
    Cancer,
    Capricorn,
    Gemini,
    Leo,
    Libra,
    Pisces,
    Sagittarius,
    Scorpio,
    Taurus,
    Virgo
}



declare var script : ScriptComponent;

interface event0<R> {
    add(callback: () => R) : EventRegistration
    remove(eventRegistration: EventRegistration) : void
}
interface event1<T0,R> {
    add(callback: (arg0:T0) => R) : EventRegistration
    remove(eventRegistration: EventRegistration) : void
}
interface event2<T0,T1,R> {
    add(callback: (arg0:T0, arg1:T1) => R) : EventRegistration
    remove(eventRegistration: EventRegistration) : void
}
interface event3<T0,T1,T2,R> {
    add(callback: (arg0:T0, arg1:T1, arg2:T2) => R) : EventRegistration
    remove(eventRegistration: EventRegistration) : void
}
interface event4<T0,T1,T2,T3,R> {
    add(callback: (arg0:T0, arg1:T1, arg2:T2, arg3:T3) => R) : EventRegistration
    remove(eventRegistration: EventRegistration) : void
}
interface event5<T0,T1,T2,T3,T4,R> {
    add(callback: (arg0:T0, arg1:T1, arg2:T2, arg3:T3, arg4:T4) => R) : EventRegistration
    remove(eventRegistration: EventRegistration) : void
}

/**
* Not for real use. Contains a fake instance of every class. Helpful for checking the API of a class.

* @deprecated
*/
declare namespace _palette {
    /**
    * An object containing the position of an object relative to a LocationAsset. 
    */
    let Anchor: Anchor
    
    /**
    * Controls an animated texture resource. Can be accessed from [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#texture--control) on an animated texture.
    * See also: [2D Animation Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/2d-animation).
    */
    let AnimatedTextureFileProvider: AnimatedTextureFileProvider
    
    /**
    * Asset that contains multiple animation layers. Animation assets themselves do not handle playing or orchestrating animations. This is left to the animation player component to handle.
    */
    let AnimationAsset: AnimationAsset
    
    /**
    * Animation Clip is what an Animation Player uses to manage playback for a specific animation. It defines that animation by referencing an Animation Asset and providing start and end points, playback speed and direction, and blending information. 
    */
    let AnimationClip: AnimationClip
    
    let AnimationCurve: AnimationCurve
    
    let AnimationCurveTrack: AnimationCurveTrack
    
    let AnimationKeyFrame: AnimationKeyFrame
    
    let AnimationLayerBlendMode: AnimationLayerBlendMode
    
    let AnimationLayerScaleMode: AnimationLayerScaleMode
    
    /**
    * Component that handles playing animation clips as well as binding callbacks to user defined events.
    */
    let AnimationPlayer: AnimationPlayer
    
    let AnimationPlayerOnEventArgs: AnimationPlayerOnEventArgs
    
    let AnimationPropertyEventRegistration: AnimationPropertyEventRegistration
    
    /**
    * A layer containing different properties. Examples include position, rotation, scale or any other arbitrary properties a user would like to add and sample from.
    */
    let AnimationPropertyLayer: AnimationPropertyLayer
    
    /**
    * The base class for animation tracks.
    */
    let AnimationTrack: AnimationTrack
    
    /**
    * Base class for all assets used in the engine.
    */
    let Asset: Asset
    
    /**
    * Used by [Head.setAttachmentPointType()](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Head) to specify the type of attachment used with a Head binding.
    */
    let AttachmentPointType: AttachmentPointType
    
    /**
    * The curve that specifies how sound fades with the distance from Audio Component to the Audio Listener.****
    */
    let Audio_DistanceCurveType: Audio.DistanceCurveType
    
    /**
    * @snapOsOnly
    */
    let Audio_PlaybackMode: Audio.PlaybackMode
    
    /**
    * Used to play audio in a Lens.
    * You can assign an [AudioTrackAsset](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#AudioTrackAsset) to play through script or through the AudioComponent's inspector in Lens Studio.
    * See the [Playing Audio](https://lensstudio.snapchat.com/guides/audio) guide for more information.
    */
    let AudioComponent: AudioComponent
    
    /**
    * Configures an audio effect for [AudioEffectComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioEffectComponent).
    */
    let AudioEffectAsset: AudioEffectAsset
    
    /**
    * Used to add an audio effect to a Lens.
    * When present in the scene, it will automatically apply the selected audio effect to recordings made with the Lens.
    * See the [Audio Effect](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/audio/audio-effect) guide for more information.
    
    */
    let AudioEffectComponent: AudioEffectComponent
    
    /**
    * Provider for [AudioEffectAsset](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#AudioEffectAsset).
    */
    let AudioEffectProvider: AudioEffectProvider
    
    /**
    * A component that receives input from Audio Components that have Spatial Audio enabled. Calculates their positions relative to the scene object it is attached to,and properly mixes them.
    */
    let AudioListenerComponent: AudioListenerComponent
    
    /**
    * Provider of the Audio Output Audio Track asset. 
    */
    let AudioOutputProvider: AudioOutputProvider
    
    /**
    * Represents an audio file asset.
    * See also: [AudioComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioComponent).
    */
    let AudioTrackAsset: AudioTrackAsset
    
    /**
    * Base class for Audio Track providers.
    */
    let AudioTrackProvider: AudioTrackProvider
    
    /**
    * Cardinal axis enumeration.
    */
    let Axis: Axis
    
    /**
    * Settings for rendering the background on a [Text](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) component.
    * Accessible through the [Text](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) component's `backgroundSettings` property.
    */
    let BackgroundSettings: BackgroundSettings
    
    /**
    * The base class for all mesh rendering components.
    * Comparable to the former class "MeshVisual", which was split into the classes:
    * [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual),
    * [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MaterialMeshVisual),
    * and [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
    */
    let BaseMeshVisual: BaseMeshVisual
    
    /**
    * Base class for MultiplayerSession options. This class is not used directly - use ConnectedLensSessionOptions instead.
    */
    let BaseMultiplayerSessionOptions: BaseMultiplayerSessionOptions
    
    /**
    * Base class for Input and Output Placeholders used by MLComponent.
    */
    let BasePlaceholder: BasePlaceholder
    
    /**
    * Provides basic information about a transformation.
    * See also: [DeviceTracking](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking)
    */
    let BasicTransform: BasicTransform
    
    /**
    * File based asset.
    */
    let BinAsset: BinAsset
    
    let Bitmoji2DOptions: Bitmoji2DOptions
    
    let Bitmoji2DResource: Bitmoji2DResource
    
    let Bitmoji3DOptions: Bitmoji3DOptions
    
    /**
    * Provides information about the current user's 3D Bitmoji avatar to be downloaded via the RemoteMediaModule.
    */
    let Bitmoji3DResource: Bitmoji3DResource
    
    /**
    * Provides access to getting information about the current user's Bitmoji.
    */
    let BitmojiModule: BitmojiModule
    
    let BlendMode: BlendMode
    
    /**
    * Used to analyze the camera input and apply similar image artifacts to your AR objects in order to allow it to blend and match the real world better.
    */
    let BlurNoiseEstimation: BlurNoiseEstimation
    
    /**
    * Derived from ColliderComponent, attaching this to a SceneObject turns it into a dynamic rigid-body that is automatically moved by the physics simulation in response to gravity, collisions, and other forces.
    */
    let BodyComponent: BodyComponent
    
    /**
    * Provides depth values of the tracked body encoded as D24_UNORM_S8_UINT in screen resolution. Depth is normalized between 0-1, and the stencil component is ignored. The values may be remapped from normalized units (0 to 1) to negative centimeters from the camera (-near in cm to -far in cm) using the `Depth Map` mode of the `Texture 2D Sample` node in Material Editor.
    
    */
    let BodyDepthTextureProvider: BodyDepthTextureProvider
    
    /**
    * Provides surface normal values of the tracked body encoded as RGBA (x, y, z, confidence) in `R8G8B8A8_UNORM` format in screen resolution. The XYZ values may need to be remapped from [0 -> 1] to [-1 -> 1] using the "Normal Map" mode of the `Texture 2D Sample` node in Material Editor.
    */
    let BodyNormalsTextureProvider: BodyNormalsTextureProvider
    
    /**
    * Provider for full Body Mesh render object.
    */
    let BodyRenderObjectProvider: BodyRenderObjectProvider
    
    /**
    * Asset used to configure Body Tracking for the [ObjectTracking3D](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ObjectTracking3D) component.
    */
    let BodyTrackingAsset: BodyTrackingAsset
    
    /**
    * A box collision shape.
    */
    let BoxShape: BoxShape
    
    /**
    * Triggered when eyebrows are lowered on the tracked face.
    */
    let BrowsLoweredEvent: BrowsLoweredEvent
    
    /**
    * Triggered when eyebrows are raised on the tracked face.
    */
    let BrowsRaisedEvent: BrowsRaisedEvent
    
    /**
    * Triggered when eyebrows are returned to normal on the tracked face.
    */
    let BrowsReturnedToNormalEvent: BrowsReturnedToNormalEvent
    
    /**
    * Renders the scene to a Render Target texture.
    * A Camera will only render a SceneObject if the SceneObject's render layer is enabled on the Camera.
    * For more information, see the [Camera and Layers](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/camera) guide.
    */
    let Camera: Camera
    
    /**
    * The base class from which ColorRenderTarget and DepthStencilRenderTarget are derived from
    */
    let Camera_BaseRenderTarget: Camera.BaseRenderTarget
    
    /**
    * Color based RenderTarget.
    */
    let Camera_ColorRenderTarget: Camera.ColorRenderTarget
    
    /**
    * Different faces of the cubemap that a camera can render into.
    */
    let Camera_CubemapFace: Camera.CubemapFace
    
    /**
    * Used in [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `depthBufferMode` property.
    * Each mode is suited for handling objects at a certain distance range.
    * For more information on depth modes, see the [Camera and Layers](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/camera) guide.
    */
    let Camera_DepthBufferMode: Camera.DepthBufferMode
    
    /**
    * This class inherits from the BaseRenderTarget class. BaseRenderTarget class is not available for creation and is used like the base class for DepthStencilRenderTarget class to provide access to targetTexture, inputTexture and maskTexture properties.
    */
    let Camera_DepthStencilRenderTarget: Camera.DepthStencilRenderTarget
    
    /**
    * Used in [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `devicePropertyUsage` property.
    * Specifies which camera properties should be overridden by device properties.
    */
    let Camera_DeviceProperty: Camera.DeviceProperty
    
    /**
    * Returned from [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `type` property.
    */
    let Camera_Type: Camera.Type
    
    /**
    * Triggered when the device's back facing camera becomes active.
    */
    let CameraBackEvent: CameraBackEvent
    
    /**
    * Triggered when the device's front facing camera becomes active.
    */
    let CameraFrontEvent: CameraFrontEvent
    
    let CameraTextureProvider: CameraTextureProvider
    
    /**
    * A 2D canvas anchored in 3D space that acts as the root of the ScreenTransform hierarchy. ScreenTransform SceneObjects can be placed on the Canvas, and the Canvas can be sized and placed anywhere in 3D space. It is like a painter’s canvas for ScreenTransforms.
    */
    let Canvas: Canvas
    
    let Canvas_SortingType: Canvas.SortingType
    
    let Canvas_UnitType: Canvas.UnitType
    
    /**
    * Changes the capitalization of the text component. Useful when using dynamic texts.
    */
    let CapitilizationOverride: CapitilizationOverride
    
    /**
    * A capsule collision shape. Also known as a capped cylinder.
    */
    let CapsuleShape: CapsuleShape
    
    /**
    * Settings for how color will be cleared before rendering.
    */
    let ClearColorOption: ClearColorOption
    
    /**
    * Clears depth in the drawing order.
    */
    let ClearDepth: ClearDepth
    
    /**
    * Handles the mesh data of cloth and prepares it for cloth simulation. Also controls all the parameters of the cloth simulator and colliders.
    */
    let ClothVisual: ClothVisual
    
    /**
    * Cloth bend mode to use for cloth simulation.
    */
    let ClothVisual_BendMode: ClothVisual.BendMode
    
    /**
    * Options associated with the listValues method call.
    */
    let CloudStorageListOptions: CloudStorageListOptions
    
    /**
    * Provides access to Cloud Storage.
    */
    let CloudStorageModule: CloudStorageModule
    
    /**
    * Used to configure `Cloud Storage Module` with various options. Note: if `session` scoped storage is required, this option must be provided.
    
    */
    let CloudStorageOptions: CloudStorageOptions
    
    /**
    * Options associated with the getValue/deleteValue methods for Cloud Storage.
    */
    let CloudStorageReadOptions: CloudStorageReadOptions
    
    /**
    * Options associated with the setValue method for Cloud Storage.
    */
    let CloudStorageWriteOptions: CloudStorageWriteOptions
    
    /**
    * An instance of Cloud Storage that can store data in a multiplayer experience.
    */
    let CloudStore: CloudStore
    
    /**
    * Collider used by the [Hair Visual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#HairVisual) for its simulation.
    */
    let ColliderComponent: ColliderComponent
    
    /**
    * A state generated for ColliderComponent collision events.
    */
    let Collision: Collision
    
    /**
    * Args used for [ColliderComponent.onCollisionEnter](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when a collision begins.
    */
    let CollisionEnterEventArgs: CollisionEnterEventArgs
    
    /**
    * Args used for [ColliderComponent.onCollisionExit](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when a collision ends.
    */
    let CollisionExitEventArgs: CollisionExitEventArgs
    
    let CollisionMesh: CollisionMesh
    
    /**
    * Args used for [ColliderComponent.onCollisionStay](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered every frame while a collision continues.
    */
    let CollisionStayEventArgs: CollisionStayEventArgs
    
    /**
    * Not usable from JS. Accessed via the Colocated Landmarks 2D Mesh resource. Contains the 2D keypoints when creating a Colocated map. Expanded by the material provided with template.
    */
    let ColocatedLandmarks2DRenderObjectProvider: ColocatedLandmarks2DRenderObjectProvider
    
    /**
    * Not usable from JS. Accessed via the Colocated Landmarks 3D Mesh resource. Contains the 3D landmarks when creating a Colocated map. Expanded by the material provided with template.
    */
    let ColocatedLandmarks3DRenderObjectProvider: ColocatedLandmarks3DRenderObjectProvider
    
    let ColocatedLandmarksRenderObjectProviderBase: ColocatedLandmarksRenderObjectProviderBase
    
    /**
    * Creates Colocated Connected Lenses experiences by enabling the creation and tracking of a shared space which can be used to place several users in the same coordinate frame. This shared space will be made available and can be tracked by any friend you invite to join your session via Snapcode. Users are expected to be located in the same room when using the colocated feature. This component needs to be attached to the camera. 
    */
    let ColocatedTrackingComponent: ColocatedTrackingComponent
    
    /**
    * Data type used for color values.
    */
    let Colorspace: Colorspace
    
    /**
    * The base class for all components.  Components are attached to [SceneObjects](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject).
    */
    let Component: Component
    
    /**
    * A cone collision shape.
    */
    let ConeShape: ConeShape
    
    /**
    * Event fired when the "Launch connected lens" button was pressed. Wait for this event to be triggered before creating a session, as having this event gaurantees the user has accepted the necessary disclosures to use a connected lens experience.
    */
    let ConnectedLensEnteredEvent: ConnectedLensEnteredEvent
    
    /**
    * Connected Lenses Module allows use of networked Lens communication capabilities (real-time communication, co-located session creation and joining, and shared persistent storage). It's recommended to only use one ConnectedLensModule per Lens.
    */
    let ConnectedLensModule: ConnectedLensModule
    
    /**
    * Information that is bootstrapped to the user who just connected to the session.
    */
    let ConnectedLensModule_ConnectionInfo: ConnectedLensModule.ConnectionInfo
    
    /**
    * Information about the host update.
    */
    let ConnectedLensModule_HostUpdateInfo: ConnectedLensModule.HostUpdateInfo
    
    /**
    * Provides extra context about a RealtimeStore's creation.
    */
    let ConnectedLensModule_RealtimeStoreCreationInfo: ConnectedLensModule.RealtimeStoreCreationInfo
    
    /**
    * Gives information about the Realtime Store delete operation. 
    */
    let ConnectedLensModule_RealtimeStoreDeleteInfo: ConnectedLensModule.RealtimeStoreDeleteInfo
    
    /**
    * Provides information about a key being removed from a RealtimeStore.
    */
    let ConnectedLensModule_RealtimeStoreKeyRemovalInfo: ConnectedLensModule.RealtimeStoreKeyRemovalInfo
    
    /**
    * Provides information about a RealtimeStore's ownership being updated.
    */
    let ConnectedLensModule_RealtimeStoreOwnershipUpdateInfo: ConnectedLensModule.RealtimeStoreOwnershipUpdateInfo
    
    /**
    * Gives information about the Realtime Store update operation.
    */
    let ConnectedLensModule_RealtimeStoreUpdateInfo: ConnectedLensModule.RealtimeStoreUpdateInfo
    
    /**
    * Used by ConnectedLensesModule to specify the session share type.
    */
    let ConnectedLensModule_SessionShareType: ConnectedLensModule.SessionShareType
    
    /**
    * Provides information about a user in a Connected Lens session.
    */
    let ConnectedLensModule_UserInfo: ConnectedLensModule.UserInfo
    
    /**
    * Settings for configuring a Connected Lens session.
    */
    let ConnectedLensSessionOptions: ConnectedLensSessionOptions
    
    /**
    * Type of the created Connected Lens session.
    */
    let ConnectedLensSessionOptions_SessionCreationType: ConnectedLensSessionOptions.SessionCreationType
    
    /**
    * Constraints body motion in configurable ways, for simulating physical objects such as joints and hinges.
    */
    let Constraint: Constraint
    
    /**
    * Used to apply a constraint to an object.
    */
    let ConstraintComponent: ConstraintComponent
    
    /**
    * Contact point between two colliding objects.  See also: [ColliderComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), [CollisionEnterEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#CollisionEnterEventArgs), [CollisionExitEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#CollisionExitEventArgs), [CollisionStayEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#CollisionStayEventArgs).
    */
    let Contact: Contact
    
    /**
    * Base class for Texture Providers that crop an input texture.
    */
    let CropTextureProvider: CropTextureProvider
    
    /**
    * Used with [Pass's](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass) `cullMode` property.
    * Determines which faces of a surface are culled (not rendered).
    */
    let CullMode: CullMode
    
    /**
    * A cylinder collision shape.
    */
    let CylinderShape: CylinderShape
    
    let DeformingCollisionMesh: DeformingCollisionMesh
    
    /**
    * Creates a buffer for the audio data.
    */
    let Delay: Delay
    
    /**
    * Builder class for the Delay.
    */
    let DelayBuilder: DelayBuilder
    
    /**
    * An event that gets triggered after a delay.
    */
    let DelayedCallbackEvent: DelayedCallbackEvent
    
    /**
    * Local estimate of the derivative of the input data along the selected axis. Outputs the derivative of the input features along the window.
    */
    let Delta: Delta
    
    /**
    * Builder class for Delta.
    */
    let DeltaBuilder: DeltaBuilder
    
    /**
    * Settings for the depth clear option modes on a DepthStencilRenderTargetProvider.
    */
    let DepthClearOption: DepthClearOption
    
    /**
    * Writes video feed depth information to the depth buffer, which automatically sets up depth occlusion for 3D visuals.
    * Only works in some cases, such as in Lenses for Spectacles 3.
    * See the [Lenses for Spectacles guide](https://lensstudio.snapchat.com/lens-studio/references/guides/distributing/spectacles/spectacles-3/lenses-for-spectacles-3) for more information.
    */
    let DepthSetter: DepthSetter
    
    /**
    * Access to a Depth Stencil Render Target that can output depth and stencil values from a Camera in Depth24/Stencil8 format.
    */
    let DepthStencilRenderTargetProvider: DepthStencilRenderTargetProvider
    
    /**
    * Provides depth information of the video feed that the Lens is being applied to when available, such as in Lenses for Spectacles 3.
    * Can be accessed from `mainPass.baseTex.control` of a Spectacles Depth material.
    
    * See the [Lenses for Spectacles guide](https://lensstudio.snapchat.com/lens-studio/references/guides/distributing/spectacles/spectacles-2021/lenses-for-spectacles) for more information.
    */
    let DepthTextureProvider: DepthTextureProvider
    
    /**
    * Provides information about the device's camera.
    */
    let DeviceCamera: DeviceCamera
    
    /**
    * Provides information about the device running the Lens. Accessible through `global.deviceInfoSystem`.
    */
    let DeviceInfoSystem: DeviceInfoSystem
    
    /**
    * Used to track a landmarker in the camera. Moves the SceneObject's transform to match the detected landmarker scene.
    * See the [Landmarker guide](https://lensstudio.snapchat.com/templates/landmarker) for more information.
    */
    let DeviceLocationTrackingComponent: DeviceLocationTrackingComponent
    
    /**
    * Moves or rotates the SceneObject to match device orientation.
    
    * If using "Surface" tracking mode, adding this to a SceneObject enables surface tracking for the scene, and moves the
    * object to a position and rotation that matches the physical camera's pose in the world. Surface tracking can also be enhanced
    * with native AR by enabling the "Use Native AR" option in the Inspector panel, or through script by setting the
    * component's [`surfaceOptions.enhanceWithNativeAR`](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SurfaceOptions) property.
    
    * If using "Rotation" tracking mode, adding this to a SceneObject will apply the device's real world rotation to the object.
    
    * If using "World" tracking mode, adding this to a SceneObject enables native AR tracking for the scene, and moves the
    * object to a position and rotation that matches the physical camera's pose in the world.
    
    * See the [Tracking Modes](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/tracking-modes) guide for more information.
    
    **Note:** This component was named "WorldTracking" in previous versions of Lens Studio.
    */
    let DeviceTracking: DeviceTracking
    
    /**
    * Tracking modes used by the [DeviceTracking](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) component to specify what type of tracking to use.
    */
    let DeviceTrackingMode: DeviceTrackingMode
    
    let DeviceTrackingModule: DeviceTrackingModule
    
    /**
    * Provides answer information in response to `DialogModule.askQuestions()`.
    */
    let Dialog_Answer: Dialog.Answer
    
    let DialogModule: DialogModule
    
    /**
    * An Audio Component effect that simulates sound attenuation based on the orientation of the transform relative to the [AudioListenerComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioListenerComponent). 
    */
    let DirectivityEffect: DirectivityEffect
    
    let DirectMultiplayerSessionOptions: DirectMultiplayerSessionOptions
    
    /**
    * An audio effect that simulates sound attenuation based on the distance between the Audio and the [AudioListenerComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#AudioListenerComponent). 
    */
    let DistanceEffect: DistanceEffect
    
    /**
    * Used in [Text's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `dropShadowSettings` property.
    * Configures how dropshadow will appear on a Text component.
    */
    let DropshadowSettings: DropshadowSettings
    
    /**
    * A resource that is resolved at runtime.
    */
    let DynamicResource: DynamicResource
    
    let EventRegistration: EventRegistration
    
    /**
    * Expression names used with `FaceRenderObjectProvider.getExpressionWeightByName()`
    * and returned by `FaceRenderObjectProvider.getExpressionNames()`.
    */
    let Expressions: Expressions
    
    /**
    * Applies an eye color effect to a face.
    */
    let EyeColorVisual: EyeColorVisual
    
    /**
    * Texture Provider giving a cropped region of the input texture, calculated based on face position.
    * Can be accessed using `Texture.control` on a FaceCropTexture asset.
    * For more information, see the [Crop Textures](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/crop-textures#crop-textures) guide.
    */
    let FaceCropTextureProvider: FaceCropTextureProvider
    
    /**
    * Triggered when a new face is detected and starts being tracked.
    */
    let FaceFoundEvent: FaceFoundEvent
    
    /**
    * Controls the face image picker texture resource.
    * Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#texture--control) on a Face Image Picker texture.
    * For more information, see the [Face Image Picker Texture guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-image-picker-texture).
    */
    let FaceImagePickerTextureProvider: FaceImagePickerTextureProvider
    
    /**
    * Used with [FaceInsetVisual.faceRegion](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#FaceInsetVisual) for setting the face region to draw.
    */
    let FaceInsetRegion: FaceInsetRegion
    
    /**
    * Draws a section of a tracked face.
    */
    let FaceInsetVisual: FaceInsetVisual
    
    /**
    * Triggered when a face can no longer be tracked.  For example, if a face gets blocked from the camera's view, or gets too far away.
    */
    let FaceLostEvent: FaceLostEvent
    
    /**
    * Applies a face mask effect. See the [Face Mask Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-mask) for more information.
    */
    let FaceMaskVisual: FaceMaskVisual
    
    /**
    * Mesh provider for a Face Mesh. Accessible through the `control` property on a Face Mesh `RenderMesh`.
    */
    let FaceRenderObjectProvider: FaceRenderObjectProvider
    
    /**
    * Applies a face stretch effect.
    * Face stretch features can be added to a FaceStretchVisual through the Inspector panel in Lens Studio.
    * See the [Face Stretch Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-stretch) for more information.
    */
    let FaceStretchVisual: FaceStretchVisual
    
    /**
    * TextureProvider for face textures.
    * See the [Face Texture Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-texture) for more information.
    * Can be accessed using [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on a face texture asset.
    */
    let FaceTextureProvider: FaceTextureProvider
    
    /**
    * This is the base class for all face tracking events. This event won't actually get triggered itself, so use one of the child classes instead.
    */
    let FaceTrackingEvent: FaceTrackingEvent
    
    /**
    * Provider for file based Audio Tracks.
    */
    let FileAudioTrackProvider: FileAudioTrackProvider
    
    /**
    * A file track provider of the Licensed Sounds from Asset LIbrary.
    */
    let FileLicensedSoundProvider: FileLicensedSoundProvider
    
    /**
    * A [TextureProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextureProvider) for textures originating from files.
    */
    let FileTextureProvider: FileTextureProvider
    
    /**
    * Intersection filter settings. Unifies settings for world probes and collider overlap tests.   See also: [ColliderComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), [Physics](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#Physics).
    */
    let Filter: Filter
    
    let FilteringMode: FilteringMode
    
    let FixedCollisionMesh: FixedCollisionMesh
    
    /**
    * Fully constrain rotation and translation.  See also: [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
    */
    let FixedConstraint: FixedConstraint
    
    /**
    * Arguments used with the `InteractionComponent.onFocusEnd` event.
    */
    let FocusEndEventArgs: FocusEndEventArgs
    
    /**
    * Arguments used with the `InteractionComponent.onFocusStart` event.
    */
    let FocusStartEventArgs: FocusStartEventArgs
    
    /**
    * A font asset used for rendering text.
    * Used by [Text](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text).
    * For more information, see the [Text guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/text/2d-text).
    */
    let Font: Font
    
    /**
    * Mode for setting frustum culling on Pass
    */
    let FrustumCullMode: FrustumCullMode
    
    let GaussianSplattingAsset: GaussianSplattingAsset
    
    let GaussianSplattingVisual: GaussianSplattingVisual
    
    /**
    * Class for storing and retrieving data based on keys.
    * Used by [PersistentStorageSystem](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#PersistentStorageSystem).
    * For more information, see the [Persistent Storage guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/persistent-storage).
    */
    let GeneralDataStore: GeneralDataStore
    
    /**
    * Namespace for location functionality.
    */
    let GeoLocation: GeoLocation
    
    /**
    * Enumeration of supported GPS location accuracy.
    */
    let GeoLocationAccuracy: GeoLocationAccuracy
    
    /**
    * The location of the device.
    */
    let GeoPosition: GeoPosition
    
    /**
    * @wearableOnly
    */
    let GestureModule: GestureModule
    
    /**
    * @wearableOnly
    */
    let GestureModule_HandType: GestureModule.HandType
    
    /**
    * Represents a GLTF 3D Model.
    */
    let GltfAsset: GltfAsset
    
    /**
    * Settings for importing a glTF Asset.
    * Use this with [GltfAsset](https://lensstudio.snapchat.com/api/classes/GltfAsset) component's `tryInstantiateWithSetting` method.
    */
    let GltfSettings: GltfSettings
    
    /**
    * Hair asset converted from an FBX containing splines to be used with [Hair Visual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#HairVisual).
    */
    let HairDataAsset: HairDataAsset
    
    /**
    * Component that renders hair simulation.
    */
    let HairVisual: HairVisual
    
    /**
    * Provides additional data for the tracked hand. You can figure out whether the tracked hand is the left hand by accessing the *isLeft* property [true/false], as well as the probability of this data through the  *isLeftProbability*  property [0-1].
    
    */
    let HandSpecificData: HandSpecificData
    
    /**
    *     
    */
    let HandTracking3DAsset: HandTracking3DAsset
    
    /**
    * Triggers haptic feedback on the device. (iOS Devices only)
    
    */
    let HapticFeedbackSystem: HapticFeedbackSystem
    
    /**
    * The method in which haptic feedback is provided. Use with the `HapticFeedbackSystem`.
    */
    let HapticFeedbackType: HapticFeedbackType
    
    /**
    * Binds the SceneObject to a tracked face.
    * See the [Head Attached 3D Objects Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/head-attached-3d-objects) for more information.
    */
    let Head: Head
    
    /**
    * Constraints translation and a single axis of rotation.  See also: [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
    */
    let HingeConstraint: HingeConstraint
    
    /**
    * Used to show and hide hints to the user.
    * For more information and useful helper scripts, see the [Scripting Hints Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/additional-examples/scripting-hints).
    
    * <table cellspacing=0 cellpadding=0><thead><tr><th>Hint ID</th><th>Hint Message</th></tr></thead><tbody><tr><td>&#8220;lens_hint_blow_a_kiss&#8221;</td><td>&#8220;Blow A Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_come_closer&#8221;</td><td>&#8220;Come Closer&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_smile&#8221;</td><td>&#8220;Do Not Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_do_not_try_with_a_friend&#8221;</td><td>&#8220;Do Not Try With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_find_face&#8221;</td><td>&#8220;Find Face&#8221;</td></tr><tr><td>&#8220;lens_hint_keep_raising_your_eyebrows&#8221;</td><td>&#8220;Keep Raising Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss&#8221;</td><td>&#8220;Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_kiss_again&#8221;</td><td>&#8220;Kiss Again&#8221;</td></tr><tr><td>&#8220;lens_hint_look_around&#8221;</td><td>&#8220;Look Around&#8221;</td></tr><tr><td>&#8220;lens_hint_look_down&#8221;</td><td>&#8220;Look Down&#8221;</td></tr><tr><td>&#8220;lens_hint_look_left&#8221;</td><td>&#8220;Look Left&#8221;</td></tr><tr><td>&#8220;lens_hint_look_right&#8221;</td><td>&#8220;Look Right&#8221;</td></tr><tr><td>&#8220;lens_hint_look_up&#8221;</td><td>&#8220;Look Up&#8221;</td></tr><tr><td>&#8220;lens_hint_make_some_noise&#8221;</td><td>&#8220;Make Some Noise!&#8221;</td></tr><tr><td>&#8220;lens_hint_nod_your_head&#8221;</td><td>&#8220;Nod Your Head&#8221;</td></tr><tr><td>&#8220;lens_hint_now_kiss&#8221;</td><td>&#8220;Now Kiss&#8221;</td></tr><tr><td>&#8220;lens_hint_now_open_your_mouth&#8221;</td><td>&#8220;Now Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_now_raise_your_eyebrows&#8221;</td><td>&#8220;Now Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_now_smile&#8221;</td><td>&#8220;Now Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth&#8221;</td><td>&#8220;Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_open_your_mouth_again&#8221;</td><td>&#8220;Open Your Mouth Again&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_eyebrows_or_open_mouth&#8221;</td><td>&#8220;Raise Your Eyebrows / Or / Open Your Mouth&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows&#8221;</td><td>&#8220;Raise Your Eyebrows&#8221;</td></tr><tr><td>&#8220;lens_hint_raise_your_eyebrows_again&#8221;</td><td>&#8220;Raise Your Eyebrows Again&#8221;</td></tr><tr><td>&#8220;lens_hint_smile&#8221;</td><td>&#8220;Smile&#8221;</td></tr><tr><td>&#8220;lens_hint_smile_again&#8221;</td><td>&#8220;Smile Again&#8221;</td></tr><tr><td>&#8220;lens_hint_swap_camera&#8221;</td><td>&#8220;Swap Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_tap&#8221;</td><td>&#8220;Tap!&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_a_surface&#8221;</td><td>&#8220;Tap A Surface&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground&#8221;</td><td>&#8220;Tap The Ground&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_ground_to_place&#8221;</td><td>&#8220;Tap Ground To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_tap_surface_to_place&#8221;</td><td>&#8220;Tap Surface To Place&#8221;</td></tr><tr><td>&#8220;lens_hint_try_friend&#8221;</td><td>&#8220;Try It With A Friend&#8221;</td></tr><tr><td>&#8220;lens_hint_try_rear_camera&#8221;</td><td>&#8220;Try It With Your Rear Camera&#8221;</td></tr><tr><td>&#8220;lens_hint_turn_around&#8221;</td><td>&#8220;Turn Around&#8221;</td></tr><tr><td>&#8220;lens_hint_walk_through_the_door&#8221;</td><td>&#8220;Walk Through The Door&#8221;</td></tr></tbody></table>
    */
    let HintsComponent: HintsComponent
    
    /**
    * @wearableOnly
    */
    let HitTestSession: HitTestSession
    
    /**
    * @wearableOnly
    */
    let HitTestSessionOptions: HitTestSessionOptions
    
    /**
    * Used by the `horizontalAlignment` property in [MeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual).
    * When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned horizontally.
    */
    let HorizontalAlignment: HorizontalAlignment
    
    /**
    * Options for wrapping text horizontally.
    * Used by [Text component's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `horizontalOverflow` property.
    */
    let HorizontalOverflow: HorizontalOverflow
    
    let HoverEvent: HoverEvent
    
    /**
    * The base class for parameter objects passed into event callbacks.
    */
    let IEventParameters: IEventParameters
    
    /**
    * A 2D visual used for drawing texture assets.
    * Commonly used with [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) for drawing images on the screen.
    
    * See the [Image guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/image) for more information.
    */
    let Image: Image
    
    /**
    * Controls an image picker texture and UI.
    * Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on an Image Picker texture.
    * For more information, see the [Image Picker Texture](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/media-picker-texture) guide.
    */
    let ImagePickerTextureProvider: ImagePickerTextureProvider
    
    /**
    * Builds InputPlaceHolders for MLComponent.
    */
    let InputBuilder: InputBuilder
    
    /**
    * Controls input data for a neural network used by an MLComponent.
    * For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
    */
    let InputPlaceholder: InputPlaceholder
    
    /**
    * Allows the `MeshVisual` provided to this component to handle touches on the screen (blocking Snapchat from receiving the touches), and optionally let certain touch types to pass through (let Snapchat handle the touch).
    
    * Possible `TouchType` values:
    
    * "TouchTypeNone"
    * "TouchTypeTouch"
    * "TouchTypeTap"
    * "TouchTypeDoubleTap"
    * "TouchTypeScale"
    * "TouchTypePan"
    * "TouchTypeSwipe"
    */
    let InteractionComponent: InteractionComponent
    
    /**
    * Triggered when the tracked face ends a kiss.
    */
    let KissFinishedEvent: KissFinishedEvent
    
    /**
    * Triggered when the tracked face starts a kiss.
    */
    let KissStartedEvent: KissStartedEvent
    
    /**
    * This event is triggered at the end of every frame, after normal [UpdateEvents](https://lensstudio.snapchat.com/api/lens-studio/Classes/Events#UpdateEvent) trigger
    * but before rendering occurs.
    */
    let LateUpdateEvent: LateUpdateEvent
    
    /**
    * Used to describe a set of layers that an object belongs to or interacts with.
    
    * See [SceneObject's](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject) `layer` property, [Camera's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Camera) `renderLayer` property, and [LightSource's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#LightSource) `renderLayer` property.
    */
    let LayerSet: LayerSet
    
    let Leaderboard: Leaderboard
    
    let Leaderboard_CreateOptions: Leaderboard.CreateOptions
    
    let Leaderboard_OrderingType: Leaderboard.OrderingType
    
    let Leaderboard_RetrievalOptions: Leaderboard.RetrievalOptions
    
    let Leaderboard_UserRecord: Leaderboard.UserRecord
    
    let Leaderboard_UsersType: Leaderboard.UsersType
    
    let LeaderboardModule: LeaderboardModule
    
    /**
    * Collider asset generated from a mesh to be used with the [Hair Visual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#HairVisual) as part of the hair simulation.
    */
    let LevelsetColliderAsset: LevelsetColliderAsset
    
    /**
    * A levelset collision shape. A levelset is an asset that is generated to approximate a mesh.
    */
    let LevelsetShape: LevelsetShape
    
    /**
    * Acts as a source of light in the scene.
    * See the [Light and Shadows](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/graphics/light-and-shadow) guide for more information about lighting.
    */
    let LightSource: LightSource
    
    /**
    * Applies a liquify effect to anything rendered behind it.
    */
    let LiquifyVisual: LiquifyVisual
    
    let LoadStatus: LoadStatus
    
    /**
    * Asset used with the Localizations system to support custom localization strings.
    */
    let LocalizationsAsset: LocalizationsAsset
    
    /**
    * Helps convert data types to localized string representations. Accessible through `global.localizationSystem`.
    
    * Note that formatted or localized strings may appear differently to users depending on their region.
    * The example results given here are representative of a user in the United States, but may appear differently for users in other regions.
    */
    let LocalizationSystem: LocalizationSystem
    
    /**
    * A component which modifies the [Transform](https://lensstudio.snapchat.com/api/classes/Transform) of the object it is on to a position in the real world, based on a `LocationAsset` and a `position`.
    
    */
    let LocatedAtComponent: LocatedAtComponent
    
    /**
    * Provides a frame of reference in which to localize objects to the real world. Use with [LocatedAtComponent](https://lensstudio.snapchat.com/api/classes/LocatedAtComponent).
    */
    let LocationAsset: LocationAsset
    
    /**
    * Provides access to location cloud storage depending upon the LocationCloudStorageOptions.
    */
    let LocationCloudStorageModule: LocationCloudStorageModule
    
    /**
    * Used to configure LocationCloudStorage module with various options. 
    */
    let LocationCloudStorageOptions: LocationCloudStorageOptions
    
    /**
    * Instance of location cloud store which has a similar interface as cloud store.
    */
    let LocationCloudStore: LocationCloudStore
    
    /**
    * Used by [DeviceLocationTrackingComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceLocationTrackingComponent) to indicate the user's distance from the landmarker location.
    * See the [Landmarker guide](https://lensstudio.snapchat.com/templates/landmarker) for more information.
    */
    let LocationProximityStatus: LocationProximityStatus
    
    /**
    * Provides access to a location's Mesh--such as when working with City Scale AR. Usually used in conjunction with `LocationTextureProvider`.
    */
    let LocationRenderObjectProvider: LocationRenderObjectProvider
    
    /**
    * The LocationService allows the user to provide their location to lens applications if they so desire. For privacy reasons, the user is asked for permission to report location information.
    */
    let LocationService: LocationService
    
    /**
    * Provides access to a location's texture--such as when working with City Scale AR.
    */
    let LocationTextureProvider: LocationTextureProvider
    
    /**
    * Every frame, LookAtComponent rotates its SceneObject to face towards a target SceneObject.
    */
    let LookAtComponent: LookAtComponent
    
    /**
    * The "aim" and "up" vectors used with [LookAtComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#LookAtComponent) when determining rotation.
    * LookAtComponent will try to point the `Aim` axis of the SceneObject towards the target,
    * while keeping the `Up` axis of the SceneObject pointing towards `worldUpVector`.
    */
    let LookAtComponent_AimVectors: LookAtComponent.AimVectors
    
    /**
    * Modes used in `LookAtComponent.lookAtMode` to determine the rotation method being used.
    */
    let LookAtComponent_LookAtMode: LookAtComponent.LookAtMode
    
    /**
    * Used with [LookAtComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#LookAtComponent) to set the "up" vector when determining rotation.
    */
    let LookAtComponent_WorldUpVector: LookAtComponent.WorldUpVector
    
    /**
    * Namespace for Machine Learning related classes and methods.
    * For more information, see the [Machine Learning Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-overview).
    */
    let MachineLearning: MachineLearning
    
    /**
    * Timing options for when MLComponent should start or stop running. Used with `MLComponent.runScheduled()`.
    * For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
    */
    let MachineLearning_FrameTiming: MachineLearning.FrameTiming
    
    /**
    * Inference modes used by `MLComponent.inferenceMode`. Each mode describes how the neural network will be run.
    */
    let MachineLearning_InferenceMode: MachineLearning.InferenceMode
    
    /**
    * Describes the current state of the MLComponent model.
    * For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
    */
    let MachineLearning_ModelState: MachineLearning.ModelState
    
    /**
    * Types of output used by OutputPlaceholder.
    */
    let MachineLearning_OutputMode: MachineLearning.OutputMode
    
    /**
    * Handles input information from user touch input via the [TouchComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TouchComponent) to control Scale, Rotation, and Translation of objects.
    */
    let ManipulateComponent: ManipulateComponent
    
    /**
    * This event is triggered when manipulation on the object ends.
    */
    let ManipulateEndEvent: ManipulateEndEvent
    
    /**
    * Arguments used with the `ManipulateComponent.onManipulateEnd` event.
    */
    let ManipulateEndEventArgs: ManipulateEndEventArgs
    
    /**
    * Result object returned from [ManipulateComponent.intersectManipulateFrame()](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ManipulateComponent).
    */
    let ManipulateFrameIntersectResult: ManipulateFrameIntersectResult
    
    /**
    * This event is triggered when manipulation on the object begins.
    */
    let ManipulateStartEvent: ManipulateStartEvent
    
    /**
    * Arguments used with the `ManipulateComponent.onManipulateStart` event.
    */
    let ManipulateStartEventArgs: ManipulateStartEventArgs
    
    /**
    * Enum values specifying each type of manipulation. See [ManipulateComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ManipulateComponent).
    */
    let ManipulateType: ManipulateType
    
    /**
    * Module for providing Map utils. 
    */
    let MapModule: MapModule
    
    let MappingOptions: MappingOptions
    
    let MappingSession: MappingSession
    
    let MappingSession_MappingThrottling: MappingSession.MappingThrottling
    
    let MapTextureProvider: MapTextureProvider
    
    /**
    * Defines a marker to use for Marker Tracking with [MarkerTrackingComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MarkerTrackingComponent).
    * For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
    */
    let MarkerAsset: MarkerAsset
    
    /**
    * Base class for marker providers.
    * For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
    */
    let MarkerProvider: MarkerProvider
    
    /**
    * Used to track images in the camera. Moves the containing object's transform to match the detected image.
    * For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
    */
    let MarkerTrackingComponent: MarkerTrackingComponent
    
    /**
    * Clips visuals and Interaction Component events within a tree hierarchy. Any Visual or Interaction Components will be clipped user defined 2D bounds. These 2D bounds are defined by a Screen Transform. Useful for clipping some screen transforms--for example a scroll view. 
    */
    let MaskingComponent: MaskingComponent
    
    /**
    * A 2x2 matrix.
    */
    let mat2: mat2
    
    /**
    * A 3x3 matrix.
    */
    let mat3: mat3
    
    /**
    * A 4x4 matrix.
    */
    let mat4: mat4
    
    /**
    * An asset that describes how visual objects should appear.
    * Each Material is a collection of [Passes](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass) which define the actual rendering passes.
    * Materials are used by [MeshVisuals](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual) for drawing meshes in the scene.
    */
    let Material: Material
    
    /**
    * Base class for all MeshVisual components using [Materials](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#Material) to render.
    * Comparable to the former class "MeshVisual", which was split into the classes:
    * [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual),
    * [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#MaterialMeshVisual),
    * and [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
    */
    let MaterialMeshVisual: MaterialMeshVisual
    
    /**
    * Provides useful math utility functions.
    */
    let MathUtils: MathUtils
    
    /**
    * Settings for the physical substance, such as friction and bounciness, of a collider. If unset, uses the default matter from the world settings.
    */
    let Matter: Matter
    
    /**
    * Base class for Texture Providers based on selectable media.
    */
    let MediaPickerTextureProvider: MediaPickerTextureProvider
    
    /**
    * Computes a mel scale spectrogram - a spectrogram where the frequencies are converted to the mel scale.
    */
    let MelSpectrogram: MelSpectrogram
    
    /**
    * A builder class for MelSpectrogram.
    */
    let MelSpectrogramBuilder: MelSpectrogramBuilder
    
    /**
    * A class for generating meshes at runtime.
    */
    let MeshBuilder: MeshBuilder
    
    /**
    * Formats of mesh classification used by WorldRenderObjectProvider.
    */
    let MeshClassificationFormat: MeshClassificationFormat
    
    /**
    * Possible index data types used by [MeshBuilder](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#MeshBuilder). `MeshIndexType.UInt16` is the value normally used.
    */
    let MeshIndexType: MeshIndexType
    
    let MeshRenderObjectProvider: MeshRenderObjectProvider
    
    let MeshShadowMode: MeshShadowMode
    
    /**
    * Allows meshes to be used as collision shapes, for ColliderComponent and BodyComponent.
    */
    let MeshShape: MeshShape
    
    /**
    * Mesh topology types used by [MeshBuilder](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#MeshBuilder).
    */
    let MeshTopology: MeshTopology
    
    /**
    * This class has been DEPRECATED starting in Lens Studio 2.3.
    * The `Component.MeshVisual` typename is now an alias for [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual).
    * When upgrading a project to Lens Studio 2.3 or higher, any instances of the MeshVisual component will be upgraded to [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
    
    * This class was split into the following three classes, to better distinguish the behaviors of child classes.
    
    * [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual): Base class for all visual classes using meshes to render
    
    * [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#MaterialMeshVisual): Child class of BaseMeshVisual, gives access to the [Materials](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#Material) used to render
    
    * [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual): Child class of MaterialMeshVisual, gives access to the [RenderMesh](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#RenderMesh) used to render
    */
    let MeshVisual: MeshVisual
    
    /**
    * Mel-frequency cepstral coefficients.
    */
    let MFCC: MFCC
    
    /**
    * Builder class for the MFCC (Mel Frequency Cepstral Co-efficients).
    */
    let MFCCBuilder: MFCCBuilder
    
    /**
    * The Audio Track Provider of the audio from microphone.
    */
    let MicrophoneAudioProvider: MicrophoneAudioProvider
    
    /**
    * Binary ML model supplied by the user.
    */
    let MLAsset: MLAsset
    
    /**
    * Transforms inputs (Textures or Float32Array) into outputs (Textures or Float32Array) using a neural network.
    * The neural network is represented by an MLAsset, which is set as the `model` property.
    * For more information, see the [MLComponent Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/ml-component-overview).
    */
    let MLComponent: MLComponent
    
    /**
    * @wearableOnly
    */
    let MotionController: MotionController
    
    /**
    * @wearableOnly
    */
    let MotionController_HapticFeedback: MotionController.HapticFeedback
    
    /**
    * @wearableOnly
    */
    let MotionController_HapticRequest: MotionController.HapticRequest
    
    /**
    * @wearableOnly
    */
    let MotionController_MotionControllerOptions: MotionController.MotionControllerOptions
    
    /**
    * @wearableOnly
    */
    let MotionController_MotionType: MotionController.MotionType
    
    let MotionController_Options: MotionController.Options
    
    /**
    * @wearableOnly
    */
    let MotionController_TouchPhase: MotionController.TouchPhase
    
    /**
    * @wearableOnly
    */
    let MotionController_TrackingQuality: MotionController.TrackingQuality
    
    /**
    * @wearableOnly
    */
    let MotionControllerModule: MotionControllerModule
    
    /**
    * Triggered when the tracked face's mouth closes.
    */
    let MouthClosedEvent: MouthClosedEvent
    
    /**
    * Triggered when the tracked face's mouth opens.
    */
    let MouthOpenedEvent: MouthOpenedEvent
    
    /**
    * An instance of a Connected Lens session among a group of participants who were successfully invited into the experience. 
    */
    let MultiplayerSession: MultiplayerSession
    
    /**
    * Tracking type used by the [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component to specify what type of plane to detect. 
    */
    let NativePlaneTrackingType: NativePlaneTrackingType
    
    let NoiseReduction: NoiseReduction
    
    let NoiseReductionBuilder: NoiseReductionBuilder
    
    /**
    * Base class for configuring object tracking in the [ObjectTracking3D](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ObjectTracking3D) component.
    */
    let Object3DAsset: Object3DAsset
    
    /**
    * A reusable object hierarchy stored as a resource.
    * Can be instantiated through script or brought into the scene through Lens Studio.
    * For more information, see the [Prefabs](https://lensstudio.snapchat.com/lens-studio/references/guides/general/prefabs) guide.
    */
    let ObjectPrefab: ObjectPrefab
    
    /**
    * Provides additional data for the tracked object. For example, with hand tracking, you can figure out whether the tracked hand is the left hand by accessing the `isLeft` property [true/false], as well as the probability of this data through the `isLeftProbability` property [0-1]. 
    */
    let ObjectSpecificData: ObjectSpecificData
    
    /**
    * Used to track objects in the camera. Moves the local [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) to match the detected image.
    
    * See the [Object Tracking guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/object-tracking) and the [Hand Gestures Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/body/hand-gestures) for more information.
    */
    let ObjectTracking: ObjectTracking
    
    /**
    * Component used for tracking objects in 3D space.
    */
    let ObjectTracking3D: ObjectTracking3D
    
    /**
    * Strategies for updating attached objects. Used by the [ObjectTracking3D](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ObjectTracking3D) component.
    */
    let ObjectTracking3D_TrackingMode: ObjectTracking3D.TrackingMode
    
    let ObjectTrackingMaskedTextureProvider: ObjectTrackingMaskedTextureProvider
    
    let ObjectTrackingNormalsTextureProvider: ObjectTrackingNormalsTextureProvider
    
    /**
    * Controls a segmentation texture and its placement using information provided by Object tracking.
    */
    let ObjectTrackingTextureProvider: ObjectTrackingTextureProvider
    
    /**
    * Triggered when the Lens starts, earlier than all OnStart events. Also fires immediately on a newly instantiated or copied object.
    */
    let OnAwakeEvent: OnAwakeEvent
    
    /**
    * Triggered when the associated ScriptComponent is destroyed while the lens is running.
    */
    let OnDestroyEvent: OnDestroyEvent
    
    /**
    * Triggered when the `ScriptComponent` this event is bound to is disabled.
    
    */
    let OnDisableEvent: OnDisableEvent
    
    /**
    * Triggered when the `ScriptComponent` this event is bound to is enabled.
    
    */
    let OnEnableEvent: OnEnableEvent
    
    /**
    * Triggered when the Lens starts, after all OnAwakeEvents have triggered. Also triggers later on newly instantiated or copied objects.
    */
    let OnStartEvent: OnStartEvent
    
    /**
    * Types of operating system that may be running on the device.
    */
    let OS: OS
    
    /**
    * Used in [Text's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `outlineSettings` property.
    * Configures how text outlining will appear on a Text component.
    */
    let OutlineSettings: OutlineSettings
    
    /**
    * Builds OutputPlaceholders for MLComponent.
    */
    let OutputBuilder: OutputBuilder
    
    /**
    * Provides output data from the neural network used by an MLComponent.
    * For more information, see the [MLComponent Scripting](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/scripting-ml-component) guide.
    */
    let OutputPlaceholder: OutputPlaceholder
    
    /**
    * Exposes state generated for ColliderComponent overlap events.  See also: [ColliderComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), [OverlapEnterEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OverlapEnterEventArgs), [OverlapExitEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OverlapExitEventArgs), [OverlapStayEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OverlapStayEventArgs).
    */
    let Overlap: Overlap
    
    /**
    * Args used for [ColliderComponent.onOverlapEnter](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when the collider begins overlapping another object. Typically used for volume triggers.
    */
    let OverlapEnterEventArgs: OverlapEnterEventArgs
    
    /**
    * Args used for [ColliderComponent.onOverlapEnd](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered when the collider stops overlapping another object. Typically used for volume triggers.
    */
    let OverlapExitEventArgs: OverlapExitEventArgs
    
    /**
    * Args used for [ColliderComponent.onOverlapStay](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ColliderComponent), which is triggered every frame while the collider continues overlapping another object. Typically used for volume triggers.
    */
    let OverlapStayEventArgs: OverlapStayEventArgs
    
    /**
    * @wearableOnly
    */
    let PalmTapDownArgs: PalmTapDownArgs
    
    /**
    * @wearableOnly
    */
    let PalmTapUpArgs: PalmTapUpArgs
    
    /**
    * Controls how a mesh will get rendered. Each Pass acts as an interface for the shader it's associated with.
    * Any properties on a Pass's shader will automatically become properties on that Pass.
    * For example, if the shader defines a variable named `baseColor`, a script would be able to access that property as `material.mainPass.baseColor`.
    */
    let Pass: Pass
    
    /**
    * Similar to [Pass](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Pass), except used by [VFX Assets](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#VFXAsset).
    */
    let PassWrapper: PassWrapper
    
    /**
    * Allows for retrieval of a collection of Pass objects used by VFXAsset
    */
    let PassWrappers: PassWrappers
    
    /**
    * Allows data to be stored and retrieved between Lens sessions.
    * In other words, data can be saved on device and loaded back in the next time the Lens is opened.
    * Can be accessed with `global.persistentStorageSystem`.
    
    * See the [Persistent Storage guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/persistent-storage) for more information.
    */
    let PersistentStorageSystem: PersistentStorageSystem
    
    /**
    * Namespace containing physics classes and static physics methods.
    */
    let Physics: Physics
    
    /**
    * Namespace containing static helper methods for [Constraints](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Constraint).
    */
    let Physics_Constraint: Physics.Constraint
    
    /**
    * Constraint type used by a [Constraint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Contraint).   See also: [Physics.Constraint.create()](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#PhysicsConstraint), [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
    */
    let Physics_ConstraintType: Physics.ConstraintType
    
    /**
    * Script interface for applying collision filtering to colliders and ray/shape-casts.
    */
    let Physics_Filter: Physics.Filter
    
    /**
    * Type of force to use when applying force or torque to a [BodyComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BodyComponent).
    */
    let Physics_ForceMode: Physics.ForceMode
    
    /**
    * Stores reusable settings uniform for a world (such as gravity magnitude and direction). See also: [WorldComponent.worldSettings](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#WorldComponent).
    */
    let Physics_WorldSettingsAsset: Physics.WorldSettingsAsset
    
    /**
    * @wearableOnly
    */
    let PinchDownArgs: PinchDownArgs
    
    /**
    * @wearableOnly
    */
    let PinchStrengthArgs: PinchStrengthArgs
    
    /**
    * @wearableOnly
    */
    let PinchUpArgs: PinchUpArgs
    
    /**
    * Attaches the SceneObject to the mesh surface of a different SceneObject.
    * See the [Pin To Mesh](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/3d/pin-to-mesh#adding-a-pin-to-mesh-component) guide for more information.
    */
    let PinToMeshComponent: PinToMeshComponent
    
    /**
    * Used with [PinToMeshComponent.orientation](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#PinToMeshComponent).
    */
    let PinToMeshComponent_Orientation: PinToMeshComponent.Orientation
    
    let PitchShifter: PitchShifter
    
    let PitchShifterBuilder: PitchShifterBuilder
    
    let PlaybackMode: PlaybackMode
    
    /**
    * Represents 3D locations of stationary features in the environment. The resulting cloud of points provides a sparse description of the 3D environment.
    
    */
    let PointCloud: PointCloud
    
    /**
    * A type of constraint that only allows rotation.  See also: [ConstraintComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ConstraintComponent).
    */
    let PointConstraint: PointConstraint
    
    /**
    * An Audio Component effect that allows the Lens to simulate sound based on the direction of the Audio Listener relative to the Audio Component.
    */
    let PositionEffect: PositionEffect
    
    /**
    * Uses an input color lookup table image to adjust the coloring of the Lens.
    * See the [Color Correction Post Effect guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/graphics/materials/post-effects#color-correction) for more information.
    */
    let PostEffectVisual: PostEffectVisual
    
    /**
    * Performs collision tests (such as ray casts) in one or more world. See [Physics.createGlobalProbe()](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#Physics), [Physics.createRootProbe()](https://lensstudio.snapchat.com/api/lens-studio/Classes/OtherClasses#Physics), [WorldComponent.createProbe()](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#WorldComponent).
    */
    let Probe: Probe
    
    /**
    * RenderObjectProvider for mesh objects generated procedurally.
    */
    let ProceduralMeshRenderObjectProvider: ProceduralMeshRenderObjectProvider
    
    /**
    * Provides a texture that can be written to or read from. Can be accessed using Texture.control on a Procedural Texture.
    */
    let ProceduralTextureProvider: ProceduralTextureProvider
    
    let ProcessedLocationModule: ProcessedLocationModule
    
    let Properties: Properties
    
    let PropertyOnEventArgs: PropertyOnEventArgs
    
    /**
    * Base class for all resource providers.
    */
    let Provider: Provider
    
    /**
    * A quaternion, used to represent rotation.
    */
    let quat: quat
    
    let RawLocationModule: RawLocationModule
    
    /**
    * Hit results of a ray-cast provided to script. See [Probe](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Probe).
    */
    let RayCastHit: RayCastHit
    
    /**
    * The options for the realtime store.
    */
    let RealtimeStoreCreateOptions: RealtimeStoreCreateOptions
    
    /**
    * The ownership model of a realtime store.
    */
    let RealtimeStoreCreateOptions_Ownership: RealtimeStoreCreateOptions.Ownership
    
    /**
    * The persistence model for a realtime store.
    */
    let RealtimeStoreCreateOptions_Persistence: RealtimeStoreCreateOptions.Persistence
    
    /**
    * An axis aligned rectangle.
    * Used by `anchors` and `offsets` in [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) to represent screen boundaries.
    * Rect can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
    
    */
    let Rect: Rect
    
    /**
    * Applies ScreenTransform positioning to match the cropped region of a texture.
    * For more information, see the [Crop Textures](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/crop-textures) guide.
    */
    let RectangleSetter: RectangleSetter
    
    /**
    * Texture Provider providing a cropped region of the input texture. The region is specified by the cropRect in local space and rotation.
    * Can be accessed using Texture.control on a RectCropTexture asset, such as a Screen Crop Texture.
    * For more information, see the [Crop Textures](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/crop-textures) guide.
    */
    let RectCropTextureProvider: RectCropTextureProvider
    
    let RemoteApiRequest: RemoteApiRequest
    
    let RemoteApiResponse: RemoteApiResponse
    
    /**
    * Provides access to a remote media.
    */
    let RemoteMediaModule: RemoteMediaModule
    
    /**
    * Provides a reference to a remote asset (i.e. assets outside of the Lens size limit) that can be downloaded at runtime using script.
    */
    let RemoteReferenceAsset: RemoteReferenceAsset
    
    /**
    * @snapOsOnly
    */
    let RemoteServiceHttpRequest: RemoteServiceHttpRequest
    
    /**
    * @snapOsOnly
    */
    let RemoteServiceHttpRequest_HttpRequestMethod: RemoteServiceHttpRequest.HttpRequestMethod
    
    /**
    * @snapOsOnly
    */
    let RemoteServiceHttpResponse: RemoteServiceHttpResponse
    
    let RemoteServiceModule: RemoteServiceModule
    
    /**
    * Represents a mesh asset.
    * See also: [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
    */
    let RenderMesh: RenderMesh
    
    /**
    * Renders a [RenderMesh](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#RenderMesh) asset in the scene.
    * Comparable to the former class "MeshVisual", which was split into the classes:
    * [BaseMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#BaseMeshVisual),
    * [MaterialMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#MaterialMeshVisual),
    * and [RenderMeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#RenderMeshVisual).
    */
    let RenderMeshVisual: RenderMeshVisual
    
    /**
    * Provider for RenderMesh data.
    */
    let RenderObjectProvider: RenderObjectProvider
    
    /**
    * Controls a camera texture resource.
    * Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on a Camera texture.
    * For more information, see the [Camera and Layers](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/camera) guide.
    */
    let RenderTargetProvider: RenderTargetProvider
    
    /**
    * Specifies what kind of render target it is. Some texture types, for example TextureCubemap, need additional properties set on the rendering camera to work correctly.
    */
    let RenderTargetProvider_TextureType: RenderTargetProvider.TextureType
    
    /**
    * Visual effect used to add subtle retouching effects to detected faces (soft skin, teeth whitening, etc.).
    * To learn more, visit the [Retouch Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-retouch).
    */
    let RetouchVisual: RetouchVisual
    
    let RotatedRect: RotatedRect
    
    /**
    * Used with [DeviceTracking.rotationOptions](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) to change settings for Rotation tracking mode.
    */
    let RotationOptions: RotationOptions
    
    let Sampler: Sampler
    
    /**
    * Class for building Sampler.
    */
    let SamplerBuilder: SamplerBuilder
    
    /**
    * An accessor for Pass.samplers when using PassWrappers
    */
    let SamplerWrapper: SamplerWrapper
    
    let SamplerWrappers: SamplerWrappers
    
    /**
    * Asset for detecting an object through the Scan system.
    
    * @exposesUserData
    */
    let ScanModule: ScanModule
    
    /**
    * Contexts used in `ScanModule.scan()`.
    */
    let ScanModule_Contexts: ScanModule.Contexts
    
    /**
    * The base class for scenewide events.  SceneEvents can be created using [ScriptComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScriptComponent)'s [createEvent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#scriptcomponent--createEvent) method.
    */
    let SceneEvent: SceneEvent
    
    /**
    * An object in the scene hierarchy, containing a [Transform](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Transform) and possibly [Components](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components).
    * A script can access the SceneObject holding it through the method `script.getSceneObject()`.
    */
    let SceneObject: SceneObject
    
    /**
    * Base class for all object-based Event types in Lens Studio (ManipulateStartEvent, TapEvent, etc.).
    */
    let SceneObjectEvent: SceneObjectEvent
    
    /**
    * Overrides the settings on a local [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) to fit a screen region on the device.
    * See the [Screen Transform guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/2d/screen-transform-overview) for more information.
    */
    let ScreenRegionComponent: ScreenRegionComponent
    
    /**
    * Types of screen regions that can be used with [ScreenRegionComponent](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenRegionComponent).
    */
    let ScreenRegionType: ScreenRegionType
    
    /**
    * Texture providing the current Render Target being rendered.
    */
    let ScreenTextureProvider: ScreenTextureProvider
    
    /**
    * Used for positioning objects in 2d screen space. It overrides the regular [Transform](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#Transform) component on the SceneObject it's attached to.
    
    * See the [Screen Transform guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/scene-set-up/2d/screen-transform-overview) for more information.
    */
    let ScreenTransform: ScreenTransform
    
    /**
    * Represents a JavaScript script which can be used to add logic in your Lens.
    */
    let ScriptAsset: ScriptAsset
    
    /**
    * Binds scripts to Events and executes them when triggered. Any script can access the ScriptComponent executing them through the variable `script`.
    * See also: [Scripting Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/scripting-overview#script-components), [Script Events Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/adding-interactivity/script-events#introduction).
    */
    let ScriptComponent: ScriptComponent
    
    /**
    * Base class for objects representing Script data.
    */
    let ScriptObject: ScriptObject
    
    /**
    * Represents the Lens scene. Accessible through `global.scene`.
    */
    let ScriptScene: ScriptScene
    
    /**
    * Segmentation model used for [SegmentationTextureProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#SegmentationTextureProvider).
    */
    let SegmentationModel: SegmentationModel
    
    /**
    * Controls a segmentation texture resource.
    * Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider) on a Segmentation texture.
    * For more information, see the [Segmentation](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/segmentation/fullscreen-segmentation) guide.
    */
    let SegmentationTextureProvider: SegmentationTextureProvider
    
    /**
    * Arguments used with the `InteractionComponent.onSelectEnd` event.
    */
    let SelectEndEventArgs: SelectEndEventArgs
    
    /**
    * Arguments used with the `InteractionComponent.onSelectStart` event.
    */
    let SelectStartEventArgs: SelectStartEventArgs
    
    /**
    * Low-level data class.
    */
    let SerializableWithUID: SerializableWithUID
    
    /**
    * Base type for collision shapes.
    */
    let Shape: Shape
    
    let SinglePlaneTrackingUpdatedEvent: SinglePlaneTrackingUpdatedEvent
    
    /**
    * Represents skinning data for rigged meshes. See also: [MeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual).
    */
    let Skin: Skin
    
    /**
    * Triggered when a smile ends on the tracked face.
    */
    let SmileFinishedEvent: SmileFinishedEvent
    
    /**
    * Triggered when a smile begins on the tracked face.
    */
    let SmileStartedEvent: SmileStartedEvent
    
    /**
    * Details about friendship between the active user and another user.
    */
    let SnapchatFriendUserInfo: SnapchatFriendUserInfo
    
    /**
    * Represents a Snapchat user in order to pass to other APIs or to retrieve certain details about the user like display name. 
    */
    let SnapchatUser: SnapchatUser
    
    /**
    * Set the bone on the skin.
    */
    let SnapchatUserBirthday: SnapchatUserBirthday
    
    /**
    * Provides a marker for tracking Snapcodes.
    * For more information, see the [Marker Tracking](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/tracking/world/marker-tracking) guide.
    */
    let SnapcodeMarkerProvider: SnapcodeMarkerProvider
    
    /**
    * Called when the user taps on the capture button to record an image.
    */
    let SnapImageCaptureEvent: SnapImageCaptureEvent
    
    /**
    * Gets called when the user starts long pressing the capture button to record a Snap.
    */
    let SnapRecordStartEvent: SnapRecordStartEvent
    
    /**
    * Gets called when the user stops long pressing the Snap button to end recording of a Snap.
    */
    let SnapRecordStopEvent: SnapRecordStopEvent
    
    /**
    * Order that inTensor will be sorted when applying `TensorMath.argSortMasked()`.
    */
    let SortOrder: SortOrder
    
    let SpatialAudio: SpatialAudio
    
    /**
    * Representation the signal strength over time at various frequencies present in a particular waveform. Created by applying Fast Fourier Transform (FFT) on the overlapping segments of the audio data.
    */
    let Spectrogram: Spectrogram
    
    /**
    * The builder class for Spectrogram.
    */
    let SpectrogramBuilder: SpectrogramBuilder
    
    /**
    * A sphere collision shape.
    */
    let SphereShape: SphereShape
    
    let SplineComponent: SplineComponent
    
    /**
    * Represents transform data for screen-aligned 2D sprites. Use on SceneObjects with a SpriteVisual Component.
    * See also: [SpriteVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#deprecated-spritevisual).
    */
    let SpriteAligner: SpriteAligner
    
    /**
    * Stencil buffer clear option.
    */
    let StencilClearOption: StencilClearOption
    
    /**
    * Specifies whether the front and/or back face stencil test will be applied. The initial value is "FrontAndBack"
    */
    let StencilFace: StencilFace
    
    /**
    * Specifies the stencil test function. The initial value is "Always".
    */
    let StencilFunction: StencilFunction
    
    /**
    * Options for specifying the action to take when stencil and depth tests resolve.
    */
    let StencilOperation: StencilOperation
    
    /**
    * The stencil test state for Pass.
    */
    let StencilState: StencilState
    
    /**
    * Settings for saving values in a MultiplayerSession.
    */
    let StorageOptions: StorageOptions
    
    /**
    * Specifies a scope for storing or retrieving values from a MultiplayerSession.
    */
    let StorageScope: StorageScope
    
    /**
    * Options for stretching a mesh to fit a [ScreenTransform's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) bounding box.
    * Used in [MeshVisual's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual) `stretchMode` property, as long as the SceneObject has a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) attached.
    * Also used in [TextFill's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextFill) `textureStretch` property to control texture stretching when drawing text.
    
    * See the [Image guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/2d/image) for more information about stretch modes.
    */
    let StretchMode: StretchMode
    
    let Studio: Studio
    
    /**
    * Used with [DeviceTracking.surfaceOptions](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) to change settings for Surface tracking mode.
    */
    let SurfaceOptions: SurfaceOptions
    
    /**
    * If a [DeviceTracking](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#DeviceTracking) component is present in the scene, this event is triggered when
    * the tracking is restarted (typically when the Lens starts, or if the user taps the ground).
    */
    let SurfaceTrackingResetEvent: SurfaceTrackingResetEvent
    
    let TangentType: TangentType
    
    /**
    * This event is triggered when the user taps on the screen.
    */
    let TapEvent: TapEvent
    
    /**
    * Arguments used with the `InteractionComponent.onTap` event.
    */
    let TapEventArgs: TapEventArgs
    
    /**
    * @wearableOnly
    */
    let TargetingDataArgs: TargetingDataArgs
    
    /**
    * Namespace for mathematical operations on tensors. Useful with MLComponent.
    
    **Tensor broadcasting rules**
    
    * Tensor (channels, width, height) op Tensor (1, 1, 1)  =  the same as applying op with scalar
    
    * Tensor (channels, width, height) op Tensor (channels, 1, 1)  =  the same as applying op per channel
    */
    let TensorMath: TensorMath
    
    let TensorMath_BorderType: TensorMath.BorderType
    
    let TensorMath_ThresholdMethod: TensorMath.ThresholdMethod
    
    /**
    * Visual component that renders dynamic text.
    * See the [Text guide](https://lensstudio.snapchat.com/lens-studio/references/guides/adding-content/text/2d-text) for more information.
    */
    let Text: Text
    
    /**
    * Renders a given text with a 3D mesh.
    */
    let Text3D: Text3D
    
    /**
    * Fill settings used by several text related classes.
    * Used in [Text's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `textFill` property, [DropshadowSettings'](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#DropshadowSettings) `fill` property, and [OutlineSettings'](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#OutlineSettings) `fill` property.
    */
    let TextFill: TextFill
    
    /**
    * Used in [TextFill's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextFill) `mode` property. Controls which drawing method is used for the TextFill.
    */
    let TextFillMode: TextFillMode
    
    let TextInputModule: TextInputModule
    
    /**
    * Provides access to the device's input system. Accessible through `global.textInputSystem`. 
    */
    let TextInputSystem: TextInputSystem
    
    /**
    * The settings used for how the input keyboard should work.
    */
    let TextInputSystem_KeyboardOptions: TextInputSystem.KeyboardOptions
    
    /**
    * The different input style of keyboard input.
    */
    let TextInputSystem_KeyboardType: TextInputSystem.KeyboardType
    
    /**
    * The return key style of keyboard input.
    */
    let TextInputSystem_ReturnKeyType: TextInputSystem.ReturnKeyType
    
    /**
    * Controls a text rendering texture. Can be accessed through the main rendering pass on a [Label](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#deprecated-label) component.
    * The properties here mirror those on Label.
    */
    let TextProvider: TextProvider
    
    let TextToSpeech: TextToSpeech
    
    /**
    * Provides the configuration for the [Text to Speech Module](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextToSpeechModule).   It is used to control the language of the generated voice, the voice’s style and pace.
    */
    let TextToSpeech_Options: TextToSpeech.Options
    
    /**
    * Provides a map of what phoneme is said at what time in the synthesized speech.
    */
    let TextToSpeech_PhonemeInfo: TextToSpeech.PhonemeInfo
    
    /**
    * The voice style on which the TextToSpeech will be synthesized, Varying from neutral style, to a more elaborated styles depending on the voice. Note that Sam’s voice still doesn’t have more than the neutral style, this will be added throughout the coming releases.
    */
    let TextToSpeech_VoiceNames: TextToSpeech.VoiceNames
    
    /**
    * Parameter returned in the `onTTSCompleteHandler` callback providing timing details for word pronunciation. 
    */
    let TextToSpeech_WordInfo: TextToSpeech.WordInfo
    
    /**
    * Allows generation of speech from a given text. You can use only one `TextToSpeechModule` in a Lens. However, its methods can be called multiple times in parallel if needed. 
    */
    let TextToSpeechModule: TextToSpeechModule
    
    /**
    * Represents a texture file asset.
    */
    let Texture: Texture
    
    /**
    * The base class for specialized Texture providers. Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider).
    */
    let TextureProvider: TextureProvider
    
    /**
    * Defines the bounding area used for texture tiling with [TextFill's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#TextFill) `tileZone` property.
    */
    let TileZone: TileZone
    
    /**
    * This provider is returned by `global.touchSystem` and allows your lens to handle any touches on the screen, and optionally let certain touch types to pass through (let Snapchat handle the touch).
    
    * Possible TouchType exception values:
    
    * "TouchTypeNone"
    * "TouchTypeTouch"
    * "TouchTypeTap"
    * "TouchTypeDoubleTap"
    * "TouchTypeScale"
    * "TouchTypePan"
    * "TouchTypeSwipe"
    */
    let TouchDataProvider: TouchDataProvider
    
    /**
    * Triggered when a touch event ends.
    */
    let TouchEndEvent: TouchEndEvent
    
    let TouchEndEventArgs: TouchEndEventArgs
    
    /**
    * Triggered when a touch position on the screen is moved.
    */
    let TouchMoveEvent: TouchMoveEvent
    
    /**
    * Arguments used with the `InteractionComponent.onTouchMove` event.
    */
    let TouchMoveEventArgs: TouchMoveEventArgs
    
    /**
    * Triggered when a touch event starts.
    */
    let TouchStartEvent: TouchStartEvent
    
    /**
    * Arguments used with the `InteractionComponent.onTouchStart` event.
    */
    let TouchStartEventArgs: TouchStartEventArgs
    
    /**
    * Represents a mesh generated by world tracking. Only available when world mesh tracking is supported and enabled.
    */
    let TrackedMesh: TrackedMesh
    
    /**
    * Classifications of mesh face. See [TrackedMeshHitTestResult](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#TrackedMeshHitTestResult).
    */
    let TrackedMeshFaceClassification: TrackedMeshFaceClassification
    
    /**
    * Provides histogram information about tracked world mesh faces in a given area. Returned by `DeviceTracking.calculateWorldMeshHistogram()`.
    */
    let TrackedMeshHistogramResult: TrackedMeshHistogramResult
    
    /**
    * Provides information about a TrackedMesh surface hit during a raycast. Is returned in an array when calling `DeviceTracking.hitTestWorldMesh()` or `DeviceTracking.raycastWorldMesh()`.
    */
    let TrackedMeshHitTestResult: TrackedMeshHitTestResult
    
    /**
    * A representation for plane detected by native tracking. Can be used with TrackedPoint.
    */
    let TrackedPlane: TrackedPlane
    
    let TrackedPlaneOrientation: TrackedPlaneOrientation
    
    /**
    * A point on the real world not attached to any detected plane.
    */
    let TrackedPoint: TrackedPoint
    
    /**
    * Allows you to bind the position and rotation of an object with this component to a [TrackedPoint](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#TrackedPoint).
    */
    let TrackedPointComponent: TrackedPointComponent
    
    /**
    * Controls the position, rotation, and scale of a [SceneObject](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#SceneObject).  Every SceneObject automatically has a Transform attached.
    */
    let Transform: Transform
    
    /**
    * Applies additional transform processing on data for InputPlaceholders and OutputPlaceholders used with MLComponent.
    * For more information, see the [MLComponent Overview](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/machine-learning/ml-component/ml-component-overview).
    */
    let Transformer: Transformer
    
    /**
    * Builds Transformer objects for MLComponent.
    */
    let TransformerBuilder: TransformerBuilder
    
    /**
    * Rotation types used by TransformBuilder.
    */
    let TransformerRotation: TransformerRotation
    
    /**
    * Triangle hit information, available when a ray cast intersects a collision mesh.
    */
    let TriangleHit: TriangleHit
    
    /**
    * Gets called when the user triggers the primary input on their device. For example touch on touch screens.
    */
    let TriggerPrimaryEvent: TriggerPrimaryEvent
    
    /**
    * Arguments used with the `InteractionComponent.onTriggerPrimary` event.
    */
    let TriggerPrimaryEventArgs: TriggerPrimaryEventArgs
    
    /**
    * Triggered when the lens turns off.
    */
    let TurnOffEvent: TurnOffEvent
    
    /**
    * Triggered every frame.
    */
    let UpdateEvent: UpdateEvent
    
    /**
    * Provides information about the user such as display name, birthday, and current weather. Accessible through `global.userContextSystem`.
    
    * All callbacks will execute as soon as the requested information is available. In some rare cases, the requested information may be completely unavailable, and the callback will never occur.
    
    * Note that formatted or localized strings may appear differently to users depending on their region.
    */
    let UserContextSystem: UserContextSystem
    
    /**
    * A two dimensional vector.
    * Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
    
    */
    let vec2: vec2
    
    /**
    * A three dimensional vector. 
    * Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
    
    */
    let vec3: vec3
    
    /**
    * A four dimensional vector.
    * Vectors can only store finite numbers in the range Number.MIN_VALUE to Number.MAX_VALUE.
    
    */
    let vec4: vec4
    
    /**
    * A vector containing 4 boolean values.
    */
    let vec4b: vec4b
    
    /**
    * Used to help control vertex animations on the SceneObject.
    */
    let VertexCache: VertexCache
    
    /**
    * Provides settings for vertex physics in the ClothVisual component.
    */
    let VertexSimulationSettings: VertexSimulationSettings
    
    /**
    * Used by the `verticalAlignment` property in [MeshVisual](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#MeshVisual).
    * When a [ScreenTransform](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#ScreenTransform) is attached to the same SceneObject, this determines how the mesh will be positioned vertically.
    */
    let VerticalAlignment: VerticalAlignment
    
    /**
    * Options for handling vertical text overflow. Used by [Text component's](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Text) `verticalOverflow` property.
    */
    let VerticalOverflow: VerticalOverflow
    
    /**
    * Defines a VFX to use with [VFX Component](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#VFXComponent). For more information, see the [VFX Guide](https://lensstudio.snapchat.com/lens-studio/references/guides/lens-features/graphics/particles/vfx-editor/introduction-and-concepts).
    */
    let VFXAsset: VFXAsset
    
    /**
    * A VFX visual used to show a [VFX Asset](https://lensstudio.snapchat.com/api/lens-studio/Classes/Assets#VFXAsset).
    */
    let VFXComponent: VFXComponent
    
    /**
    * Describes the current status of a [VideoTextureProvider](https://lensstudio.snapchat.com/api/lens-studio/Classes/Providers#VideoTextureProvider).
    */
    let VideoStatus: VideoStatus
    
    /**
    * Controls a video texture resource. Can be accessed through [Texture.control](https://lensstudio.snapchat.com/api/lens-studio/Classes/Components#Texture#control-textureprovider).
    */
    let VideoTextureProvider: VideoTextureProvider
    
    /**
    * Base class for all visual Components (e.g. MeshVisual).
    */
    let Visual: Visual
    
    let VoiceML: VoiceML
    
    /**
    * Additional parameters are used to provide additional data for NlpModels and NlpResponses. 
    */
    let VoiceML_AdditionalParam: VoiceML.AdditionalParam
    
    /**
    * NlpModels are used to provide the VoiceML NLP engine information about how the transcript of the input audio should be processed. BaseNlpModels is the abstract base class all NlpModels ([NlpKeywordModel](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpKeywordModel), [NlpIntentModel](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpIntentModel)) inherit from.
    
    * You can specify multiple NlpModels to process the same audio, all of their results will be returned in [ListeningUpdateEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLListeningUpdateEventArgs)
    */
    let VoiceML_BaseNlpModel: VoiceML.BaseNlpModel
    
    /**
    * The abstract base class all NlpResponses inherit from. NlpResponses are used as the result from the VoiceML NLP engine with information after processing the transcript of the input audio.
    */
    let VoiceML_BaseNlpResponse: VoiceML.BaseNlpResponse
    
    /**
    * An NLP model used to detect keywords in the transcript of the input audio.  For example, you can have keyword detection which will trigger every time the word "red" is said, and another trigger for the word "yellow". 
    */
    let VoiceML_KeywordModelGroup: VoiceML.KeywordModelGroup
    
    /**
    * ListeningErrorEventArgs object returns in onListeningError callback. It contains the error code and description of the error. 
    */
    let VoiceML_ListeningErrorEventArgs: VoiceML.ListeningErrorEventArgs
    
    /**
    * Provides the configuration for the audio input processing output. This can either include NLP processing using the ([nlpModels](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLBaseNlpModel)) or directly retrieving the transcription.  `speechContext` provides the ability to further improve the transcription accuracy given an assumed context. 
    */
    let VoiceML_ListeningOptions: VoiceML.ListeningOptions
    
    /**
    * The parameter when the callback registered on from `VoiceMLModule.onListeningUpdate` is called. This is to mark the input audio transcription (and possibly NlpModels as a result) was updated.
    */
    let VoiceML_ListeningUpdateEventArgs: VoiceML.ListeningUpdateEventArgs
    
    /**
    * May be returned when [enableSystemCommands()](https://lensstudio.snapchat.com/api/classes/VoiceMLModule#enableSystemCommands) API is used.
    * The NlpCommandResponse contains the results of the servers' NLP command model classification on the last sentence and indicates that a predetermined system command was detected.
    * Current supported commands:
    
    * “Take a Snap”: takes a snapshot.
    * “Start Recording”: starts a video recording if not already started.
    * "Stop Recording”: stops an ongoing video recording, if applicable.
    
    */
    let VoiceML_NlpCommandResponse: VoiceML.NlpCommandResponse
    
    /**
    * Specifies which NLP Intent model should run to classify the transcription of the input audio. NLP Intent classification meant to extract the meaning of a sentence rather than detecting certain keywords. Multiple intent models can be used on the same transcription, and will run only on complete sentences (`isFinalTranscription = True`). Supported intent models: `VOICE_ENABLED_UI`. 
    */
    let VoiceML_NlpIntentModel: VoiceML.NlpIntentModel
    
    /**
    * Returned when [NlpIntentModel](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpIntentModel) was specificed in the ListeningOptions, it contains the results of the NLP Intent model classification on the last sentence. `NlpIntentResponse` will only run on complete sentences (`isFinalTranscription = true`).  
    
    */
    let VoiceML_NlpIntentResponse: VoiceML.NlpIntentResponse
    
    /**
    * Contains helper functions for NlpIntentModel.
    */
    let VoiceML_NlpIntentsModelOptions: VoiceML.NlpIntentsModelOptions
    
    /**
    * Used to detect usage of certain keywords from the input audio.
    
    * Keyword detection (whose results will be returned in [NlpKeywordResponse](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLNlpKeywordResponse) in the [ListeningUpdateEventArgs](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#VoiceMLListeningUpdateEventArgs)) can happen in the mid input sentence (and in such case the the isFinalTranscription=false) or can happen at the end of the sentence (isFinalTranscription=true). Mid sentence detection have closer proximity to the time the word was spoken, but might be less accurate. 
    */
    let VoiceML_NlpKeywordModel: VoiceML.NlpKeywordModel
    
    /**
    * Contains helper functions for NlpKeywordModel.
    */
    let VoiceML_NlpKeywordModelOptions: VoiceML.NlpKeywordModelOptions
    
    /**
    * NlpKeywordResponse will be returned if KeywordModel has been supplied as an input model in the ListeningOptions.  The keyword model allows detection of keywords (or short phrases) in an input audio. 
    */
    let VoiceML_NlpKeywordResponse: VoiceML.NlpKeywordResponse
    
    /**
    * The NLP Response Status indicates wether the NLP was successful in parsing the sentence. 
    */
    let VoiceML_NlpResponseStatus: VoiceML.NlpResponseStatus
    
    /**
    * The `PostProcessingAction` is the base class for `QnaAction` and other post processing actions that need to processed after the transcription phase.
    */
    let VoiceML_PostProcessingAction: VoiceML.PostProcessingAction
    
    /**
    * The `PostProcessingActionResponse` is the base class for `QnaActionRespose` and other post processing actions responses. It holds the id and status properties for all deriving objects.
    */
    let VoiceML_PostProcessingActionResponse: VoiceML.PostProcessingActionResponse
    
    let VoiceML_PostProcessingActionResponseStatus: VoiceML.PostProcessingActionResponseStatus
    
    let VoiceML_QnaAction: VoiceML.QnaAction
    
    let VoiceML_QnaResponse: VoiceML.QnaResponse
    
    /**
    * Speech context is used in cases where specific words are expected from the users, the transcription accuracy of these words can be improved, by straightening their likelihood in context. The strength is scaled 1-10 (10 being the strongest increase) the default value is 5.
    */
    let VoiceML_SpeechContext: VoiceML.SpeechContext
    
    /**
    * VoiceML Module allows voice input and commands. It enables transciption of the speech, detecting keywords within the transcription, intents as well as system commands (such as "Take a Snap"). You can use one VoiceML Module per Lens. 
    */
    let VoiceMLModule: VoiceMLModule
    
    let VoiceMLModule_AnswerStatusCodes: VoiceMLModule.AnswerStatusCodes
    
    /**
    * Status Codes for NLP Responses. 
    */
    let VoiceMLModule_NlpResponsesStatusCodes: VoiceMLModule.NlpResponsesStatusCodes
    
    let VoiceMLModule_SpeechRecognizer: VoiceMLModule.SpeechRecognizer
    
    /**
    * Types of weather returned by [UserContextSystem's](https://lensstudio.snapchat.com/api/lens-studio/Classes/ScriptObjects#UserContextSystem) `requestWeatherCondition()` callback.
    */
    let WeatherCondition: WeatherCondition
    
    let WeightedMode: WeightedMode
    
    /**
    * Groups physics objects in its subtree into an independent world simulation.
    */
    let WorldComponent: WorldComponent
    
    /**
    * Holds settings for world mesh tracking in DeviceTracking component. Accessible through DeviceTracking.worldOptions.
    */
    let WorldOptions: WorldOptions
    
    /**
    * @wearableOnly
    */
    let WorldQueryHitTestResult: WorldQueryHitTestResult
    
    /**
    * @wearableOnly
    */
    let WorldQueryModule: WorldQueryModule
    
    /**
    * Provider for RenderMesh data representing the estimated shape of real world objects generated from depth information. Only available when world mesh tracking is supported and enabled.
    */
    let WorldRenderObjectProvider: WorldRenderObjectProvider
    
    /**
    * Provides information about whether certain world tracking features are supported by the device.
    */
    let WorldTrackingCapabilities: WorldTrackingCapabilities
    
    /**
    * Triggered when new world tracking meshes are detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
    */
    let WorldTrackingMeshesAddedEvent: WorldTrackingMeshesAddedEvent
    
    /**
    * Triggered when some world tracking meshes are no longer detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
    */
    let WorldTrackingMeshesRemovedEvent: WorldTrackingMeshesRemovedEvent
    
    /**
    * Triggered when world tracking meshes are updated. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled.
    */
    let WorldTrackingMeshesUpdatedEvent: WorldTrackingMeshesUpdatedEvent
    
    /**
    * Triggered when plane(s) are newly detected. The `worldOptions.nativePlaneTrackingType` must be set to anything other than `NativePlaneTrackingType.None`. In addition, [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component must be set to `World` mode to orient the Camera relative to the planes correctly.
    
    */
    let WorldTrackingPlanesAddedEvent: WorldTrackingPlanesAddedEvent
    
    /**
    * Triggered when plane(s) are no longer detected.  This usually happens when two planes merge into one.  Planes persist when no longer seen by camera(s) and when previously detected objects move (e.g. a door is opened) to create a static scene. [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component must be set to `World` mode to orient the Camera relative to the planes correctly.
    
    */
    let WorldTrackingPlanesRemovedEvent: WorldTrackingPlanesRemovedEvent
    
    /**
    * Triggered when currently detected plane(s) are updated.  This usually happens when a plane grows in size. The `worldOptions.nativePlaneTrackingType` must be set to anything other than `NativePlaneTrackingType.None`. In addition, [Device Tracking](https://lensstudio.snapchat.com/api/classes/devicetracking) component must be set to `World` mode to orient the Camera relative to the planes correctly.
    
    */
    let WorldTrackingPlanesUpdatedEvent: WorldTrackingPlanesUpdatedEvent
    
    let WorldUnderstandingModule: WorldUnderstandingModule
    
    /**
    * Describes how a texture should be sampled when using coordinates outside of the normal range.
    */
    let WrapMode: WrapMode
    
    let Zodiac: Zodiac
    
}

