import { ratioTable } from "../ratioTable";

export const ComparisonWindow = ({ scale }) => {
  let justFraction = ratioTable[0].cents;

  let closestValue = null;
  let leastDifference = 1201;
  let leastDifferenceAbsolute = 1201;
  let closestScaleStep = null;
  for (let i = 0; i < scale.length; i++) {
    let differenceOnIterationAbsolute = Math.abs(scale[i] - justFraction);
    let differenceOnIteration = scale[i] - justFraction;
    if (differenceOnIterationAbsolute < leastDifferenceAbsolute) {
      closestValue = scale[i];
      leastDifference = differenceOnIteration;
      leastDifferenceAbsolute = Math.abs(differenceOnIteration);
      closestScaleStep = i;
    }
  }

  return (
    <div>
      3/2 // {justFraction.toFixed(5)} -- step {closestScaleStep} //{" "}
      {closestValue.toFixed(5)} // {leastDifference.toFixed(5)}
    </div>
  );
};

// THIS SHOULD BE A FUNCTION
// TAKING INPUT OF SCALE AND JUST FRACTION
// THEN RETURNING A LIST OF THE RELEVANT INFO IN THE RETURN SECTION
