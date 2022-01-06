import getMos from "./util/getMos";
import getReducedFraction from "../../../util/getReducedFraction";
import getStepDifferences from "../../../util/getStepDifferences";
import getUniqueSteps from "../../../util/getUniqueSteps";
import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import LTStepValuesDisplay from "./LTStepValuesDisplay";
import UniquesDisplay from "./LTUniquesDisplay";
import getCentsFromRatio from "../../../util/getCentsFromRatio";
import getLMSList from "./util/getLMSList";
import getLTScale from "./util/getLTScale";
import getStepsValuesAndDifferences from "./util/getStepsValuesAndDifferences";

export const LTReadout = ({
  numerator,
  denominator,
  noteTotal,
  selectedComparison,
  handleInvertClick,
  handleMOSClick,
  handleChange,
}) => {
  const isValidState = () => {
    return numerator > 0 && denominator > 0;
  };
  if (!isValidState()) {
    return <InvalidState numerator={numerator} denominator={denominator} />;
  }

  const reducedFraction = getReducedFraction(numerator, denominator);
  const mainGenerator = getCentsFromRatio(
    reducedFraction[0],
    reducedFraction[1]
  );
  const inverseFraction = getReducedFraction(
    reducedFraction[1] * 2,
    reducedFraction[0]
  );
  const inverseGenerator = getCentsFromRatio(
    inverseFraction[0],
    inverseFraction[1]
  );
  const momentsOfSymmetry = getMos(reducedFraction[0], reducedFraction[1]);

  const mosButtons = momentsOfSymmetry.map((value) => (
    <button onClick={() => handleMOSClick(value)}>{value}</button>
  ));

  const scale = getLTScale(reducedFraction[0], reducedFraction[1], noteTotal);
  const stepDifferences = getStepDifferences(scale);
  const sortedUnique = getUniqueSteps(stepDifferences);
  const lmsList = getLMSList(stepDifferences, sortedUnique);
  const stepsValuesAndDifferences = getStepsValuesAndDifferences(
    scale,
    stepDifferences,
    lmsList
  );

  // this should be caught by invalid state
  if (numerator === denominator) {
    return "Numerator and Denominator are Identical";
  }
  if (reducedFraction[0] === 2 && reducedFraction[1] === 1) {
    return "Your entry is equivalent to 2/1";
  }

  return (
    <div>
      <div>
        Your entry is equivalent to {reducedFraction[0]} / {reducedFraction[1]}
        <br />
        Generator: {mainGenerator.toFixed(5)}
        <br />
        <br />
        The inverse fraction is {inverseFraction[0]} / {inverseFraction[1]}
        <br />
        Inverse Generator: {inverseGenerator.toFixed(5)}
        <br />
        <br />
        <button onClick={() => handleInvertClick(inverseFraction)}>
          Invert Generator
        </button>
        <p>
          Moments of Symmetry <br />
          {mosButtons}
          <p>
            Note Amount:{" "}
            <input
              onChange={handleChange}
              type="number"
              name="ltNoteTotalEntryField"
              value={noteTotal}
            ></input>
          </p>
        </p>
        <h3>{lmsList}</h3>
        <p>Step Sizes</p>
        <UniquesDisplay sortedUnique={sortedUnique} />
        <LTStepValuesDisplay
          stepsValuesAndDifferences={stepsValuesAndDifferences}
        />
        <br />
        <ComparisonWindow
          scale={scale}
          selectedComparison={selectedComparison}
        />
        <br />
      </div>
    </div>
  );
};

const InvalidState = ({ numerator, denominator }) => {
  return (
    <div>
      {numerator === "" && denominator === "" && (
        <p>Enter a Numerator and Denominator</p>
      )}
      {numerator === "" && denominator !== "" && <p>Enter a Numerator</p>}
      {numerator < 1 && numerator !== "" && (
        <p>Numerator Cannot Be Less than 1</p>
      )}
      {denominator === "" && numerator !== "" && <p>Enter a Denominator</p>}
      {denominator < 1 && denominator !== "" && (
        <p>Denominator Cannot Be Less than 1</p>
      )}
    </div>
  );
};
