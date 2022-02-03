const getHighlightBoundaries = (stateData) => {
  return [
    (stateData[10].approximationBoundary - stateData[10].closeApproximation) /
      3 +
      stateData[10].closeApproximation,
    ((stateData[10].approximationBoundary - stateData[10].closeApproximation) /
      3) *
      2 +
      stateData[10].closeApproximation,
  ];
};

export default getHighlightBoundaries;
