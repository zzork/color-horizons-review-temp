import getStepDifferences from "../../../../util/getStepDifferences";
import getAllLTModesAsCents from "./getAllLTModesAsCents";
import getLMSList from "./getLMSList";

const convertLTInputToModesObjects = (scale) => {
  const allLTModesAsCents = getAllLTModesAsCents(scale);

  let allLTObjects = [];

  for (let i = 0; i < scale.length - 1; i++) {
    let mode = allLTModesAsCents[i];
    let stepDifferences = getStepDifferences(mode);
    let lmsList = getLMSList(stepDifferences);
    allLTObjects.push({
      mode,
      stepDifferences,
      lmsList,
    });
  }

  return allLTObjects;
};

export default convertLTInputToModesObjects;
