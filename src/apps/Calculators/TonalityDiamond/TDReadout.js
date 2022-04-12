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
    return checked.length > 1 && checked.length < 6;
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
  const scaleDisplay = scale.map((value, index) => (
    <td key={index}>
      {value[0]}/{value[1]}
    </td>
  ));

  return (
    <div>
      <br />
      <div className="tableClone">
        <p>
          <button
            className="mb"
            onClick={() => handleTdAllOtUtClick("all", stateData, setStateData)}
          >
            All
          </button>
          <button
            className="mb"
            onClick={() => handleTdAllOtUtClick("ot", stateData, setStateData)}
          >
            Overtones
          </button>
          <button
            className="mb"
            onClick={() => handleTdAllOtUtClick("ut", stateData, setStateData)}
          >
            Undertones
          </button>
        </p>
      </div>
      <p>
        <button
          className="mb"
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
  let checkedDisplay = [...checked];
  checkedDisplay = checkedDisplay.join(", ");
  if (checkedDisplay.length === 0) {
    checkedDisplay = "None";
  }
  return (
    <div>
      <br />
      <div className="tableClone">
        <p>Selection Must Be Between Two and Five Parameters</p>
        <p>Currently Selected: {checkedDisplay}</p>
      </div>
    </div>
  );
};
