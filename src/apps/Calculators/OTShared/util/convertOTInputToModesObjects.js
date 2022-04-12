import getStepDifferences from "../../../../util/getStepDifferences";
import convertFractionModeToCentsScale from "./convertFractionModeToCentsScale";
import getAllOTModesAsFractions from "./getAllOTModesAsFractions";

const convertOTInputToModesObjects = (scale) => {
  const allOTModesAsRatios = getAllOTModesAsFractions(scale);

  const allOTObjects = [];

  for (let i = 0; i < scale.length - 1; i++) {
    let ratios = allOTModesAsRatios[i];
    let centsValues = convertFractionModeToCentsScale(ratios);
    let stepDifferences = getStepDifferences(centsValues);

    allOTObjects.push({
      ratios,
      centsValues,
      stepDifferences,
    });
  }

  return allOTObjects;
};

export default convertOTInputToModesObjects;
