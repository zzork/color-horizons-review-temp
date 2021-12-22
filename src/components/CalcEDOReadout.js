export const CalcEDOReadout = ({edo}) => {
    const stepSize = 1200 / edo;
    let stepValuesList = [];
    for (let i = 0; i <= edo; i++) {
        let decimalFixed = (i * stepSize).toFixed(5)
        stepValuesList.push(decimalFixed)
    };
    let stepValuesDisplay = stepValuesList.map((value, index) => <tr><td>Step {index}</td> <td align="right">{value}</td></tr>)
    return (
        <div>
            <h3>{edo} EDO</h3>
            <h4>Step Size: {stepSize.toFixed(5)} Cents</h4>
            <table>{stepValuesDisplay}</table>
        </div>
    )
}

// how get display not have extra space between lines on readout?