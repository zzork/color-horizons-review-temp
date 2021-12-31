import getReadoutTable from "../util/getReadoutTable";
import { ComparisonWindow } from "./ComparisonWindow";

export const AllModes = ({ pattern, scale, selectedComparison }) => {
  let readoutTable = getReadoutTable(scale);
  return (
    <div>
      {pattern}
      {readoutTable}
      <ComparisonWindow scale={scale} selectedComparison={selectedComparison} />
    </div>
  );
};
