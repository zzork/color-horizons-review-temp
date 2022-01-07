import getCentsFromRatio from "../../../../util/getCentsFromRatio";
import getStepDifferences from "../../../../util/getStepDifferences";
import getUniqueSteps from "../../../../util/getUniqueSteps";
import getAllLTModesAsFractions from "./getAllLTModesAsFractions";
import getLMSList from "./getLMSList";
import getLTScale from "./getLTScale";
import getStepsValuesAndDifferences from "./getStepsValuesAndDifferences";

const convertFractionModeToCents = (mode) => {
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

  //   for (let i = 0; i < allLTModesAsFractions; i++) {

  const scale = convertFractionModeToCents(allLTModesAsFractions[1]);
  const stepDifferences = getStepDifferences(scale);
  const sortedUnique = getUniqueSteps(stepDifferences);
  const lmsList = getLMSList(stepDifferences, sortedUnique);

  console.log(scale, stepDifferences, sortedUnique, lmsList);

  // now take each fraction value and create an object applying
  // stepDifferencesValue, LMS Value, Fraction, and Cents Value
  // write a function for each that turns a set of fractions into each one - WAIT these exist already!

  return "not yet";
  //   const scale = getLTScale(reducedFraction[0], reducedFraction[1], noteTotal);
  //   const stepDifferences = getStepDifferences(scale);
  //   const sortedUnique = getUniqueSteps(stepDifferences);
  //   const lmsList = getLMSList(stepDifferences, sortedUnique);
  //   const stepsValuesAndDifferences = getStepsValuesAndDifferences(
  //     scale,
  //     stepDifferences,
  //     lmsList
  //   );
};

export default convertLTInputToModes;
