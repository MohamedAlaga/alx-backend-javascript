const createInt8TypedArray = (length, position, value) => {
  try {
    const buffer = new ArrayBuffer(length);
    const view = new Uint8Array(buffer);
    view[position] = value;
    return new DataView(buffer);
  } catch (err) {
    throw "Position outside range";
  }
};

export default createInt8TypedArray;
