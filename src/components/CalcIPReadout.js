import React, { useState } from "react";

export const CalcIPReadout = ({pattern}) => {
    let patternArray = pattern.split("")
    let edo = 0
    for (let i = 0; i < patternArray.length; i++) {
        edo += parseInt(patternArray[i])
    }
    let stepSize = 1200 / edo
    let stepValuesList = [0]

    // this calculates out the unique sizes
    // for (let i = 0; i < patternArray.length; i++) {
    //     stepValuesList.push((patternArray[i] * stepSize).toFixed(5))
    // }

    for (let i = 0; i < patternArray.length; i++) {
        let thisStep = (patternArray[i] * stepSize + stepValuesList[i])
        stepValuesList.push(thisStep)
    }
    let stepValuesDisplay = stepValuesList.map((value, index) => <tr><td>Step {index}</td> <td align="right">{value.toFixed(5)}</td></tr>)
    
    return (
        <div>
        <h3>{edo} EDO</h3>
        <h4>EDO Step Size = {stepSize} cents</h4> 
        <h4>(*needs to calculate each unique interval in scale instead*)</h4>
        <table>{stepValuesDisplay}</table>
        </div>
    )
}

// IMPORTANT
// putting the .toFixed(5) in the DISPLAY TABLE like here is the correct place for it for calc purposes