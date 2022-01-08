const getMos = (generator) => {
  const log2 = generator / 1200;
  const intergerList = [];
  let outcome = 1 / log2;

  for (let i = 0; i < 10; i++) {
    if (outcome > 10000) {
      break;
    } // don't know why this was crashing without this, was sometimes adding MASSIVE intergers to this list 705 would cause it
    intergerList.push(Math.floor(outcome)); // add the interger to the list
    outcome -= Math.floor(outcome); // remove the interger and keep the decimal outcome
    outcome = 1 / outcome; // run the 1/x again, then loop... working!
  }

  console.log("intList", intergerList);

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

  const lessThan100 = freshmanSums.filter((value) => value < 101);

  return lessThan100;
  // return "";
};

export default getMos;
