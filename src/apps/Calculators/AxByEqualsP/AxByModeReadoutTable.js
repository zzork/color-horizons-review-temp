import { handleSetPlayerClick } from "../../../eventHandlers";
import generateAxByScl from "./util/generateAxByScl";

const AxByModeReadoutTable = ({
  index,
  ltObject,
  sclData,
  stateData,
  setStateData,
}) => {
  const setPlayerObject = {
    tool: "axby",
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
          onClick={() => generateAxByScl(ltObject.mode, sclData, index + 1)}
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

export default AxByModeReadoutTable;
