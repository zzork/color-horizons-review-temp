import { handleOtChange } from "./otEventHandlers";
import { OTReadout } from "./OTReadout";

export const Otones = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Otonal Scale</h2>
      <p>
        Denominator:{" "}
        <input
          onChange={(event) => handleOtChange(event, stateData, setStateData)}
          type="number"
          name="otDenominatorEntryField"
          value={stateData.otones.denominator}
        ></input>
        <br />
        Start:{" "}
        <input
          onChange={(event) => handleOtChange(event, stateData, setStateData)}
          type="number"
          name="otStartEntryField"
          value={stateData.otones.start}
        ></input>
        <br />
        Stop:{" "}
        <input
          onChange={(event) => handleOtChange(event, stateData, setStateData)}
          type="number"
          name="otStopEntryField"
          value={stateData.otones.stop}
        ></input>
        <br />
        Progression:{" "}
        <input
          onChange={(event) => handleOtChange(event, stateData, setStateData)}
          type="number"
          name="otProgressionEntryField"
          value={stateData.otones.progression}
        ></input>
      </p>
      <OTReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
