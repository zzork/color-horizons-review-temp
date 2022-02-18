import { useState } from "react";
import { OtInfo } from "../infoButtons";
import { handleOtChange } from "./otEventHandlers";
import { OTReadout } from "./OTReadout";

export const Otones = ({ stateData, setStateData }) => {
  const [showOtInfo, setShowOtInfo] = useState(false);
  return (
    <div>
      <h2>
        Otonal Scale{" "}
        <button
          className="infoButton"
          onClick={() => setShowOtInfo(!showOtInfo)}
        >
          info
        </button>
      </h2>
      {showOtInfo && <OtInfo setShowOtInfo={setShowOtInfo} />}
      <div className="tableClone">
        <p>
          Denominator:{" "}
          <input
            onChange={(event) => handleOtChange(event, stateData, setStateData)}
            type="number"
            name="otDenominatorEntryField"
            value={stateData.otones.denominator}
          ></input>
          <br />
          Start:{" "}
          <input
            onChange={(event) => handleOtChange(event, stateData, setStateData)}
            type="number"
            name="otStartEntryField"
            value={stateData.otones.start}
          ></input>
          <br />
          Stop:{" "}
          <input
            onChange={(event) => handleOtChange(event, stateData, setStateData)}
            type="number"
            name="otStopEntryField"
            value={stateData.otones.stop}
          ></input>
          <br />
          Progression:{" "}
          <input
            onChange={(event) => handleOtChange(event, stateData, setStateData)}
            type="number"
            name="otProgressionEntryField"
            value={stateData.otones.progression}
          ></input>
        </p>
      </div>
      <OTReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
