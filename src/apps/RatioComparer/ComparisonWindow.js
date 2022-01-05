import { ratioTable } from "../../ratioTable";
import getComparisonEntryValues from "../../util/getComparisonEntryValues";

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
    let row = [
      comparisonTable[i].ratio,
      comparisonTable[i].cents,
      rowComparer[0],
      rowComparer[1],
      rowComparer[2],
      comparisonTable[i].invertedRatio,
      comparisonTable[i].invertedCents,
      rowComparerInverse[0],
      rowComparerInverse[1],
      rowComparerInverse[2],
    ];
    rows.push(row);
  }

  let endTable = rows.map((row) => (
    <tr key={row.id}>
      <td>{row[0]}</td>
      <td>{row[1].toFixed(5)}</td>
      <td>{row[2]}</td>
      <td>{row[3].toFixed(5)}</td>
      <td>{row[4].toFixed(5)}</td>
      <td>{row[5]}</td>
      <td>{row[6].toFixed(5)}</td>
      <td>{row[7]}</td>
      <td>{row[8].toFixed(5)}</td>
      <td>{row[9].toFixed(5)}</td>
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
