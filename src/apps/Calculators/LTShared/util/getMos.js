const getMos = (generator) => {
  const log2 = generator / 1200;
  const intergerList = [];
  let outcome = 1 / log2;

  for (let i = 0; i < 10; i++) {
    if (outcome > 100000) {
      break;
    } // don't know why this was crashing without this, was sometimes adding MASSIVE intergers to this list 705 would cause it
    intergerList.push(Math.floor(outcome));
    outcome -= Math.floor(outcome);
    outcome = 1 / outcome;
  }

  let freshmanSums = [1];

  let mos = 1;
  let addValue = 1;

  for (let h = 0; h < intergerList.length; h++) {
    for (let i = 0; i < intergerList[h]; i++) {
      mos += addValue;
      freshmanSums.push(mos);
    }
    addValue = freshmanSums[freshmanSums.length - 2];
  }

  freshmanSums.shift();
  freshmanSums.pop();
  // necessary to remove last value because EDO generators were going one extra

  const lessThan100 = freshmanSums.filter((value) => value < 101);

  return lessThan100;
};

export default getMos;
