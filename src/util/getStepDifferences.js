const getStepDifferences = (stepsValuesList) => {
  let stepDifferences = [0];
  for (let i = 1; i < stepsValuesList.length; i++) {
    stepDifferences.push(stepsValuesList[i] - stepsValuesList[i - 1]);
  }
  return stepDifferences;
};

export default getStepDifferences;
