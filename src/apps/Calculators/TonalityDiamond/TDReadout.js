import { TDAllModes } from "./TDAllModes";
import {
  handleTdAllOtUtClick,
  handleTdRawEquivalentClick,
} from "./tdEventHandlers";
import TDTable from "./TDTable";
import getAllOtUtReadout from "./util/getAllOtUtReadout";
import getTDRatios from "./util/getTDRatios";
import getTDScale from "./util/getTDScale";

const TDReadout = ({ stateData, setStateData }) => {
  const checked = stateData.tonalityDiamond.numbers;

  const isValidState = () => {
    return checked.length > 1;
  };
  if (!isValidState()) {
    return <InvalidState checked={checked} />;
  }

  const allOtUt = stateData.tonalityDiamond.allOtUt;
  const showEquivalent = stateData.tonalityDiamond.showEquivalent;
  const allOtUtReadout = getAllOtUtReadout(allOtUt);
  const checkedReadout = checked.join("-");
  const sclData = [allOtUtReadout, checkedReadout];
  const tonalityDiamondRatios = getTDRatios(checked);
  const scale = getTDScale(tonalityDiamondRatios, allOtUt);
  const scaleDisplay = scale.map((value) => (
    <td>
      {value[0]}/{value[1]}
    </td>
  ));

  return (
    <div>
      <br />
      <div className="tableClone">
        <p>
          <button
            onClick={() => handleTdAllOtUtClick("all", stateData, setStateData)}
          >
            All
          </button>
          <button
            onClick={() => handleTdAllOtUtClick("ot", stateData, setStateData)}
          >
            Overtones
          </button>
          <button
            onClick={() => handleTdAllOtUtClick("ut", stateData, setStateData)}
          >
            Undertones
          </button>
        </p>
      </div>
      <p>
        <button
          onClick={() => handleTdRawEquivalentClick(stateData, setStateData)}
        >
          {showEquivalent ? "Show Raw Values" : "Show Equivalent Values"}
        </button>
      </p>
      <h4>{showEquivalent ? "Equivalent Values" : "Raw Values"}</h4>

      <TDTable
        checked={checked}
        allOtUt={allOtUt}
        showEquivalent={showEquivalent}
      />
      <h4>
        <table>
          <tbody>
            <tr>{scaleDisplay}</tr>
          </tbody>
        </table>
      </h4>
      <TDAllModes
        scale={scale}
        sclData={sclData}
        stateData={stateData}
        setStateData={setStateData}
      />
    </div>
  );
};

export default TDReadout;

const InvalidState = ({ checked }) => {
  let checkedDisplay = [...checked]; // WHY DOES THIS NEED TO BE SPREAD?
  if (checkedDisplay.length === 0) {
    checkedDisplay = "None";
  }
  return (
    <div>
      <br />
      <div className="tableClone">
        <p>At Least Two Parameters Must Be Selected</p>
        <p>Currently Selected: {checkedDisplay}</p>
      </div>
    </div>
  );
};
