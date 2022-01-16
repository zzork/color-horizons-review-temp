import getSortedRatioList from "../../../util/getSortedRatioList";
import { OTAllModes } from "../OTShared/OTAllModes";
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
    return true;
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
      <OTAllModes scale={scale} selectedComparison={selectedComparison} />
      <p></p>
    </div>
  );
};

const InvalidState = ({ denominator, start, stop, progression }) => {
  return (
    <div>
      {denominator < 1 && <p>Numerator and Denominator are Identical</p>}
    </div>
  );
};
