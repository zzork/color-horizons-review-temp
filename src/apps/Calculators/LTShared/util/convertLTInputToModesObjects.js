import getStepDifferences from "../../../../util/getStepDifferences";
import getAllLTModesAsCents from "./getAllLTModesAsCents";
import getLMSList from "./getLMSList";

const convertLTInputToModesObjects = (scale, lmsIn) => {
  const allLTModesAsCents = getAllLTModesAsCents(scale);

  let allLTObjects = [];
  let lmsComparisonList = [];

  for (let i = 0; i < scale.length - 1; i++) {
    let mode = allLTModesAsCents[i];
    let stepDifferences = getStepDifferences(mode);
    let lmsList = getLMSList(stepDifferences, lmsIn);

    if (!lmsComparisonList.includes(lmsList.join(""))) {
      allLTObjects.push({
        mode,
        stepDifferences,
        lmsList,
      });
    }

    lmsComparisonList.push(lmsList.join(""));
  }

  return allLTObjects;
};

export default convertLTInputToModesObjects;
