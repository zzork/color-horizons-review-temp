import getComparisonTable from "./util/getComparisonTable";
import getEndTable from "./util/getEndTable";
import getHighlightBoundaries from "./util/getHighlightBoundaries";
import getRows from "./util/getRows";

export const ComparisonWindow = ({ scale, stateData }) => {
  if (stateData.comparisonWindow.comparison === "off") {
    return <div></div>;
  }

  const selectedComparison = stateData.comparisonWindow.comparison;

  const highlightBoundaries = getHighlightBoundaries(stateData);
  const comparisonTable = getComparisonTable(selectedComparison);
  const rows = getRows(scale, stateData, comparisonTable, highlightBoundaries);
  const endTable = getEndTable(rows);

  let leftWord = "Ratio";
  let rightWord = "Inverted Ratio";
  if (stateData.comparisonWindow.comparison === "just12") {
    leftWord = "Maj/Aug";
    rightWord = "Min/Dim";
  }
  if (stateData.comparisonWindow.comparison === "12tet") {
    leftWord = "Interval";
    rightWord = "Inverted Interval";
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="tableTopRow">{leftWord}</td>
            <td className="tableTopRow">Cents</td>
            <td className="tableTopRow">
              Closest
              <br /> Step
            </td>
            <td className="tableTopRow">Value</td>
            <td className="tableTopRow">Difference</td>
            <td className="tableTopRow">{rightWord}</td>
            <td className="tableTopRow">Cents</td>
            <td className="tableTopRow">
              Closest
              <br /> Step
            </td>
            <td className="tableTopRow">Value</td>
            <td className="tableTopRow">Difference</td>
          </tr>
          {endTable}
        </tbody>
      </table>
    </div>
  );
};
