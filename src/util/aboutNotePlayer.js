const basicSynth = new (window.AudioContext || window.webkitAudioContext)();

const masterVolume = basicSynth.createGain();
masterVolume.gain.setValueAtTime(0.3, basicSynth.currentTime);
masterVolume.connect(basicSynth.destination);

const brickwall = basicSynth.createDynamicsCompressor();
brickwall.threshold.setValueAtTime(-30, basicSynth.currentTime);
brickwall.knee.setValueAtTime(40, basicSynth.currentTime);
brickwall.ratio.setValueAtTime(12, basicSynth.currentTime);
brickwall.attack.setValueAtTime(0, basicSynth.currentTime);
brickwall.release.setValueAtTime(0.25, basicSynth.currentTime);
brickwall.connect(masterVolume);

export const basicPlay = (tones) => {
  for (const tone of tones) {
    const oscillator = basicSynth.createOscillator();
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(tone, 0);
    oscillator.start(basicSynth.currentTime);
    oscillator.stop(basicSynth.currentTime + 1.5);
    oscillator.connect(brickwall);
  }
};
