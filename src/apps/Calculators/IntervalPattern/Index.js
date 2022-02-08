import { handleIPChange } from "./ipEventHandlers";
import { IPReadout } from "./IPReadout";

export const IntervalPattern = ({ stateData, setStateData }) => {
  return (
    <div>
      <div>
        <h2>Interval Pattern</h2>
        <input
          onChange={(event) => handleIPChange(event, stateData, setStateData)}
          name="intervalPatternEntryField"
          value={stateData.intervalPattern.inputPatternDisplay}
        ></input>
      </div>
      <div>
        <p></p>
        <IPReadout stateData={stateData} setStateData={setStateData} />
      </div>
    </div>
  );
};
