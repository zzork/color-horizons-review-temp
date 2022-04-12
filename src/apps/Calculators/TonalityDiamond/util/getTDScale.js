import getSortedRatioList from "../../../../util/getSortedRatioList";

const getTDScale = (tonalityDiamondRatios, allOtUt) => {
  let ratioList = [];
  if (allOtUt === "all") {
    ratioList = tonalityDiamondRatios[0];
  }
  if (allOtUt === "ot") {
    ratioList = tonalityDiamondRatios[1];
  }
  if (allOtUt === "ut") {
    ratioList = tonalityDiamondRatios[2];
  }

  const sortedRatioList = getSortedRatioList(ratioList);

  return sortedRatioList;
};

export default getTDScale;
