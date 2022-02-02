import { handleSetPlayerClick } from "../../../eventHandlers";
import generateEDOMOSScl from "./util/generateEDOMOSScl";

const EDOMOSModeReadoutTable = ({
  index,
  ltObject,
  sclData,
  stateData,
  setStateData,
}) => {
  const setPlayerObject = {
    tool: "edomos",
    scale: ltObject.mode,
    sclData: sclData,
    mode: index + 1,
  };
  return (
    <div>
      <br />
      <h2>
        Mode {index + 1} - {ltObject.lmsList.join("")}
        <br />
        <button
          onClick={() =>
            handleSetPlayerClick(stateData, setStateData, setPlayerObject)
          }
        >
          Use In Player
        </button>
        <button
          onClick={() => generateEDOMOSScl(ltObject.mode, sclData, index + 1)}
        >
          Export .scl
        </button>
      </h2>
      <br />
      <table>
        <tbody>
          <tr>
            <td>Step</td>
            <td>Value</td>
            <td>Difference</td>
            <td>Interval</td>
          </tr>
          {ltObject.mode.map((value, valueIndex) => (
            <tr key={valueIndex}>
              <td>Step {valueIndex}</td>
              <td>{value.toFixed(5)}</td>
              <td>
                {valueIndex === 0
                  ? "-"
                  : ltObject.stepDifferences[valueIndex].toFixed(5)}
              </td>
              <td>
                {valueIndex === 0 ? "-" : ltObject.lmsList[valueIndex - 1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EDOMOSModeReadoutTable;
