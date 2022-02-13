import { handleSetPlayerClick } from "../../../eventHandlers";
import generateTDScl from "./util/generateTDScl";

const TDModeReadoutTable = ({
  index,
  otObject,
  sclData,
  stateData,
  setStateData,
}) => {
  const setPlayerObject = {
    tool: "td",
    scale: otObject.centsValues,
    sclData: sclData,
    mode: index + 1,
  };
  return (
    <div>
      <h2>
        Mode {index + 1}
        <br />
        <button
          onClick={() =>
            handleSetPlayerClick(stateData, setStateData, setPlayerObject)
          }
        >
          Use In Player
        </button>
        <button
          onClick={() =>
            generateTDScl(otObject.centsValues, sclData, index + 1)
          }
        >
          Export .scl
        </button>
      </h2>
      <br />
      <table>
        <tbody>
          <tr>
            <td className="tableTopRow">Step</td>
            <td className="tableTopRow">Ratio</td>
            <td className="tableTopRow">Value</td>
            <td className="tableTopRow">Difference</td>
          </tr>
          {otObject.ratios.map((values, valueIndex) => (
            <tr key={valueIndex}>
              <td>{valueIndex}</td>
              <td>
                {otObject.ratios[valueIndex][0]} /{" "}
                {otObject.ratios[valueIndex][1]}
              </td>
              <td>{otObject.centsValues[valueIndex].toFixed(5)}</td>
              <td>
                {valueIndex === 0
                  ? "-"
                  : otObject.stepDifferences[valueIndex].toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TDModeReadoutTable;
