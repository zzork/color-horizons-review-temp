import LTUniquesDisplay from "../LTShared/LTUniquesDisplay";
import getMos from "../LTShared/util/getMos";
import { LTBCAllModes } from "./LTBCAllModes";
import {
  handleGranularityClick,
  handleLtbcChange,
  handleLtbcInvertClick,
  handleLtbcMOSClick,
} from "./ltbcEventHandlers";
import getLTScaleFromCents from "./util/getLTScaleFromCents";

export const LTBCReadout = ({
  granularityFixValue,
  stateData,
  setStateData,
}) => {
  const generator = stateData.linearTemperamentByCents.generator;
  const noteTotal = stateData.linearTemperamentByCents.noteTotal;

  const isValidState = () => {
    return generator > 0 && generator < 1200;
  };
  if (!isValidState()) {
    return <InvalidState generator={generator} />;
  }

  const invertedGenerator = 1200 - generator;
  const momentsOfSymmetry = getMos(generator);
  const mosButtons = momentsOfSymmetry.map((value, index) => (
    <button
      key={index}
      onClick={() => handleLtbcMOSClick(value, stateData, setStateData)}
    >
      {value}
    </button>
  ));

  const scale = getLTScaleFromCents(generator, noteTotal);

  const sclData = [generator, noteTotal];

  return (
    <div>
      <br />
      <div className="tableClone">
        <p>
          The inverse generator is{" "}
          {invertedGenerator.toFixed(granularityFixValue)}
        </p>

        <p>
          Granularity
          <br />
          <button
            onClick={() =>
              handleGranularityClick("100", stateData, setStateData)
            }
          >
            100
          </button>
          <button
            onClick={() =>
              handleGranularityClick("10", stateData, setStateData)
            }
          >
            10
          </button>
          <button
            onClick={() => handleGranularityClick("1", stateData, setStateData)}
          >
            1
          </button>
          <button
            onClick={() =>
              handleGranularityClick("0.1", stateData, setStateData)
            }
          >
            0.1
          </button>
          <button
            onClick={() =>
              handleGranularityClick("0.01", stateData, setStateData)
            }
          >
            0.01
          </button>
          <button
            onClick={() =>
              handleGranularityClick("0.001", stateData, setStateData)
            }
          >
            0.001
          </button>
          <button
            onClick={() =>
              handleGranularityClick("0.0001", stateData, setStateData)
            }
          >
            0.0001
          </button>
          <button
            onClick={() =>
              handleGranularityClick("0.00001", stateData, setStateData)
            }
          >
            0.00001
          </button>
          <button
            onClick={() =>
              handleGranularityClick("0.000001", stateData, setStateData)
            }
          >
            0.000001
          </button>
          <button
            onClick={() =>
              handleGranularityClick("0.0000001", stateData, setStateData)
            }
          >
            0.0000001
          </button>
        </p>
        <br />
        <button
          onClick={() =>
            handleLtbcInvertClick(
              invertedGenerator.toFixed(granularityFixValue),
              stateData,
              setStateData
            )
          }
        >
          Invert Generator
        </button>
        <p>
          Moments of Symmetry <br />
          {mosButtons} <br />
        </p>
        <p>
          Note Amount:{" "}
          <input
            onChange={(event) =>
              handleLtbcChange(event, stateData, setStateData)
            }
            type="number"
            name="ltbcNoteTotalEntryField"
            value={noteTotal}
          ></input>
        </p>
      </div>
      {noteTotal <= 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Note Total Must Be Greater Than One</p>
          </div>
        </div>
      )}
      {noteTotal > 1 && <LTUniquesDisplay scale={scale} lmsIn={"Lms"} />}
      <br />
      {noteTotal > 1 && (
        <LTBCAllModes
          scale={scale}
          stateData={stateData}
          setStateData={setStateData}
          lmsIn={"Lms"}
          sclData={sclData}
        />
      )}
      <br />
    </div>
  );
};

const InvalidState = ({ generator }) => {
  return (
    <div>
      {generator <= 0 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Generator Must be Greater Than Zero</p>
          </div>
        </div>
      )}
      {generator >= 1200 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Generator Must Be Less Than 1200</p>
          </div>
        </div>
      )}
    </div>
  );
};
