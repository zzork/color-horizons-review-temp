import { TDAllModes } from "./TDAllModes";
import TDTable from "./TDTable";
import getTDRatios from "./util/getTDRatios";
import getTDScale from "./util/getTDScale";

const TDReadout = ({
  checked,
  allOtUt,
  sclData,
  showEquivalent,
  selectedComparison,
  handleSetPlayerClick,
  handleAllOtUtClick,
  handleRawEquivalentClick,
  stateData,
}) => {
  const isValidState = () => {
    return checked.length > 1;
  };
  if (!isValidState()) {
    return <InvalidState checked={checked} />;
  }

  // returns list of 3 arrays, whole td/overtones only/undertones only
  const tonalityDiamondRatios = getTDRatios(checked);
  const scale = getTDScale(tonalityDiamondRatios, allOtUt);

  const scaleDisplay = scale.map((value) => (
    <td>
      {value[0]}/{value[1]}
    </td>
  ));

  return (
    <div>
      <p>
        <button onClick={() => handleAllOtUtClick("all")}>All</button>
        <button onClick={() => handleAllOtUtClick("ot")}>Overtones</button>
        <button onClick={() => handleAllOtUtClick("ut")}>Undertones</button>
      </p>
      <p>
        <button onClick={() => handleRawEquivalentClick()}>
          Raw / Equivalent Values
        </button>
      </p>
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
        handleSetPlayerClick={handleSetPlayerClick}
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
      <p>At Least Two Parameters Must Be Selected</p>
      <p>Currently Selected: {checkedDisplay}</p>
    </div>
  );
};
