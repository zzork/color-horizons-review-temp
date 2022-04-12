import getAllPossiblePatterns from "./getAllPossiblePatterns";
import getStepDifferencesFromPattern from "./getStepDifferencesFromPattern";
import getValuesFromStepDifferences from "./getValuesFromStepDifferences";

const convertPatternToModesObjects = (pattern) => {
  const allModesAsPatterns = getAllPossiblePatterns(pattern);
  const allIPObjects = allModesAsPatterns.map((scalePattern) => {
    const stepDifferences = getStepDifferencesFromPattern(scalePattern);
    return {
      pattern: scalePattern,
      stepDifferences,
      mode: getValuesFromStepDifferences(stepDifferences),
    };
  });
  return allIPObjects;
};

export default convertPatternToModesObjects;
