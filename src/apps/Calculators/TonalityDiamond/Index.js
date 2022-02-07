import { handleTdRefreshClick } from "./tdEventHandlers";
import TDNumbersClickButtons from "./TDNumbersClickButtons";
import TDReadout from "./TDReadout";

export const TonalityDiamond = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Tonality Diamond</h2>
      <p>
        <TDNumbersClickButtons
          stateData={stateData}
          setStateData={setStateData}
        />
        <br />
        <button onClick={() => handleTdRefreshClick(stateData, setStateData)}>
          Clear
        </button>
      </p>
      <TDReadout stateData={stateData} setStateData={setStateData} />
    </div>
  );
};
