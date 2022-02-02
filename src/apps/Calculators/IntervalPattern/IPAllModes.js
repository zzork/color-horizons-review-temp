import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import IPModeReadoutTable from "./IPModeReadoutTable";
import convertPatternToModesObjects from "./util/convertPatternToModesObjects";

const IPAllModes = ({ pattern, stateData, setStateData }) => {
  const allIPObjects = convertPatternToModesObjects(pattern);
  return (
    <div>
      {allIPObjects.map((ipObject, index) => (
        <div key={index}>
          <IPModeReadoutTable
            ipObject={ipObject}
            index={index}
            stateData={stateData}
            setStateData={setStateData}
          />
          <br />
          <ComparisonWindow scale={ipObject.mode} stateData={stateData} />
        </div>
      ))}
    </div>
  );
};

export default IPAllModes;
