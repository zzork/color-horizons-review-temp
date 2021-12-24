import React, { useState } from "react";
import { CalcIPReadout } from "./CalcIPReadout";

export const CalcIP = ({ stateData, setStateData }) => {
  const handleChange = (event) => {
    const newPattern = event.target.value;
    let newState = stateData.map((scaleType) => {
      if ((scaleType.id = "c")) {
        return {
          ...scaleType,
          pattern: newPattern,
        };
      }
      return scaleType;
    });
    setStateData(newState);
  };

  return (
    <div>
      <div>
        <h2>Interval Pattern</h2>
        <input
          onChange={handleChange}
          type="number"
          name="intervalPatternEntered"
          value={stateData[2].pattern}
        ></input>
      </div>
      <div>
        <p></p>
        <CalcIPReadout pattern={stateData[2].pattern} />
      </div>
    </div>
  );
};
