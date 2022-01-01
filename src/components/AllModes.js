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

  //   console.log(patternAndScale);

  // ---

  const getReadoutTable = (patternAndScale) => {
    return (
      <div>
        <h2>
          Mode {patternAndScale[0]} - {patternAndScale[1].join("")}
          <br />
        </h2>
        <table>
          <tbody>
            {patternAndScale[2].map((value, index) => (
              <tr key={index}>
                <td>[0] Step {index}</td>
                <td>[2] {value.toFixed(5)}</td>
                <td>[3] Difference</td>
                <td>[1] Ls</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  console.log(scale);
  console.log(patternAndScale);

  let readoutTable = getReadoutTable(patternAndScale[0]);

  // HOW DO I ACHIEVE:

  // getReadoutTable(patternAndScale[0])
  // <ComparisonWindow scale={patternAndScale[0][2]}
  // getReadoutTable(patternAndScale[1])
  // <ComparisonWindow scale={patternAndScale[1][2]}
  // ...
  // getReadoutTable(patternAndScale[n])
  // <ComparisonWindow scale={patternAndScale[n][2]}

  // I think getReadoutTable needs to be a Component, not a function

  let hork = (
    <div>
      {readoutTable}
      <ComparisonWindow scale={scale} selectedComparison={selectedComparison} />
    </div>
  );

  return (
    <div>
      <br />
      <br />
      {hork}
    </div>
  );
};
