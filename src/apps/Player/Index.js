import generateLTBRScl from "../Calculators/LTByRatio/util/generateLTBRScl";

const Player = ({ showPlayer, playerData }) => {
  // console.log("player current settings:", playerData);
  let title = "";
  let readout = "";
  let scaleReadout = "";
  if (playerData.tool === "ltbr") {
    title = "Linear Temperament By Ratio";
    readout = `${playerData.sclData[2]} Notes of ${playerData.sclData[0]}/${playerData.sclData[1]}, Mode ${playerData.mode}`;
    scaleReadout = playerData.scale.map((note, index) => (
      <div key={index}>{note.toFixed(5)}</div>
    ));
  }
  if (showPlayer === false) {
    return <div></div>;
  } else {
    return (
      <div>
        <h3>{title}</h3>
        <p>{readout}</p>
        <p>
          <button>
            <i>Export .scl</i>
          </button>
        </p>
        <table>
          <tbody>
            <tr>
              <td>{scaleReadout}</td>
              <td>ACTUAL PLAYER GOES HERE</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Player;
