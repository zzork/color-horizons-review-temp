import { ratioTable } from "../ratioTable";

export const ComparisonWindow = ({ scale }) => {
  let ratioTableEntry = ratioTable[0];

  let justFraction = ratioTableEntry.cents;

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

// TAKING INPUT OF
// ---SCALE---
// ---JUST FRACTION---

// THEN RETURNING...
// ---THE JUST FRACTION---
// ---THE JUST FRACTION IN CENTS---
// ---WHICH STEP OF THE SCALE IS CLOSEST---
// ---WHAT THE VALUE OF THAT STEP IS---
// ---HOW MANT CENTS OFF IT IS

// AS A BASIC LIST
