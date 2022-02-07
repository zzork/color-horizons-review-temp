export const handleOtChange = (event, stateData, setStateData) => {
  let fieldReader = event.target.name;
  let newValue = event.target.value;

  if (fieldReader === "otDenominatorEntryField") {
    let newState = {
      ...stateData,
      otones: {
        ...stateData.otones,
        denominator: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "otStartEntryField") {
    let newState = {
      ...stateData,
      otones: {
        ...stateData.otones,
        start: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "otStopEntryField") {
    let newState = {
      ...stateData,
      otones: {
        ...stateData.otones,
        stop: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "otProgressionEntryField") {
    let newState = {
      ...stateData,
      otones: {
        ...stateData.otones,
        progression: newValue,
      },
    };
    setStateData(newState);
  }
};

export const handleOtShowEquivalent = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    otones: {
      ...stateData.otones,
      showEquivalent: !stateData.otones.showEquivalent,
    },
  };
  setStateData(newState);
};
