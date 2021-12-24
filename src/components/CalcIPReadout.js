import React, { useState } from "react";
import getEdoFromIntervalPattern from "../util/getEdoFromIntervalPattern";
import getIPStepValuesList from "../util/getIPStepValuesList";

export const CalcIPReadout = ({ pattern }) => {
  const isValidState = () => {
    return pattern > 0;
  };
  if (!isValidState()) {
    return <InvalidState value={pattern} />;
  }

  const edo = getEdoFromIntervalPattern(pattern);
  const stepSize = 1200 / edo;
  const stepValuesList = getIPStepValuesList(pattern, stepSize);

  // this calculates out the unique sizes
  // for (let i = 0; i < patternArray.length; i++) {
  //     stepValuesList.push((patternArray[i] * stepSize).toFixed(5))
  // }

  let stepValuesDisplay = stepValuesList.map((value, index) => (
    <tr key={index}>
      <td>Step {index}</td>
      <td align="right">{value.toFixed(5)}</td>
    </tr>
  ));

  return (
    <div>
      <h3>{edo} EDO</h3>
      <h4>EDO Step Size = {stepSize} cents</h4>
      <h4>(*needs to calculate each unique interval in scale instead*)</h4>
      <table>
        <tbody>{stepValuesDisplay}</tbody>
      </table>
    </div>
  );
};

// IMPORTANT
// putting the .toFixed(5) in the DISPLAY TABLE like here is the correct place for it for calc purposes

const InvalidState = ({ value }) => {
  return (
    <div>
      {value === "" && <p>Enter a Pattern</p>}
      {value === "0" && <p>0 is not a Pattern</p>}
      {value < 0 && <p>Pattern Cannot Be Negative</p>}
    </div>
  );
};
