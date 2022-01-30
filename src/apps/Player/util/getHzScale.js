const getHzScale = (incomingScale, referencePitch) => {
  referencePitch /= 2;
  let scaleNoFirstOrLast = [...incomingScale];
  scaleNoFirstOrLast.shift();
  scaleNoFirstOrLast.pop();

  let baseHzScale = [referencePitch];
  for (let i = 0; i < scaleNoFirstOrLast.length; i++) {
    baseHzScale.push(referencePitch * 2 ** (scaleNoFirstOrLast[i] / 1200));
  }

  let multiplesList = [2, 4, 8, 16, 32, 64, 128, 256];
  let hzScale = [...baseHzScale];
  for (let j = 0; j < multiplesList.length; j++) {
    for (let i = 0; i < baseHzScale.length; i++) {
      hzScale.push(baseHzScale[i] * multiplesList[j]);
    }
  }

  return hzScale;
};

export default getHzScale;
