const getComparisonEntryValues = (scale, fraction) => {
  let justFraction = fraction;
  let closestValue = null;
  let leastDifference = 1201;
  let leastDifferenceAbsolute = 1201;
  let closestScaleStep = null;
  for (let i = 0; i < scale.length; i++) {
    let differenceOnIterationAbsolute = Math.abs(scale[i] - justFraction);
    let differenceOnIteration = scale[i] - justFraction;
    if (differenceOnIterationAbsolute < leastDifferenceAbsolute) {
      closestValue = scale[i];
      leastDifference = differenceOnIteration;
      leastDifferenceAbsolute = Math.abs(differenceOnIteration);
      closestScaleStep = i;
    }
  }
  let finalReturn = [closestScaleStep, closestValue, leastDifference];

  return finalReturn;
};

export default getComparisonEntryValues;
