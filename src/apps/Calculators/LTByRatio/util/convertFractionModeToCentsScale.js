import getCentsFromRatio from "../../../../util/getCentsFromRatio";

const convertFractionModeToCentsScale = (mode) => {
  let scale = [];
  for (let i = 0; i < mode.length; i++) {
    scale.push(getCentsFromRatio(mode[i][0], mode[i][1]));
  }
  return scale;
};

export default convertFractionModeToCentsScale;
