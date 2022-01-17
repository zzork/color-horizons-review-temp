const Player = ({ showPlayer, playerData }) => {
  // console.log("player current settings:", playerData);
  if (showPlayer === false) {
    return <div></div>;
  } else {
    return <div>SHOWING</div>;
  }
};

export default Player;
