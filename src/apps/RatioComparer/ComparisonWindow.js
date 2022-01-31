import { ratioTable } from "../../ratioTable";
import getComparisonEntryValues from "./util/getComparisonEntryValues";

export const ComparisonWindow = ({ scale, selectedComparison }) => {
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

  let rows = [];
  for (let i = 0; i < comparisonTable.length; i++) {
    let rowComparer = getComparisonEntryValues(scale, comparisonTable[i].cents);
    let rowComparerInverse = getComparisonEntryValues(
      scale,
      comparisonTable[i].invertedCents
    );
    //
    let highlight = "redHighlight";
    if (Math.abs(rowComparer.leastDifference) <= 5) {
      highlight = "greenHighlight";
    } else if (Math.abs(rowComparer.leastDifference) <= 25) {
      highlight = "yellowHighlight";
    }
    let inverseHighlight = "redHighlight";
    if (Math.abs(rowComparerInverse.leastDifference) <= 5) {
      inverseHighlight = "greenHighlight";
    } else if (Math.abs(rowComparerInverse.leastDifference) <= 25) {
      inverseHighlight = "yellowHighlight";
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
