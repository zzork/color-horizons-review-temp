export const ComparisonOptions = ({ onComparisonSelect }) => {
  return (
    <div>
      <h2>Comparison Window Options</h2>
      <button onClick={() => onComparisonSelect("majorDiatonic")}>
        Major Diatonic
      </button>
      <button onClick={() => onComparisonSelect("primes")}>
        Prime Harmonics
      </button>
      <br />
      <button onClick={() => onComparisonSelect("harmonics6")}>
        Harmonic Series to 6
      </button>
      <button onClick={() => onComparisonSelect("harmonics17")}>
        Harmonic Series to 17
      </button>
      <br />
      <button onClick={() => onComparisonSelect("3")}>3 Limit</button>
      <button onClick={() => onComparisonSelect("5")}>5 Limit</button>
      <button onClick={() => onComparisonSelect("7")}>7 Limit</button>
      <br />
      <button onClick={() => onComparisonSelect("11")}>11 Limit</button>
      <button onClick={() => onComparisonSelect("13")}>13 Limit</button>
      <button onClick={() => onComparisonSelect("17")}>17 Limit</button>
      <br />
      <button onClick={() => onComparisonSelect("off")}>Disable</button>
    </div>
  );
};
