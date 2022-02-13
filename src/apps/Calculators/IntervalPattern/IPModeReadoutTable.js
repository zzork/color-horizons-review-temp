import { handleSetPlayerClick } from "../../../eventHandlers";
import addParenthesesToModeReadout from "../../../util/addParenthesesToModeReadout";
import generateIPScl from "./util/generateIPScale";

const IPModeReadoutTable = ({ index, ipObject, stateData, setStateData }) => {
  const sclData = addParenthesesToModeReadout([...ipObject.pattern]);
  const setPlayerObject = {
    tool: "ip",
    scale: ipObject.mode,
    sclData: sclData,
    mode: index + 1,
  };
  const modeDisplay = addParenthesesToModeReadout([...ipObject.pattern]);

  return (
    <div>
      <h2>
        Mode {index + 1} - {modeDisplay}
        <br />
        <button
          onClick={() =>
            handleSetPlayerClick(stateData, setStateData, setPlayerObject)
          }
        >
          Use In Player
        </button>
        <button
          onClick={() => generateIPScl(ipObject.mode, sclData, index + 1)}
        >
          Export .scl
        </button>
      </h2>
      <table>
        <tbody>
          <tr>
            <td className="tableTopRow">Step</td>
            <td className="tableTopRow">Value</td>
            <td className="tableTopRow">Difference</td>
            <td className="tableTopRow">Interval</td>
          </tr>
          {ipObject.mode.map((value, valueIndex) => (
            <tr key={valueIndex}>
              <td>{valueIndex}</td>
              <td>{value.toFixed(5)}</td>
              <td>
                {valueIndex === 0
                  ? "-"
                  : ipObject.stepDifferences[valueIndex - 1].toFixed(5)}
              </td>
              <td>
                {valueIndex === 0 ? "-" : ipObject.pattern[valueIndex - 1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPModeReadoutTable;
