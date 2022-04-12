const getOTRawScale = (denominator, start, stop, progression) => {
  const scale = [];
  const loopLength = stop - start;
  for (let i = 0; i <= loopLength; i += progression) {
    scale.push([start + i, denominator]);
  }

  return scale;
};

export default getOTRawScale;
