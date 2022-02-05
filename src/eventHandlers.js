// app.js

export const handleShowPlayerClick = (stateData, setStateData) => {
  let newShowPlayer = !stateData.player.showPlayer;
  let newState = {
    ...stateData,
    player: {
      ...stateData.player,
      showPlayer: newShowPlayer,
    },
  };
  setStateData(newState);
};

// selector component

export const handleScaleGenerationMethodClick = (
  viewId,
  stateData,
  setStateData
) => {
  let newState = {
    ...stateData,
    selectedTool: {
      ...stateData.selectedTool,
      tool: viewId,
    },
  };
  setStateData(newState);
};

// comparison options component

export const handleComparisonSelect = (
  comparisonId,
  stateData,
  setStateData
) => {
  let newState = {
    ...stateData,
    comparisonWindow: {
      ...stateData.comparisonWindow,
      comparison: comparisonId,
    },
  };
  setStateData(newState);
};

// ALSO IN COMPARISON OPTIONS, FOLLOW THIS FORMULA TO EXTRACT NO PARENS HANDLERS!

export const handleApproximationEntry = (event, stateData, setStateData) => {
  if (event.target.name === "closeApproximation") {
    let newValue = Number(event.target.value);
    let newState = {
      ...stateData,
      comparisonWindow: {
        ...stateData.comparisonWindow,
        closeApproximation: newValue,
      },
    };
    setStateData(newState);
  }

  if (event.target.name === "approximationBoundary") {
    let newValue = Number(event.target.value);
    let newState = {
      ...stateData,
      comparisonWindow: {
        ...stateData.comparisonWindow,
        approximationBoundary: newValue,
      },
    };
    setStateData(newState);
  }
};

// passed to player and all scale generation methods via handleSetPlayerClick below

export const enableQwerty = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    player: {
      ...stateData.player,
      active: true,
    },
  };
  setStateData(newState);
};

export const disableQwerty = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    player: {
      ...stateData.player,
      active: false,
    },
  };
  setStateData(newState);
};

export const reverseQwerty = (stateData, setStateData) => {
  let active = stateData.player.active;
  let newState = {
    ...stateData,
    player: {
      ...stateData.player,
      active: !active,
    },
  };
  setStateData(newState);
};

// all scale generation methods

export const handleSetPlayerClick = (stateData, setStateData, playerData) => {
  let newState = {
    ...stateData,
    player: {
      ...stateData.player,
      playerData: playerData,
      active: true,
    },
  };
  setStateData(newState);
};
