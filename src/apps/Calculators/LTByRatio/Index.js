import { useState } from "react";
import { LtbrInfo } from "../infoButtons";
import { setShowLtbrInfo } from "../infoEventHandlers";
import { handleLtbrChange } from "./ltbrEventHandlers";
import { LTBRReadout } from "./LTBRReadout";

export const LTByRatio = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>
        Generated Scale by Ratio{" "}
        <button
          className="infoButton"
          onClick={() => setShowLtbrInfo(stateData, setStateData)}
        >
          info
        </button>
      </h2>
      {stateData.linearTemperamentByRatio.showInfo && (
        <LtbrInfo stateData={stateData} setStateData={setStateData} />
      )}
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
