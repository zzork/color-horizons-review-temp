import { useState } from "react";
import { EdoMosInfo } from "../infoButtons";
import { handleEdoMosChange } from "./edoMosEventHandlers";
import EDOMOSReadout from "./EDOMOSReadout";

export const EDOMOS = ({ stateData, setStateData }) => {
  const [showEdoMosInfo, setShowEdoMosInfo] = useState(false);
  return (
    <div>
      <h2>
        Equal Division of the Octave Steps{" "}
        <button
          className="infoButton"
          onClick={() => setShowEdoMosInfo(!showEdoMosInfo)}
        >
          info
        </button>
      </h2>
      {showEdoMosInfo && <EdoMosInfo setShowEdoMosInfo={setShowEdoMosInfo} />}
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
