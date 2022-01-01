import getReadoutTable from "../util/getReadoutTable";
import { ComparisonWindow } from "./ComparisonWindow";

export const AllModes = ({
  pattern,
  scale,
  selectedComparison,
  stepDifferences,
}) => {
  let patternAndScale = [];
  // add zeroth mode, input pattern, input scale to list

  let patternListed = pattern.split("");
  patternAndScale.push([0, patternListed, scale, stepDifferences]);

  let forLoopPattern = [...patternListed];
  let forLoopScale = [...scale];
  let forLoopDifferences = [...stepDifferences];

  for (let i = 1; i < pattern.length; i++) {
    // pattern values
    let firstPatternValue = forLoopPattern[0];
    forLoopPattern.push(firstPatternValue);
    forLoopPattern.shift();

    // differences between steps
    forLoopDifferences.push(forLoopDifferences[1]);
    forLoopDifferences.shift();
    forLoopDifferences[0] = 0;
    // console.log(i, forLoopDifferences);

    // scale itself
    forLoopScale = forLoopScale.map((value) => value - forLoopScale[1]);
    forLoopScale.shift();
    forLoopScale.push(1200);

    patternAndScale.push([
      i,
      [...forLoopPattern],
      forLoopScale,
      [...forLoopDifferences],
    ]);
  }
  // BIG QUESTION
  // BEHAVIOR VERY STRANGE
  // forLoopDifferences must be spread, others don't need to be
  // well, pattern does actually if it needs to not be a string
  // if not, then it takes the final value and overwrites every location on the array
  // why?!

  console.log(patternAndScale);

  // ---

  // need to zip scale, difference, and pattern into rows of a list
  // then map that

  const getNewReadoutTable = (scale, pattern) => {
    return (
      <table>
        <tbody>
          {scale.map((value, index) => (
            <tr key={index}>
              <td>Step {index}</td>
              <td>{value.toFixed(5)}</td>
              <td>Difference</td>
              <td>Ls</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  let newReadoutTable = getNewReadoutTable(scale);

  return (
    <div>
      UGH
      <br />
      <br />
      {pattern}
      {newReadoutTable}
      <ComparisonWindow scale={scale} selectedComparison={selectedComparison} />
    </div>
  );
};
