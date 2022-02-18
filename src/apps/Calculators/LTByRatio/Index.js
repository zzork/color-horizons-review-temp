import { useState } from "react";
import { LtbrInfo } from "../infoButtons";
import { handleLtbrChange } from "./ltbrEventHandlers";
import { LTBRReadout } from "./LTBRReadout";

export const LTByRatio = ({ stateData, setStateData }) => {
  const [showLtbrInfo, setShowLtbrInfo] = useState(false);
  return (
    <div>
      <h2>
        Linear Temperament by Ratio{" "}
        <button
          className="infoButton"
          onClick={() => setShowLtbrInfo(!showLtbrInfo)}
        >
          info
        </button>
      </h2>
      {showLtbrInfo && <LtbrInfo setShowLtbrInfo={setShowLtbrInfo} />}
      <div className="tableClone">
        <p>
          Numerator:{" "}
          <input
            onChange={(event) =>
              handleLtbrChange(event, stateData, setStateData)
            }
            type="number"
            name="ltNumeratorEntryField"
            value={stateData.linearTemperamentByRatio.numerator}
          ></input>
        </p>
        <p>
          Denominator:{" "}
          <input
            onChange={(event) =>
              handleLtbrChange(event, stateData, setStateData)
            }
            type="number"
            name="ltDenominatorEntryField"
            value={stateData.linearTemperamentByRatio.denominator}
          ></input>
        </p>
      </div>
      <LTBRReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
