import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModesObjects from "../LTShared/util/convertLTInputToModesObjects";
import LTBCModeReadoutTable from "./LTBCModeReadoutTable";

export const LTBCAllModes = ({
  scale,
  selectedComparison,
  lmsIn,
  sclData,
  handleSetPlayerClick,
  stateData,
}) => {
  const allLTObjects = convertLTInputToModesObjects(scale, lmsIn);
  return (
    <div>
      {allLTObjects.map((ltObject, index) => (
        <div key={index}>
          <LTBCModeReadoutTable
            ltObject={ltObject}
            index={index}
            sclData={sclData}
            handleSetPlayerClick={handleSetPlayerClick}
          />
          <br />
          <ComparisonWindow scale={ltObject.mode} stateData={stateData} />
        </div>
      ))}
    </div>
  );
};
