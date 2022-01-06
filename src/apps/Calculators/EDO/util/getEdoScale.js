const getEdoScale = (edo, stepSize) => {
  const scale = [];
  for (let i = 0; i <= edo; i++) {
    let decimalFixed = i * stepSize;
    scale.push(decimalFixed);
  }
  return scale;
};

export default getEdoScale;
