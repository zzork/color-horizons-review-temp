import TDTable from "./TDTable";
import getTDRatios from "./util/getTDRatios";

export const TonalityDiamond = ({
  stateData,
  setStateData,
  selectedComparison,
}) => {
  let checked = [1, 3, 5, 7];

  // returns list of 3 arrays, whole td/overtones only/undertones only
  let tonalityDiamondRatios = getTDRatios(checked);

  return (
    <div>
      <h2>Tonality Diamond</h2>
      <p>1[x] 3[x] 5[x] 7[x] 9[] 11[] 13[] 15[] 17[] 19[]</p>
      <p>All [x], Overtones Only [], Undertones Only[]</p>
      <p>Show Equivalent Values []</p>
      <TDTable checked={checked} />
    </div>
  );
};
