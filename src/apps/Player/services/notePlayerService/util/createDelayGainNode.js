const createDelayGainNode = (synth, brickwall) => {
  const delayGainNode = synth.createGain();
  delayGainNode.gain.value = 0.5;
  delayGainNode.connect(brickwall);
  return delayGainNode;
};
export default createDelayGainNode;
