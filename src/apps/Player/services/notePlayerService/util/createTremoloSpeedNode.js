const createTremoloSpeedNode = (synth, tremoloIntensityNode) => {
  const tremoloSpeedNode = synth.createOscillator();
  tremoloSpeedNode.type = "sine";
  tremoloSpeedNode.start();
  tremoloSpeedNode.connect(tremoloIntensityNode);
  return tremoloSpeedNode;
};

export default createTremoloSpeedNode;
