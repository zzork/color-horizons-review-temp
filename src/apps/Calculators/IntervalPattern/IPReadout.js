import IPUniqueSizesTable from "./IPUniqueSizesTable";
import AllModes from "../../AllModes";
import getEdoFromIntervalPattern from "./util/getEdoFromIntervalPattern";

export const IPReadout = ({ pattern, selectedComparison }) => {
  const isValidState = () => {
    return pattern > 0;
  };
  if (!isValidState()) {
    return <InvalidState value={pattern} />;
  }

  const edo = getEdoFromIntervalPattern(pattern);
  const stepSize = 1200 / edo;

  return (
    <div>
      <h3>{edo} EDO</h3>
      <h4>EDO Step Size = {stepSize.toFixed(5)} cents</h4>
      <IPUniqueSizesTable pattern={pattern} stepSize={stepSize} />
      <AllModes pattern={pattern} selectedComparison={selectedComparison} />
    </div>
  );
};

const InvalidState = ({ value }) => {
  return (
    <div>
      {value === "" && <p>Enter a Pattern</p>}
      {value === "0" && <p>0 is not a Pattern</p>}
      {value < 0 && <p>Pattern Cannot Be Negative</p>}
    </div>
  );
};
