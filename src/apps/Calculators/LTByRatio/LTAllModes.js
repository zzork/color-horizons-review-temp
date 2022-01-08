import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import LTModeReadoutTable from "./LTModeReadoutTable";
import convertLTInputToModesObjects from "./util/convertLTInputToModesObjects";

export const LTAllModes = ({ scale, noteTotal, selectedComparison }) => {
  const allLTObjects = convertLTInputToModesObjects(scale, noteTotal);
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
