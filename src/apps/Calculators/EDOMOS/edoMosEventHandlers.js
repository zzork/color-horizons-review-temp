export const handleEdoMosChange = (event, stateData, setStateData) => {
  let fieldReader = event.target.name;
  let newValue = event.target.value;

  if (fieldReader === "edomosEDOEntryField") {
    let newState = {
      ...stateData,
      edoMos: {
        ...stateData.edoMos,
        edo: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "edomosStepEntryField") {
    let newState = {
      ...stateData,
      edoMos: {
        ...stateData.edoMos,
        step: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "edomosNoteTotalField") {
    let newState = {
      ...stateData,
      edoMos: {
        ...stateData.edoMos,
        noteTotal: newValue,
      },
    };
    setStateData(newState);
  }
};

export const handleEdoMosMosClick = (value, stateData, setStateData) => {
  let newState = {
    ...stateData,
    edoMos: {
      ...stateData.edoMos,
      noteTotal: value,
    },
  };
  setStateData(newState);
};
