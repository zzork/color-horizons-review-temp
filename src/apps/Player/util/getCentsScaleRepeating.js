const getCentsScaleRepeating = (incomingScale) => {
  let scaleNoLast = [...incomingScale];
  scaleNoLast.pop();
  for (let i = 0; i < 4; i++) {
    scaleNoLast = scaleNoLast.concat(scaleNoLast);
  }
  const centsScaleRepeating = scaleNoLast;

  return centsScaleRepeating;
};

export default getCentsScaleRepeating;
