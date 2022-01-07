import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import LTModeReadoutTable from "./LTModeReadoutTable";
import convertLTInputToModesObjects from "./util/convertLTInputToModesObjects";

export const LTAllModes = ({
  reducedFraction,
  noteTotal,
  selectedComparison,
}) => {
  const allLTObjects = convertLTInputToModesObjects(reducedFraction, noteTotal);
  return (
    <div>
      {allLTObjects.map((ltObject, index) => (
        <div key={index}>
          <LTModeReadoutTable ltObject={ltObject} index={index} />
          <br />
          <ComparisonWindow
            scale={ltObject.mode}
            selectedComparison={selectedComparison}
          />
        </div>
      ))}
    </div>
  );
};
