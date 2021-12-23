import React, { useEffect, useState } from "react";
import { CalcEDO } from './CalcEDO';
import { CalcIP } from "./CalcIP";
import { CalcLT } from './CalcLT';

export const Selector = ({setSelected, stateData, setStateData}) => {
    const handleEDOClick = ({}) => setSelected(<CalcEDO stateData = {stateData} setStateData = {setStateData}/>)
    const handleLTClick = ({}) => setSelected(<CalcLT/>)
    const handleIPClick = ({}) => setSelected(<CalcIP/>)
    return (
      <div>
        <h2>Select Scale Generation Method</h2>
        <button onClick={handleEDOClick}>Equal Division of the Octave</button>
        <button onClick={handleLTClick}>Linear Temperament</button>
        <button onClick={handleIPClick}>Interval Pattern</button>
      </div>
    );
  };
