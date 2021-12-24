import React, { useState } from "react";
import getEdoFromIntervalPattern from "../util/getEdoFromIntervalPattern";
import getIPStepValuesList from "../util/getIPStepValuesList";
import getIPUniqueSizes from "../util/getIPUniqueSizes";
import getReadoutTable from "../util/getReadoutTable";

export const CalcIPReadout = ({ pattern }) => {
  const isValidState = () => {
    return pattern > 0;
  };
  if (!isValidState()) {
    return <InvalidState value={pattern} />;
  }

  const edo = getEdoFromIntervalPattern(pattern);
  const stepSize = 1200 / edo;
  const uniqueSizes = getIPUniqueSizes(pattern, stepSize);
  const stepValuesList = getIPStepValuesList(pattern, stepSize);
  const readoutTable = getReadoutTable(stepValuesList);

  return (
    <div>
      <h3>{edo} EDO</h3>
      <h4>EDO Step Size = {stepSize.toFixed(5)} cents</h4>
      <h4>{uniqueSizes}</h4>
      {readoutTable}
    </div>
  );
};

// IMPORTANT
// putting the .toFixed(5) in the DISPLAY TABLE like here is the correct place for it for calc purposes
// now is correct in edo, need to fix LT

const InvalidState = ({ value }) => {
  return (
    <div>
      {value === "" && <p>Enter a Pattern</p>}
      {value === "0" && <p>0 is not a Pattern</p>}
      {value < 0 && <p>Pattern Cannot Be Negative</p>}
    </div>
  );
};
