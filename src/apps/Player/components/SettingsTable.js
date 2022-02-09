import Attack from "./settings/Attack";
import Delay1 from "./settings/Delay1";
import Delay2 from "./settings/Delay2";
import Distortion from "./settings/Distortion";
import NotesChordsSelector from "./settings/NotesChordsSelector";
import OscillatorType from "./settings/OscillatorType";
import PitchAdjustments from "./settings/PitchAdjustments";
import PitchVibrato from "./settings/PitchVibrato";
import Release from "./settings/Release";
import Tremolo from "./settings/Tremolo";

const SettingsTable = ({ playerState, setPlayerState }) => {
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

  let pitchVibratoClass = "disengagedEffect";
  if (playerState.pitchVibratoOn) {
    pitchVibratoClass = "engagedEffect";
  }
  let tremoloClass = "disengagedEffect";
  if (playerState.tremoloOn) {
    tremoloClass = "engagedEffect";
  }
  let delay1Class = "disengagedEffect";
  if (playerState.delay1On) {
    delay1Class = "engagedEffect";
  }
  let delay2Class = "disengagedEffect";
  if (playerState.delay2On) {
    delay2Class = "engagedEffect";
  }

  return (
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
            <Attack playerState={playerState} setPlayerState={setPlayerState} />
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
          <td className={pitchVibratoClass} colSpan="3">
            <h4>Pitch Vibrato</h4>
          </td>
          <td className={tremoloClass} colSpan="3">
            <h4>Tremolo</h4>
          </td>
        </tr>
        <tr>
          <td className={pitchVibratoClass} colSpan="3">
            <PitchVibrato
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
          <td className={tremoloClass} colSpan="3">
            <Tremolo
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
        </tr>
        <tr>
          <td className={delay1Class} colSpan="3">
            <h4>Delay One</h4>
          </td>
          <td className={delay2Class} colSpan="3">
            <h4>Delay Two</h4>
          </td>
        </tr>
        <tr>
          <td className={delay1Class} colSpan="3">
            <Delay1 playerState={playerState} setPlayerState={setPlayerState} />
          </td>
          <td className={delay2Class} colSpan="3">
            <Delay2 playerState={playerState} setPlayerState={setPlayerState} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SettingsTable;
