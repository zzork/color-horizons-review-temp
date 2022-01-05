const getEdoFromIntervalPattern = (pattern) => {
  const patternArray = pattern.split("");
  let edo = 0;
  for (let i = 0; i < patternArray.length; i++) {
    edo += parseInt(patternArray[i]);
  }
  return edo;
};

export default getEdoFromIntervalPattern;
