const createMasterVolumeNode = (synth) => {
  const masterVolumeNode = synth.createGain();
  masterVolumeNode.connect(synth.destination);
  return masterVolumeNode;
};

export default createMasterVolumeNode;
