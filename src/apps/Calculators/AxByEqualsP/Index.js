import { AxbyInfo } from "../infoButtons";
import { setShowAxbyInfo } from "../infoEventHandlers";
import { handleAxByChange } from "./axByEventHandlers";
import { AxByReadout } from "./AxByReadout";

export const AxByEqualsP = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>
        ax+by=p{" "}
        <button
          className="infoButton"
          onClick={() => setShowAxbyInfo(stateData, setStateData)}
        >
          info
        </button>
      </h2>
      {stateData.axByEqualsP.showInfo && (
        <AxbyInfo stateData={stateData} setStateData={setStateData} />
      )}
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
