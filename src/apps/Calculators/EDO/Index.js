import { handleEdoChange } from "./edoEventHandlers";
import { EDOReadout } from "./EDOReadout";

export const EDO = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Equal Division of the Octave</h2>
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
