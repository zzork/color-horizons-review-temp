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
        The buttons below will demonstrate some pure sound waves at various
        frequencies.
      </p>
      <button>250Hz</button>
      <button>325Hz</button>
      <button>440Hz</button>
      <br />
    </div>
  );
};

export default Pitch;
