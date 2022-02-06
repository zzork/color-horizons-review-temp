import { handleLtbrChange } from "./ltbrEventHandlers";
import { LTBRReadout } from "./LTBRReadout";

export const LTByRatio = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Linear Temperament by Ratio</h2>
      <p>
        Numerator:{" "}
        <input
          onChange={(event) => handleLtbrChange(event, stateData, setStateData)}
          type="number"
          name="ltNumeratorEntryField"
          value={stateData.linearTemperamentByRatio.numerator}
        ></input>
      </p>
      <p>
        Denominator:{" "}
        <input
          onChange={(event) => handleLtbrChange(event, stateData, setStateData)}
          type="number"
          name="ltDenominatorEntryField"
          value={stateData.linearTemperamentByRatio.denominator}
        ></input>
      </p>
      <LTBRReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
