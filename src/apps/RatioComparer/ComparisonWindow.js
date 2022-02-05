import getComparisonTable from "./util/getComparisonTable";
import getEndTable from "./util/getEndTable";
import getHighlightBoundaries from "./util/getHighlightBoundaries";
import getRows from "./util/getRows";

export const ComparisonWindow = ({ scale, stateData }) => {
  const selectedComparison = stateData.comparisonWindow.comparison;

  const highlightBoundaries = getHighlightBoundaries(stateData);
  const comparisonTable = getComparisonTable(selectedComparison);
  const rows = getRows(scale, stateData, comparisonTable, highlightBoundaries);
  const endTable = getEndTable(rows);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Ratio</td>
            <td>Cents</td>
            <td>
              Closest
              <br /> Step
            </td>
            <td>Value</td>
            <td>Difference</td>
            <td>Inverted Ratio</td>
            <td>Cents</td>
            <td>
              Closest
              <br /> Step
            </td>
            <td>Value</td>
            <td>Difference</td>
          </tr>
          {endTable}
        </tbody>
      </table>
    </div>
  );
};
