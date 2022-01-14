import TDTable from "./TDTable";
import getTDRatios from "./util/getTDRatios";

export const TonalityDiamond = ({
  stateData,
  setStateData,
  selectedComparison,
}) => {
  const checked = stateData[6].numbers;

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

  // returns list of 3 arrays, whole td/overtones only/undertones only
  const tonalityDiamondRatios = getTDRatios(checked);

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
      <button onClick={() => handleAllOtUtClick("all")}>All</button>
      <button onClick={() => handleAllOtUtClick("ot")}>Overtones</button>
      <button onClick={() => handleAllOtUtClick("ut")}>Undertones</button>
      <p>Show Equivalent Values []</p>
      <TDTable checked={checked} />
    </div>
  );
};
