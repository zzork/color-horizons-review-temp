const getAbove22kHz = (hzScale, playerState) => {
  let above22kHz = false;
  if (playerState.chordsOrSingles === "singles" && hzScale[44] === 23999) {
    above22kHz = true;
  }
  if (playerState.chordsOrSingles === "chords" && hzScale[24] === 23999) {
    above22kHz = true;
  }
  return above22kHz;
};

export default getAbove22kHz;
