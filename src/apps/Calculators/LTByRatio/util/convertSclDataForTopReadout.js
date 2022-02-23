import getReducedFraction from "../../../../util/getReducedFraction";

const convertSclDataForTopReadout = (sclData) => {
  const reducedFraction = getReducedFraction(sclData[0], sclData[1]);
  reducedFraction.push(sclData[2]);
  return reducedFraction;
};

export default convertSclDataForTopReadout;
