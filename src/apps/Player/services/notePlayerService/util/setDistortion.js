import createDistortionCurve from "./createDistortionCurve";

const setDistortion = (playerState, distortionNode) => {
  if (playerState.distortion > 0) {
    distortionNode.curve = createDistortionCurve(playerState.distortion);
  }
};

export default setDistortion;
