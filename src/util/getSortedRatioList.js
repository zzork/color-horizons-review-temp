import getCentsFromRatio from "./getCentsFromRatio";
import getReducedFraction from "./getReducedFraction";

const getSortedRatioList = (ratioList) => {
  let originalScale = [];

  for (let i = 0; i < ratioList.length; i++) {
    let reducedFraction = getReducedFraction(ratioList[i][0], ratioList[i][1]);
    originalScale.push([
      getCentsFromRatio(reducedFraction[0], reducedFraction[1]),
      reducedFraction,
    ]);
  }

  originalScale.sort((a, b) => a[0] - b[0]);

  const sortedRatioList = originalScale.map((row) => row[1]);

  sortedRatioList.unshift([1, 1]);
  sortedRatioList.push([2, 1]);

  return sortedRatioList;
};

export default getSortedRatioList;
