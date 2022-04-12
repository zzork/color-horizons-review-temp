const setDelay2 = (playerState, delay1, delay2, delay2GainNode) => {
  delay2.delayTime.value = playerState.delay2Time / 1000;
  delay2GainNode.gain.value = playerState.delay2Feedback / 100;
  if (playerState.delay1On && playerState.delay2On) {
    delay2GainNode.connect(delay1);
  } else {
    delay2GainNode.connect(delay1);
    delay2GainNode.disconnect(delay1);
  }
};

export default setDelay2;
