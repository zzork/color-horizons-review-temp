import { useEffect, useState } from "react";
import ChordsPlayTable from "./components/ChordsPlayTable";
import {
  setMasterVolume,
  play,
  stop,
  setMasterVolumeStep1,
  stopAllSound,
} from "./services/notePlayerService";
import getCentsScaleRepeating from "./util/getCentsScaleRepeating";
import getHzScale from "./util/getHzScale";
import getKeyboardMapping from "./util/getKeyboardMapping";
import getRootButtonPositions from "./util/getRootButtonPositions";
import { playerStateData } from "./playerStateData";
import getReferencePitch from "./util/getReferencePitch";
import PitchVibrato from "./components/settings/PitchVibrato";
import Delay1 from "./components/settings/Delay1";
import NotesChordsSelector from "./components/settings/NotesChordsSelector";
import MasterVolume from "./components/settings/MasterVolume";
import OscillatorType from "./components/settings/OscillatorType";
import Delay2 from "./components/settings/Delay2";
import Oscilloscope from "./components/Oscilloscope";
import Distortion from "./components/settings/Distortion";
import Tremolo from "./components/settings/Tremolo";
import Attack from "./components/settings/Attack";
import PitchAdjustments from "./components/settings/PitchAdjustments";
import Release from "./components/settings/Release";

const ActualPlayer = ({ incomingScale, playerState, setPlayerState }) => {
  //   const incomingScale = [
  //     0,
  //     138.57266,
  //     266.87091,
  //     386.31371,
  //     603.00041,
  //     701.955,
  //     884.35871,
  //     1049.36294,
  //     2 / 1,
  //   ];

  const generalReferencePitch = playerState.referencePitch;
  const soundReferencePitch = getReferencePitch(playerState);
  const octaveAdjust = playerState.octaveAdjust;
  const note2 = playerState.note2;
  const note3 = playerState.note3;
  const chordsOrSingles = playerState.chordsOrSingles;
  const rootButtonPositions = getRootButtonPositions(incomingScale);
  const hzScale = getHzScale(incomingScale, soundReferencePitch);
  const keyboardMapping = getKeyboardMapping(hzScale, note2, note3);
  const centsScaleRepeating = getCentsScaleRepeating(incomingScale);
  const possibleKeys = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split(
    ""
  );

  // pressed keys is for the visual
  // play notes is for the sound

  const [pressedKeys, setPressedKeys] = useState([]);
  const [playNotes] = useState({});

  // key down and up

  const handleKeyDown = (event) => {
    const pressedKey = event.key.toLowerCase();

    if (possibleKeys.includes(pressedKey)) {
      if (!playNotes.hasOwnProperty(chordsOrSingles)) {
        playNotes[chordsOrSingles] = {};
      }
      if (playNotes[chordsOrSingles][pressedKey]) return;
      const engagedNoteDetails = play(
        keyboardMapping[chordsOrSingles][pressedKey],
        playerState
      );
      playNotes[chordsOrSingles][pressedKey] = engagedNoteDetails;

      if (!pressedKeys.includes(pressedKey)) {
        let noteAdder = [...pressedKeys];
        noteAdder.push(pressedKey);
        setPressedKeys(noteAdder);
      }
    }
  };

  const handleKeyUp = (event) => {
    const releasedKey = event.key.toLowerCase();

    if (possibleKeys.includes(releasedKey)) {
      const engagedNoteDetails = playNotes[chordsOrSingles][releasedKey];
      stop(engagedNoteDetails, playerState);
      playNotes[chordsOrSingles][releasedKey] = null;

      let noteRemover = [...pressedKeys];
      let index = noteRemover.indexOf(releasedKey);
      noteRemover.splice(index, 1);
      setPressedKeys(noteRemover);
    }
  };

  const handleChordsSinglesClick = (event) => {
    let newState = { ...playerState, chordsOrSingles: event.target.name };
    setPlayerState(newState);
  };

  const handleTypeClick = (event) => {
    let newState = { ...playerState, oscillatorType: event.target.name };
    setPlayerState(newState);
  };

  const handleDelay1OnOff = () => {
    let newState = { ...playerState, delay1On: !playerState.delay1On };
    setPlayerState(newState);
  };

  const handleDelay2OnOff = () => {
    let newState = { ...playerState, delay2On: !playerState.delay2On };
    setPlayerState(newState);
  };

  const handlePitchVibratoOnOff = () => {
    let newState = {
      ...playerState,
      pitchVibratoOn: !playerState.pitchVibratoOn,
    };
    setPlayerState(newState);
  };

  const handleTremoloOnOff = () => {
    let newState = {
      ...playerState,
      tremoloOn: !playerState.tremoloOn,
    };
    setPlayerState(newState);
  };

  const handleChange = (event) => {
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

  // this is almost cool... how do I make it ONLY the background?
  const handleDivClick = (event) => {
    // console.log(event.target);
    // if (event.target !== event.currentTarget) console.log("child clicked");
    // else console.log("parent clicked");
    // if (event.currentTarget === null) {
    //   document.getElementById("engage").focus({ preventScroll: true });
    // }
  };

  const tableBorder = {
    // border: "1px solid black",
    borderCollapse: "collapse",
    tableLayout: "fixed",
    width: "40%",
  };

  const tdBorder = {
    border: "1px solid black",
  };

  const thBorder = {
    border: "1px solid black",
  };

  return (
    <div
      id="player"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onClick={handleDivClick}
    >
      <br />
      <br />
      <Oscilloscope referencePitch={generalReferencePitch} />
      <br />
      <br />
      <ChordsPlayTable
        chordsOrSingles={chordsOrSingles}
        centsScaleRepeating={centsScaleRepeating}
        note2={note2}
        note3={note3}
        keyboardMapping={keyboardMapping}
        pressedKeys={pressedKeys}
        rootButtonPositions={rootButtonPositions}
        playerState={playerState}
      />
      <br />
      <button id="engage">Engage</button>
      <br />
      <br />
      <MasterVolume playerState={playerState} handleChange={handleChange} />
      <br />
      <table style={tableBorder}>
        <tbody>
          <tr>
            <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td style={thBorder} colSpan="2">
              <h4>Pitch Adjustments</h4>
            </td>
            <td style={thBorder} colSpan="2">
              <h4>Oscillator Type</h4>
            </td>
            <td style={thBorder} colSpan="2">
              <h4>Single Notes / Chords</h4>
            </td>
          </tr>
          <tr>
            <td style={tdBorder} colSpan="2">
              <PitchAdjustments
                generalReferencePitch={generalReferencePitch}
                octaveAdjust={octaveAdjust}
                handleChange={handleChange}
              />
            </td>
            <td style={tdBorder} colSpan="2">
              <OscillatorType
                playerState={playerState}
                handleTypeClick={handleTypeClick}
              />
            </td>
            <td style={tdBorder} colSpan="2">
              <NotesChordsSelector
                handleChordsSinglesClick={handleChordsSinglesClick}
                handleChange={handleChange}
                playerState={playerState}
              />
            </td>
          </tr>
          <tr>
            <td style={thBorder} colSpan="2">
              <h4>Attack Time</h4>
            </td>
            <td style={thBorder} colSpan="2">
              <h4>Release Time</h4>
            </td>
            <td style={thBorder} colSpan="2">
              <h4>Distortion</h4>
            </td>
          </tr>
          <tr>
            <td style={tdBorder} colSpan="2">
              <Attack playerState={playerState} handleChange={handleChange} />
            </td>
            <td style={tdBorder} colSpan="2">
              <Release playerState={playerState} handleChange={handleChange} />
            </td>
            <td style={tdBorder} colSpan="2">
              <Distortion
                playerState={playerState}
                handleChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td style={thBorder} colSpan="3">
              <h4>Pitch Vibrato</h4>
            </td>
            <td style={thBorder} colSpan="3">
              <h4>Tremolo</h4>
            </td>
          </tr>
          <tr>
            <td style={tdBorder} colSpan="3">
              <PitchVibrato
                playerState={playerState}
                handlePitchVibratoOnOff={handlePitchVibratoOnOff}
                handleChange={handleChange}
              />
            </td>
            <td style={tdBorder} colSpan="3">
              <Tremolo
                playerState={playerState}
                handleTremoloOnOff={handleTremoloOnOff}
                handleChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td style={thBorder} colSpan="3">
              <h4>Delay One</h4>
            </td>
            <td style={thBorder} colSpan="3">
              <h4>Delay Two</h4>
            </td>
          </tr>
          <tr>
            <td style={tdBorder} colSpan="3">
              <Delay1
                playerState={playerState}
                handleChange={handleChange}
                handleDelay1OnOff={handleDelay1OnOff}
              />
            </td>
            <td style={tdBorder} colSpan="3">
              <Delay2
                playerState={playerState}
                handleChange={handleChange}
                handleDelay2OnOff={handleDelay2OnOff}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button>Reset All (Inactive)</button>
      <br />
      <br />
    </div>
  );
};

export default ActualPlayer;
