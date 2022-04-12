import getReducedFraction from "../getReducedFraction";
import divideTwoFractions from "./UNUSEDdivideTwoFractions";

const getAllLTModesAsFractions = (reducedFraction, noteTotal) => {
  let listOfAllModes = [];

  // generate mode 1 as cents and fractions
  let originalScale = [[0, [1, 1]]];

  /////// BOTTLENECK IS HERE ////////

  // doesn't like doing exponents after a few repetitions, much worse is fraction has larger num/den
  for (let i = 0; i < noteTotal; i++) {
    let currentFractionValue = [
      reducedFraction[0] ** i,
      reducedFraction[1] ** i,
    ];
    // this portion slows it down a little but not too much compared to ^^
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

  // sort by cents
  originalScale.sort((a, b) => a[0] - b[0]);

  // remove cents values entirely
  let originalScaleNoCents = originalScale.map((row) => row[1]);

  // add original scale to list of modes
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
