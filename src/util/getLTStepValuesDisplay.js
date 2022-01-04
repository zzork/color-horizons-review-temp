const getLTStepValuesDisplay = (stepsValuesAndDifferences) => {
  let stepValuesDisplay = stepsValuesAndDifferences.map((value, index) => (
    <tr key={index}>
      <td>Step {index}</td>
      <td>{value[0].toFixed(5)}</td>
      <td>{value[1]}</td>
      <td>{value[2]}</td>
    </tr>
  ));
  return stepValuesDisplay;
};

export default getLTStepValuesDisplay;

// SHOULD BE COMPONENT
