import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertLTInputToModesObjects from "../LTShared/util/convertLTInputToModesObjects";
import AxByModeReadoutTable from "./AxByModeReadoutTable";

export const AxByAllModes = ({
  scale,
  lmsIn,
  stateData,
  sclData,
  handleSetPlayerClick,
}) => {
  console.log(stateData);
  const allLTObjects = convertLTInputToModesObjects(scale, lmsIn);
  return (
    <div>
      {allLTObjects.map((ltObject, index) => (
        <div key={index}>
          <AxByModeReadoutTable
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
