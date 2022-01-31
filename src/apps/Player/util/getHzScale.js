const getHzScale = (incomingScale, referencePitch) => {
  referencePitch /= 2;
  let scaleNoFirstOrLast = [...incomingScale];
  scaleNoFirstOrLast.shift();
  scaleNoFirstOrLast.pop();

  let baseHzScale = [referencePitch];
  for (let i = 0; i < scaleNoFirstOrLast.length; i++) {
    baseHzScale.push(referencePitch * 2 ** (scaleNoFirstOrLast[i] / 1200));
  }

  let multiplesList = [
    2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384,
  ];
  let hzScale = [...baseHzScale];
  for (let j = 0; j < multiplesList.length; j++) {
    for (let i = 0; i < baseHzScale.length; i++) {
      let iterationValue = baseHzScale[i] * multiplesList[j];
      if (iterationValue < 24000) {
        hzScale.push(baseHzScale[i] * multiplesList[j]);
      } else hzScale.push(23999);
    }
  }

  return hzScale;
};

export default getHzScale;
