import getSortedRatioList from "../../../util/getSortedRatioList";
import OTScaleDisplay from "../Otones/OTScaleDisplay";
import { UTAllModes } from "./UTAllModes";
import getUTRawScale from "./util/getUTRawScale";

export const UTReadout = ({
  numerator,
  start,
  stop,
  progression,
  sclData,
  showEquivalent,
  handleShowEquivalent,
  stateData,
  setStateData,
}) => {
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

  const rawScale = getUTRawScale(numerator, start, stop, progression);
  const scale = getSortedRatioList(rawScale);

  return (
    <div>
      <p>
        <OTScaleDisplay
          rawScale={rawScale}
          showEquivalent={showEquivalent}
          handleShowEquivalent={handleShowEquivalent}
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
      {numerator < 1 && <p>Numerator Must Be Greater Than Zero</p>}
      {start < 1 && <p>Start Must Be Greater Than Zero</p>}
      {stop <= start && <p>Stop Must Be Greater Than Start</p>}
      {stop < 0 && <p>Stop Must Be Greater </p>}
      {progression < 1 && <p>Progression Must Be Greater Than Zero</p>}
    </div>
  );
};
