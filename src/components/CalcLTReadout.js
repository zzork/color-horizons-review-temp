import getSimplestFraction from "../util/getSimplestFraction";
import getGenerator from "../util/getGenerator";
import getMos from "../util/getMos";

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

  const equivalentFraction = getSimplestFraction(numerator, denominator);

  // let newState = stateData.map((scaleType) => {
  //   if (scaleType.id === "b") {
  //     return {
  //       ...scaleType,
  //       calculatedNumerator: equivalentFraction[0],
  //       calculatedDenominator: equivalentFraction[1],
  //     };
  //   }
  //   return scaleType;
  // });
  // setStateData(newState);
  // SETSTATEDATA is causing an infinite loop
  // problem is what J was saying before, this needs to just display info, not calculate and display it at once

  const mainGenerator = getGenerator(numerator, denominator);
  const inverseFraction = getSimplestFraction(
    equivalentFraction[1] * 2,
    equivalentFraction[0]
  );
  const inverseGenerator = getGenerator(inverseFraction[0], inverseFraction[1]);
  const momentsOfSymmetry = getMos(
    equivalentFraction[0],
    equivalentFraction[1]
  );

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
        <p>
          Moments of Symmetry <br />
          {momentsOfSymmetry}
        </p>
      </div>
    </div>
  );
};

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
