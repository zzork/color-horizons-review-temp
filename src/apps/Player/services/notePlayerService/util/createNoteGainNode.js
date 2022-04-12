const createNoteGainNode = (
  synth,
  playerState,
  multiPlay,
  distortionNode,
  tremoloNode
) => {
  let instanceVolume = 0.3;
  if (multiPlay === true) {
    instanceVolume = 0.225;
  }
  const gainNode = synth.createGain();
  gainNode.gain.setValueAtTime(0.00001, synth.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    instanceVolume,
    synth.currentTime + playerState.attackTime / 1000
  );

  if (playerState.distortion > 0) {
    gainNode.connect(distortionNode);
  }
  gainNode.connect(tremoloNode);
  return gainNode;
};

export default createNoteGainNode;
