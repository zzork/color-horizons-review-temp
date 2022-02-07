import { handleUtChange } from "./utEventHandlers";
import { UTReadout } from "./UTReadout";

export const Utones = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Utonal Scale</h2>
      <p>
        Numerator:{" "}
        <input
          onChange={(event) => handleUtChange(event, stateData, setStateData)}
          type="number"
          name="utNumeratorEntryField"
          value={stateData.utones.numerator}
        ></input>
        <br />
        Start:{" "}
        <input
          onChange={(event) => handleUtChange(event, stateData, setStateData)}
          type="number"
          name="utStartEntryField"
          value={stateData.utones.start}
        ></input>
        <br />
        Stop:{" "}
        <input
          onChange={(event) => handleUtChange(event, stateData, setStateData)}
          type="number"
          name="utStopEntryField"
          value={stateData.utones.stop}
        ></input>
        <br />
        Progression:{" "}
        <input
          onChange={(event) => handleUtChange(event, stateData, setStateData)}
          type="number"
          name="utProgressionEntryField"
          value={stateData.utones.progression}
        ></input>
      </p>
      <UTReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
