import getCentsFromRatio from "../../../../util/getCentsFromRatio";

const convertFractionModeToCentsScale = (fractionMode) => {
  let centsMode = [];
  for (let i = 0; i < fractionMode.length; i++) {
    centsMode.push(getCentsFromRatio(fractionMode[i][0], fractionMode[i][1]));
  }
  return centsMode;
};

export default convertFractionModeToCentsScale;
