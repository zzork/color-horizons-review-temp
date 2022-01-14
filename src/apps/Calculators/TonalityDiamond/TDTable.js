import getReducedFraction from "../../../util/getReducedFraction";

const TDTable = ({ checked }) => {
  const getReducedRatiosTableDisplay = (numerator, denominator) => {
    if (numerator === denominator) {
      return "*";
    }
    const reducedFraction = getReducedFraction(numerator, denominator);
    return `${reducedFraction[0]} / ${reducedFraction[1]}`;
  };

  const topRow = checked.map((number) => (
    <td>
      <b>{number}</b>
    </td>
  ));
  const additionalRows = checked.map((outerLoopNumber) => (
    <tr>
      <td>
        <b>{outerLoopNumber}</b>
      </td>
      {checked.map((innerLoopNumber) => (
        // REDUCED DISPLAY, SWITCH BETWEEN THESE TWO, OR FIND A BETTER METHOD

        // <td>
        //   {getReducedRatiosTableDisplay(innerLoopNumber, outerLoopNumber)}
        // </td>

        <td>
          {innerLoopNumber === outerLoopNumber ? (
            "unison"
          ) : (
            <div>
              {innerLoopNumber} / {outerLoopNumber}
            </div>
          )}
        </td>
      ))}
    </tr>
  ));

  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          {topRow}
        </tr>
        {additionalRows}
      </tbody>
    </table>
  );
};

export default TDTable;
