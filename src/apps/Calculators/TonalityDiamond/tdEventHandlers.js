export const handleTdAllOtUtClick = (allOtUt, stateData, setStateData) => {
  let newState = {
    ...stateData,
    tonalityDiamond: {
      ...stateData.tonalityDiamond,
      allOtUt,
    },
  };
  setStateData(newState);
};

export const handleTdNumbersClick = (value, stateData, setStateData) => {
  const checked = stateData.tonalityDiamond.numbers;
  if (checked.includes(value)) {
    let newNumbers = checked;
    newNumbers.splice(newNumbers.indexOf(value), 1);

    let newState = {
      ...stateData,
      tonalityDiamond: {
        ...stateData.tonalityDiamond,
        numbers: newNumbers,
      },
    };
    setStateData(newState);
  } else {
    let newNumbers = checked;
    newNumbers.push(value);
    newNumbers.sort((a, b) => a - b);

    let newState = {
      ...stateData,
      tonalityDiamond: {
        ...stateData.tonalityDiamond,
        numbers: newNumbers,
      },
    };
    setStateData(newState);
  }
};

export const handleTdRefreshClick = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    tonalityDiamond: {
      ...stateData.tonalityDiamond,
      numbers: [],
    },
  };
  setStateData(newState);
};

export const handleTdRawEquivalentClick = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    tonalityDiamond: {
      ...stateData.tonalityDiamond,
      showEquivalent: !stateData.tonalityDiamond.showEquivalent,
    },
  };
  setStateData(newState);
};
