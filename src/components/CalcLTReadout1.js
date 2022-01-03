import getSimplestFraction from "../util/getSimplestFraction";
import getGenerator from "../util/getGenerator";
import getMos from "../util/getMos";

export const CalcLTReadout1 = ({
  numerator,
  denominator,
  noteTotal,
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

  const equivalentFraction = getSimplestFraction(numerator, denominator);
  const mainGenerator = getGenerator(
    equivalentFraction[0],
    equivalentFraction[1]
  );
  const inverseFraction = getSimplestFraction(
    equivalentFraction[1] * 2,
    equivalentFraction[0]
  );
  const inverseGenerator = getGenerator(inverseFraction[0], inverseFraction[1]);
  const momentsOfSymmetry = getMos(
    equivalentFraction[0],
    equivalentFraction[1]
  );

  const mosButtons = momentsOfSymmetry.map((value) => (
    <button onClick={() => handleMOSClick(value)}>{value}</button>
  ));

  // this should be caught by invalid state
  if (numerator === denominator) {
    return "Numerator and Denominator are Identical";
  }
  if (equivalentFraction[0] === 2 && equivalentFraction[1] === 1) {
    return "Your entry is equivalent to 2/1";
  }

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
              name="ltNoteTotal"
              value={noteTotal}
            ></input>
          </p>
        </p>
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
