import { handleAxByChange } from "./axByEventHandlers";
import { AxByReadout } from "./AxByReadout";

export const AxByEqualsP = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>ax+by=p</h2>
      <p>
        First Interval Steps:{" "}
        <input
          onChange={(event) => handleAxByChange(event, stateData, setStateData)}
          type="number"
          name="axBy1StepsEntryField"
          value={stateData.axByEqualsP.firstSteps}
        ></input>
      </p>
      <p>
        First Interval Cents:{" "}
        <input
          onChange={(event) => handleAxByChange(event, stateData, setStateData)}
          type="number"
          name="axBy1CentsEntryField"
          value={stateData.axByEqualsP.firstCents}
        ></input>
      </p>
      <AxByReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
