import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import convertOTInputToModesObjects from "../OTShared/util/convertOTInputToModesObjects";
import UTModeReadoutTable from "./UTModeReadoutTable";

export const UTAllModes = ({ scale, sclData, stateData, setStateData }) => {
  const allOTObjects = convertOTInputToModesObjects(scale);
  return (
    <div>
      {allOTObjects.map((otObject, index) => (
        <div key={index}>
          <UTModeReadoutTable
            otObject={otObject}
            sclData={sclData}
            index={index}
            stateData={stateData}
            setStateData={setStateData}
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
