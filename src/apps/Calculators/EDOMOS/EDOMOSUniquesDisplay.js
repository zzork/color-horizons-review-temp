import getStepDifferences from "../../../util/getStepDifferences";
import getUniqueSteps from "../../../util/getUniqueSteps";

const EDOMOSUniquesDisplay = ({ scale }) => {
  const stepDifferences = getStepDifferences(scale);
  const sortedUnique = getUniqueSteps(stepDifferences);

  let uniquesDisplay = null;

  if (sortedUnique.length < 2) {
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
          </tbody>
        </table>
      </div>
    );
  } // CHANGE OTHERS TO BEHAVE LIKE THIS, AND IMPLEMENT NOTE AMOUNT CANNOT BE GREATER THAN FINAL MOS?
  // CAN THIS BE FURTHER EXTRACTED? PASS LMS VALUE INTO HERE, DEFINE IT EARLIER...

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

export default EDOMOSUniquesDisplay;
