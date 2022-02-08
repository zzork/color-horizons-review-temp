export const handleIPChange = (event, stateData, setStateData) => {
  const newEntry = event.target.value.split("");

  // filter only sensible characters
  const possibleCharacters = "1234567890()";
  let newEntryOnlyAllowed = [];
  for (const character of newEntry) {
    if (possibleCharacters.includes(character)) {
      newEntryOnlyAllowed.push(character);
    }
  }
  const newEntryFinished = newEntryOnlyAllowed.join("");

  // find out how many open parens there are
  const countParentheses = (testedArray, testedValue) =>
    testedArray.reduce(
      (outputCount, iterationValue) =>
        iterationValue === testedValue ? outputCount + 1 : outputCount,
      0
    );

  const openCount = countParentheses(newEntryOnlyAllowed, "(");
  const closedCount = countParentheses(newEntryOnlyAllowed, ")");

  // if parentheses present, parse them into array
  let finalArray = [];
  let mutationArray = [...newEntryOnlyAllowed];

  for (let i = 0; i < openCount; i++) {
    let openParens = mutationArray.indexOf("(");
    let afterOpen = mutationArray.splice(openParens);
    finalArray.push(...mutationArray);
    afterOpen.shift();
    let closedParens = afterOpen.indexOf(")");
    let afterClosed = afterOpen.splice(closedParens);
    finalArray.push(afterOpen.join(""));
    afterClosed.shift();
    mutationArray = afterClosed;
    if (i === openCount - 1) {
      finalArray.push(...afterClosed);
    }
  }

  if (openCount === 0) {
    finalArray = mutationArray;
  }

  // remove any zeroes or any ()s
  finalArray = finalArray.filter((value) => value !== "0" && value !== "");

  console.log("final array", finalArray);

  if (openCount === closedCount) {
    let newState = {
      ...stateData,
      intervalPattern: {
        pattern: finalArray,
        inputPatternDisplay: newEntryFinished,
        parenthesesMatch: true,
      },
    };
    setStateData(newState);
  } else {
    let newState = {
      ...stateData,
      intervalPattern: {
        ...stateData.intervalPattern,
        pattern: finalArray,
        inputPatternDisplay: newEntryFinished,
        parenthesesMatch: false,
      },
    };
    setStateData(newState);
  }
};
