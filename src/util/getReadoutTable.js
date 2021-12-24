const getReadoutTable = (stepValuesList) => {
  return (
    <table>
      <tbody>
        {stepValuesList.map((value, index) => (
          <tr key={index}>
            <td>Step {index}</td>
            <td align="right">{value.toFixed(5)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default getReadoutTable;
