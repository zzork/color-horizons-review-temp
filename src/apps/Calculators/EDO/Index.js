import { useState } from "react";
import { EdoInfo } from "../infoButtons";
import { setShowEdoInfo } from "../infoEventHandlers";
import { handleEdoChange } from "./edoEventHandlers";
import { EDOReadout } from "./EDOReadout";

export const EDO = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>
        Equal Division of the Octave{" "}
        <button
          className="infoButton"
          onClick={() => setShowEdoInfo(stateData, setStateData)}
        >
          info
        </button>
      </h2>
      {stateData.edo.showInfo && (
        <EdoInfo stateData={stateData} setStateData={setStateData} />
      )}

      <div className="tableClone">
        <br />
        <input
          onChange={(event) => handleEdoChange(event, stateData, setStateData)}
          type="number"
          name="edoEntryField"
          value={stateData.edo.value}
        ></input>
        <br />
        <br />
      </div>
      <EDOReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
