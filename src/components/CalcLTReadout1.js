import getSimplestFraction from "../util/getSimplestFraction";
import getGenerator from "../util/getGenerator";

export const CalcLTReadout1 = ({
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

  const equivalentFraction = getSimplestFraction(numerator, denominator);
  const mainGenerator = getGenerator(numerator, denominator);
  const inverseFraction = getSimplestFraction(
    equivalentFraction[1] * 2,
    equivalentFraction[0]
  );
  const inverseGenerator = getGenerator(inverseFraction[0], inverseFraction[1]);

  return (
    <div>
      <div>
        Your entry is equivalent to {equivalentFraction[0]} /{" "}
        {equivalentFraction[1]}
        <br />
        Generator: {mainGenerator.toFixed(5)}
        <br />
        <br />
        The inverse fraction is {inverseFraction[0]} / {inverseFraction[1]}
        <br />
        Inverse Generator: {inverseGenerator.toFixed(5)}
        <br />
        <p>Implement a Flip Button Here</p>
        <p>Myhill Values Display???</p>
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
