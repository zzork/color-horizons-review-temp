import getStepDifferences from "../../../../util/getStepDifferences";
import getUniqueSteps from "../../../../util/getUniqueSteps";
import getAllLTModesAsCents from "./getAllLTModesAsCents";
import getLMSList from "./getLMSList";

const convertLTInputToModesObjects = (reducedFraction, noteTotal) => {
  const allLTModesAsCents = getAllLTModesAsCents(reducedFraction, noteTotal);

  let allLTObjects = [];

  for (let i = 0; i < noteTotal; i++) {
    let mode = allLTModesAsCents[i];
    let stepDifferences = getStepDifferences(mode);
    let sortedUnique = getUniqueSteps(stepDifferences);
    let lmsList = getLMSList(stepDifferences, sortedUnique);
    allLTObjects.push({
      mode,
      stepDifferences,
      lmsList,
    });
  }

  return allLTObjects;
};

export default convertLTInputToModesObjects;
