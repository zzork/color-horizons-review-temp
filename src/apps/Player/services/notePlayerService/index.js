import createDelayNode from "./util/createDelayNode";
import createDelayGainNode from "./util/createDelayGainNode";
import setDelay1 from "./util/setDelay1";
import setDelay2 from "./util/setDelay2";
import createDistortionNode from "./util/createDistortionNode";
import setDistortion from "./util/setDistortion";
import setTremolo from "./util/setTremolo";
import createTremoloNode from "./util/createTremoloNode";
import createTremoloIntensityNode from "./util/createTremoloIntensityNode";
import createTremoloSpeedNode from "./util/createTremoloSpeedNode";
import createMasterVolumeNode from "./util/createMasterVolumeNode";
import createBrickwall from "../../util/createBrickwall";
import createOscillator from "./util/createOscillator";
import createNoteGainNode from "./util/createNoteGainNode";
import initiateRelease from "./util/initiateRelease";
import setMasterVolumeStep2 from "./util/setMasterVolumeStep2";

// audio context
export const synth = new (window.AudioContext || window.webkitAudioContext)();

// master volume
const masterVolumeNode = createMasterVolumeNode(synth);
export const setMasterVolumeStep1 = (playerState) => {
  setMasterVolumeStep2(playerState, synth, masterVolumeNode);
};

// oscilloscope
export const oscilloscopeAnalyser = synth.createAnalyser();

// brickwall
const brickwall = createBrickwall(
  synth,
  masterVolumeNode,
  oscilloscopeAnalyser
);

// delay 1
const delay1GainNode = createDelayGainNode(synth, brickwall);
const delay1 = createDelayNode(synth, delay1GainNode);
delay1GainNode.connect(delay1); // complete the feedback loop

// delay 2
const delay2GainNode = createDelayGainNode(synth, brickwall);
const delay2 = createDelayNode(synth, delay2GainNode);
delay2GainNode.connect(delay2); // complete the feedback loop

// tremolo
const tremoloNode = createTremoloNode(synth, brickwall);
const tremoloIntensityNode = createTremoloIntensityNode(synth, tremoloNode);
const tremoloSpeedNode = createTremoloSpeedNode(synth, tremoloIntensityNode);

// distortion
const distortionNode = createDistortionNode(synth, tremoloNode);

///////////////////////////////////////////////////////////////

export const play = (hzValues, playerState) => {
  // multiplay used to reduce volume when chord buttons played
  let multiPlay = false;
  if (hzValues.length > 1) {
    multiPlay = true;
  }
  const gainNode = createNoteGainNode(
    synth,
    playerState,
    multiPlay,
    distortionNode,
    tremoloNode
  );
  const oscillators = [];
  for (const hzValue of hzValues) {
    const oscillator = createOscillator(synth, gainNode, hzValue, playerState);
    oscillator.start();
    oscillators.push(oscillator);
  }
  // change user settings on the player end
  setDelay1(playerState, delay1, delay1GainNode);
  setDelay2(playerState, delay1, delay2, delay2GainNode);
  setTremolo(
    playerState,
    tremoloNode,
    tremoloSpeedNode,
    tremoloIntensityNode,
    delay1,
    delay2
  );
  setDistortion(playerState, distortionNode);
  return {
    gainNode,
    oscillators,
  };
};

export const stop = async ({ oscillators, gainNode }, playerState) => {
  await initiateRelease(synth, gainNode, playerState);
  for (const oscillator of oscillators) {
    oscillator.stop();
  }
};
