const ReadoutTable = ({ index, patternAndScale }) => {
  return (
    <div>
      <h2>
        Mode {index + 1} - {patternAndScale.pattern.join("")}
        <br />
      </h2>
      <table>
        <tbody>
          {patternAndScale.values.map((value, valueIndex) => (
            <tr key={valueIndex}>
              <td>Step {valueIndex}</td>
              <td>{value.toFixed(5)}</td>
              <td>
                {valueIndex === 0
                  ? ""
                  : patternAndScale.stepDifferences[valueIndex - 1].toFixed(5)}
              </td>
              <td>
                {valueIndex === 0
                  ? ""
                  : patternAndScale.pattern[valueIndex - 1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadoutTable;
