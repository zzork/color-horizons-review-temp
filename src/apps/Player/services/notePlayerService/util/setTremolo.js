const setTremolo = (
  playerState,
  tremoloNode,
  tremoloSpeedNode,
  tremoloIntensityNode,
  delay1,
  delay2
) => {
  tremoloSpeedNode.frequency.value = playerState.tremoloSpeed;
  if (playerState.tremoloOn) {
    tremoloIntensityNode.gain.value = playerState.tremoloIntensity / 100;
  } else {
    tremoloIntensityNode.gain.value = 0;
  }
  if (playerState.delay1On && playerState.delay2On) {
    tremoloNode.connect(delay1);
    tremoloNode.connect(delay2);
  } else if (playerState.delay2On) {
    tremoloNode.connect(delay1);
    tremoloNode.connect(delay2);
    tremoloNode.disconnect(delay1);
  } else if (playerState.delay1On) {
    tremoloNode.connect(delay1);
    tremoloNode.connect(delay2);
    tremoloNode.disconnect(delay2);
  } else if (!playerState.delay1On && !playerState.delay2On) {
    tremoloNode.connect(delay1);
    tremoloNode.connect(delay2);
    tremoloNode.disconnect(delay1);
    tremoloNode.disconnect(delay2);
  }
};

export default setTremolo;
