const createDistortionNode = (synth, tremoloNode) => {
  const distortionNode = synth.createWaveShaper();
  distortionNode.oversample = "4x";
  distortionNode.connect(tremoloNode);
  return distortionNode;
};

export default createDistortionNode;
