const cleanSet = (set, startString) => {
  if (startString === '' || typeof startString !== 'string') return '';
  return Array.from(set)
    .filter((str) => {
      return typeof str === 'string' && str.startsWith(startString);
    })
    .map((str) => str.replace(startString, ''))
    .join('-');
};

export default cleanSet;
