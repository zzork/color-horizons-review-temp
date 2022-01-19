import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModesObjects from "../LTShared/util/convertLTInputToModesObjects";
import LTBRModeReadoutTable from "./LTBRModeReadoutTable";

export const LTBRAllModes = ({
  scale,
  selectedComparison,
  lmsIn,
  sclData,
  handleSetPlayerClick,
}) => {
  const allLTObjects = convertLTInputToModesObjects(scale, lmsIn);
  return (
    <div>
      {allLTObjects.map((ltObject, index) => (
        <div key={index}>
          <LTBRModeReadoutTable
            ltObject={ltObject}
            index={index}
            sclData={sclData}
            handleSetPlayerClick={handleSetPlayerClick}
          />
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
