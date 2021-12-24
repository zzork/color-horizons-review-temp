import React, { useEffect, useState } from "react";
import { CalcEDO } from './CalcEDO';
import { CalcIP } from "./CalcIP";
import { CalcLT } from './CalcLT';

export const Selector = ({onSelect}) => {
    return (
      <div>
        <h2>Select Scale Generation Method</h2>
        <button onClick={() => onSelect("edo")}>Equal Division of the Octave</button>
        <button onClick={() => onSelect("lt")}>Linear Temperament</button>
        <button onClick={() => onSelect("ip")}>Interval Pattern</button>
      </div>
    );
  };
