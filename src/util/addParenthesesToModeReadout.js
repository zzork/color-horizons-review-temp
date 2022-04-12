const addParenthesesToModeReadout = (pattern) => {
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i].length === 2) {
      pattern[i] = `(${pattern[i]})`;
    }
  }
  return pattern;
};

export default addParenthesesToModeReadout;
