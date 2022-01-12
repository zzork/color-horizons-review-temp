import getUniqueSteps from "../../../../util/getUniqueSteps";

const getLMSList = (stepDifferences, lmsList) => {
  let sortedUnique = getUniqueSteps(stepDifferences);

  let lSize = 0;
  let mSize = 0;
  let sSize = 0;

  if (sortedUnique.length === 1) {
    lSize = sortedUnique[0].toFixed(5);
  }
  if (sortedUnique.length === 2) {
    lSize = sortedUnique[0].toFixed(5);
    sSize = sortedUnique[1].toFixed(5);
  }
  if (sortedUnique.length === 3) {
    lSize = sortedUnique[0].toFixed(5);
    mSize = sortedUnique[1].toFixed(5);
    sSize = sortedUnique[2].toFixed(5);
  }

  const valueToLms = (value) => {
    if (value.toFixed(5) === lSize) {
      return lmsList[0];
    }
    if (value.toFixed(5) === mSize) {
      return lmsList[1];
    }
    if (value.toFixed(5) === sSize) {
      return lmsList[2];
    }
  };

  // take mapped LMS and create new list from previous values
  let lmsListReturn = stepDifferences.map((value) => valueToLms(value));

  lmsListReturn.shift();

  return lmsListReturn;
};

export default getLMSList;
