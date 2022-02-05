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

export const handleDelay1OnOff = (playerState, setPlayerState) => {
  let newState = { ...playerState, delay1On: !playerState.delay1On };
  setPlayerState(newState);
};
