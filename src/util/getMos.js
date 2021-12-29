const getMos = (numerator, denominator) => {
  if (numerator % denominator === 0) {
    return ["Not Applicable"];
  }
  const log2 = Math.log(numerator / denominator) / Math.log(2);
  const intergerList = [];
  let outcome = 1 / log2;

  for (let i = 0; i < 10; i++) {
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

  for (let j = 1; j <= intergerList.length; j++) {
    let freshmanSummer = nextFreshmanSummer;

    for (let i = 0; i < intergerList[j]; i++) {
      mos += freshmanSummer;
      freshmanSums.push(mos);
      if (i === intergerList[j] - 2) {
        nextFreshmanSummer = mos;
      }
    }
  }

  // OK so why does first iteration need to look different than second+?
  // also should truncate at some point...
  // BUT OVERALL IS WORKING!!

  freshmanSums.shift();

  const lessThan200 = freshmanSums.filter((value) => value < 201);

  return lessThan200;
};

export default getMos;
