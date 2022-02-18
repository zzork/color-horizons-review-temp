import { useState } from "react";
import { IpInfo } from "../infoButtons";
import { handleIPChange } from "./ipEventHandlers";
import { IPReadout } from "./IPReadout";

export const IntervalPattern = ({ stateData, setStateData }) => {
  const [showIpInfo, setShowIpInfo] = useState(false);
  return (
    <div>
      <div>
        <h2>
          Interval Pattern{" "}
          <button
            className="infoButton"
            onClick={() => setShowIpInfo(!showIpInfo)}
          >
            info
          </button>
        </h2>
        {showIpInfo && <IpInfo setShowIpInfo={setShowIpInfo} />}
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
