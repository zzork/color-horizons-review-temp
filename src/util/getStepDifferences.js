const getStepDifferences = (scale) => {
  let stepDifferences = [0];
  for (let i = 1; i < scale.length; i++) {
    stepDifferences.push(scale[i] - scale[i - 1]);
  }
  return stepDifferences;
};

export default getStepDifferences;
