import getGranularitySettings from "./util/getGranularitySettings";

export const handleLtbcChange = (event, stateData, setStateData) => {
  let fieldReader = event.target.name;
  let newValue = event.target.value;

  if (fieldReader === "ltGeneratorEntryField") {
    let newState = {
      ...stateData,
      linearTemperamentByCents: {
        ...stateData.linearTemperamentByCents,
        generator: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "ltbcNoteTotalEntryField") {
    let newState = {
      ...stateData,
      linearTemperamentByCents: {
        ...stateData.linearTemperamentByCents,
        noteTotal: newValue,
      },
    };
    setStateData(newState);
  }
};

export const handleGranularityClick = (
  newGranularity,
  stateData,
  setStateData
) => {
  let fixValue = getGranularitySettings(newGranularity)[0];
  let newGenerator = Number(
    stateData.linearTemperamentByCents.generator
  ).toFixed(fixValue);
  let newState = {
    ...stateData,
    linearTemperamentByCents: {
      ...stateData.linearTemperamentByCents,
      granularity: newGranularity,
      generator: newGenerator,
    },
  };
  setStateData(newState);
};

export const handleLtbcInvertClick = (
  invertedGenerator,
  stateData,
  setStateData
) => {
  let newState = {
    ...stateData,
    linearTemperamentByCents: {
      ...stateData.linearTemperamentByCents,
      generator: invertedGenerator,
    },
  };
  setStateData(newState);
};

export const handleLtbcMOSClick = (value, stateData, setStateData) => {
  let newState = {
    ...stateData,
    linearTemperamentByCents: {
      ...stateData.linearTemperamentByCents,
      noteTotal: value,
    },
  };
  setStateData(newState);
};
