const getMos = (numerator, denominator) => {
  if (numerator % denominator === 0) {
    return "no";
  }
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
    if (i === intergerList[0] - 1) {
      nextFreshmanSummer = mos;
    }
  }

  let freshmanSummer = nextFreshmanSummer;

  for (let i = 0; i < intergerList[1]; i++) {
    mos += freshmanSummer;
    freshmanSums.push(mos);
    if (i === intergerList[1] - 2) {
      nextFreshmanSummer = mos;
    }
  }

  freshmanSummer = nextFreshmanSummer;

  for (let i = 0; i < intergerList[2]; i++) {
    mos += freshmanSummer;
    freshmanSums.push(mos);
    if (i === intergerList[2] - 2) {
      nextFreshmanSummer = mos;
    }
  }

  // OK so why does first iteration need to look different than second+?
  // implement a proper loop for rest
  // fix the "no" display, just don't display flip or MOS when nonsense
  // display needs improvement, currently 1234591322314049586776859410
  // also should truncate at some point...
  // BUT OVERALL IS WORKING!!

  return freshmanSums;
};

export default getMos;
