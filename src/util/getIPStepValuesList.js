const getIPStepValuesList = (pattern, stepSize) => {
  const patternArray = pattern.split("");
  let stepValuesList = [0];
  for (let i = 0; i < patternArray.length; i++) {
    let thisStep = patternArray[i] * stepSize + stepValuesList[i];
    stepValuesList.push(thisStep);
  }
  return stepValuesList;
};

export default getIPStepValuesList;
