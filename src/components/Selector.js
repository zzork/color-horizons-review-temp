export const Selector = ({ onSelect }) => {
  return (
    <div>
      <h2>Scale Generation Method</h2>
      <button onClick={() => onSelect("edo")}>
        Equal Division of the Octave
      </button>
      <button>
        <i>EDO MOS*</i>
      </button>
      <button onClick={() => onSelect("ip")}>Interval Pattern</button>
      <br />
      <button onClick={() => onSelect("ltbr")}>
        Linear Temperament by Ratio
      </button>
      <button>
        <i>Linear Temperament by Cents*</i>
      </button>
      <br />
      <button>
        <i>Overtone Series*</i>
      </button>
      <button>
        <i>Undertone Series*</i>
      </button>
      <br />
      <button>
        <i>Tonality Diamond*</i>
      </button>
    </div>
  );
};
