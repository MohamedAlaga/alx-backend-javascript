const hasValuesFromArray = (set, array) => {
  let isExist = true;
  array.forEach((element) => {
    if (!set.has(element)) {
      isExist = false;
    }
  });
  return isExist;
};

export default hasValuesFromArray;
