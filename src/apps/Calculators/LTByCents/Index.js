import { useState } from "react";
import { LtbcInfo } from "../infoButtons";
import { handleLtbcChange } from "./ltbcEventHandlers";
import { LTBCReadout } from "./LTBCReadout";
import getGranularitySettings from "./util/getGranularitySettings";

export const LTByCents = ({ stateData, setStateData }) => {
  const [showLtbcInfo, setShowLtbcInfo] = useState(false);
  const granularitySettings = getGranularitySettings(
    stateData.linearTemperamentByCents.granularity
  );

  return (
    <div>
      <h2>
        Linear Temperament by Cents{" "}
        <button
          className="infoButton"
          onClick={() => setShowLtbcInfo(!showLtbcInfo)}
        >
          info
        </button>
      </h2>
      {showLtbcInfo && <LtbcInfo setShowLtbcInfo={setShowLtbcInfo} />}
      <div className="tableClone">
        <p>
          Generator:{" "}
          <input
            onChange={(event) =>
              handleLtbcChange(event, stateData, setStateData)
            }
            type="number"
            step={granularitySettings[1]}
            name="ltGeneratorEntryField"
            value={stateData.linearTemperamentByCents.generator}
          ></input>
        </p>
      </div>
      <LTBCReadout
        stateData={stateData}
        setStateData={setStateData}
        granularityFixValue={granularitySettings[0]}
      />
    </div>
  );
};
