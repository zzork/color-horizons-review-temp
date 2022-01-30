const setMasterVolumeStep2 = (playerState, synth, masterVolumeNode) => {
  let adjustedVolume = 0;
  if (playerState.masterVolume > 0) {
    adjustedVolume = playerState.masterVolume / 100;
  }
  masterVolumeNode.gain.setValueAtTime(adjustedVolume, synth.currentTime);
};

export default setMasterVolumeStep2;
