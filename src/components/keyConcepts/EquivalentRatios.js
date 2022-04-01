const EquivalentRatios = () => {
  return (
    <div>
      <h2 className="center">Equivalent Ratios</h2>
      <p>
        In the previous section, you may have noticed we started with 1/1 as the
        root note, then said 2/1 was the simplest harmony available to it. After
        that came 3/2, and then we went straight to 4/3, without examining 3/1.
        This is because of the 2/1 = 1/1 octave phenomenon discussed above.{" "}
        <i>
          The ratios of 3/2 and 3/1 represent the same harmony, just with an
          octave separating the notes.
        </i>{" "}
        They are of the same <b>pitch class</b>.
      </p>
      <p>
        This is an element of JI ratios that can be confusing at first. Because
        multiplying or dividing an element of a ratio by a multiple of 2 creates
        the same note, but in a different octave, JI fractions have different
        equalities than fractions used in regular, basic math.
      </p>
      <p className="center">
        <i>In JI:</i>
        <br /> 3/2 = 3/1 = 6/1 = 12/4 = 24/16
      </p>
      <p>
        The imprecise way to explain how to get the most reduced version of a JI
        fraction is to say that you need to multiply or divide the numerator
        and/or the denominator by 2 until you end up with the octave reduced
        version. (See the next section <b>Cents</b> for the formula that exposes
        if your fraction is within the first octave.)
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Precise Instructions</h4>
      <ol>
        <li>
          If the numerator is smaller than the denominator, multiply the
          numerator by 2 until it is larger than the denominator.
        </li>
        <li>
          If the denominator times 2 is less than the numerator, multiply the
          denominator by 2. When the denominator can no longer be multiplied by
          2 without going over the numerator, stop.
        </li>
        <li>Determine all factors of the numerator.</li>
        <li>Determine all factors of the denominator.</li>
        <li>
          If there are any factors that divide into both the numerator and
          denominator, divide both the numerator and denominator by the greatest
          common factor.
        </li>
      </ol>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Example: 124/256</h4>
      <div className="tableClone">
        <ol>
          <li>
            ‣ {`124 < 256`}
            <br />
            ‣ 124 * 2 = 248
            <br />‣ {`248 < 256`}
            <br />
            ‣ 248 * 2 = 496
            <br />
            ‣ 496/256
            <br />
          </li>
          <li>N/A ({`256 * 2 > 496`})</li>
          <li>Factors of 496 - 1, 2, 4, 8, 16, 31, 62, 124, 248, 496</li>
          <li>Factors of 256 - 1, 2, 4, 8, 16, 32, 64, 128, 256</li>
          <li>
            ‣ Greatest Common Factor - 16
            <br /> ‣ 496/16 = 31
            <br /> ‣ 256/16 = 16
            <br />
          </li>
        </ol>
      </div>
      <p className="center">The octave reduced version of 124/256 is 31/16.</p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Example: 25/4</h4>
      <div className="tableClone">
        <ol>
          <li>N/A ({`25 > 4`})</li>
          <li>
            ‣ {`4 < 25`}
            <br />
            ‣ 4 * 2 = 8<br />‣ {`8 < 25`}
            <br />
            ‣ 8 * 2 = 16
            <br />‣ {`16 < 25`}
            <br />
            ‣ 16 * 2 = 32
            <br />‣ {`32 > 25`}
            <br />‣ Therefore, 16 is our final number in this step
          </li>

          <li>Factors of 25: 1, 5, 25</li>
          <li>Factors of 16: 1, 2, 4, 8, 16</li>
          <li>
            There are no common factors other than 1. No further reduction is
            possible.
          </li>
        </ol>
      </div>
      <p className="center">The octave reduced version of 25/4 is 25/16.</p>
    </div>
  );
};

export default EquivalentRatios;
