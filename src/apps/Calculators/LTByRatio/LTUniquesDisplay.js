const UniquesDisplay = ({ sortedUnique }) => {
  let uniquesDisplay = null;
  if (sortedUnique.length < 2) {
    uniquesDisplay = <div>Not enough notes</div>;
  }
  if (sortedUnique.length === 2) {
    uniquesDisplay = (
      <div>
        L - {sortedUnique[0]}
        <br />s - {sortedUnique[1]}
      </div>
    );
  }
  if (sortedUnique.length === 3) {
    uniquesDisplay = (
      <div>
        L - {sortedUnique[0]}
        <br />m - {sortedUnique[1]}
        <br />s - {sortedUnique[2]}
      </div>
    );
  }
  return uniquesDisplay;
};

export default UniquesDisplay;
