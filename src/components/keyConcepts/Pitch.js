import { basicPlay } from "../../util/aboutNotePlayer";

const Pitch = () => {
  return (
    <div>
      <h2 className="center">Pitch</h2>
      <p>
        Why is this important? If an object vibrates at a consistent rate, we
        perceive it as having "pitch", which is how "high" or "low" we consider
        a sound to be. Pitch is a mental phenomenon that arises from a
        vibration's rate (its frequency). We measure frequency in absolute terms
        using Hertz (Hz), which is the amount of times the vibration happens per
        second.
      </p>
      <p>
        If something is vibrating too slowly or too quickly, we cannot hear it.
        The human range of perception has a sweet spot between 20 vibrations per
        second (20Hz) and 20,000 vibrations per second (20kHz). Within that
        range is every sound you have ever experienced, and the lowest and
        highest pitches you can imagine.
      </p>
      <p>
        The buttons below will demonstrate some sound waves at various
        frequencies. All soundwaves on this page will be sawtooth waves, as it
        is easier to hear tuning discrepencies with more angular waves than pure
        sine waves.
      </p>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          330Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          440Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([550])}>
          550Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([660])}>
          660Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([770])}>
          770Hz
        </button>
      </div>
      <br />
    </div>
  );
};

export default Pitch;
