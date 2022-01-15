import divideTwoFractions from "./divideTwoFractions";

const getAllOTModesAsFractions = (scale) => {
  let listOfAllModes = [];

  listOfAllModes.push(scale);

  let currentMode = scale;

  for (let j = 1; j < currentMode.length; j++) {
    let thisMode = [];
    for (let i = 0; i < currentMode.length; i++) {
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

export default getAllOTModesAsFractions;
