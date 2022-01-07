const getStepDifferencesFromPattern = (pattern) => {
  const edo = pattern.reduce((accumulator, value) => {
    return accumulator + Number(value);
  }, 0);
  const edoStepValue = 1200 / edo;
  const patternEdo = pattern.map((value) => value * edoStepValue);
  return patternEdo;
};

export default getStepDifferencesFromPattern;
