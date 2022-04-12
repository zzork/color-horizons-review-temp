const createDelayNode = (synth, delayGainNode) => {
  const delayNode = synth.createDelay(10);
  delayNode.connect(delayGainNode);
  return delayNode;
};

export default createDelayNode;
