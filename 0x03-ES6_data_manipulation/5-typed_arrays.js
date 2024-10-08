export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer of specified length
  const buf = new ArrayBuffer(length);

  // Create Typed Array that uses the buffer
  const int8Array = new Int8Array(buf);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set value at position
  int8Array[position] = value;

  return int8Array;
}
