const getUniqueSteps = (stepDifferences) => {
  let fixedStepsList = stepDifferences.map((step) =>
    parseFloat(step.toFixed(12))
  );
  const uniqueSteps = [...new Set(fixedStepsList)];
  uniqueSteps.shift();
  let sortedUnique = [...uniqueSteps];
  sortedUnique.sort((a, b) => a - b);
  sortedUnique.reverse();
  console.log(sortedUnique);
  return sortedUnique;
};

export default getUniqueSteps;
