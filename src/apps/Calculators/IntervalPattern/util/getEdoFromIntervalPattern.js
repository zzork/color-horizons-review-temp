const getEdoFromIntervalPattern = (pattern) => {
  let edo = 0;
  for (let i = 0; i < pattern.length; i++) {
    edo += parseInt(pattern[i]);
  }
  return edo;
};

export default getEdoFromIntervalPattern;
