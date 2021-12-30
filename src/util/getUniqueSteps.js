const getUniqueSteps = (stepDifferences) => {
  let fixedStepsList = stepDifferences.map((step) => step.toFixed(5));
  const uniqueSteps = [...new Set(fixedStepsList)];
  uniqueSteps.shift();
  let sortedUnique = [...uniqueSteps];
  sortedUnique.sort((a, b) => a - b);
  sortedUnique.reverse();
  return sortedUnique;
};

export default getUniqueSteps;
