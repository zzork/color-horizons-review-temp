export const handleLtbrChange = (event, stateData, setStateData) => {
  let fieldReader = event.target.name;
  let newValue = event.target.value;

  if (fieldReader === "ltNumeratorEntryField") {
    let newState = {
      ...stateData,
      linearTemperamentByRatio: {
        ...stateData.linearTemperamentByRatio,
        numerator: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "ltDenominatorEntryField") {
    let newState = {
      ...stateData,
      linearTemperamentByRatio: {
        ...stateData.linearTemperamentByRatio,
        denominator: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "ltNoteTotalEntryField") {
    let newState = {
      ...stateData,
      linearTemperamentByRatio: {
        ...stateData.linearTemperamentByRatio,
        noteTotal: newValue,
      },
    };
    setStateData(newState);
  }
};

export const handleLtbrInvertClick = (
  inverseFraction,
  stateData,
  setStateData
) => {
  let newState = {
    ...stateData,
    linearTemperamentByRatio: {
      ...stateData.linearTemperamentByRatio,
      numerator: inverseFraction[0],
      denominator: inverseFraction[1],
    },
  };
  setStateData(newState);
};

export const handleLtbrMOSClick = (value, stateData, setStateData) => {
  let newState = {
    ...stateData,
    linearTemperamentByRatio: {
      ...stateData.linearTemperamentByRatio,
      noteTotal: value,
    },
  };
  setStateData(newState);
};
