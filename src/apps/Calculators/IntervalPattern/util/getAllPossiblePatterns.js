const getAllPossiblePatterns = (pattern) => {
  let nextPattern = pattern.split("");
  // patterns are always same number as number in original pattern
  const possiblePatternsCount = nextPattern.length;
  const allPossiblePatterns = [];
  for (let i = 0; i < possiblePatternsCount; i++) {
    allPossiblePatterns.push(nextPattern);
    nextPattern = [...nextPattern.slice(1), nextPattern[0]];
  }
  return allPossiblePatterns;
};

export default getAllPossiblePatterns;
