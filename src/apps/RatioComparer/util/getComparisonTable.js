import { ratioTable } from "../../../ratioTable";

const getComparisonTable = (selectedComparison) => {
  let comparisonTable = [];

  if (selectedComparison === "off") {
    return <div></div>;
  }

  if (selectedComparison === "primes") {
    comparisonTable = ratioTable.filter((entry) => entry.prime === true);
  }
  if (selectedComparison === "harmonics6") {
    comparisonTable = ratioTable.filter((entry) => entry.harmonicSix === true);
  }
  if (selectedComparison === "harmonics17") {
    comparisonTable = ratioTable.filter((entry) => entry.harmonic17 === true);
  }
  if (selectedComparison === "harmonics31") {
    comparisonTable = ratioTable.filter((entry) => entry.harmonics === true);
  }
  if (selectedComparison === "12tet") {
    comparisonTable = ratioTable.filter((entry) => entry.twelveTet === true);
  }
  if (selectedComparison === "just12") {
    comparisonTable = ratioTable.filter((entry) => entry.just12 === true);
  }
  return comparisonTable;
};

export default getComparisonTable;
