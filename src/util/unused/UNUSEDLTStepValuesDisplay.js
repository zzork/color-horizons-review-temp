const LTStepValuesDisplay = ({ stepsValuesAndDifferences }) => {
  let stepValuesDisplay = (
    <table>
      <tbody>
        {" "}
        {stepsValuesAndDifferences.map((value, index) => (
          <tr key={index}>
            <td>Step {index}</td>
            <td>{value[0].toFixed(5)}</td>
            <td>{value[1]}</td>
            <td>{value[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return stepValuesDisplay;
};

export default LTStepValuesDisplay;
