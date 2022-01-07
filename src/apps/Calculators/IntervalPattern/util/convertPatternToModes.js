import getAllPossiblePatterns from "./getAllPossiblePatterns";

const applyEdo = (pattern) => {
  const edo = pattern.reduce((accumulator, value) => {
    return accumulator + Number(value);
  }, 0);
  const edoStepValue = 1200 / edo;
  const patternEdo = pattern.map((value) => value * edoStepValue);
  return patternEdo;
};

const getValuesFromStepDifferences = (stepDifferences) => {
  let sum = 0;
  const values = [sum];
  for (let stepDifference of stepDifferences) {
    sum = sum + stepDifference;
    values.push(sum);
  }
  return values;
};

const convertPatternToModes = (pattern) => {
  // take pattern and make all possible patterns
  const scalePatterns = getAllPossiblePatterns(pattern);
  const patternModes = scalePatterns.map((scalePattern) => {
    const stepDifferences = applyEdo(scalePattern);
    return {
      pattern: scalePattern,
      stepDifferences,
      mode: getValuesFromStepDifferences(stepDifferences),
    };
  });
  return patternModes;
};

// [1, 2, 3]
// to
// {
//   pattern: [1, 2, 3],
//   values: [0, 1200],
//   stepDifference: [20]
// }

//   let patternAndScale = [];

//   let patternListed = pattern.split("");
//   patternAndScale.push([0, patternListed, scale, stepDifferences]);

//   let forLoopPattern = [...patternListed];
//   let forLoopScale = [...scale];
//   let forLoopDifferences = [...stepDifferences];

//   for (let i = 1; i < pattern.length; i++) {
//     // pattern values
//     let firstPatternValue = forLoopPattern[0];
//     forLoopPattern.push(firstPatternValue);
//     forLoopPattern.shift();

//     // differences between steps
//     forLoopDifferences.push(forLoopDifferences[1]);
//     forLoopDifferences.shift();
//     forLoopDifferences[0] = 0;
//     // console.log(i, forLoopDifferences);

//     // scale itself
//     forLoopScale = forLoopScale.map((value) => value - forLoopScale[1]);
//     forLoopScale.shift();
//     forLoopScale.push(1200);

//     patternAndScale.push([
//       i,
//       [...forLoopPattern],
//       forLoopScale,
//       [...forLoopDifferences],
//     ]);
//   }
//   return patternAndScale;
// };

export default convertPatternToModes;
