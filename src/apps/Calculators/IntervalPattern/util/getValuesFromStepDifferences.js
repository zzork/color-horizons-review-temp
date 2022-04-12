const getValuesFromStepDifferences = (stepDifferences) => {
  let sum = 0;
  const values = [sum];
  for (let stepDifference of stepDifferences) {
    sum = sum + stepDifference;
    values.push(sum);
  }
  return values;
};

export default getValuesFromStepDifferences;
