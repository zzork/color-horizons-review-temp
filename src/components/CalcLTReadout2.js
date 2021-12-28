export const CalcLTReadout2 = ({ numerator, denominator, noteAmount }) => {
  let stepsValuesList = [];

  for (let i = 0; i < noteAmount; i++) {
    let centsValue =
      i * ((1200 * Math.log(numerator / denominator)) / Math.log(2));
    while (centsValue > 1200) {
      centsValue -= 1200;
    }
    stepsValuesList.push(centsValue);
  }

  stepsValuesList.push(1200);

  stepsValuesList.sort((a, b) => a - b);

  let stepValuesDisplay = stepsValuesList.map((value, index) => (
    <tr>
      <td>Step {index}</td> <td align="right">{value.toFixed(5)}</td>
    </tr>
  ));

  return <table>{stepValuesDisplay}</table>;
};
