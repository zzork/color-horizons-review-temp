const getEDOMOSGenerator = (step, edo) => {
  const singleStepCents = 1200 / edo;
  const generator = singleStepCents * step;
  return generator;
};

export default getEDOMOSGenerator;
