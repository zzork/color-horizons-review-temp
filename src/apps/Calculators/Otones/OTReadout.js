import getSortedRatioList from "../../../util/getSortedRatioList";
import { OTAllModes } from "./OTAllModes";
import OTScaleDisplay from "./OTScaleDisplay";
import getOTRawScale from "./util/getOTRawScale";

export const OTReadout = ({
  denominator,
  start,
  stop,
  progression,
  sclData,
  showEquivalent,
  handleShowEquivalent,
  selectedComparison,
  handleSetPlayerClick,
}) => {
  const isValidState = () => {
    return denominator > 0 && start > 0 && stop > start && progression > 0;
  };
  if (!isValidState()) {
    return (
      <InvalidState
        denominator={denominator}
        start={start}
        stop={stop}
        progression={progression}
      />
    );
  }

  const rawScale = getOTRawScale(denominator, start, stop, progression);
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
      <OTAllModes
        scale={scale}
        sclData={sclData}
        selectedComparison={selectedComparison}
        handleSetPlayerClick={handleSetPlayerClick}
      />
      <p></p>
    </div>
  );
};

const InvalidState = ({ denominator, start, stop, progression }) => {
  return (
    <div>
      {denominator < 1 && <p>Denominator Must Be Greater Than Zero</p>}
      {start < 1 && <p>Start Must Be Greater Than Zero</p>}
      {stop <= start && <p>Stop Must Be Greater Than Start</p>}
      {stop < 0 && <p>Stop Must Be Greater </p>}
      {progression < 1 && <p>Progression Must Be Greater Than Zero</p>}
    </div>
  );
};
