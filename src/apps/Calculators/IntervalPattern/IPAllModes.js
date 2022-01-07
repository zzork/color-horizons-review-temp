import { ComparisonWindow } from "../../RatioComparer/ComparisonWindow";
import IPModeReadoutTable from "./IPModeReadoutTable";
import convertPatternToModes from "./util/convertPatternToModes";

const IPAllModes = ({ pattern, selectedComparison }) => {
  const patternAndScales = convertPatternToModes(pattern);
  return (
    <div>
      {patternAndScales.map((patternAndScale, index) => (
        <div key={index}>
          <IPModeReadoutTable patternAndScale={patternAndScale} index={index} />
          <br />
          <ComparisonWindow
            scale={patternAndScale.values}
            selectedComparison={selectedComparison}
          />
        </div>
      ))}
    </div>
  );
};

export default IPAllModes;
