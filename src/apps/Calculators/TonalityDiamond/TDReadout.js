import { OTAllModes } from "../OTShared/OTAllModes";
import TDTable from "./TDTable";
import getTDRatios from "./util/getTDRatios";
import getTDScale from "./util/getTDScale";

const TDReadout = ({
  checked,
  allOtUt,
  showEquivalent,
  selectedComparison,
  handleAllOtUtClick,
  handleRawEquivalentClick,
}) => {
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
      <OTAllModes scale={scale} selectedComparison={selectedComparison} />
    </div>
  );
};

export default TDReadout;
