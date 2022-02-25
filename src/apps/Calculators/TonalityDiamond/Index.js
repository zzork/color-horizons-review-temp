import { useState } from "react";
import { TdInfo } from "../infoButtons";
import { setShowTdInfo } from "../infoEventHandlers";
import { handleTdRefreshClick } from "./tdEventHandlers";
import TDNumbersClickButtons from "./TDNumbersClickButtons";
import TDReadout from "./TDReadout";

export const TonalityDiamond = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>
        Tonality Diamond{" "}
        <button
          className="infoButton"
          onClick={() => setShowTdInfo(stateData, setStateData)}
        >
          info
        </button>
      </h2>
      {stateData.tonalityDiamond.showInfo && (
        <TdInfo stateData={stateData} setStateData={setStateData} />
      )}
      <div className="tableClone">
        <br />
        <TDNumbersClickButtons
          stateData={stateData}
          setStateData={setStateData}
        />
        <br />
        <button
          className="mb"
          onClick={() => handleTdRefreshClick(stateData, setStateData)}
        >
          Clear
        </button>
        <br />
        <br />
      </div>
      <TDReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
