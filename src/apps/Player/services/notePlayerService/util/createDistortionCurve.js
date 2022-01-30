const createDistortionCurve = (amount) => {
  const sampleRate = 11025;
  const curve = new Float32Array(sampleRate);
  const deg = Math.PI / 180;
  for (let i = 0; i < sampleRate; i++) {
    let x = (i * 2) / sampleRate - 1;
    curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
  }
  return curve;
};

export default createDistortionCurve;
