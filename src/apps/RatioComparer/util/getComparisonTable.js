import { ratioTable } from "../../../ratioTable";

const getComparisonTable = (selectedComparison) => {
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
  return comparisonTable;
};

export default getComparisonTable;
