import getLMSList from "../util/getLMSList";
import getLTStepValuesDisplay from "../util/getLTStepValuesDisplay";
import getLTStepValuesList from "../util/getLTStepValuesList";
import getSimplestFraction from "../util/getSimplestFraction";
import getStepDifferences from "../util/getStepDifferences";
import getStepsValuesAndDifferences from "../util/getStepsValuesAndDifferences";
import getUniquesDisplay from "../util/getUniquesDisplay";
import getUniqueSteps from "../util/getUniqueSteps";

export const CalcLTReadout2 = ({ numerator, denominator, noteAmount }) => {
  const simplestFraction = getSimplestFraction(numerator, denominator);
  const numDomGreaterZero = numerator > 0 && denominator > 0;
  const fraction2over1 = simplestFraction[0] === 2 && simplestFraction[1] === 1;

  const isValidState = () => {
    return numDomGreaterZero && !fraction2over1;
  };
  if (!isValidState()) {
    return <div></div>;
  }

  const stepsValuesList = getLTStepValuesList(
    simplestFraction[0],
    simplestFraction[1],
    noteAmount
  );
  const stepDifferences = getStepDifferences(stepsValuesList);
  const sortedUnique = getUniqueSteps(stepDifferences);
  const lmsList = getLMSList(stepDifferences, sortedUnique);
  const stepsValuesAndDifferences = getStepsValuesAndDifferences(
    stepsValuesList,
    stepDifferences,
    lmsList
  );
  const uniquesDisplay = getUniquesDisplay(sortedUnique);
  const stepValuesDisplay = getLTStepValuesDisplay(stepsValuesAndDifferences);

  return (
    <div>
      <h3>{lmsList}</h3>
      <p>Step Sizes</p>
      {uniquesDisplay} <br />
      <table>
        <tbody>{stepValuesDisplay}</tbody>
      </table>
      <br />
    </div>
  );
};
