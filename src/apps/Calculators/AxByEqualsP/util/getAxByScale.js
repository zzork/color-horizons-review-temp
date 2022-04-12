const getAxByScale = (firstSteps, firstCents, secondSteps, secondCents) => {
  let stepDifferences = [];

  if (firstSteps > secondSteps) {
    for (let i = 0; i < firstSteps; i++) {
      stepDifferences.push(firstCents);
    }
    const disperser = Math.ceil(firstSteps / secondSteps);
    for (let i = disperser; i <= disperser * secondSteps; i += disperser) {
      stepDifferences.splice([i], 0, secondCents);
    }
  }

  if (firstSteps < secondSteps) {
    for (let i = 0; i < secondSteps; i++) {
      stepDifferences.push(secondCents);
    }
    const disperser = Math.ceil(secondSteps / firstSteps);
    for (let i = disperser; i <= disperser * firstSteps; i += disperser) {
      stepDifferences.splice([i], 0, firstCents);
    }
  }

  if (firstSteps === secondSteps) {
    for (let i = 0; i < firstSteps; i++) {
      stepDifferences.push(firstCents);
      stepDifferences.push(secondCents);
    }
  }

  let scale = [];
  let stepAdder = 0;
  for (let i = 0; i < stepDifferences.length; i++) {
    stepAdder += Number(stepDifferences[i]);
    scale.push(stepAdder);
  }

  scale.unshift(0);

  return scale;
};

export default getAxByScale;
