import React, { useState } from "react";
import { CalcEDOReadout } from "./CalcEDOReadout";

export const CalcEDO = ({}) => {
  const [selectedEDO, setSelectedEDO] = useState("12")
  // unclear on how target.value works
  const handleChange = (userInput => setSelectedEDO(userInput.target.value))
    return (
      <div>
      <h2>Equal Division of the Octave</h2>
      <input onChange={handleChange} type="number" name="edoEntered" defaultValue="12"></input>
      <CalcEDOReadout edo = {selectedEDO} />
      </div>
    )
  }