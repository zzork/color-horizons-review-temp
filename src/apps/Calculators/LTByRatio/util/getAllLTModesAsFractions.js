import getReducedFraction from "../../../../util/getReducedFraction";

// This needs to be extracted

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

  for (let j = 1; j < noteTotal; j++) {
    let thisMode = [];
    for (let i = 0; i <= noteTotal; i++) {
      let newFraction = divideTwoFractions(currentMode[i], currentMode[1]);
      thisMode.push(newFraction);
    }
    let removeFirstTwo = thisMode.slice(2);
    removeFirstTwo.unshift([1, 1]);
    removeFirstTwo.push([2, 1]);
    listOfAllModes.push(removeFirstTwo);
    currentMode = removeFirstTwo;
  }

  return listOfAllModes;
};

export default getAllLTModesAsFractions;
