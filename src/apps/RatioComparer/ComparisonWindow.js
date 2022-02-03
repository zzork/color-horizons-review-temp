import { ratioTable } from "../../ratioTable";
import getComparisonEntryValues from "./util/getComparisonEntryValues";
import getComparisonTable from "./util/getComparisonTable";
import getHighlightBoundaries from "./util/getHighlightBoundaries";

export const ComparisonWindow = ({ scale, stateData }) => {
  const selectedComparison = stateData[10].comparison;
  const highlightBoundaries = getHighlightBoundaries(stateData);
  const comparisonTable = getComparisonTable(selectedComparison);

  let rows = [];
  for (let i = 0; i < comparisonTable.length; i++) {
    let rowComparer = getComparisonEntryValues(scale, comparisonTable[i].cents);
    let rowComparerInverse = getComparisonEntryValues(
      scale,
      comparisonTable[i].invertedCents
    );
    //
    let highlight = "noHighlight";
    if (
      Math.abs(rowComparer.leastDifference) <= stateData[10].closeApproximation
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
      stateData[10].approximationBoundary
    ) {
      highlight = "level4Highlight";
    }

    let inverseHighlight = "noHighlight";
    if (
      Math.abs(rowComparerInverse.leastDifference) <=
      stateData[10].closeApproximation
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
      stateData[10].approximationBoundary
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

  // this is table where the "each child should have a key" error is coming from
  let endTable = rows.map((row) => (
    <tr key={row.id}>
      <td class={row[10]}>{row[0]}</td>
      <td class={row[10]}>{row[1].toFixed(5)}</td>
      <td class={row[10]}>{row[2]}</td>
      <td class={row[10]}>{row[3].toFixed(5)}</td>
      <td class={row[10]}>{row[4].toFixed(5)}</td>
      <td class={row[11]}>{row[5]}</td>
      <td class={row[11]}>{row[6].toFixed(5)}</td>
      <td class={row[11]}>{row[7]}</td>
      <td class={row[11]}>{row[8].toFixed(5)}</td>
      <td class={row[11]}>{row[9].toFixed(5)}</td>
    </tr>
  ));

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Ratio</td>
            <td>Cents</td>
            <td>
              Closest
              <br /> Step
            </td>
            <td>Value</td>
            <td>Difference</td>
            <td>Inverted Ratio</td>
            <td>Cents</td>
            <td>
              Closest
              <br /> Step
            </td>
            <td>Value</td>
            <td>Difference</td>
          </tr>
          {endTable}
        </tbody>
      </table>
    </div>
  );
};
