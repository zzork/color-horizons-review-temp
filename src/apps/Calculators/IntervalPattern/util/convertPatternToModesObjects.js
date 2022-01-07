import getAllPossiblePatterns from "./getAllPossiblePatterns";

const applyEdo = (pattern) => {
  const edo = pattern.reduce((accumulator, value) => {
    return accumulator + Number(value);
  }, 0);
  const edoStepValue = 1200 / edo;
  const patternEdo = pattern.map((value) => value * edoStepValue);
  return patternEdo;
};

const getValuesFromStepDifferences = (stepDifferences) => {
  let sum = 0;
  const values = [sum];
  for (let stepDifference of stepDifferences) {
    sum = sum + stepDifference;
    values.push(sum);
  }
  return values;
};

const convertPatternToModesObjects = (pattern) => {
  const allModesAsPatterns = getAllPossiblePatterns(pattern);
  const allIPObjects = allModesAsPatterns.map((scalePattern) => {
    const stepDifferences = applyEdo(scalePattern);
    return {
      pattern: scalePattern,
      stepDifferences,
      mode: getValuesFromStepDifferences(stepDifferences),
    };
  });
  return allIPObjects;
};

export default convertPatternToModesObjects;
