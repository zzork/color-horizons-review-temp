import { ratioTable } from "../../ratioTable";
import getComparisonEntryValues from "./util/getComparisonEntryValues";

export const ComparisonWindow = ({ scale, stateData }) => {
  const selectedComparison = stateData[10].comparison;
  let comparisonTable = [];

  if (selectedComparison === "off") {
    return <div></div>;
  }

  if (selectedComparison === "primes") {
    comparisonTable = ratioTable.filter((entry) => entry.prime === true);
  }
  if (selectedComparison === "majorDiatonic") {
    comparisonTable = ratioTable.filter(
      (entry) => entry.majorDiatonic === true
    );
  }
  if (selectedComparison === "harmonics17") {
    comparisonTable = ratioTable.filter((entry) => entry.harmonics === true);
  }
  if (selectedComparison === "harmonics6") {
    comparisonTable = ratioTable.filter((entry) => entry.harmonicSix === true);
  }
  if (selectedComparison === "3") {
    comparisonTable = ratioTable.filter((entry) => entry.primeLimit === 3);
  }
  if (selectedComparison === "5") {
    comparisonTable = ratioTable.filter((entry) => entry.primeLimit <= 5);
  }
  if (selectedComparison === "7") {
    comparisonTable = ratioTable.filter((entry) => entry.primeLimit <= 7);
  }
  if (selectedComparison === "11") {
    comparisonTable = ratioTable.filter((entry) => entry.primeLimit <= 11);
  }
  if (selectedComparison === "13") {
    comparisonTable = ratioTable.filter((entry) => entry.primeLimit <= 13);
  }
  if (selectedComparison === "17") {
    comparisonTable = ratioTable.filter((entry) => entry.primeLimit <= 17);
  }

  const highlightBoundaries = [
    (stateData[10].approximationBoundary - stateData[10].closeApproximation) /
      3 +
      stateData[10].closeApproximation,
    ((stateData[10].approximationBoundary - stateData[10].closeApproximation) /
      3) *
      2 +
      stateData[10].closeApproximation,
  ];

  console.log(
    stateData[10].closeApproximation,
    stateData[10].approximationBoundary
  );
  console.log(highlightBoundaries);

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
