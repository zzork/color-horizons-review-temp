import { handleSetPlayerClick } from "../../../eventHandlers";
import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import generateEDOScl from "./util/generateEDOScl";
import getEdoScale from "./util/getEdoScale";

export const EDOReadout = ({ stateData, setStateData }) => {
  const edo = stateData.edo.value;

  const isValidState = () => {
    return edo > 0;
  };
  if (!isValidState()) {
    return <InvalidState value={edo} />;
  }

  const stepSize = 1200 / edo;
  const scale = getEdoScale(edo);

  const setPlayerObject = {
    tool: "edo",
    scale: scale,
    edo: edo,
  };

  return (
    <div>
      <br />
      <div className="tableClone">
        <h3>{edo} EDO</h3>
        <h4>Step Size: {stepSize.toFixed(5)} Cents</h4>
      </div>
      <br />
      <button
        onClick={() =>
          handleSetPlayerClick(stateData, setStateData, setPlayerObject)
        }
      >
        Use In Player
      </button>
      <button onClick={() => generateEDOScl(scale, edo)}>Export .scl</button>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td className="tableTopRow">Step</td>
            <td className="tableTopRow">Value</td>
          </tr>
          {scale.map((displayStep, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{displayStep.toFixed(5)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <ComparisonWindow scale={scale} stateData={stateData} />
    </div>
  );
};

const InvalidState = ({ value }) => {
  return (
    <div>
      {value === "" && (
        <div>
          <br />
          <div className="tableClone">
            <p>Enter an EDO</p>
          </div>
        </div>
      )}
      {value < 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>EDO Value Must Be Greater than 0</p>
          </div>
        </div>
      )}
    </div>
  );
};
