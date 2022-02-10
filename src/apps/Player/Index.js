import { useEffect, useState } from "react";
import { ComparisonWindow } from "../RatioComparer/ComparisonWindow";
import ActualPlayer from "./ActualPlayer";
import { playerStateData } from "./playerStateData";
import getPlayerReadouts from "./util/getPlayerReadouts";

const Player = ({ stateData, setStateData }) => {
  const [playerState, setPlayerState] = useState(playerStateData);
  const playerReadouts = getPlayerReadouts(stateData.player.playerData);

  useEffect(() => {
    console.log(playerState);
  }, [playerState]);

  if (stateData.player.showPlayer === false) {
    return <div></div>;
  } else {
    return (
      <div>
        <h1>Scale Player</h1>
        <h3>Currently Loaded Scale</h3>

        <h4>
          {playerReadouts.title}
          <br />
          {playerReadouts.readout}
        </h4>
        <p>{playerReadouts.sclButton}</p>
        <ComparisonWindow
          scale={stateData.player.playerData.scale}
          stateData={stateData}
        />
        <ActualPlayer
          playerState={playerState}
          setPlayerState={setPlayerState}
          stateData={stateData}
          setStateData={setStateData}
        />
        <br />
      </div>
    );
  }
};

export default Player;
