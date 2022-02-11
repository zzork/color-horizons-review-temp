import { handleIPChange } from "./ipEventHandlers";
import { IPReadout } from "./IPReadout";

export const IntervalPattern = ({ stateData, setStateData }) => {
  return (
    <div>
      <div>
        <h2>Interval Pattern</h2>
        <div className="tableClone">
          <br />
          <input
            onChange={(event) => handleIPChange(event, stateData, setStateData)}
            name="intervalPatternEntryField"
            value={stateData.intervalPattern.inputPatternDisplay}
          ></input>
          <br />
          <p>
            <i>
              <font size="2">Enclose Values Greater than 9 in Parentheses</font>
            </i>
          </p>
        </div>
      </div>
      <div>
        <p></p>
        <IPReadout stateData={stateData} setStateData={setStateData} />
      </div>
    </div>
  );
};
