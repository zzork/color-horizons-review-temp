const createTremoloIntensityNode = (synth, tremoloNode) => {
  const tremoloIntensityNode = synth.createGain();
  tremoloIntensityNode.connect(tremoloNode.gain);
  return tremoloIntensityNode;
};

export default createTremoloIntensityNode;
