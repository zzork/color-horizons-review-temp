import focusPlayer from "./apps/Player/util/focusPlayer";

// app.js

export const handleShowPlayerClick = (stateData, setStateData) => {
  let newState = stateData.map((stateTableRow) => {
    let showPlayer = !stateData[9].showPlayer;
    if (stateTableRow.id === "j") {
      return {
        ...stateTableRow,
        showPlayer: showPlayer,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
};

// selector component

export const handleScaleGenerationMethodClick = (
  viewId,
  stateData,
  setStateData
) => {
  let newState = stateData.map((stateTableRow) => {
    if (stateTableRow.id === "l") {
      return {
        ...stateTableRow,
        tool: viewId,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
};

// comparison options component

export const handleComparisonSelect = (
  comparisonId,
  stateData,
  setStateData
) => {
  let newState = stateData.map((stateTableRow) => {
    if (stateTableRow.id === "k") {
      return {
        ...stateTableRow,
        comparison: comparisonId,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
};

// ALSO IN COMPARISON OPTIONS, FOLLOW THIS FORMULA TO EXTRACT NO PARENS HANDLERS!

export const handleApproximationEntry = (event, stateData, setStateData) => {
  if (event.target.name === "closeApproximation") {
    let newValue = Number(event.target.value);
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "k") {
        return {
          ...stateTableRow,
          closeApproximation: newValue,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  }

  if (event.target.name === "approximationBoundary") {
    let newValue = Number(event.target.value);
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "k") {
        return {
          ...stateTableRow,
          approximationBoundary: newValue,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  }
};

// passed to player and all scale generation methods via handleSetPlayerClick below

export const enableQwerty = (stateData, setStateData) => {
  let newState = stateData.map((stateTableRow) => {
    if (stateTableRow.id === "j") {
      return {
        ...stateTableRow,
        active: true,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
};

export const disableQwerty = (stateData, setStateData) => {
  let newState = stateData.map((stateTableRow) => {
    if (stateTableRow.id === "j") {
      return {
        ...stateTableRow,
        active: false,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
};

export const reverseQwerty = (stateData, setStateData) => {
  let active = stateData[9].active;
  let newState = stateData.map((stateTableRow) => {
    if (stateTableRow.id === "j") {
      return {
        ...stateTableRow,
        active: !active,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
};

// all scale generation methods

export const handleSetPlayerClick = (stateData, setStateData, playerData) => {
  let newState = stateData.map((stateTableRow) => {
    if (stateTableRow.id === "j") {
      return {
        ...stateTableRow,
        playerData: playerData,
        active: true,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
};
