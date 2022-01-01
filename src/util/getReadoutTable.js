const getReadoutTable = (scale, pattern) => {
  return (
    <table>
      <tbody>
        {scale.map((value, index) => (
          <tr key={index}>
            <td>Step {index}</td>
            <td>{value.toFixed(5)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default getReadoutTable;
