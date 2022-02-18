import { useState } from "react";
import { AxbyInfo } from "../infoButtons";
import { handleAxByChange } from "./axByEventHandlers";
import { AxByReadout } from "./AxByReadout";

export const AxByEqualsP = ({ stateData, setStateData }) => {
  const [showAxbyInfo, setShowAxbyInfo] = useState(false);
  return (
    <div>
      <h2>
        ax+by=p{" "}
        <button
          className="infoButton"
          onClick={() => setShowAxbyInfo(!showAxbyInfo)}
        >
          info
        </button>
      </h2>
      {showAxbyInfo && <AxbyInfo setShowAxbyInfo={setShowAxbyInfo} />}
      <div className="tableClone">
        <p>
          First Interval Steps:{" "}
          <input
            onChange={(event) =>
              handleAxByChange(event, stateData, setStateData)
            }
            type="number"
            name="axBy1StepsEntryField"
            value={stateData.axByEqualsP.firstSteps}
          ></input>
        </p>
        <p>
          First Interval Cents:{" "}
          <input
            onChange={(event) =>
              handleAxByChange(event, stateData, setStateData)
            }
            type="number"
            name="axBy1CentsEntryField"
            value={stateData.axByEqualsP.firstCents}
          ></input>
        </p>
      </div>
      <AxByReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
