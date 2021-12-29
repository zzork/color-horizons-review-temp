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

  const lessThan200 = freshmanSums.filter((value) => value < 201);

  return lessThan200;
};

export default getMos;
