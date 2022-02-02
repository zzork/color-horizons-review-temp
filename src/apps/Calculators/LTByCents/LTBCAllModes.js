import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModesObjects from "../LTShared/util/convertLTInputToModesObjects";
import LTBCModeReadoutTable from "./LTBCModeReadoutTable";

export const LTBCAllModes = ({
  scale,
  lmsIn,
  sclData,
  stateData,
  setStateData,
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
            stateData={stateData}
            setStateData={setStateData}
          />
          <br />
          <ComparisonWindow scale={ltObject.mode} stateData={stateData} />
        </div>
      ))}
    </div>
  );
};
