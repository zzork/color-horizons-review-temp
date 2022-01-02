import getReadoutTable from "../util/getReadoutTable";
import { ComparisonWindow } from "./ComparisonWindow";

export const AllModes = ({
  pattern,
  scale,
  selectedComparison,
  stepDifferences,
}) => {
  const patternAndScale = convertPatternToModes();
  return (
    <div>
      {patternAndScale.map((value, index) => (
        <div>
          <ReadoutTable patternAndScale={patternAndScale[index]} />
          <ComparisonWindow
            scale={patternAndScale[index][2]}
            selectedComparison={selectedComparison}
          />
        </div>
      ))}
    </div>
  );
};

// BIG QUESTION
// BEHAVIOR VERY STRANGE
// forLoopDifferences must be spread, others don't need to be
// well, pattern does actually if it needs to not be a string
// if not, then it takes the final value and overwrites every location on the array
// why?!

// ---
