import { OTAllModes } from "../OTShared/OTAllModes";
import TDReadout from "./TDReadout";
import TDTable from "./TDTable";
import getTDRatios from "./util/getTDRatios";
import getTDScale from "./util/getTDScale";

export const TonalityDiamond = ({
  stateData,
  setStateData,
  selectedComparison,
}) => {
  const checked = stateData[6].numbers;
  const allOtUt = stateData[6].allOtUt;
  const showEquivalent = stateData[6].showEquivalent;

  if (checked.length < 2) {
    return <div>At Least Two Parameters Must Be Selected</div>;
  }

  const handleAllOtUtClick = (allOtUt) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "g") {
        return {
          ...stateTableRow,
          allOtUt: allOtUt,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  const handleNumbersClick = (value) => {
    if (checked.includes(value)) {
      let newNumbers = checked;
      newNumbers.splice(newNumbers.indexOf(value), 1);

      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "g") {
          return {
            ...stateTableRow,
            numbers: newNumbers,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    } else {
      let newNumbers = checked;
      newNumbers.push(value);
      newNumbers.sort((a, b) => a - b);
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "g") {
          return {
            ...stateTableRow,
            numbers: newNumbers,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }
  };

  const handleRawEquivalentClick = () => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "g") {
        return {
          ...stateTableRow,
          showEquivalent: !stateData[6].showEquivalent,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  // // returns list of 3 arrays, whole td/overtones only/undertones only
  // const tonalityDiamondRatios = getTDRatios(checked);
  // const scale = getTDScale(tonalityDiamondRatios, allOtUt);

  const numbersButtons = [];
  for (let i = 1; i < 26; i += 2) {
    numbersButtons.push(i);
  }

  const numbersClickButtons = numbersButtons.map((number) => (
    <button onClick={() => handleNumbersClick(number)}>{number}</button>
  ));

  return (
    <div>
      <h2>Tonality Diamond</h2>
      <p>{numbersClickButtons}</p>
      <TDReadout
        checked={checked}
        allOtUt={allOtUt}
        showEquivalent={showEquivalent}
        selectedComparison={selectedComparison}
        handleAllOtUtClick={handleAllOtUtClick}
        handleRawEquivalentClick={handleRawEquivalentClick}
      />
    </div>
  );
};
