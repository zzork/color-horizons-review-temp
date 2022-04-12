const getLTScaleFromCents = (generator, noteAmount) => {
  let scale = [];

  scale.push(1200);

  for (let i = 0; i < noteAmount; i++) {
    let centsValue = i * generator;
    while (centsValue > 1200) {
      centsValue -= 1200;
    }
    if (!scale.includes(centsValue)) {
      scale.push(centsValue);
    }
  }

  scale.sort((a, b) => a - b);

  return scale;
};

export default getLTScaleFromCents;
