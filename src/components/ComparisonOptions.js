export const ComparisonOptions = ({ onComparisonChoice }) => {
  return (
    <div>
      <h2>Comparison Window Options</h2>
      <button onClick={() => onComparisonChoice("primes")}>
        Prime Harmonics
      </button>
      <button onClick={() => onComparisonChoice("harmonics")}>
        Harmonic Series to 17
      </button>
      <br />
      <button onClick={() => onComparisonChoice("3")}>3 Limit</button>
      <button onClick={() => onComparisonChoice("5")}>5 Limit</button>
      <button onClick={() => onComparisonChoice("7")}>7 Limit</button>
      <br />
      <button onClick={() => onComparisonChoice("11")}>11 Limit</button>
      <button onClick={() => onComparisonChoice("13")}>13 Limit</button>
      <button onClick={() => onComparisonChoice("17")}>17 Limit</button>
    </div>
  );
};
