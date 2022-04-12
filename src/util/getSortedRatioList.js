import getCentsFromRatio from "./getCentsFromRatio";
import getReducedFraction from "./getReducedFraction";

const getSortedRatioList = (ratioList) => {
  let originalScale = [];
  // centsList used to filter duplicate reduced values
  let centsList = [];

  for (let i = 0; i < ratioList.length; i++) {
    let reducedFraction = getReducedFraction(ratioList[i][0], ratioList[i][1]);
    let centsVersion = getCentsFromRatio(
      reducedFraction[0],
      reducedFraction[1]
    );

    if (
      !centsList.includes(centsVersion) &&
      centsVersion !== 0 &&
      centsVersion !== 1200
    )
      originalScale.push([centsVersion, reducedFraction]);

    centsList.push(centsVersion);
  }

  originalScale.sort((a, b) => a[0] - b[0]);

  const sortedRatioList = originalScale.map((row) => row[1]);

  sortedRatioList.unshift([1, 1]);
  sortedRatioList.push([2, 1]);

  return sortedRatioList;
};

export default getSortedRatioList;
