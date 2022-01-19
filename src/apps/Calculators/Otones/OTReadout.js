import getSortedRatioList from "../../../util/getSortedRatioList";
import { OldOTAllModes } from "../OTShared/OldOTAllModes";
import OTScaleDisplay from "./OTScaleDisplay";
import getOTRawScale from "./util/getOTRawScale";

export const OTReadout = ({
  denominator,
  start,
  stop,
  progression,
  showEquivalent,
  handleShowEquivalent,
  selectedComparison,
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
      <OldOTAllModes scale={scale} selectedComparison={selectedComparison} />
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
