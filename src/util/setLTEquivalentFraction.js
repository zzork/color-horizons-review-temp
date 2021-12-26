const setLTEquivalentFraction = (numerator, denominator, setStateData) => {
  // without these two steps, was only evaluating first character in while loop (?)
  numerator = parseInt(numerator);
  denominator = parseInt(denominator);

  while (numerator <= denominator) {
    numerator *= 2;
  }

  let keepReducing = true;
  if (numerator % denominator === 0 || denominator % numerator === 0) {
    numerator = 2;
    denominator = 1;
    keepReducing = false;
  }

  if ((keepReducing = true)) {
    let numeratorGCFList = [];
    for (let i = 2; i < numerator / 2 + 1; i++) {
      if (numerator % i === 0) {
        numeratorGCFList.push(i);
      }
    }

    let denominatorGCFList = [];
    for (let i = 2; i < denominator / 2 + 1; i++) {
      if (denominator % i === 0) {
        denominatorGCFList.push(i);
      }
    }

    let gcfList = numeratorGCFList.filter((factor) =>
      denominatorGCFList.includes(factor)
    );
    let gcf = Math.max(...gcfList);

    if (gcf >= 2) {
      numerator /= gcf;
      denominator /= gcf;
    }

    while (denominator * 2 < numerator) {
      if (numerator % 2 === 0) {
        numerator /= 2;
      } else break;
    }

    // needs the map stateData code from elsewhere
    // setCalculatedNumerator(numerator);
    // setCalculatedDenominator(denominator);
  }
};

export default setLTEquivalentFraction;
