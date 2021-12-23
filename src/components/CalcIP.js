import React, { useState } from "react";
import { CalcIPReadout } from "./CalcIPReadout";


export const CalcIP = ({}) => {
    const [selectedIntervalPattern, setSelectedIntervalPattern] = useState("2212221")
    const handleIntervalPatternChange = (userInput => setSelectedIntervalPattern(userInput.target.value))
    return (
        <div>
        <div>
        <h2>Interval Pattern</h2>
        <input onChange={handleIntervalPatternChange} type="number" name="intervalPatternEntered" defaultValue="2212221"></input></div>
        <div>
        <p></p>
        <CalcIPReadout pattern = {selectedIntervalPattern}/>
        </div>
        </div>
    )
}