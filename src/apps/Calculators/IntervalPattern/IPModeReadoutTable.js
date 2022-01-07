const IPModeReadoutTable = ({ index, patternAndScale: ipObject }) => {
  return (
    <div>
      <h2>
        Mode {index + 1} - {ipObject.pattern.join("")}
        <br />
      </h2>
      <table>
        <tbody>
          <tr>
            <td>Step</td>
            <td>Value</td>
            <td>Difference</td>
            <td>Interval</td>
          </tr>
          {ipObject.mode.map((value, valueIndex) => (
            <tr key={valueIndex}>
              <td>Step {valueIndex}</td>
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
