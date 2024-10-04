export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  // eslint-disable-next-line guard-for-in
  for (const idx of array) {
    const value = array[idx];
    newArray[idx] = appendString + value;
  }

  return newArray;
}
