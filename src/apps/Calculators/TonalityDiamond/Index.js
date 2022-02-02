import TDReadout from "./TDReadout";

export const TonalityDiamond = ({
  stateData,
  setStateData,
  handleSetPlayerClick,
}) => {
  const checked = stateData[6].numbers;
  const allOtUt = stateData[6].allOtUt;
  const showEquivalent = stateData[6].showEquivalent;

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

  const handleRefreshClick = () => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "g") {
        return {
          ...stateTableRow,
          numbers: [],
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
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

  const numbersButtons = [];
  for (let i = 1; i < 26; i += 2) {
    numbersButtons.push(i);
  }

  const numbersClickButtons = numbersButtons.map((number) => (
    <button onClick={() => handleNumbersClick(number)}>{number}</button>
  ));

  let allOtUtReadout = null;
  if (allOtUt === "all") {
    allOtUtReadout = "All";
  }
  if (allOtUt === "ot") {
    allOtUtReadout = "Overtones";
  }
  if (allOtUt === "ut") {
    allOtUtReadout = "Undertones";
  }
  const checkedReadout = checked.join("-");

  const sclData = [allOtUtReadout, checkedReadout];

  return (
    <div>
      <h2>Tonality Diamond</h2>
      <p>
        {numbersClickButtons}
        <br />
        <button onClick={() => handleRefreshClick()}>Clear</button>
      </p>
      <TDReadout
        checked={checked}
        allOtUt={allOtUt}
        sclData={sclData}
        showEquivalent={showEquivalent}
        stateData={stateData}
        setStateData={setStateData}
        handleAllOtUtClick={handleAllOtUtClick}
        handleRawEquivalentClick={handleRawEquivalentClick}
      />
    </div>
  );
};
