import setLTEquivalentFraction from "../util/setLTEquivalentFraction";
import { GetGenerator } from "./GetGenerator";

export const CalcLTReadout = ({
  numerator,
  denominator,
  stateData,
  setStateData,
}) => {
  const isValidState = () => {
    return numerator > 0 && denominator > 0;
  };
  if (!isValidState()) {
    // add nullify calculatedNumerator/calculatedDenominator state change
    return <InvalidState numerator={numerator} denominator={denominator} />;
  }

  setLTEquivalentFraction(numerator, denominator, setStateData);

  return (
    <div>
      <div>
        Your entry is equivalent to {numerator} / {denominator}
      </div>
      <div>
        Generator:{" "}
        <GetGenerator numerator={numerator} denominator={denominator} /> cents
      </div>
    </div>
  );
};

// change GetGenerator to a util since it just does a calc and could be used elsewhere

const InvalidState = ({ numerator, denominator }) => {
  return (
    <div>
      {numerator == "" && denominator === "" && (
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
