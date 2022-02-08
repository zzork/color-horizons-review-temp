import IPUniqueSizesTable from "./IPUniqueSizesTable";
import getEdoFromIntervalPattern from "./util/getEdoFromIntervalPattern";
import IPAllModes from "./IPAllModes";

export const IPReadout = ({ stateData, setStateData }) => {
  const pattern = stateData.intervalPattern.pattern;

  const isValidState = () => {
    return stateData.intervalPattern.parenthesesMatch && pattern.length > 1;
  };
  if (!isValidState()) {
    return <InvalidState stateData={stateData} />;
  }

  const edo = getEdoFromIntervalPattern(pattern);
  const stepSize = 1200 / edo;

  return (
    <div>
      <h3>{edo} EDO</h3>
      <h4>EDO Step Size = {stepSize.toFixed(5)} cents</h4>
      <IPUniqueSizesTable pattern={pattern} stepSize={stepSize} />
      <IPAllModes stateData={stateData} setStateData={setStateData} />
    </div>
  );
};

const InvalidState = ({ stateData }) => {
  return (
    <div>
      {stateData.intervalPattern.inputPatternDisplay.length === 0 && (
        <p>Enter a Pattern</p>
      )}
      {stateData.intervalPattern.pattern.length === 0 &&
        stateData.intervalPattern.inputPatternDisplay.length !== 0 &&
        stateData.intervalPattern.parenthesesMatch && (
          <p>Entry Contains Only Zeroes and/or Parentheses</p>
        )}
      {stateData.intervalPattern.pattern.length === 1 && (
        <p>Pattern Length Must Be Greater Than 1</p>
      )}
      {!stateData.intervalPattern.parenthesesMatch && (
        <p>Opening and Closing Parentheses Do Not Match</p>
      )}
    </div>
  );
};
