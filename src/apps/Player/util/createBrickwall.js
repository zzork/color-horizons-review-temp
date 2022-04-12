const createBrickwall = (synth, masterVolumeNode, oscilloscopeAnalyser) => {
  const brickwall = synth.createDynamicsCompressor();
  brickwall.threshold.setValueAtTime(-30, synth.currentTime);
  brickwall.knee.setValueAtTime(40, synth.currentTime);
  brickwall.ratio.setValueAtTime(12, synth.currentTime);
  brickwall.attack.setValueAtTime(0, synth.currentTime);
  brickwall.release.setValueAtTime(0.25, synth.currentTime);
  brickwall.connect(masterVolumeNode);
  brickwall.connect(oscilloscopeAnalyser);
  return brickwall;
};

export default createBrickwall;
