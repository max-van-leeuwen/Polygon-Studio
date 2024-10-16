declare var crypto:
  | undefined
  | {
      getRandomValues(array: Uint8Array): Uint8Array
      randomUUID(): string
    }

/**
 * Fills the provided buffer with random data
 * @param buffer The buffer to fill with random data
 * @param size The size of the provided buffer
 */
function fillRandomBytes(buffer: Uint8Array, size: number) {
  for (var i = 0; i < size; ++i) buffer[i] = (Math.random() * 0xff) | 0
  return buffer
}

/**
 * Generates size bytes of random data
 * @param size The number of bytes of random data to generate
 * @returns size bytes of random data
 */
function getRandomBytes(size: number) {
  if (typeof crypto !== "undefined")
    return crypto.getRandomValues(new Uint8Array(size))
  return fillRandomBytes(new Uint8Array(size), size)
}

/**
 * Generates a random Universally Unique Identifier (UUID). The UUID is hyphenated and marked
 * as being randomly generated.
 * @returns A randomly generated UUID
 */
export function createUUID(): string {
  if (typeof crypto !== "undefined") return crypto.randomUUID()

  var data = getRandomBytes(16)
  // mark as random - RFC 4122 § 4.4
  data[6] = (data[6] & 0x4f) | 0x40
  data[8] = (data[8] & 0xbf) | 0x80
  var result = ""
  for (var offset = 0; offset < 16; ++offset) {
    var byte = data[offset]
    if (offset === 4 || offset === 6 || offset === 8) result += "-"
    if (byte < 16) result += "0"
    result += byte.toString(16).toLowerCase()
  }
  return result
}
