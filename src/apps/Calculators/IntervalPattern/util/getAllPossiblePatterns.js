const getAllPossiblePatterns = (pattern) => {
  const patternsCount = pattern.length;
  let nextPattern = pattern.split("");
  const allPossiblePatterns = [];
  for (let i = 0; i < patternsCount; i++) {
    allPossiblePatterns.push(nextPattern);
    nextPattern = [...nextPattern.slice(1), nextPattern[0]];
  }
  return allPossiblePatterns;
};

export default getAllPossiblePatterns;
