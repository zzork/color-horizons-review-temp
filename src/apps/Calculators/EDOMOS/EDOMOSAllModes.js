import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModesObjects from "../LTShared/util/convertLTInputToModesObjects";
import EDOMOSModeReadoutTable from "./EDOMOSModeReadoutTable";

export const EDOMOSAllModes = ({
  scale,
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
          <EDOMOSModeReadoutTable
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
