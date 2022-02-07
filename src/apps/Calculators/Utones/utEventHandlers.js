export const handleUtChange = (event, stateData, setStateData) => {
  let fieldReader = event.target.name;
  let newValue = event.target.value;

  if (fieldReader === "utNumeratorEntryField") {
    let newState = {
      ...stateData,
      utones: {
        ...stateData.utones,
        numerator: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "utStartEntryField") {
    let newState = {
      ...stateData,
      utones: {
        ...stateData.utones,
        start: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "utStopEntryField") {
    let newState = {
      ...stateData,
      utones: {
        ...stateData.utones,
        stop: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "utProgressionEntryField") {
    let newState = {
      ...stateData,
      utones: {
        ...stateData.utones,
        progression: newValue,
      },
    };
    setStateData(newState);
  }
};

export const handleUtShowEquivalent = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    utones: {
      ...stateData.utones,
      showEquivalent: !stateData.utones.showEquivalent,
    },
  };
  setStateData(newState);
};
