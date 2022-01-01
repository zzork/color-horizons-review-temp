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
  patternAndScale.push([0, pattern, scale, stepDifferences]);

  let forLoopPattern = pattern;
  let forLoopScale = [...scale];
  let forLoopDifferences = [...stepDifferences];

  for (let i = 1; i < pattern.length; i++) {
    // pattern values
    let splitPattern = forLoopPattern.split("");
    let firstPatternValue = splitPattern[0];
    splitPattern.shift();
    splitPattern.push(firstPatternValue);
    forLoopPattern = splitPattern.join("");

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
      forLoopPattern,
      forLoopScale,
      [...forLoopDifferences],
    ]);
  }
  // BIG QUESTION
  // BEHAVIOR VERY STRANGE
  // forLoopDifferences must be spread, others don't need to be
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
      {pattern}
      {newReadoutTable}
      <ComparisonWindow scale={scale} selectedComparison={selectedComparison} />
    </div>
  );
};
