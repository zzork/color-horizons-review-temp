import getLTStepValuesList from "../util/getLTStepValuesList";

export const CalcLTReadout2 = ({ numerator, denominator, noteAmount }) => {
  let stepsValuesList = getLTStepValuesList(numerator, denominator, noteAmount);

  // gives us a list of sizes between each step, complete
  let stepDifferences = [0];
  for (let i = 1; i < stepsValuesList.length; i++) {
    stepDifferences.push(stepsValuesList[i] - stepsValuesList[i - 1]);
  }

  // zip them together for the readout
  let stepsValuesAndDifferences = [];
  for (let i = 0; i < stepsValuesList.length; i++) {
    stepsValuesAndDifferences.push([stepsValuesList[i], stepDifferences[i]]);
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
      return "m";
    }
    if (value === sSize) {
      return "s";
    }
  };

  // take mapped LMS and create new list from previous values
  let lmsList = stepDifferences.map((value) => valueToLms(value.toFixed(5)));

  ///////

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

  // then how do I turn stepDifferences into e.g. LLsLLss readout?

  let stepValuesDisplay = stepsValuesAndDifferences.map((value, index) => (
    <tr key={index}>
      <td>Step {index}</td>
      <td align="center">{value[0].toFixed(5)}</td>
      <td align="right">{value[1].toFixed(5)}</td>
    </tr>
  ));

  const finalTable = (
    <table>
      <tbody>{stepValuesDisplay}</tbody>
    </table>
  );

  return (
    <div>
      {lmsList}
      <p>Step Sizes</p>
      {uniquesDisplay} <br />
      {finalTable}
    </div>
  );
};
