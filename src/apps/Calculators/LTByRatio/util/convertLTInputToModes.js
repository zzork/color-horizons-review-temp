import getCentsFromRatio from "../../../../util/getCentsFromRatio";
import getStepDifferences from "../../../../util/getStepDifferences";
import getUniqueSteps from "../../../../util/getUniqueSteps";
import getAllLTModesAsFractions from "./getAllLTModesAsFractions";
import getLMSList from "./getLMSList";

const convertFractionModeToCentsScale = (mode) => {
  let scale = [];
  for (let i = 0; i < mode.length; i++) {
    scale.push(getCentsFromRatio(mode[i][0], mode[i][1]));
  }
  return scale;
};

const convertLTInputToModes = (reducedFraction, noteTotal) => {
  const allLTModesAsFractions = getAllLTModesAsFractions(
    reducedFraction,
    noteTotal
  );

  let ltObjectsList = [];
  for (let i = 0; i < allLTModesAsFractions.length; i++) {
    let mode = convertFractionModeToCentsScale(allLTModesAsFractions[i]);
    let stepDifferences = getStepDifferences(mode);
    let sortedUnique = getUniqueSteps(stepDifferences);
    let lmsList = getLMSList(stepDifferences, sortedUnique);
    ltObjectsList.push({
      fractionScale: allLTModesAsFractions[i],
      mode,
      stepDifferences,
      lmsList,
    });
  }

  return ltObjectsList;
};

export default convertLTInputToModes;
