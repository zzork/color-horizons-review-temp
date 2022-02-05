export const handleChordsSinglesClick = (
  event,
  playerState,
  setPlayerState
) => {
  let newState = { ...playerState, chordsOrSingles: event.target.name };
  setPlayerState(newState);
};

export const handleTypeClick = (event, playerState, setPlayerState) => {
  let newState = { ...playerState, oscillatorType: event.target.name };
  setPlayerState(newState);
};
