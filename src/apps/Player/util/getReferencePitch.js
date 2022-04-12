const getReferencePitch = (playerState) => {
  const referencePitch = playerState.referencePitch;
  const octaveAdjust = playerState.octaveAdjust;

  let finalReferencePitch = "";

  if (octaveAdjust === -3) {
    finalReferencePitch = referencePitch / 8;
  }

  if (octaveAdjust === -2) {
    finalReferencePitch = referencePitch / 4;
  }

  if (octaveAdjust === -1) {
    finalReferencePitch = referencePitch / 2;
  }

  if (octaveAdjust === 0) {
    finalReferencePitch = referencePitch;
  }

  if (octaveAdjust === 1) {
    finalReferencePitch = referencePitch * 2;
  }

  if (octaveAdjust === 2) {
    finalReferencePitch = referencePitch * 4;
  }

  if (octaveAdjust === 3) {
    finalReferencePitch = referencePitch * 8;
  }

  return finalReferencePitch;
};

export default getReferencePitch;
