import { useState } from "react";
import { TdInfo } from "../infoButtons";
import { handleTdRefreshClick } from "./tdEventHandlers";
import TDNumbersClickButtons from "./TDNumbersClickButtons";
import TDReadout from "./TDReadout";

export const TonalityDiamond = ({ stateData, setStateData }) => {
  const [showTdInfo, setShowTdInfo] = useState(false);
  return (
    <div>
      <h2>
        Tonality Diamond{" "}
        <button
          className="infoButton"
          onClick={() => setShowTdInfo(!showTdInfo)}
        >
          info
        </button>
      </h2>
      {showTdInfo && <TdInfo setShowTdInfo={setShowTdInfo} />}
      <div className="tableClone">
        <p>
          <TDNumbersClickButtons
            stateData={stateData}
            setStateData={setStateData}
          />
          <br />
          <button onClick={() => handleTdRefreshClick(stateData, setStateData)}>
            Clear
          </button>
        </p>
      </div>
      <TDReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
