import { handleEdoMosChange } from "./edoMosEventHandlers";
import EDOMOSReadout from "./EDOMOSReadout";

export const EDOMOS = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Equal Division of the Octave Moments of Symmetry</h2>
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
      <EDOMOSReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
