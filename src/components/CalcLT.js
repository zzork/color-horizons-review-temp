import React, { useState } from "react";
import { CalcLTReadout } from "./CalcLTReadout";
import { CalcLTTable } from "./CalcLTTable";

export const CalcLT = ({ stateData, setStateData }) => {
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

  return (
    <div>
      <h2>Linear Temperament</h2>
      <p>
        Numerator:
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
      <CalcLTReadout
        numerator={stateData[1].numerator}
        denominator={stateData[1].denominator}
        stateData={stateData}
        setStateData={setStateData}
      />
      <br />
      <p>Myhill Values Display</p>
      <p>Step Sizes</p>
      <br />
      <p>
        Note Amount:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltNoteTotal"
          defaultValue={stateData[1].noteTotal}
        ></input>
      </p>
      <CalcLTTable
        numerator={stateData[1].calculatedNumerator}
        denominator={stateData[1].calculatedDenominator}
        noteAmount={stateData[1].noteTotal}
      />
    </div>
  );
};
