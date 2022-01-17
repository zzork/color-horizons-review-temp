import generateLTBRScl from "../../LTByRatio/util/generateLTBRScl";

const LTModeReadoutTable = ({
  index,
  ltObject,
  sclData,
  handleSetPlayerClick,
}) => {
  const setPlayerObject = {
    tool: "ltbr",
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
        <button onClick={() => handleSetPlayerClick(setPlayerObject)}>
          Use In Player
        </button>
        <button
          onClick={() => generateLTBRScl(ltObject.mode, sclData, index + 1)}
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

export default LTModeReadoutTable;
