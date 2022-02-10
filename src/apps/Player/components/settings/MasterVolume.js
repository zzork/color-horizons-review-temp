import { handlePlayerChange } from "../../playerEventHandlers";

const MasterVolume = ({ playerState, setPlayerState }) => {
  return (
    <div>
      Master Volume
      <br />
      <input
        type="range"
        min="0"
        max="100"
        value={playerState.masterVolume}
        name="masterVolume"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      {playerState.masterVolume}%
    </div>
  );
};

export default MasterVolume;
