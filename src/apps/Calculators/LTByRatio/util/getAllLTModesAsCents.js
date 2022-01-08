import getLTScale from "./getLTScale";

const getAllLTModesAsCents = (reducedFraction, noteTotal) => {
  let listOfAllModesAsCents = [];

  const originalScale = getLTScale(
    reducedFraction[0],
    reducedFraction[1],
    noteTotal
  );

  listOfAllModesAsCents.push(originalScale);

  let currentMode = [...originalScale];

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
