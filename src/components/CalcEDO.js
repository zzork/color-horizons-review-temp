import React, { useState } from "react";
import { CalcEDOReadout } from "./CalcEDOReadout";

export const CalcEDO = ({stateData, setStateData}) => {
  // const [selectedEDO, setSelectedEDO] = useState("12")
  // unclear on how target.value works
  const handleChange = (userInput) => {
    let newState = stateData.map(scaleType => {
      if (scaleType.id = "a")  {
        return {
          ...scaleType,
          value: userInput.target.value
        }
      }
      return scaleType
    })
    console.log("newState:", newState[0])
    setStateData(newState)
    console.log("stateData:", stateData[0])
  }
 
    return (
      <div>
      <h2>Equal Division of the Octave</h2>
      <input onChange={handleChange} type="number" name="edoEntered" defaultValue={stateData[0].value}></input>
      <CalcEDOReadout edo = {stateData[0].value} />
      </div>
    )
  }