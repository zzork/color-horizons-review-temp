import getLTStepValuesList from "../util/getLTStepValuesList";

export const CalcLTReadout2 = ({ numerator, denominator, noteAmount }) => {
  let stepsValuesList = getLTStepValuesList(numerator, denominator, noteAmount);

  // gives us a list of sizes between each step, complete
  let stepDifferences = [0];
  for (let i = 1; i < stepsValuesList.length; i++) {
    stepDifferences.push(stepsValuesList[i] - stepsValuesList[i - 1]);
  }
  // zip stepDifferences and stepsValuesList together and you've got the proper table readout

  let fixedStepsList = stepDifferences.map((step) => step.toFixed(5));
  const uniqueSteps = [...new Set(fixedStepsList)];
  uniqueSteps.shift();
  let sortedUnique = [...uniqueSteps];
  sortedUnique.sort((a, b) => a - b);
  sortedUnique.reverse();
  let uniquesDisplay = sortedUnique.map((value, index) => (
    <div>
      Size {index + 1} - {value}
    </div>
  ));

  // then how do I turn stepDifferences into e.g. LLsLLss readout?

  let stepValuesDisplay = stepsValuesList.map((value, index) => (
    <tr key={index}>
      <td>Step {index}</td>
      <td align="right">{value.toFixed(5)}</td>
    </tr>
  ));

  const finalTable = (
    <table>
      <tbody>{stepValuesDisplay}</tbody>
    </table>
  );

  return (
    <div>
      <p>Step Sizes</p>
      {uniquesDisplay} <br />
      {finalTable}
    </div>
  );
};
