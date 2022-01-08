import getReducedFraction from "../getReducedFraction";

const divideTwoFractions = (fraction1, fraction2) => {
  let newNumerator = fraction1[0] * fraction2[1];
  let newDenominator = fraction1[1] * fraction2[0];
  let newFractionReduced = getReducedFraction(newNumerator, newDenominator);
  return newFractionReduced;
};

export default divideTwoFractions;
