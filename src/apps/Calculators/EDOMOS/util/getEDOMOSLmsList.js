import getStepDifferences from "../../../../util/getStepDifferences";
import getUniqueSteps from "../../../../util/getUniqueSteps";

const getEDOMOSLmsList = (scale, edo) => {
  let returnList = ["-", "-", "-"];

  const edoStep = 1200 / edo;
  const uniqueStepValues = getUniqueSteps(getStepDifferences(scale));
  const uniqueSteps = uniqueStepValues.map((value) =>
    String(Math.round(value / edoStep))
  );
  if (uniqueSteps.length === 3) {
    returnList = uniqueSteps;
  }
  if (uniqueSteps.length === 2) {
    returnList = [uniqueSteps[0], "m", uniqueSteps[1]];
  }
  if (uniqueSteps.length === 1) {
    returnList = [uniqueSteps[0], "m", "s"];
  }

  // for (let i = 0; i < returnList.length; i++) {
  //   if (returnList[i].length === 2) {
  //     returnList[i] = `(${returnList[i]})`;
  //   }
  // }

  return returnList;
};

export default getEDOMOSLmsList;
