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
      <div className="tableClone">
        <h3>{edo} EDO</h3>
        <h4>EDO Step Size = {stepSize.toFixed(5)} cents</h4>
      </div>
      <br />
      <IPUniqueSizesTable pattern={pattern} stepSize={stepSize} />
      <IPAllModes stateData={stateData} setStateData={setStateData} />
    </div>
  );
};

const InvalidState = ({ stateData }) => {
  return (
    <div>
      {stateData.intervalPattern.inputPatternDisplay.length === 0 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Enter a Pattern</p>
          </div>
        </div>
      )}
      {stateData.intervalPattern.pattern.length === 0 &&
        stateData.intervalPattern.inputPatternDisplay.length !== 0 &&
        stateData.intervalPattern.parenthesesMatch && (
          <div>
            <br />
            <div className="tableClone">
              <p>Entry Contains Only Zeroes and/or Parentheses</p>
            </div>
          </div>
        )}
      {stateData.intervalPattern.pattern.length === 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Pattern Length Must Be Greater Than 1</p>
          </div>
        </div>
      )}
      {!stateData.intervalPattern.parenthesesMatch && (
        <div>
          <br />
          <div className="tableClone">
            <p>Opening and Closing Parentheses Do Not Match</p>
          </div>
        </div>
      )}
    </div>
  );
};
