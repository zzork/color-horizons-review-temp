import getReducedFraction from "../../../../util/getReducedFraction";

const divideTwoFractions = (fraction1, fraction2) => {
  let newNumerator = fraction1[0] * fraction2[1];
  let newDenominator = fraction1[1] * fraction2[0];
  let newFractionReduced = getReducedFraction(newNumerator, newDenominator);
  return newFractionReduced;
};

const getAllLTModesAsFractions = (reducedFraction, noteTotal) => {
  let listOfAllModes = [];

  // generate mode 1 as fractions
  let originalScale = [[0, [1, 1]]];
  for (let i = 0; i < noteTotal; i++) {
    let currentFractionValue = [
      reducedFraction[0] ** i,
      reducedFraction[1] ** i,
    ];
    /////// BOTTLENECK IS HERE //////// WTF

    let currentFractionValueReduced = getReducedFraction(
      currentFractionValue[0],
      currentFractionValue[1]
    );

    ////////////////////////////////////

    let thisCentsValue =
      (1200 *
        Math.log(
          currentFractionValueReduced[0] / currentFractionValueReduced[1]
        )) /
      Math.log(2);
    originalScale.push([thisCentsValue, currentFractionValueReduced]);
  }
  // sort by cents values
  originalScale.sort((a, b) => a[0] - b[0]);
  // remove cents values
  let originalScaleNoCents = originalScale.map((row) => row[1]);

  // add original scale to array
  listOfAllModes.push(originalScaleNoCents);

  let currentMode = originalScaleNoCents;

  let secondMode = [];
  for (let i = 0; i < currentMode.length; i++) {
    let newFraction = divideTwoFractions(currentMode[i], currentMode[1]);
    secondMode.push(newFraction);
  }
  let removeFirstTwo = secondMode.slice(2);
  removeFirstTwo.unshift([1, 1]);
  removeFirstTwo.push([2, 1]);

  ///////////// up to here was working

  // NOW CONVERT SECONDMODE PART INTO A LOOP

  // add each final new mode to the main list
  // repeat

  return "not yet 2";
};

export default getAllLTModesAsFractions;
