import getComparisonEntryValues from "./getComparisonEntryValues";

const getRows = (scale, stateData, comparisonTable, highlightBoundaries) => {
  let rows = [];
  for (let i = 0; i < comparisonTable.length; i++) {
    let rowComparer = getComparisonEntryValues(scale, comparisonTable[i].cents);
    let rowComparerInverse = getComparisonEntryValues(
      scale,
      comparisonTable[i].invertedCents
    );

    let highlight = "noHighlight";
    if (
      Math.abs(rowComparer.leastDifference) <=
      stateData.comparisonWindow.closeApproximation
    ) {
      highlight = "level1Highlight";
    } else if (
      Math.abs(rowComparer.leastDifference) <= highlightBoundaries[0]
    ) {
      highlight = "level2Highlight";
    } else if (
      Math.abs(rowComparer.leastDifference) <= highlightBoundaries[1]
    ) {
      highlight = "level3Highlight";
    } else if (
      Math.abs(rowComparer.leastDifference) <=
      stateData.comparisonWindow.approximationBoundary
    ) {
      highlight = "level4Highlight";
    }

    let inverseHighlight = "noHighlight";
    if (
      Math.abs(rowComparerInverse.leastDifference) <=
      stateData.comparisonWindow.closeApproximation
    ) {
      inverseHighlight = "level1Highlight";
    } else if (
      Math.abs(rowComparerInverse.leastDifference) <= highlightBoundaries[0]
    ) {
      inverseHighlight = "level2Highlight";
    } else if (
      Math.abs(rowComparerInverse.leastDifference) <= highlightBoundaries[1]
    ) {
      inverseHighlight = "level3Highlight";
    } else if (
      Math.abs(rowComparerInverse.leastDifference) <=
      stateData.comparisonWindow.approximationBoundary
    ) {
      inverseHighlight = "level4Highlight";
    }
    let row = [
      comparisonTable[i].ratio,
      comparisonTable[i].cents,
      rowComparer.closestScaleStep,
      rowComparer.closestValue,
      rowComparer.leastDifference,
      comparisonTable[i].invertedRatio,
      comparisonTable[i].invertedCents,
      rowComparerInverse.closestScaleStep,
      rowComparerInverse.closestValue,
      rowComparerInverse.leastDifference,
      highlight,
      inverseHighlight,
    ];
    rows.push(row);
  }
  return rows;
};

export default getRows;
