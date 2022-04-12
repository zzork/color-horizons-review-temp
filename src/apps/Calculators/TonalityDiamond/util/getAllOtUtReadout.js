const getAllOtUtReadout = (allOtUt) => {
  let allOtUtReadout = null;
  if (allOtUt === "all") {
    allOtUtReadout = "All";
  }
  if (allOtUt === "ot") {
    allOtUtReadout = "Overtones";
  }
  if (allOtUt === "ut") {
    allOtUtReadout = "Undertones";
  }

  return allOtUtReadout;
};

export default getAllOtUtReadout;
