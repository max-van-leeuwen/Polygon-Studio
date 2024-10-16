type StorageType<T> = string;

declare namespace global {
  let StorageTypes: {
    /** @type {StorageType<boolean>} */
    bool: StorageType<boolean>;
    /** @type {StorageType<number>} */
    float: StorageType<number>;
    /** @type {StorageType<number>} */
    double: StorageType<number>;
    /** @type {StorageType<number>} */
    int: StorageType<number>;
    /** @type {StorageType<string>} */
    string: StorageType<string>;
    /** @type {StorageType<vec2>} */
    vec2: StorageType<vec2>;
    /** @type {StorageType<vec3>} */
    vec3: StorageType<vec3>;
    /** @type {StorageType<vec4>} */
    vec4: StorageType<vec4>;
    /** @type {StorageType<quat>} */
    quat: StorageType<quat>;
    /** @type {StorageType<mat2>} */
    mat2: StorageType<mat2>;
    /** @type {StorageType<mat3>} */
    mat3: StorageType<mat3>;
    /** @type {StorageType<mat4>} */
    mat4: StorageType<mat4>;

    /** @type {StorageType<boolean[]>} */
    boolArray: StorageType<boolean[]>;
    /** @type {StorageType<number[]>} */
    floatArray: StorageType<number[]>;
    /** @type {StorageType<number[]>} */
    doubleArray: StorageType<number[]>;
    /** @type {StorageType<number[]>} */
    intArray: StorageType<number[]>;
    /** @type {StorageType<string[]>} */
    stringArray: StorageType<string[]>;
    /** @type {StorageType<vec2[]>} */
    vec2Array: StorageType<vec2[]>;
    /** @type {StorageType<vec3[]>} */
    vec3Array: StorageType<vec3[]>;
    /** @type {StorageType<vec4[]>} */
    vec4Array: StorageType<vec4[]>;
    /** @type {StorageType<quat[]>} */
    quatArray: StorageType<quat[]>;
    /** @type {StorageType<mat2[]>} */
    mat2Array: StorageType<mat2[]>;
    /** @type {StorageType<mat3[]>} */
    mat3Array: StorageType<mat3[]>;
    /** @type {StorageType<mat4[]>} */
    mat4Array: StorageType<mat4[]>;
  };
}
