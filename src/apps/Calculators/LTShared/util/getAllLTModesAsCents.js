const getAllLTModesAsCents = (scale) => {
  let listOfAllModesAsCents = [];

  listOfAllModesAsCents.push(scale);

  let currentMode = [...scale];

  for (let i = 1; i < scale.length; i++) {
    currentMode.shift();
    let currentModeShifted = currentMode.map((value) => value - currentMode[0]);
    currentModeShifted.push(1200);
    listOfAllModesAsCents.push(currentModeShifted);
    currentMode = [...currentModeShifted];
  }

  return listOfAllModesAsCents;
};

export default getAllLTModesAsCents;
