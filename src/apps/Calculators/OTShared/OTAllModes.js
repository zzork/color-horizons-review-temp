import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import OTModeReadoutTable from "./OTModeReadoutTable";
import convertOTInputToModesObjects from "./util/convertOTInputToModesObjects";

export const OTAllModes = ({ scale, selectedComparison }) => {
  const allOTObjects = convertOTInputToModesObjects(scale);
  return (
    <div>
      {allOTObjects.map((otObject, index) => (
        <div key={index}>
          <OTModeReadoutTable otObject={otObject} index={index} />
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
