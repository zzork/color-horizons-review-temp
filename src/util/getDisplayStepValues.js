const getDisplayStepValues = (edo, stepSize) => {
  const stepValueList = [];
  for (let i = 0; i <= edo; i++) {
    let decimalFixed = (i * stepSize).toFixed(5);
    stepValueList.push(decimalFixed);
  }
  return stepValueList;
};

export default getDisplayStepValues;
