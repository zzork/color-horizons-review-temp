import getStepDifferences from "../../../util/getStepDifferences";
import getUniqueSteps from "../../../util/getUniqueSteps";
import getLTScale from "./util/getLTScale";

const LTUniquesDisplay = ({ reducedFraction, noteTotal }) => {
  const scale = getLTScale(reducedFraction[0], reducedFraction[1], noteTotal);
  const stepDifferences = getStepDifferences(scale);
  const sortedUnique = getUniqueSteps(stepDifferences);

  let uniquesDisplay = null;

  if (sortedUnique.length < 2) {
    uniquesDisplay = <div>Not enough notes</div>;
  }

  if (sortedUnique.length === 2) {
    uniquesDisplay = (
      <div>
        <br />
        <h4>Step Sizes</h4>
        <table>
          <tbody>
            <tr>
              <td>L</td>
              <td>{sortedUnique[0].toFixed(5)}</td>
            </tr>
            <tr>
              <td>s</td>
              <td>{sortedUnique[1].toFixed(5)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (sortedUnique.length === 3) {
    uniquesDisplay = (
      <div>
        <br />
        <h4>Step Sizes</h4>
        <table>
          <tbody>
            <tr>
              <td>L</td>
              <td>{sortedUnique[0].toFixed(5)}</td>
            </tr>
            <tr>
              <td>m</td>
              <td>{sortedUnique[1].toFixed(5)}</td>
            </tr>
            <tr>
              <td>s</td>
              <td>{sortedUnique[2].toFixed(5)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return uniquesDisplay;
};

export default LTUniquesDisplay;
