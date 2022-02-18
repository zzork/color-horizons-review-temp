import getReducedFraction from "../../../util/getReducedFraction";

const TDTable = ({ checked, allOtUt, showEquivalent }) => {
  const cellEquivalentConverter = (innerLoopNumber, outerLoopNumber) => {
    if (showEquivalent === false) {
      return `${innerLoopNumber} / ${outerLoopNumber}`;
    }
    if (showEquivalent === true) {
      let reducedFraction = getReducedFraction(
        innerLoopNumber,
        outerLoopNumber
      );
      return `${reducedFraction[0]} / ${reducedFraction[1]}`;
    }
  };

  const getCellDisplay = (innerLoopNumber, outerLoopNumber) => {
    if (allOtUt === "all") {
      if (innerLoopNumber === outerLoopNumber) {
        return "unison";
      }
      return cellEquivalentConverter(innerLoopNumber, outerLoopNumber);
    }
    if (allOtUt === "ot") {
      if (innerLoopNumber === outerLoopNumber) {
        return "unison";
      }
      if (innerLoopNumber < outerLoopNumber) {
        return "*";
      }
      if (innerLoopNumber > outerLoopNumber) {
        return cellEquivalentConverter(innerLoopNumber, outerLoopNumber);
      }
    }
    if (allOtUt === "ut") {
      if (innerLoopNumber === outerLoopNumber) {
        return "unison";
      }
      if (innerLoopNumber > outerLoopNumber) {
        return "*";
      }
      if (innerLoopNumber < outerLoopNumber) {
        return cellEquivalentConverter(innerLoopNumber, outerLoopNumber);
      }
    }
  };

  const topRow = checked.map((number, index) => (
    <td key={index} className="tableTopRow">
      <b>{number}</b>
    </td>
  ));
  const additionalRows = checked.map((outerLoopNumber, index) => (
    <tr key={index}>
      <td className="tableTopRow">
        <b>{outerLoopNumber}</b>
      </td>
      {checked.map((innerLoopNumber, index) => (
        // <td>
        //   {getReducedRatiosTableDisplay(innerLoopNumber, outerLoopNumber)}
        // </td>
        <td key={index}>{getCellDisplay(innerLoopNumber, outerLoopNumber)}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <tbody>
        <tr>
          <td>*</td>
          {topRow}
        </tr>
        {additionalRows}
      </tbody>
    </table>
  );
};

export default TDTable;
