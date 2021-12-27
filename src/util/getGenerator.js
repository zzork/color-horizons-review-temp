const getGenerator = (numerator, denominator) => {
  let generator = (1200 * Math.log(numerator / denominator)) / Math.log(2);
  while (generator > 1200) {
    generator -= 1200;
  }
  return generator;
};

export default getGenerator;
