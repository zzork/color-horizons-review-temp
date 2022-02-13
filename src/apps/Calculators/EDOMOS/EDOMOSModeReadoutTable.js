import { handleSetPlayerClick } from "../../../eventHandlers";
import addParenthesesToModeReadout from "../../../util/addParenthesesToModeReadout";
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
  const modeReadout = addParenthesesToModeReadout([...ltObject.lmsList]);
  return (
    <div>
      <br />

      <h2>
        Mode {index + 1} - {modeReadout}
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
            <td className="tableTopRow">Step</td>
            <td className="tableTopRow">Value</td>
            <td className="tableTopRow">Difference</td>
            <td className="tableTopRow">Interval</td>
          </tr>
          {ltObject.mode.map((value, valueIndex) => (
            <tr key={valueIndex}>
              <td>{valueIndex}</td>
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
