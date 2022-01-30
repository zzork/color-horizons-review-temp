const createTremoloNode = (synth, brickwall) => {
  const tremoloNode = synth.createGain();
  tremoloNode.connect(brickwall);
  return tremoloNode;
};

export default createTremoloNode;
