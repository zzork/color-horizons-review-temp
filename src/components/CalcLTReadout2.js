import getLTStepValuesList from "../util/getLTStepValuesList";
import getSimplestFraction from "../util/getSimplestFraction";

export const CalcLTReadout2 = ({ numerator, denominator, noteAmount }) => {
  const simplestFraction = getSimplestFraction(numerator, denominator);
  const numDomGreaterZero = numerator > 0 && denominator > 0;
  const fraction2over1 = simplestFraction[0] === 2 && simplestFraction[1] === 1;

  const isValidState = () => {
    return numDomGreaterZero && !fraction2over1;
  };
  if (!isValidState()) {
    return <InvalidState numerator={numerator} denominator={denominator} />;
  }

  let stepsValuesList = getLTStepValuesList(numerator, denominator, noteAmount);

  // gives us a list of sizes between each step, complete
  let stepDifferences = [0];
  for (let i = 1; i < stepsValuesList.length; i++) {
    stepDifferences.push(stepsValuesList[i] - stepsValuesList[i - 1]);
  }

  // get unique values for step sizes display
  let fixedStepsList = stepDifferences.map((step) => step.toFixed(5));
  const uniqueSteps = [...new Set(fixedStepsList)];
  uniqueSteps.shift();
  let sortedUnique = [...uniqueSteps];
  sortedUnique.sort((a, b) => a - b);
  sortedUnique.reverse();

  ///////

  // take values of uniques and map to LMS
  let lSize = 0;
  let mSize = 0;
  let sSize = 0;
  if (sortedUnique.length === 2) {
    lSize = sortedUnique[0];
    sSize = sortedUnique[1];
  }
  if (sortedUnique.length === 3) {
    lSize = sortedUnique[0];
    mSize = sortedUnique[1];
    sSize = sortedUnique[2];
  }

  const valueToLms = (value) => {
    if (value === lSize) {
      return "L";
    }
    if (value === mSize) {
      return "𝚖";
    }
    if (value === sSize) {
      return "s";
    }
  };

  // take mapped LMS and create new list from previous values
  let lmsList = stepDifferences.map((value) => valueToLms(value.toFixed(5)));

  ///////

  // zip them together for the readout
  let stepsValuesAndDifferences = [];
  for (let i = 0; i < stepsValuesList.length; i++) {
    stepsValuesAndDifferences.push([
      stepsValuesList[i],
      stepDifferences[i].toFixed(5),
      lmsList[i],
    ]);
  }
  stepsValuesAndDifferences[0][1] = "";

  // uniques display logic
  let uniquesDisplay = null;
  if (sortedUnique.length < 2) {
    uniquesDisplay = <div>Not enough notes</div>;
  }
  if (sortedUnique.length === 2) {
    uniquesDisplay = (
      <div>
        L - {sortedUnique[0]}
        <br />s - {sortedUnique[1]}
      </div>
    );
  }
  if (sortedUnique.length === 3) {
    uniquesDisplay = (
      <div>
        L - {sortedUnique[0]}
        <br />m - {sortedUnique[1]}
        <br />s - {sortedUnique[2]}
      </div>
    );
  }

  let stepValuesDisplay = stepsValuesAndDifferences.map((value, index) => (
    <tr key={index}>
      <td>Step {index}</td>
      <td align="center">{value[0].toFixed(5)}</td>
      <td align="center">{value[1]}</td>
      <td align="center">{value[2]}</td>
    </tr>
  ));

  const finalTable = (
    <table>
      <tbody>{stepValuesDisplay}</tbody>
    </table>
  );

  return (
    <div>
      <h3>{lmsList}</h3>
      <p>Step Sizes</p>
      {uniquesDisplay} <br />
      {finalTable}
    </div>
  );
};

const InvalidState = ({ numerator, denominator }) => {
  return <div></div>;
};
