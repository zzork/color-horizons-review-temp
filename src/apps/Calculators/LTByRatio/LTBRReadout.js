import getMos from "../LTShared/util/getMos";
import getReducedFraction from "../../../util/getReducedFraction";
import getCentsFromRatio from "../../../util/getCentsFromRatio";
import getLTScaleByRatio from "./util/getLTScaleFromRatio";
import LTUniquesDisplay from "../LTShared/LTUniquesDisplay";
import { LTAllModes } from "../LTShared/LTAllModes";
import generateLTBRScl from "./util/generateLTBRScl";

export const LTBRReadout = ({
  numerator,
  denominator,
  noteTotal,
  selectedComparison,
  handleInvertClick,
  handleMOSClick,
  handleChange,
}) => {
  const reducedFraction = getReducedFraction(numerator, denominator);

  const reducedFractionIsDuple =
    reducedFraction[0] === 2 &&
    reducedFraction[1] === 1 &&
    numerator !== denominator;
  const isValidState = () => {
    return (
      numerator > 0 &&
      denominator > 0 &&
      numerator !== denominator &&
      !reducedFractionIsDuple
    );
  };
  if (!isValidState()) {
    return (
      <InvalidState
        numerator={numerator}
        denominator={denominator}
        reducedFractionIsDuple={reducedFractionIsDuple}
      />
    );
  }

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

  const momentsOfSymmetry = getMos(mainGenerator);

  const mosButtons = momentsOfSymmetry.map((value) => (
    <button onClick={() => handleMOSClick(value)}>{value}</button>
  ));

  const scale = getLTScaleByRatio(
    reducedFraction[0],
    reducedFraction[1],
    noteTotal
  );

  const sclData = [numerator, denominator, noteTotal];

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
          {mosButtons} <br />
          <br />
          Note Amount:{" "}
          <input
            onChange={handleChange}
            type="number"
            name="ltNoteTotalEntryField"
            value={noteTotal}
          ></input>
        </p>
        {noteTotal <= 1 && <div>Note Total Must Be Greater Than One</div>}
        {noteTotal > 1 && <LTUniquesDisplay scale={scale} lmsIn={"Lms"} />}
        <br />
        {noteTotal > 1 && (
          <LTAllModes
            scale={scale}
            selectedComparison={selectedComparison}
            lmsIn={"Lms"}
            sclData={sclData}
          />
        )}
      </div>
    </div>
  );
};

const InvalidState = ({ numerator, denominator, reducedFractionIsDuple }) => {
  return (
    <div>
      {numerator === denominator && (
        <p>Numerator and Denominator are Identical</p>
      )}
      {reducedFractionIsDuple && <p>Your entry is equivalent to 2/1</p>}
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
