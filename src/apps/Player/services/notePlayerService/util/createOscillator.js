const createOscillator = (synth, gainNode, hzValue, playerState) => {
  const oscillator = synth.createOscillator();
  oscillator.type = playerState.oscillatorType;
  oscillator.frequency.setValueAtTime(hzValue, synth.currentTime);
  oscillator.connect(gainNode);

  if (playerState.pitchVibratoOn) {
    const pitchVibratoDepth = synth.createGain();
    pitchVibratoDepth.gain.value = playerState.pitchVibratoDepth;
    pitchVibratoDepth.connect(oscillator.detune);

    const pitchVibrato = synth.createOscillator();
    pitchVibrato.frequency.value = playerState.pitchVibratoSpeed / 1000; // speed
    pitchVibrato.start();
    pitchVibrato.connect(pitchVibratoDepth);
  }
  return oscillator;
};

export default createOscillator;
