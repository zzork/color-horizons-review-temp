const setMasterVolumeStep2 = (playerState, synth, masterVolumeNode) => {
  // console.log(playerState.masterVolume);
  let adjustedVolume = 0;
  if (playerState.masterVolume >= 2) {
    adjustedVolume = playerState.masterVolume / 100;
  }
  // console.log(adjustedVolume);
  masterVolumeNode.gain.setValueAtTime(adjustedVolume, synth.currentTime);
};

export default setMasterVolumeStep2;

//jalil
