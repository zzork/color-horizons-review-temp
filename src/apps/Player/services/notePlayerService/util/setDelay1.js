const setDelay1 = (playerState, delay1, delay1GainNode) => {
  delay1.delayTime.value = playerState.delay1Time / 1000;
  delay1GainNode.gain.value = playerState.delay1Feedback / 100;
};

export default setDelay1;
