const getHighlightBoundaries = (stateData) => {
  return [
    (stateData.comparisonWindow.approximationBoundary -
      stateData.comparisonWindow.closeApproximation) /
      3 +
      stateData.comparisonWindow.closeApproximation,
    ((stateData.comparisonWindow.approximationBoundary -
      stateData.comparisonWindow.closeApproximation) /
      3) *
      2 +
      stateData.comparisonWindow.closeApproximation,
  ];
};

export default getHighlightBoundaries;
