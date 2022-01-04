import { ComparisonWindow } from "../../components/ComparisonWindow";
import ReadoutTable from "./components/ReadoutTable";
import convertPatternToModes from "./util/convertPatternToModes";

const AllModes = ({ pattern, selectedComparison }) => {
  const patternAndScales = convertPatternToModes(pattern);
  return (
    <div>
      {patternAndScales.map((patternAndScale, index) => (
        <div key={index}>
          <ReadoutTable patternAndScale={patternAndScale} index={index} />
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

export default AllModes;
