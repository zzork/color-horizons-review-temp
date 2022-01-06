const getReducedFraction = (numerator, denominator) => {
  // without these two steps, was only evaluating first character in while loop (?)
  numerator = parseInt(numerator);
  denominator = parseInt(denominator);

  if (numerator < 1 || denominator < 1) {
    return [1, 1];
  }

  // ensure numerator larger than denominator
  while (numerator <= denominator) {
    numerator *= 2;
  }

  // get all factors of num
  let numeratorGCFList = [];
  for (let i = 2; i < numerator / 2 + 1; i++) {
    if (numerator % i === 0) {
      numeratorGCFList.push(i);
    }
  }

  // get all factors of den
  let denominatorGCFList = [];
  for (let i = 2; i < denominator / 2 + 1; i++) {
    if (denominator % i === 0) {
      denominatorGCFList.push(i);
    }
  }
  denominatorGCFList.push(denominator);

  // create a list of what factors are in both
  let gcfList = numeratorGCFList.filter((factor) =>
    denominatorGCFList.includes(factor)
  );
  let gcf = Math.max(...gcfList);

  // divide each by greatest common factors
  if (gcf >= 2) {
    numerator /= gcf;
    denominator /= gcf;
  }

  // get numerator to lowest value
  while (denominator * 2 < numerator) {
    if (numerator % 2 === 0) {
      numerator /= 2;
    } else break;
  }

  // get denominator to closest value to numerator that is equivalent
  while (denominator * 2 < numerator) {
    if (denominator * 2 < numerator) {
      denominator *= 2;
    } else break;
  }

  // reduce if both divisible by 2
  while (numerator % 2 === 0 && denominator % 2 === 0) {
    numerator /= 2;
    denominator /= 2;
  }
  const returnList = [numerator, denominator];
  return returnList;
};

export default getReducedFraction;
