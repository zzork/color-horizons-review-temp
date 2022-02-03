// app.js

import focusPlayer from "./apps/Player/util/focusPlayer";

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

// all scale generation methods

export const handleSetPlayerClick = (stateData, setStateData, playerData) => {
  let newState = stateData.map((stateTableRow) => {
    if (stateTableRow.id === "j") {
      return {
        ...stateTableRow,
        playerData: playerData,
      };
    }
    return stateTableRow;
  });
  setStateData(newState);
  focusPlayer();
};
