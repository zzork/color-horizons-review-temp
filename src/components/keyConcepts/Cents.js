import { basicPlay } from "../../util/aboutNotePlayer";

const Cents = () => {
  return (
    <div>
      <h2 className="center">Cents</h2>
      <p>
        So far the math is relatively simple. But human perception of sound has
        an odd property: it is <b>logarithmic</b>.
      </p>
      <p>
        What this means is that if 220Hz is your root note, 440Hz is perceived
        as the same pitch but one octave higher. That makes perfect sense.
        But...
      </p>
      <p>
        Intuition at this point leads many people to expect 660Hz to be the
        third octave, 880Hz to be the fourth octave, and 1100Hz to be the fifth
        octave. But instead of pure octaves, this creates a harmonic series
        chord:
      </p>
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          Root
          <br />
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          + 220Hz =<br />
          440Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([660])}>
          + 220Hz =<br />
          660Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([880])}>
          + 220Hz =<br />
          880Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([1100])}>
          + 220Hz =<br />
          1100Hz
        </button>
      </div>
      <br />
      <p>
        Thanks to octaves being the result of a 2/1 frequency ratio, the spacing
        is not so intuitively simple! With 220Hz as the root, 440Hz is still the
        second octave, but 880Hz is the third octave. 1760Hz is the fourth
        octave. 3520Hz is the fifth octave.{" "}
        <i>
          The size of the octave in Hz gets exponentially larger as your
          frequencies get higher and higher, because each octave is another
          instance of multiplying the root frequency by 2.
        </i>
      </p>
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          Root
          <br />
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          * 2 =<br />
          440Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([880])}>
          * 2 =<br />
          880Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([1760])}>
          * 2 =<br />
          1760Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([3520])}>
          * 2 =<br />
          3520Hz
        </button>
      </div>
      <br />
      <p>
        So this brings about an important point, the <b>ratios</b> we discussed
        earlier <b>apply specifically to Hz</b> measurements of sounds.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">A Different System of Measurement: Cents</h4>
      <p>
        While many phenomena in the world truly are mathematically logarithmic
        or exponential, it is difficult for many people to naturally think in
        those terms. Because of this, a system that evens out these logarithmic
        differences and measures pitch in the straightforward way you would
        expect was developed: <b>cents</b>.
      </p>
      <p>
        The cents measurement divides the octave into 1200 units. Each multiple
        of 100 (0, 100, 200, 300...) represents a note within 12 Tone Equal
        Temperament. 0 is the root pitch, and 1200 is the octave.
      </p>
      <p>
        {" "}
        To get one octave above 1200, add 1200 again to reach 2400. To get one
        octave above 2400, add 1200 again to reach 3600. This repeated addition
        is much simpler to comprehend than repeated multiplication.
      </p>
      <p>
        Cents measurement is an imperfect system when working outside of 12 Tone
        Equal Temperament, as it is inherently tied to that system. Like the
        interval names discussed in the ratios section, microtonal music will
        need to become much more popular before a more universal standard
        becomes the norm.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Converting a Ratio to Cents</h4>
      <table>
        <tbody>
          <tr>
            <td>1200 * ( log( x / y ) / log( 2 ) ) = c</td>
          </tr>
        </tbody>
      </table>

      <p className="center">
        <b>x</b> - Numerator of Ratio
        <br />
        <b>y</b> - Denominator of Ratio
        <br />
        <b>c</b> - Outcome (Cents)
      </p>

      <p>
        Cents measurement is inherently a measurement of difference. Without a
        reference note, it is meaningless. If someone says "play 300 cents"
        without providing reference pitch in Hz, there is no way to determine
        what pitch that would be.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Converting Cents to Hz</h4>
      <p>
        There is also a formula that will provide a Hz value from a cents
        measurement. Due to cents being inherently a measurement of difference,
        and Hz being an absolute measurement, this formula requires an explicit
        reference pitch.
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              b * 2<sup>(c/1200)</sup> = n
            </td>
          </tr>
        </tbody>
      </table>
      <p className="center">
        <b>b</b> - Reference Pitch in Hz
        <br />
        <b>c</b> - Cents Change to Reference Pitch
        <br />
        <b>n</b> - Outcome (Hz)
      </p>
    </div>
  );
};

export default Cents;
