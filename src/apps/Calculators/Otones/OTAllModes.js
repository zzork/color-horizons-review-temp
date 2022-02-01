import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertOTInputToModesObjects from "../OTShared/util/convertOTInputToModesObjects";
import OTModeReadoutTable from "./OTModeReadoutTable";

export const OTAllModes = ({
  scale,
  sclData,
  selectedComparison,
  handleSetPlayerClick,
  stateData,
}) => {
  const allOTObjects = convertOTInputToModesObjects(scale);
  return (
    <div>
      {allOTObjects.map((otObject, index) => (
        <div key={index}>
          <OTModeReadoutTable
            otObject={otObject}
            sclData={sclData}
            index={index}
            handleSetPlayerClick={handleSetPlayerClick}
          />
          <br />
          <ComparisonWindow
            scale={otObject.centsValues}
            stateData={stateData}
          />
        </div>
      ))}
    </div>
  );
};
