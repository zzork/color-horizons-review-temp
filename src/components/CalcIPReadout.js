import React, { useState } from "react";
import AllModes from "../apps/AllModes";
import getEdoFromIntervalPattern from "../util/getEdoFromIntervalPattern";
import getIPStepValuesList from "../util/getIPStepValuesList";
import getIPUniqueSizes from "../util/getIPUniqueSizes";
import getReadoutTable from "../util/getReadoutTable";
import getStepDifferences from "../util/getStepDifferences";
import { ComparisonWindow } from "./ComparisonWindow";

export const CalcIPReadout = ({ pattern, selectedComparison }) => {
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
  const stepDifferences = getStepDifferences(stepValuesList);

  // const readoutTable = getReadoutTable(stepValuesList);

  return (
    <div>
      <h3>{edo} EDO</h3>
      <h4>EDO Step Size = {stepSize.toFixed(5)} cents</h4>
      <h4>{uniqueSizes}</h4>

      <AllModes
        pattern={pattern}
        scale={stepValuesList}
        selectedComparison={selectedComparison}
        stepDifferences={stepDifferences}
      />
    </div>
  );
};

const InvalidState = ({ value }) => {
  return (
    <div>
      {value === "" && <p>Enter a Pattern</p>}
      {value === "0" && <p>0 is not a Pattern</p>}
      {value < 0 && <p>Pattern Cannot Be Negative</p>}
    </div>
  );
};
