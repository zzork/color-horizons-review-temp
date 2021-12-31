import getReadoutTable from "../util/getReadoutTable";
import { ComparisonWindow } from "./ComparisonWindow";

export const AllModes = ({ pattern, scale, selectedComparison }) => {
  let patternAndScale = [];
  // add zeroth mode, input pattern, input scale to list
  patternAndScale.push([0, pattern, scale]);

  // now it needs to loop and on each one
  // take first value from pattern and put it on the end
  // take first value from scale and put it on the end and add 1200
  // subtract all values by first value's cents number

  let forLoopPattern = pattern;
  let forLoopScale = [...scale];

  for (let i = 1; i < pattern.length; i++) {
    // pattern values
    let splitPattern = forLoopPattern.split("");
    let firstPatternValue = splitPattern[0];
    splitPattern.shift();
    splitPattern.push(firstPatternValue);
    forLoopPattern = splitPattern.join("");

    // scale itself
    forLoopScale.shift();
    forLoopScale.push(0);
    let firstScaleValue = forLoopScale[0];
    forLoopScale = forLoopScale.map((value) => value - firstScaleValue);
    forLoopScale[forLoopScale.length - 1] = 1200;

    patternAndScale.push([i, forLoopPattern, forLoopScale]);
  }

  // NOW FIX THE READOUT

  //   let readout = patternAndScale.map(row =>
  //     <div>
  //         {pattern}
  //         Step {row[0]} -
  //     </div>)

  let readoutTable = getReadoutTable(scale);
  return (
    <div>
      {pattern}
      {readoutTable}
      <ComparisonWindow scale={scale} selectedComparison={selectedComparison} />
    </div>
  );
};
