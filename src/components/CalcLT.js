import React, { useState } from "react";
import { CalcLTReadout1 } from "./CalcLTReadout1";
import { CalcLTReadout2 } from "./CalcLTReadout2";

export const CalcLT = ({ stateData, setStateData, selectedComparison }) => {
  // there must be a better way to handle this giant, repetitive block
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "ltNumerator") {
      let newState = stateData.map((scaleType) => {
        if (scaleType.id === "b") {
          return {
            ...scaleType,
            numerator: newValue,
          };
        }
        return scaleType;
      });
      setStateData(newState);
    }

    if (fieldReader === "ltDenominator") {
      let newState = stateData.map((scaleType) => {
        if (scaleType.id === "b") {
          return {
            ...scaleType,
            denominator: newValue,
          };
        }
        return scaleType;
      });
      setStateData(newState);
    }

    if (fieldReader === "ltNoteTotal") {
      let newState = stateData.map((scaleType) => {
        if (scaleType.id === "b") {
          return {
            ...scaleType,
            noteTotal: newValue,
          };
        }
        return scaleType;
      });
      setStateData(newState);
    }
  };
  const handleInvertClick = (inverseFraction) => {
    let newState = stateData.map((scaleType) => {
      if (scaleType.id === "b") {
        return {
          ...scaleType,
          numerator: inverseFraction[0],
          denominator: inverseFraction[1],
        };
      }
      return scaleType;
    });
    setStateData(newState);
  };

  const handleMOSClick = (value) => {
    let newState = stateData.map((scaleType) => {
      if (scaleType.id === "b") {
        return {
          ...scaleType,
          noteTotal: value,
        };
      }
      return scaleType;
    });
    setStateData(newState);
  };

  return (
    <div>
      <h2>Linear Temperament</h2>
      <p>
        Numerator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltNumerator"
          value={stateData[1].numerator}
        ></input>
      </p>
      <p>
        Denominator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltDenominator"
          value={stateData[1].denominator}
        ></input>
      </p>
      <CalcLTReadout1
        numerator={stateData[1].numerator}
        denominator={stateData[1].denominator}
        noteTotal={stateData[1].noteTotal}
        selectedComparison={selectedComparison}
        handleInvertClick={handleInvertClick}
        handleMOSClick={handleMOSClick}
        handleChange={handleChange}
      />
      {/* <CalcLTReadout2
        numerator={stateData[1].numerator}
        denominator={stateData[1].denominator}
        noteAmount={stateData[1].noteTotal}
      /> */}
    </div>
  );
};
