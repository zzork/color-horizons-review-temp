import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModesObjects from "../LTShared/util/convertLTInputToModesObjects";
import AxByModeReadoutTable from "./AxByModeReadoutTable";

export const AxByAllModes = ({
  scale,
  lmsIn,
  stateData,
  setStateData,
  sclData,
}) => {
  const allLTObjects = convertLTInputToModesObjects(scale, lmsIn);
  return (
    <div>
      {allLTObjects.map((ltObject, index) => (
        <div key={index}>
          <AxByModeReadoutTable
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
