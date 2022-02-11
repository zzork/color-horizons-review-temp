import getSortedRatioList from "../../../util/getSortedRatioList";
import OTScaleDisplay from "../Otones/OTScaleDisplay";
import { UTAllModes } from "./UTAllModes";
import { handleUtShowEquivalent } from "./utEventHandlers";
import getUTRawScale from "./util/getUTRawScale";

export const UTReadout = ({ stateData, setStateData }) => {
  const numerator = parseInt(stateData.utones.numerator);
  const start = parseInt(stateData.utones.start);
  const stop = parseInt(stateData.utones.stop);
  const progression = parseInt(stateData.utones.progression);

  const isValidState = () => {
    return numerator > 0 && start > 0 && stop > start && progression > 0;
  };
  if (!isValidState()) {
    return (
      <InvalidState
        numerator={numerator}
        start={start}
        stop={stop}
        progression={progression}
      />
    );
  }

  const showEquivalent = stateData.utones.showEquivalent;

  const sclData = [
    parseInt(stateData.utones.numerator),
    parseInt(stateData.utones.start),
    parseInt(stateData.utones.stop),
    parseInt(stateData.utones.progression),
  ];

  const rawScale = getUTRawScale(numerator, start, stop, progression);
  const scale = getSortedRatioList(rawScale);

  return (
    <div>
      <p>
        <OTScaleDisplay
          rawScale={rawScale}
          showEquivalent={showEquivalent}
          handleShowEquivalent={() =>
            handleUtShowEquivalent(stateData, setStateData)
          }
        />
      </p>
      <UTAllModes
        scale={scale}
        sclData={sclData}
        stateData={stateData}
        setStateData={setStateData}
      />
      <p></p>
    </div>
  );
};

const InvalidState = ({ numerator, start, stop, progression }) => {
  return (
    <div>
      {numerator < 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Numerator Must Be Greater Than Zero</p>
          </div>
        </div>
      )}
      {start < 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Start Must Be Greater Than Zero</p>
          </div>
        </div>
      )}
      {stop <= start && (
        <div>
          <br />
          <div className="tableClone">
            <p>Stop Must Be Greater Than Start</p>
          </div>
        </div>
      )}
      {stop < 0 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Stop Must Be Greater Than Zero</p>
          </div>
        </div>
      )}
      {progression < 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Progression Must Be Greater Than Zero</p>
          </div>
        </div>
      )}
    </div>
  );
};
