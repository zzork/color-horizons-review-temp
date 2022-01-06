const getLMSList = (stepDifferences, sortedUnique) => {
  console.log(stepDifferences, sortedUnique);
  let lSize = 0;
  let mSize = 0;
  let sSize = 0;
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
    if (value === lSize) {
      return "L";
    }
    if (value === mSize) {
      return "𝚖";
    }
    if (value === sSize) {
      return "s";
    }
  };

  // take mapped LMS and create new list from previous values
  let lmsList = stepDifferences.map((value) => valueToLms(value.toFixed(5)));

  return lmsList;
};

export default getLMSList;
