import React, { useState } from "react";

export const CalcIPReadout = ({pattern}) => {
    let patternArray = pattern.split("")
    let edo = 0
    for (let i = 0; i < patternArray.length; i++) {
        edo += parseInt(patternArray[i])
    }
    let stepSize = 1200 / edo

    console.log(patternArray)

    let stepValuesList = []
    for (let i = 0; i < patternArray.length; i++) {
        stepValuesList.push((patternArray[i] * stepSize).toFixed(5))
    }
    let stepValuesDisplay = stepValuesList.map((value, index) => <tr><td>Step {index}</td> <td align="right">{value}</td></tr>)
    return (
        <div>
        <h3>{edo} EDO</h3>
        <h4>Step Size = {stepSize} cents (*fix this to calculate each unique interval*)</h4>
        <table>{stepValuesDisplay}</table>
        </div>
    )
}