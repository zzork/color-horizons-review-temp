const getIPUniqueSizes = (pattern, stepSize) => {
  const uniqueIntervals = [...new Set(pattern)].sort((a, b) => a - b);
  const intervalsTable = (
    <div>
      <table>
        <tbody>
          {uniqueIntervals.map((value, index) => (
            <tr key={index}>
              <td>{value} Steps </td>
              <td>{(value * stepSize).toFixed(5)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return intervalsTable;
};

export default getIPUniqueSizes;
