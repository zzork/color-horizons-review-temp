import { play, setMasterVolumeStep1, stop } from "./services/notePlayerService";

export const handleChordsSinglesClick = (
  event,
  playerState,
  setPlayerState
) => {
  let newState = { ...playerState, chordsOrSingles: event.target.name };
  setPlayerState(newState);
};

export const handleTypeClick = (event, playerState, setPlayerState) => {
  let newState = { ...playerState, oscillatorType: event.target.name };
  setPlayerState(newState);
};

export const handleDelay1OnOff = (playerState, setPlayerState) => {
  let newState = { ...playerState, delay1On: !playerState.delay1On };
  setPlayerState(newState);
};

export const handleDelay2OnOff = (playerState, setPlayerState) => {
  let newState = { ...playerState, delay2On: !playerState.delay2On };
  setPlayerState(newState);
};

export const handlePitchVibratoOnOff = (playerState, setPlayerState) => {
  let newState = {
    ...playerState,
    pitchVibratoOn: !playerState.pitchVibratoOn,
  };
  setPlayerState(newState);
};

export const handleTremoloOnOff = (playerState, setPlayerState) => {
  let newState = {
    ...playerState,
    tremoloOn: !playerState.tremoloOn,
  };
  setPlayerState(newState);
};

export const handlePlayerChange = (event, playerState, setPlayerState) => {
  let fieldReader = event.target.name;
  let newValue = event.target.value;

  if (fieldReader === "masterVolume") {
    let newState = { ...playerState, masterVolume: Number(newValue) };
    setPlayerState(newState);
    setMasterVolumeStep1(playerState);
  }

  if (fieldReader === "referencePitch") {
    let newState = { ...playerState, referencePitch: Number(newValue) };
    setPlayerState(newState);
  }

  if (fieldReader === "note2") {
    let newState = { ...playerState, note2: Number(newValue) };
    setPlayerState(newState);
  }

  if (fieldReader === "note3") {
    let newState = { ...playerState, note3: Number(newValue) };
    setPlayerState(newState);
  }

  if (fieldReader === "octaveAdjust") {
    let newState = { ...playerState, octaveAdjust: Number(newValue) };
    setPlayerState(newState);
  }

  if (fieldReader === "attackTime") {
    let newState = { ...playerState, attackTime: Number(newValue) };
    setPlayerState(newState);
  }

  if (fieldReader === "releaseTime") {
    let newState = { ...playerState, releaseTime: Number(newValue) };
    setPlayerState(newState);
  }

  if (fieldReader === "delay1Time") {
    let newState = { ...playerState, delay1Time: Number(newValue) };
    setPlayerState(newState);
  }
  if (fieldReader === "delay1Feedback") {
    let newState = { ...playerState, delay1Feedback: Number(newValue) };
    setPlayerState(newState);
  }

  if (fieldReader === "delay2Time") {
    let newState = { ...playerState, delay2Time: Number(newValue) };
    setPlayerState(newState);
  }
  if (fieldReader === "delay2Feedback") {
    let newState = { ...playerState, delay2Feedback: Number(newValue) };
    setPlayerState(newState);
  }
  if (fieldReader === "pitchVibratoSpeed") {
    let newState = { ...playerState, pitchVibratoSpeed: Number(newValue) };
    setPlayerState(newState);
  }
  if (fieldReader === "pitchVibratoDepth") {
    let newState = { ...playerState, pitchVibratoDepth: Number(newValue) };
    setPlayerState(newState);
  }
  if (fieldReader === "tremoloSpeed") {
    let newState = { ...playerState, tremoloSpeed: Number(newValue) };
    setPlayerState(newState);
  }
  if (fieldReader === "tremoloIntensity") {
    let newState = { ...playerState, tremoloIntensity: Number(newValue) };
    setPlayerState(newState);
  }
  if (fieldReader === "distortion") {
    let newState = { ...playerState, distortion: Number(newValue) };
    setPlayerState(newState);
  }
};

export const handleResetSounds = (playerState, setPlayerState) => {
  let newState = {
    ...playerState,
    referencePitch: 440,
    octaveAdjust: 0,
    chordsOrSingles: "singles",
    note2: 2,
    note3: 4,
    oscillatorType: "triangle",
    attackTime: 10,
    releaseTime: 2000,
    delay1On: false,
    delay1Time: 50,
    delay1Feedback: 75,
    delay2On: false,
    delay2Time: 500,
    delay2Feedback: 50,
    pitchVibratoOn: false,
    pitchVibratoSpeed: 1000,
    pitchVibratoDepth: 10,
    tremoloOn: false,
    tremoloSpeed: 10,
    tremoloIntensity: 80,
    distortion: 0,
  };
  setPlayerState(newState);
};

// mouse events for playing notes
const playNotes = {};

export const handlePlaytableMouseDown = (
  key,
  playerState,
  keyboardMapping,
  pressedKeys,
  setPressedKeys
) => {
  const clickedNote = key;
  if (!playNotes.hasOwnProperty(playerState.chordsOrSingles)) {
    playNotes[playerState.chordsOrSingles] = {};
  }
  const engagedNoteDetails = play(
    keyboardMapping[playerState.chordsOrSingles][clickedNote],
    playerState
  );
  playNotes[playerState.chordsOrSingles][clickedNote] = engagedNoteDetails;

  if (!pressedKeys.includes(clickedNote)) {
    let noteAdder = [...pressedKeys];
    noteAdder.push(clickedNote);
    setPressedKeys(noteAdder);
  }
};

export const handlePlaytableMouseUp = (
  key,
  playerState,
  pressedKeys,
  setPressedKeys
) => {
  const releasedNote = key;

  if (!playNotes[playerState.chordsOrSingles].hasOwnProperty(releasedNote))
    return;
  const engagedNoteDetails =
    playNotes[playerState.chordsOrSingles][releasedNote];
  if (engagedNoteDetails !== null) {
    stop(engagedNoteDetails, playerState);
    playNotes[playerState.chordsOrSingles][releasedNote] = null;
  }

  let noteRemover = [...pressedKeys];
  let index = noteRemover.indexOf(releasedNote);
  noteRemover.splice(index, 1);
  setPressedKeys(noteRemover);
};

export const handlePlaytableMouseLeave = (key, playerState) => {
  const hoveredNote = key;
  if (!playNotes.hasOwnProperty(playerState.chordsOrSingles)) {
    playNotes[playerState.chordsOrSingles] = {};
  }
  if (!playNotes[playerState.chordsOrSingles].hasOwnProperty(hoveredNote))
    return;
  if (playNotes[playerState.chordsOrSingles][hoveredNote] !== null) {
    const engagedNoteDetails =
      playNotes[playerState.chordsOrSingles][hoveredNote];

    stop(engagedNoteDetails, playerState);
    playNotes[playerState.chordsOrSingles][hoveredNote] = null;
  }
};
