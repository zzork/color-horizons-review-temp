const getLTScaleFromCents = (generator, noteAmount) => {
  let scale = [];

  for (let i = 0; i < noteAmount; i++) {
    let centsValue = i * generator;
    while (centsValue > 1200) {
      centsValue -= 1200;
    }
    scale.push(centsValue);
  }

  scale.push(1200);

  scale.sort((a, b) => a - b);

  return scale;
};

export default getLTScaleFromCents;
