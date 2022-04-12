const getScaleDegreesRepeating = (incomingScale) => {
  let scaleDegrees = [];
  for (let i = 0; i < incomingScale.length - 1; i++) {
    scaleDegrees.push(i + 1);
  }
  for (let i = 0; i < 4; i++) {
    scaleDegrees = scaleDegrees.concat(scaleDegrees);
  }

  return scaleDegrees;
};

export default getScaleDegreesRepeating;
