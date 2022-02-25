import { useState } from "react";
import { EdoMosInfo } from "../infoButtons";
import { setShowEdoMosInfo } from "../infoEventHandlers";
import { handleEdoMosChange } from "./edoMosEventHandlers";
import EDOMOSReadout from "./EDOMOSReadout";

export const EDOMOS = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>
        Equal Division of the Octave Steps{" "}
        <button
          className="infoButton"
          onClick={() => setShowEdoMosInfo(stateData, setStateData)}
        >
          info
        </button>
      </h2>
      {stateData.edoMos.showInfo && (
        <EdoMosInfo stateData={stateData} setStateData={setStateData} />
      )}
      <div className="tableClone">
        <p>
          EDO:{" "}
          <input
            onChange={(event) =>
              handleEdoMosChange(event, stateData, setStateData)
            }
            type="number"
            name="edomosEDOEntryField"
            value={stateData.edoMos.edo}
          ></input>{" "}
          <br />
          <br />
          Step:{" "}
          <input
            onChange={(event) =>
              handleEdoMosChange(event, stateData, setStateData)
            }
            type="number"
            name="edomosStepEntryField"
            value={stateData.edoMos.step}
          ></input>
        </p>
      </div>
      <EDOMOSReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
