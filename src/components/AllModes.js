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

  const ReadoutTable = ({ patternAndScale }) => {
    console.log(patternAndScale);
    return (
      <div>
        <h2>
          Mode {patternAndScale[0] + 1} - {patternAndScale[1].join("")}
          <br />
        </h2>
        <table>
          <tbody>
            {patternAndScale[2].map((value, index) => (
              <tr key={index}>
                <td>[i][0] Step {index}</td>
                <td>[i][2] {value.toFixed(5)}</td>
                <td>[i][3] Difference</td>
                <td>[i][1] Ls</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const getFinalModesReadout = (patternAndScale) => {
    return patternAndScale.map((value, index) => (
      <div>
        <ReadoutTable patternAndScale={patternAndScale[index]} />
        <ComparisonWindow
          scale={patternAndScale[index][2]}
          selectedComparison={selectedComparison}
        />
      </div>
    ));
  };

  const finalModesReadout = getFinalModesReadout(patternAndScale);

  return <div>{finalModesReadout}</div>;
};
