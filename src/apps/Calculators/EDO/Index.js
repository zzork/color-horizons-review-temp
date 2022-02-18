import { useState } from "react";
import { EdoInfo } from "../infoButtons";
import { handleEdoChange } from "./edoEventHandlers";
import { EDOReadout } from "./EDOReadout";

export const EDO = ({ stateData, setStateData }) => {
  const [showEdoInfo, setShowEdoInfo] = useState(false);
  //
  return (
    <div>
      <h2>
        Equal Division of the Octave{" "}
        <button
          className="infoButton"
          onClick={() => setShowEdoInfo(!showEdoInfo)}
        >
          info
        </button>
        {/* // */}
      </h2>
      {showEdoInfo && <EdoInfo setShowEdoInfo={setShowEdoInfo} />}
      {/* // */}
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
