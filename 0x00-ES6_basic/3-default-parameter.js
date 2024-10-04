export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  // eslint-disable-next-line no-param-reassign
  expansion1989 = expansion1989 || 89;
  // eslint-disable-next-line no-param-reassign
  expansion2019 = expansion2019 || 19;
  // eslint-disable-next-line no-param-reassign
  initialNumber = initialNumber || 0;
  return initialNumber + expansion1989 + expansion2019;
}
