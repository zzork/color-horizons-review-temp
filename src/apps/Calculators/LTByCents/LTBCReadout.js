import { LTAllModes } from "../LTByRatio/LTAllModes";
import LTUniquesDisplay from "../LTByRatio/LTUniquesDisplay";
import getMos from "../LTShared/util/getMos";
import getLTScaleFromCents from "./util/getLTScaleFromCents";

export const LTBCReadout = ({
  generator,
  noteTotal,
  selectedComparison,
  handleInvertClick,
  handleMOSClick,
  handleChange,
}) => {
  const isValidState = () => {
    return generator > 0 && generator <= 1200;
  };
  if (!isValidState()) {
    return <InvalidState generator={generator} />;
  }
  const invertedGenerator = 1200 - generator;

  const momentsOfSymmetry = getMos(generator);

  const mosButtons = momentsOfSymmetry.map((value) => (
    <button onClick={() => handleMOSClick(value)}>{value}</button>
  ));

  const scale = getLTScaleFromCents(generator, noteTotal);

  return (
    <div>
      The inverse generator is {invertedGenerator.toFixed(2)}
      <br />
      <br />
      <button onClick={() => handleInvertClick(invertedGenerator.toFixed(2))}>
        Invert Generator
      </button>
      <p>
        Moments of Symmetry <br />
        {mosButtons} <br />
      </p>
      <p>
        Note Amount:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltbcNoteTotalEntryField"
          value={noteTotal}
        ></input>
      </p>
      MOVE THESE TO COMMON SPACE
      <LTUniquesDisplay scale={scale} />
      <br />
      <LTAllModes scale={scale} selectedComparison={selectedComparison} />
      <br />
    </div>
  );
};

const InvalidState = ({ generator }) => {
  return (
    <div>
      {generator <= 0 && <p>Generator Must be Greater Than Zero</p>}
      {generator > 1200 && <p>Generator Must Be Less Than 1200</p>}
    </div>
  );
};
