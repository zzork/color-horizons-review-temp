import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertOTInputToModesObjects from "../OTShared/util/convertOTInputToModesObjects";
import TDModeReadoutTable from "./TDModeReadoutTable";

export const TDAllModes = ({
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
          <TDModeReadoutTable
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
