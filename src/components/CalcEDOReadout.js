import getDisplayStepValues from "../util/getDisplayStepValues";

export const CalcEDOReadout = ({ edo }) => {
  const isValidState = () => {
    return edo > 0;
  };
  const stepSize = 1200 / edo;
  if (!isValidState()) {
    return <InvalidState value={edo} />;
  }
  const displaySteps = getDisplayStepValues(edo, stepSize);
  return (
    <div>
      <h3>{edo} EDO</h3>
      <h4>Step Size: {stepSize.toFixed(5)} Cents</h4>
      <table>
        <tbody>
          {displaySteps.map((displayStep, index) => {
            return (
              <tr key={index}>
                <td>Step {index}</td>
                <td align="right">{displayStep}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// how get display not have extra space between lines on readout?

const InvalidState = ({ value }) => {
  return (
    <div>
      {value === "" && <p>Enter an EDO</p>}
      {value === "0" && (
        <div>
          <h3>0 EDO</h3>
          <p>John Cage? Is that you?</p>
        </div>
      )}
      {value < 0 && <p>EDO Value Must Be Greater than 0</p>}
    </div>
  );
};
