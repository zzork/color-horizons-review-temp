import React, { useState } from "react";
import { CalcEDOReadout } from "./CalcEDOReadout";

export const CalcEDO = ({ stateData, setStateData }) => {
  // unclear on how target.value works
  const handleChange = (event) => {
    const newValue = event.target.value;
    const regex = new RegExp("D");
    if (regex.test(newValue)) return;

    let newState = stateData.map((scaleType) => {
      if ((scaleType.id = "a")) {
        return {
          ...scaleType,
          value: newValue,
        };
      }
      return scaleType;
    });
    setStateData(newState);
  };

  return (
    <div>
      <h2>Equal Division of the Octave</h2>
      <input
        onChange={handleChange}
        type="number"
        name="edoEntered"
        value={stateData[0].value}
      ></input>
      <CalcEDOReadout edo={stateData[0].value} />
    </div>
  );
};
