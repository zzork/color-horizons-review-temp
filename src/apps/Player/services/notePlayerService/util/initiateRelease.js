const initiateRelease = (synth, gainNode, playerState) => {
  return new Promise((resolve) => {
    gainNode.gain.setValueAtTime(gainNode.gain.value, synth.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.00001,
      synth.currentTime + playerState.releaseTime / 1000
    );
    setTimeout(() => {
      resolve("done");
    }, playerState.releaseTime + 5);
  });
};

export default initiateRelease;
