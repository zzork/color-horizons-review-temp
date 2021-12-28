const getMos = (numerator, denominator) => {
  const log2 = Math.log(numerator / denominator) / Math.log(2);
  const intergerList = [];
  let outcome = 1 / log2;

  for (let i = 0; i < 6; i++) {
    intergerList.push(Math.floor(outcome)); // add the interger to the list
    outcome -= Math.floor(outcome); // remove the interger and keep the decimal outcome
    outcome = 1 / outcome; // run the 1/x again, then loop... working!
  }

  // 3, 9, 2, 2, 4, 6

  let mos = 0;
  let freshmanSums = [];
  let nextFreshmanSummer = 0;

  for (let i = 0; i <= intergerList[0]; i++) {
    mos += 1;
    freshmanSums.push(mos);
    if (mos === intergerList[0] - 1) {
      nextFreshmanSummer = mos;
    }
  }

  console.log(freshmanSums);

  return 3;
};

export default getMos;
