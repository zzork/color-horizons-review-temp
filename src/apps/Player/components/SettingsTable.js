import getEffectsEngagementColors from "../util/getEffectsEngagementColors";
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
  const effectsOnOffColors = getEffectsEngagementColors(playerState);

  return (
    <table className="settingsTable">
      <tbody>
        <tr>
          <td colSpan="2">
            <h4>Pitch Adjustments</h4>
          </td>
          <td colSpan="2">
            <h4>Oscillator Type</h4>
          </td>
          <td colSpan="2">
            <h4>Single Notes / Chords</h4>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <PitchAdjustments
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
          <td colSpan="2">
            <OscillatorType
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
          <td colSpan="2">
            <NotesChordsSelector
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <h4>Attack Time</h4>
          </td>
          <td colSpan="2">
            <h4>Release Time</h4>
          </td>
          <td colSpan="2">
            <h4>Distortion</h4>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <Attack playerState={playerState} setPlayerState={setPlayerState} />
          </td>
          <td colSpan="2">
            <Release
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
          <td colSpan="2">
            <Distortion
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
        </tr>
        <tr>
          <td className={effectsOnOffColors.pitchVibratoHeading} colSpan="3">
            <h4>Pitch Vibrato</h4>
          </td>
          <td className={effectsOnOffColors.tremoloHeading} colSpan="3">
            <h4>Tremolo</h4>
          </td>
        </tr>
        <tr>
          <td className={effectsOnOffColors.pitchVibratoClass} colSpan="3">
            <PitchVibrato
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
          <td className={effectsOnOffColors.tremoloClass} colSpan="3">
            <Tremolo
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
          </td>
        </tr>
        <tr>
          <td className={effectsOnOffColors.delay1Heading} colSpan="3">
            <h4>Delay One</h4>
          </td>
          <td className={effectsOnOffColors.delay2Heading} colSpan="3">
            <h4>Delay Two</h4>
          </td>
        </tr>
        <tr>
          <td className={effectsOnOffColors.delay1Class} colSpan="3">
            <Delay1 playerState={playerState} setPlayerState={setPlayerState} />
          </td>
          <td className={effectsOnOffColors.delay2Class} colSpan="3">
            <Delay2 playerState={playerState} setPlayerState={setPlayerState} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SettingsTable;
