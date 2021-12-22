export const CalcEDOReadout = ({edo}) => {
    const stepSize = 1200 / edo;
    let stepValuesList = [];
    for (let i = 0; i < edo; i++) {
        let decimalsFixed = (i * stepSize).toFixed(5)
        stepValuesList.push(`Step ${i}: ${decimalsFixed}`)
    };
    let stepValuesDisplay = stepValuesList.map(value => <p>{value}</p>)
    return (
        <div>
            <h3>{edo} EDO</h3>
            <h4>Step Size: {stepSize} Cents</h4>
            <p>{stepValuesDisplay}</p>
        </div>
    )
}

// how get display not have extra space between lines on readout?