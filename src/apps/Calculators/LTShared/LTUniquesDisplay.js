import getStepDifferences from "../../../util/getStepDifferences";
import getUniqueSteps from "../../../util/getUniqueSteps";

const LTUniquesDisplay = ({ scale, lmsIn }) => {
  const stepDifferences = getStepDifferences(scale);
  const sortedUnique = getUniqueSteps(stepDifferences);

  let uniquesDisplay = null;

  if (sortedUnique.length === 1) {
    uniquesDisplay = (
      <div>
        <br />
        <h4>Step Sizes</h4>
        <table>
          <tbody>
            <tr>
              <td>{lmsIn[0]}</td>
              <td>{sortedUnique[0].toFixed(5)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (sortedUnique.length === 2) {
    uniquesDisplay = (
      <div>
        <br />
        <h4>Step Sizes</h4>
        <table>
          <tbody>
            <tr>
              <td>{lmsIn[0]}</td>
              <td>{sortedUnique[0].toFixed(5)}</td>
            </tr>
            <tr>
              <td>{lmsIn[2]}</td>
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
              <td>{lmsIn[0]}</td>
              <td>{sortedUnique[0].toFixed(5)}</td>
            </tr>
            <tr>
              <td>{lmsIn[1]}</td>
              <td>{sortedUnique[1].toFixed(5)}</td>
            </tr>
            <tr>
              <td>{lmsIn[2]}</td>
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
