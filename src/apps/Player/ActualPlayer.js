import { useCallback, useEffect, useState } from "react";
import ChordsPlayTable from "./components/ChordsPlayTable";
import { play, stop } from "./services/notePlayerService";
import getCentsScaleRepeating from "./util/getCentsScaleRepeating";
import getHzScale from "./util/getHzScale";
import getKeyboardMapping from "./util/getKeyboardMapping";
import getRootButtonPositions from "./util/getRootButtonPositions";
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
import getAbove22kHz from "./util/getAbove22kHz";
import useOnClickOutside from "./hooks/useOnClickOutside";
import { disableQwerty, reverseQwerty } from "../../eventHandlers";

const ActualPlayer = ({
  playerState,
  setPlayerState,
  stateData,
  setStateData,
}) => {
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

  const incomingScale = stateData.player.playerData.scale;
  const playerActive = stateData.player.active;
  const generalReferencePitch = playerState.referencePitch;
  const soundReferencePitch = getReferencePitch(playerState);
  const octaveAdjust = playerState.octaveAdjust;
  const note2 = playerState.note2;
  const note3 = playerState.note3;
  const chordsOrSingles = playerState.chordsOrSingles;
  const rootButtonPositions = getRootButtonPositions(incomingScale);
  const hzScale = getHzScale(incomingScale, soundReferencePitch);
  const above22kHz = getAbove22kHz(hzScale);
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
  const handleInputClick = useCallback(
    (event) => {
      if (playerActive && event.target.type === "number") {
        disableQwerty(stateData, setStateData);
      }
    },
    [playerActive]
  );

  useOnClickOutside(handleInputClick);

  useEffect(() => {
    if (!playerActive) return;
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
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [playerActive, pressedKeys, playerState]);

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
    <div id="player">
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
      {above22kHz && (
        <div>
          Selection Contains Values Above the Range of Human Hearing
          <br />
          <br />
        </div>
      )}
      <button onClick={() => reverseQwerty(stateData, setStateData)}>
        {playerActive ? "Disengage QWERTY Playback" : "Engage QWERTY Playback"}
      </button>
      <br />
      <br />
      <MasterVolume playerState={playerState} setPlayerState={setPlayerState} />
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
                playerState={playerState}
                setPlayerState={setPlayerState}
              />
            </td>
            <td style={tdBorder} colSpan="2">
              <OscillatorType
                playerState={playerState}
                setPlayerState={setPlayerState}
              />
            </td>
            <td style={tdBorder} colSpan="2">
              <NotesChordsSelector
                playerState={playerState}
                setPlayerState={setPlayerState}
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
              <Attack
                playerState={playerState}
                setPlayerState={setPlayerState}
              />
            </td>
            <td style={tdBorder} colSpan="2">
              <Release
                playerState={playerState}
                setPlayerState={setPlayerState}
              />
            </td>
            <td style={tdBorder} colSpan="2">
              <Distortion
                playerState={playerState}
                setPlayerState={setPlayerState}
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
                setPlayerState={setPlayerState}
              />
            </td>
            <td style={tdBorder} colSpan="3">
              <Tremolo
                playerState={playerState}
                setPlayerState={setPlayerState}
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
                setPlayerState={setPlayerState}
              />
            </td>
            <td style={tdBorder} colSpan="3">
              <Delay2
                playerState={playerState}
                setPlayerState={setPlayerState}
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
