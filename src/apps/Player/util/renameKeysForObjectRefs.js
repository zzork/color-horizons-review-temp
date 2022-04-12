const renameKeysForObjectRefs = (key) => {
  if (key === "1") {
    return "one";
  }
  if (key === "2") {
    return "two";
  }
  if (key === "3") {
    return "three";
  }
  if (key === "4") {
    return "four";
  }
  if (key === "5") {
    return "five";
  }
  if (key === "6") {
    return "six";
  }
  if (key === "7") {
    return "seven";
  }
  if (key === "8") {
    return "eight";
  }
  if (key === "9") {
    return "nine";
  }
  if (key === "0") {
    return "zero";
  }
  if (key === "-") {
    return "dash";
  }
  if (key === "=") {
    return "equals";
  }
  if (key === "[") {
    return "leftBracket";
  }
  if (key === "]") {
    return "rightBracket";
  }
  if (key === ";") {
    return "semiColon";
  }
  if (key === "'") {
    return "singleQuote";
  }
  if (key === ",") {
    return "comma";
  }
  if (key === ".") {
    return "period";
  }
  if (key === "/") {
    return "slash";
  }
  return key;
};

export default renameKeysForObjectRefs;
