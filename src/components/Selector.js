export const Selector = ({ onViewSelect }) => {
  return (
    <div>
      <h2>Scale Generation Method</h2>
      <button onClick={() => onViewSelect("edo")}>
        Equal Division of the Octave
      </button>
      <button onClick={() => onViewSelect("edomos")}>EDO MOS</button>
      <button onClick={() => onViewSelect("ip")}>Interval Pattern</button>
      <br />
      <button onClick={() => onViewSelect("ltbr")}>
        Linear Temperament by Ratio
      </button>
      <button onClick={() => onViewSelect("ltbc")}>
        Linear Temperament by Cents
      </button>
      <br />
      <button onClick={() => onViewSelect("axby")}>ax + by = p</button>
      <button onClick={() => onViewSelect("td")}>Tonality Diamond</button>
      <br />
      <button onClick={() => onViewSelect("ot")}>Otones</button>
      <button onClick={() => onViewSelect("ut")}>Utones</button>
      <br />
    </div>
  );
};
