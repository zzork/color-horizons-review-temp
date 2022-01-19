import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import OldOTModeReadoutTable from "./OldOTModeReadoutTable";
import convertOTInputToModesObjects from "./util/convertOTInputToModesObjects";

export const OldOTAllModes = ({ scale, selectedComparison }) => {
  const allOTObjects = convertOTInputToModesObjects(scale);
  return (
    <div>
      {allOTObjects.map((otObject, index) => (
        <div key={index}>
          <OldOTModeReadoutTable otObject={otObject} index={index} />
          <br />
          <ComparisonWindow
            scale={otObject.centsValues}
            selectedComparison={selectedComparison}
          />
        </div>
      ))}
    </div>
  );
};
