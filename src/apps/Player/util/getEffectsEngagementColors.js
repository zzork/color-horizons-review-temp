const getEffectsEngagementColors = (playerState) => {
  let effectsOnOffColors = {
    pitchVibratoClass: "disengagedEffect",
    pitchVibratoHeading: "disengagedEffect",
    tremoloClass: "disengagedEffect",
    tremoloHeading: "disengagedEffect",
    delay1Class: "disengagedEffect",
    delay1Heading: "disengagedEffect",
    delay2Class: "disengagedEffect",
    delay2Heading: "disengagedEffect",
  };

  if (playerState.pitchVibratoOn) {
    effectsOnOffColors.pitchVibratoClass = "engagedEffect";
    effectsOnOffColors.pitchVibratoHeading = "engagedEffectHeading";
  }
  if (playerState.tremoloOn) {
    effectsOnOffColors.tremoloClass = "engagedEffect";
    effectsOnOffColors.tremoloHeading = "engagedEffectHeading";
  }
  if (playerState.delay1On) {
    effectsOnOffColors.delay1Class = "engagedEffect";
    effectsOnOffColors.delay1Heading = "engagedEffectHeading";
  }
  if (playerState.delay2On) {
    effectsOnOffColors.delay2Class = "engagedEffect";
    effectsOnOffColors.delay2Heading = "engagedEffectHeading";
  }
  return effectsOnOffColors;
};

export default getEffectsEngagementColors;
