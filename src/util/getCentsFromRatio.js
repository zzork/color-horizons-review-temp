const getCentsFromRatio = (numerator, denominator) => {
  let centsConversion =
    (1200 * Math.log(numerator / denominator)) / Math.log(2);
  while (centsConversion > 1200) {
    centsConversion -= 1200;
  }
  return centsConversion;
};

export default getCentsFromRatio;
