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
  document.getElementById("engage").focus({ preventScroll: true });
};
