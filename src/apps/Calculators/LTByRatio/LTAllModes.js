import getStepDifferences from "../../../util/getStepDifferences";
import getUniqueSteps from "../../../util/getUniqueSteps";
import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModes from "./util/convertLTInputToModes";
import getLMSList from "./util/getLMSList";
import getLTScale from "./util/getLTScale";
import getStepsValuesAndDifferences from "./util/getStepsValuesAndDifferences";

export const LTAllModes = ({
  reducedFraction,
  noteTotal,
  selectedComparison,
}) => {
  const allLTObjects = convertLTInputToModes(reducedFraction, noteTotal);

  // COPIED FROM IPALLMODES

  //     const patternAndScales = convertPatternToModes(pattern);
  //     return (
  //         <div>
  //         {patternAndScales.map((patternAndScale, index) => (
  //             <div key={index}>
  //             <LTModeReadoutTable patternAndScale={patternAndScale} index={index} />
  //             <br />
  //             <ComparisonWindow
  //               scale={patternAndScale.mode}
  //               selectedComparison={selectedComparison}
  //               />
  //           </div>
  //         ))}
  //       </div>
  //     );
  // };

  // PREVIOUS WAY TO GET LT READOUT

  // const scale = getLTScale(reducedFraction[0], reducedFraction[1], noteTotal);
  //   const stepDifferences = getStepDifferences(scale);
  //   const sortedUnique = getUniqueSteps(stepDifferences);
  //   const lmsList = getLMSList(stepDifferences, sortedUnique);
  //   const stepsValuesAndDifferences = getStepsValuesAndDifferences(
  //     scale,
  //     stepDifferences,
  //     lmsList
  //   );
  return "yo";
};
