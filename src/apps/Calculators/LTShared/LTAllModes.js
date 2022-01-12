import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModesObjects from "./util/convertLTInputToModesObjects";
import LTModeReadoutTable from "./util/LTModeReadoutTable";

export const LTAllModes = ({ scale, selectedComparison, lmsIn }) => {
  const allLTObjects = convertLTInputToModesObjects(scale, lmsIn);
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
