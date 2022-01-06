import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import getEdoScale from "./util/getEdoScale";

export const EDOReadout = ({ edo, selectedComparison }) => {
  const isValidState = () => {
    return edo > 0;
  };
  if (!isValidState()) {
    return <InvalidState value={edo} />;
  }

  const stepSize = 1200 / edo;
  const scale = getEdoScale(edo, stepSize);

  return (
    <div>
      <h3>{edo} EDO</h3>
      <h4>Step Size: {stepSize.toFixed(5)} Cents</h4>
      <table>
        <tbody>
          <tr>
            <td>Step</td>
            <td>Value</td>
          </tr>
          {scale.map((displayStep, index) => {
            return (
              <tr key={index}>
                <td>Step {index}</td>
                <td>{displayStep.toFixed(5)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <ComparisonWindow scale={scale} selectedComparison={selectedComparison} />
    </div>
  );
};

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
