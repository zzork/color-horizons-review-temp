const getSecondCents = (firstSteps, firstCents, secondSteps) => {
  const remainingCents = 1200 - firstSteps * firstCents;
  const secondCents = remainingCents / secondSteps;
  return secondCents;
};

export default getSecondCents;
