const getLTStepValuesDisplay = (stepsValuesAndDifferences) => {
  let stepValuesDisplay = stepsValuesAndDifferences.map((value, index) => (
    <tr key={index}>
      <td>Step {index}</td>
      <td align="center">{value[0].toFixed(5)}</td>
      <td align="center">{value[1]}</td>
      <td align="center">{value[2]}</td>
    </tr>
  ));
  return stepValuesDisplay;
};

export default getLTStepValuesDisplay;
