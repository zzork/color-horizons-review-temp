const Cents = () => {
  return (
    <div>
      <h2 className="center">Cents</h2>
      <p>
        So far the math is easy enough. But human perception of sound has an odd
        property: it is logarithmic.
      </p>
      <p>
        What this means is that if 220Hz is your root note, 440Hz is perceived
        as the same pitch but one octave higher. That makes perfect sense.
        Intuition leads most people to expect 660Hz to be the third octave,
        880Hz to be the fourth octave, and 1100Hz to be the fifth octave.
      </p>
      <p>
        But instead, the spacing is uneven! 880Hz is the third octave. 1760Hz is
        the fourth octave. 3250Hz is the fifth octave. The size of the octave
        gets larger and larger as your frequencies get higher and higher,
        because each octave is another instance of multiplying the root
        frequency by 2.
      </p>
      <p>
        So this brings about an important point, the ratios we discussed earlier
        apply specifically to Hz measurements of sounds.
      </p>
      <p>
        While many phenomena in the world truly are mathematically logarithmic
        or exponential, it is difficult for the human mind to naturally think in
        those terms. Because of this, a system that evens out these logarithmic
        differences and measures frequencies in the straightforward way you
        would expect was developed: cents.
      </p>
      <p>
        The cents measurement divides the octave into 1200 units, meaning that
        each 100 matches one pitch of 12 tone equal temperament. If 0 is your
        root pitch, 1200 is your octave. To get one octave above that, add 1200
        again to reach 2400. To get one octave above that, add 1200 to reach
        3600. This repeated addition is much simpler to comprehend than repeated
        multiplication.
      </p>
      <p>
        Cents measurement is kind of an imperfect system when working outside of
        12 tone equal temperament, as it is inherently tied to that system, but
        microtonal music will need to become much more popular before a new,
        better standard becomes commonplace. So for now it's just the way it is!
      </p>
      <p>
        Below is the formula for converting a ratio to cents. Variables x and y
        are your ratio's numerator and denominator. Variable c is the cents
        measurement that represents that ratio.
      </p>
      <table>
        <tbody>
          <tr>
            <td>1200 * ( log( x / y ) / log( 2 ) ) = c</td>
          </tr>
        </tbody>
      </table>
      <p>
        Cents measurement is inherently a measurement of difference. Without a
        reference note, it is meaningless. If someone says "play 300 cents"
        without providing reference pitch in Hz, there is no way to determine
        what pitch that would be.
      </p>
      <p>
        There is also a reverse formula, that will get a Hz value from a cents
        measurement, again provided that you have a reference frequency:
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
      <p>
        In the above formula, variable b is your base frequency in Hz. Variable
        c is the cents value by which you are modifying your root pitch.
        Variable n, the result, is the resulting Hz value.
      </p>
    </div>
  );
};

export default Cents;
