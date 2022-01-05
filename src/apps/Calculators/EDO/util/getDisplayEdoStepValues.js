const getDisplayEdoStepValues = (edo, stepSize) => {
  const stepValueList = [];
  for (let i = 0; i <= edo; i++) {
    let decimalFixed = i * stepSize;
    stepValueList.push(decimalFixed);
  }
  return stepValueList;
};

export default getDisplayEdoStepValues;
