import getLTScale from "./getLTScale";

const getAllLTModesAsCents = (scale, noteTotal) => {
  let listOfAllModesAsCents = [];

  listOfAllModesAsCents.push(scale);

  let currentMode = [...scale];

  for (let i = 1; i < noteTotal; i++) {
    currentMode.shift();
    let currentModeShifted = currentMode.map((value) => value - currentMode[0]);
    currentModeShifted.push(1200);
    listOfAllModesAsCents.push(currentModeShifted);
    currentMode = [...currentModeShifted];
  }

  return listOfAllModesAsCents;
};

export default getAllLTModesAsCents;
