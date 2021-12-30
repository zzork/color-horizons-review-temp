const getStepsValuesAndDifferences = (
  stepsValuesList,
  stepDifferences,
  lmsList
) => {
  let stepsValuesAndDifferences = [];
  for (let i = 0; i < stepsValuesList.length; i++) {
    stepsValuesAndDifferences.push([
      stepsValuesList[i],
      stepDifferences[i].toFixed(5),
      lmsList[i],
    ]);
  }
  stepsValuesAndDifferences[0][1] = "";
  return stepsValuesAndDifferences;
};

export default getStepsValuesAndDifferences;
