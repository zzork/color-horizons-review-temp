import { handleLtbcChange } from "./ltbcEventHandlers";
import { LTBCReadout } from "./LTBCReadout";
import getGranularitySettings from "./util/getGranularitySettings";

export const LTByCents = ({ stateData, setStateData }) => {
  const granularitySettings = getGranularitySettings(
    stateData.linearTemperamentByCents.granularity
  );

  return (
    <div>
      <h2>Linear Temperament by Cents</h2>
      <p>
        Generator:{" "}
        <input
          onChange={(event) => handleLtbcChange(event, stateData, setStateData)}
          type="number"
          step={granularitySettings[1]}
          name="ltGeneratorEntryField"
          value={stateData.linearTemperamentByCents.generator}
        ></input>
      </p>
      <LTBCReadout
        stateData={stateData}
        setStateData={setStateData}
        granularityFixValue={granularitySettings[0]}
      />
    </div>
  );
};
