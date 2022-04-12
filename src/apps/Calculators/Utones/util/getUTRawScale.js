const getUTRawScale = (denominator, start, stop, progression) => {
  const scale = [];
  const loopLength = stop - start;
  for (let i = 0; i <= loopLength; i += progression) {
    scale.push([denominator, start + i]);
  }

  return scale;
};

export default getUTRawScale;
