import LTUniquesDisplay from "../LTShared/LTUniquesDisplay";
import getMos from "../LTShared/util/getMos";
import { LTBCAllModes } from "./LTBCAllModes";
import getLTScaleFromCents from "./util/getLTScaleFromCents";

export const LTBCReadout = ({
  generator,
  noteTotal,
  selectedComparison,
  granularityFixValue,
  handleSetPlayerClick,
  handleGranularityClick,
  handleInvertClick,
  handleMOSClick,
  handleChange,
  stateData,
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

  const sclData = [generator, noteTotal];

  return (
    <div>
      The inverse generator is {invertedGenerator.toFixed(granularityFixValue)}
      <br />
      <p>
        Granularity
        <br />
        <button onClick={() => handleGranularityClick("100")}>100</button>
        <button onClick={() => handleGranularityClick("10")}>10</button>
        <button onClick={() => handleGranularityClick("1")}>1</button>
        <button onClick={() => handleGranularityClick("0.1")}>0.1</button>
        <button onClick={() => handleGranularityClick("0.01")}>0.01</button>
        <button onClick={() => handleGranularityClick("0.001")}>0.001</button>
        <button onClick={() => handleGranularityClick("0.0001")}>0.0001</button>
        <button onClick={() => handleGranularityClick("0.00001")}>
          0.00001
        </button>
        <button onClick={() => handleGranularityClick("0.000001")}>
          0.000001
        </button>
        <button onClick={() => handleGranularityClick("0.0000001")}>
          0.0000001
        </button>
      </p>
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
      {noteTotal <= 1 && <div>Note Total Must Be Greater Than One</div>}
      {noteTotal > 1 && <LTUniquesDisplay scale={scale} lmsIn={"Lms"} />}
      <br />
      {noteTotal > 1 && (
        <LTBCAllModes
          scale={scale}
          stateData={stateData}
          lmsIn={"Lms"}
          sclData={sclData}
          handleSetPlayerClick={handleSetPlayerClick}
        />
      )}
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
