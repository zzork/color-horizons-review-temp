import {
  setShowAxbyInfo,
  setShowEdoInfo,
  setShowEdoMosInfo,
  setShowIpInfo,
  setShowLtbcInfo,
  setShowLtbrInfo,
  setShowOtInfo,
  setShowTdInfo,
  setShowUtInfo,
} from "./infoEventHandlers";

export const EdoInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        {/* <div className="writtenAreas" style={{ textAlign: "justify" }}> */}
        <div className="writtenAreas">
          <p>
            Splitting the octave into equal divisions other than 12 is one of
            the simplest methods for accessing new tonalities.
          </p>
          <p>
            In order to do so, take the octave in cents (1200) and divide by the
            amount of notes desired. Then add that value onto itself until 1200
            cents is reached.
          </p>
          <p>
            Some options will provide more possibilities for harmonious results
            than others. Higher note counts will provide more options for
            consonant intervals, but the tradeoff is that having too many notes
            available can become unwieldy to actually compose and play with.
          </p>
          <p>
            As an example, let's split the octave into 5 equal divisions. 5edo
            is the lowest option that provides harmonies unavailable within
            12edo. (Since 2, 3, and 4 are all factors of 12, they only provide
            notes already available within 12edo.)
          </p>
          <table>
            <tbody>
              <tr>
                <td>1200 / 5 = 240</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td className="lighterTable">Iteration</td>
                <td className="lighterTable">Cents Value</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>240</td>
              </tr>
              <tr>
                <td>2</td>
                <td>480</td>
              </tr>
              <tr>
                <td>3</td>
                <td>720</td>
              </tr>
              <tr>
                <td>4</td>
                <td>960</td>
              </tr>
              <tr>
                <td>5</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>

          <p>The complete 5edo scale:</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>240</td>
                <td>480</td>
                <td>720</td>
                <td>960</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>

          <p>
            5edo provides a loose approximation of the perfect fifth (3/2) and
            perfect fourth (4/3), which are approximated within 12edo, but it
            has no other intervals that are contained within 12edo (i.e. no
            minor or major seconds, thirds, sixths, sevenths). Instead it
            provides approximations of the 8th harmonic (8/7) and its inverted
            interval, the harmonic minor 7th (7/4). These are low-complexity
            harmonies that are not accessible within 12edo.
          </p>
          <br />
        </div>
        <button
          className="mb"
          onClick={() => setShowEdoInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const EdoMosInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          <p>
            A rank-2 scale is created by choosing a generating interval and then
            continually stacking it on top of itself within a chosen size window
            called a period. This tool specifically creates octave-based scales,
            or scales with a period of exactly one octave. As such, when
            resulting values of this process are above 1200 cents, the value is
            reduced by 1200 continually until the result is between 0 and 1200.
          </p>
          <p>
            In this case, the generating interval is a certain amount of steps
            of an Equal Division of the Octave (EDO) scale. This is often
            notated "steps\edo".
          </p>
          <p>
            For example, let's create a 5 note scale using 11 steps of 19edo
            (11\19). Find the generator by dividing 1200 by 19, then multiplying
            that number by 11.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1200 / 19 = 63.158</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td>63.158 * 11 = 694.737</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td className="lighterTable">Iteration</td>
                <td className="lighterTable">Raw</td>
                <td className="lighterTable">Octave Reduced</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>694.737</td>
                <td>694.737</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1389.474</td>
                <td>189.474</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2084.211</td>
                <td>884.211</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2778.948</td>
                <td>378.948</td>
              </tr>
            </tbody>
          </table>
          <p>
            Once the chosen amount of iterations has been reached, arrange the
            pitches in order.
          </p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>189.474</td>
                <td>378.947</td>
                <td>694.737</td>
                <td>884.211</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />

          <p>
            The inverted generator can be found by taking the EDO and
            subtracting the original step count from it. The inverted generator
            will create the same final set of modes, but the modes will be
            generated in a different order.
          </p>
          <p>For example, 9\15 inverts to 6\15. (15 - 9 = 6)</p>

          <p>
            If the EDO divided by the amount of steps chosen (or the inverted
            amount of steps chosen) results in a whole number, the system will
            close in on itself, and will actually represent a smaller EDO.
          </p>
          <p>
            For example, 4\12 is equivalent to 1\3. (This will also be true for
            8\12, as it inverts to 4\12.)
          </p>
          <table>
            <tbody>
              <tr>
                <td>1200 / 12 = 100</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td>100 * 4 = 400</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td className="lighterTable">Iteration</td>
                <td className="lighterTable">Cents Value</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>400</td>
              </tr>
              <tr>
                <td>2</td>
                <td>800</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            If the chosen EDO divided by the step amount (or its inversion) does
            not result in a whole number, it is possible to keep adding notes
            until reaching every single note in the EDO. For example, 12 / 5 =
            2.4, so 5\12 will iterate through every note available within 12edo.
          </p>
          <p>
            If the chosen EDO is prime, every step choice possible will iterate
            through the every note available in the EDO. For example, with
            11edo, 11 iterations of every step value possible can be run before
            the system closes on itself.
          </p>
          <p>
            Rank-2 scales have an interesting property where they always create
            scales of exactly 2 or 3 step sizes. Any scale created using this
            method that results in 2 step sizes is known as a Moment of Symmetry
            scale.
          </p>
        </div>
        <br />
        <button
          className="mb"
          onClick={() => setShowEdoMosInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const IpInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          <p>
            This interval pattern scale function will always return Equal
            Division of the Octave (EDO) based scales. When a pattern is
            entered, the values provided are added together to determine from
            which EDO the scale will be derived.
          </p>
          <p>
            For example, <b>55151</b>:
          </p>
          <table>
            <tbody>
              <tr>
                <td>5 + 5 + 1 + 5 + 1 = 17</td>
              </tr>
            </tbody>
          </table>
          <p>
            This pattern adds to 17edo. Divide the octave by the EDO to
            determine the cents value of a single step in the EDO.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1200 / 17 = 70.588</td>
              </tr>
            </tbody>
          </table>
          <p>
            Then, multiply each value in the input field by the EDO's single
            step value to get the step values between each degree of the scale.
          </p>
          <table>
            <tbody>
              <tr>
                <td>70.588 * 5</td>
                <td>70.588 * 5</td>
                <td>70.588 * 1</td>
                <td>70.588 * 5</td>
                <td>70.588 * 1</td>
              </tr>
              <tr>
                <td>= 352.941</td>
                <td>= 352.941</td>
                <td>= 70.588</td>
                <td>= 352.941</td>
                <td>= 70.588</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now add each value to the sum of the values that come before it to
            get the cents values of each note in the scale.
          </p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>+</td>
                <td>352.941</td>
                <td>=</td>
                <td>352.941</td>
              </tr>
              <tr>
                <td>352.941</td>
                <td>+</td>
                <td>352.941</td>
                <td>=</td>
                <td>705.882</td>
              </tr>
              <tr>
                <td>705.882</td>
                <td>+</td>
                <td>70.588</td>
                <td>=</td>
                <td>776.470</td>
              </tr>
              <tr>
                <td>776.470</td>
                <td>+</td>
                <td>352.941</td>
                <td>=</td>
                <td>1129.411</td>
              </tr>
              <tr>
                <td>1129.411</td>
                <td>+</td>
                <td>70.588</td>
                <td>=</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>

          <p>The complete scale:</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>352.941</td>
                <td>705.882</td>
                <td>776.470</td>
                <td>1129.411</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <button
          className="mb"
          onClick={() => setShowIpInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const LtbrInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          {/* <div> */}
          <p>
            A rank-2 scale is created by choosing a generating interval and then
            continually stacking it on top of itself within a chosen size window
            called a period. This tool specifically creates octave-based scales,
            or scales with a period of exactly one octave. As such, when
            resulting values of this process are above 1200 cents, the value is
            reduced by 1200 continually until the result is between 0 and 1200.
          </p>
          <p>
            In this case, the generating interval is a ratio. In order to
            convert a ratio to cents, apply the following formula.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1200 * log( numerator / denominator ) / log(2)</td>
              </tr>
            </tbody>
          </table>
          <p>
            In this case, let's choose 7/4 as the generating interval. We will
            iterate over this process until we have 5 notes in the scale.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1200 * log(7 / 4) / log(2) = 968.826</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td className="lighterTable">Iteration</td>
                <td className="lighterTable">Raw Value</td>
                <td className="lighterTable">Octave Reduced</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>968.826</td>
                <td>968.826</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1937.652</td>
                <td>737.652</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2906.478</td>
                <td>506.478</td>
              </tr>
              <tr>
                <td>4</td>
                <td>3875.304</td>
                <td>275.304</td>
              </tr>
            </tbody>
          </table>
          <p>
            Once the chosen amount of iterationss has been reached, arrange the
            pitches in order.
          </p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>275.304</td>
                <td>506.478</td>
                <td>737.652</td>
                <td>968.826</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            The inverted generator can be found by taking the ratio, reversing
            the numerator and denominator, multiplying the new numerator by 2,
            and then reducing the ratio into its simplest form if necessary. The
            inverted generator will create the same final set of modes, but the
            modes will be generated in a different order.
          </p>
          <p>For example, 8/7 inverts to 7/4. (8/7 → 7/8 → 14/8 → 7/4)</p>
          <p>
            Something to note is that every single linear temperament generated
            by a ratio will continue on infinitely. No ratio will ever line up
            perfectly with 2/1 (1200 cents) when repeating this process. It is
            always possible to add more notes to a scale created in this manner,
            the circle will never close.
          </p>
          <p>
            Rank-2 scales have an interesting property where they always create
            scales of exactly 2 or 3 step sizes. Any scale created using this
            method that results in 2 step sizes is known as a Moment of Symmetry
            scale.
          </p>
        </div>
        <br />
        <button
          className="mb"
          onClick={() => setShowLtbrInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const LtbcInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          <p>
            A rank-2 scale is created by choosing a generating interval and then
            continually stacking it on top of itself within a chosen size window
            called a period. This tool specifically creates octave-based scales,
            or scales with a period of exactly one octave. As such, when
            resulting values of this process are above 1200 cents, the value is
            reduced by 1200 continually until the result is between 0 and 1200.
          </p>
          <p>
            The Rank-2 Scale by Cents (Octave Period) option can create any
            scale that the EDO, EDO Steps, or Rank-2 Scale by Ratio (Octave
            Period) tools can create. At their core, each of those are just
            subsets of what is available utilizing this tool.
          </p>
          <p>
            For example, let's look at a 5 note scale using a generator of
            671.288. (Side note: extending this generator to 7 notes generates
            an anti-Lydian Mavila scale.)
          </p>
          <table>
            <tbody>
              <tr>
                <td className="lighterTable">Iteration</td>
                <td className="lighterTable">Raw Value</td>
                <td className="lighterTable">Octave Reduced</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>671.288</td>
                <td>671.288</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1342.576</td>
                <td>142.576</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2013.864</td>
                <td>813.864</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2685.152</td>
                <td>285.152</td>
              </tr>
            </tbody>
          </table>
          <p>Then, arrange the pitches in order.</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>142.576</td>
                <td>285.152</td>
                <td>671.288</td>
                <td>813.864</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            The inverted generator can be found by taking 1200 and subtracting
            your generator from it. The inverted generator will create the same
            final set of modes, but the modes will be generated in a different
            order.
          </p>
          <p>
            For example, 671.288 inverts to 528.712. (1200 - 671.288 = 528.712)
          </p>
          <p>
            Rank-2 scales have an interesting property where they always create
            scales of exactly 2 or 3 step sizes. Any scale created using this
            method that results in 2 step sizes is known as a Moment of Symmetry
            scale.
          </p>
        </div>
        <br />
        <button
          className="mb"
          onClick={() => setShowLtbcInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const AxbyInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          <p>
            The ax + by = p method is a non-standard scale generation method and
            can often lead to dissonant results. With experimentation, it can
            sometimes yield interesting scales.
          </p>
          <h4 className="center">Process</h4>
          <p>
            It uses basic algebraic principles. To use it, define variable A,
            the size of the first interval, and variable X, how many instances
            of the first variable size are present in the scale.
          </p>
          <p>
            Then, manually choose variable Y, which represents how many
            instances of the second interval will be present in the scale.
          </p>
          <p>
            The variable P on the other side of the equation represents the
            period, which is at what value the scale repeats itself. In this
            case, the P will be the octave (2/1 or 1200 cents), though this
            method could also be applied to non-octave scales.
          </p>
          <p>The formula:</p>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>A</b>
                  <br />
                  size of first interval
                </td>
                <td>*</td>
                <td>
                  <b>X</b>
                  <br />
                  instances of first interval
                </td>
                <td>+</td>
                <td>
                  <b>B</b>
                  <br />
                  size of second interval
                </td>
                <td>*</td>
                <td>
                  <b>Y</b>
                  <br />
                  instances of second interval
                </td>
                <td>=</td>
                <td>
                  <b>P</b>
                  <br />
                  period (1200)
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            After all of the input fields have been filled, the tool solves the
            only variable left in the equation, which is B, the size of the
            second interval.
          </p>
          <p>
            Once B is solved, the tool will spread the two intervals out amongst
            each other as evenly as possible. It does this by taking the larger
            step count of the two provided and dividing it by the smaller step
            count. If this results in a decimal value, the result is always
            rounded up to the whole number above it. Then the smaller step
            quantity is dispersed evenly throughout the larger step quantity
            using the resulting value.
          </p>
          <h4 className="center">Example</h4>
          <p>
            One way to choose first interval sizes that can yield interesting
            results is to enter the cents value of a ratio. As an example, let's
            try using 25/24: 70.672 cents.
          </p>
          <p>
            To create a 5 note scale with this as the small step, one could
            enter 2 in the First Interval Steps box, then 3 in the Second
            Interval Steps box. This gives a complete equation to solve: (70.672
            * 2) + (b * 3) = 1200.
          </p>
          <table>
            <tbody>
              <tr>
                <td>(70.672 * 2) + (b * 3)</td>
                <td>=</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>(141.344) + (b * 3)</td>
                <td>=</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>b * 3</td>
                <td>=</td>
                <td>1200 - 141.344</td>
              </tr>
              <tr>
                <td>b * 3</td>
                <td>=</td>
                <td>1056.656</td>
              </tr>
              <tr>
                <td>b</td>
                <td>=</td>
                <td>1056.656 / 3</td>
              </tr>
              <tr>
                <td>b</td>
                <td>=</td>
                <td>352.885</td>
              </tr>
            </tbody>
          </table>
          <p>Solving for B yields a neutral third of 352.885.</p>
          <p>
            Now take the larger step amount of the two provided (in this case 3)
            and divide it by the lower amount, in this case 2. This provides
            1.5, and this tool will always round any decimal value up, so it
            becomes 2. Now iterate over the larger step count, in this case LLL,
            and place the smaller step size into the pattern every 2 iterations.
            In this case, the second iteration does not have 2 large steps to
            skip over, so instead it just jumps over the 1 that is actually
            there. The final outcome is LLsLs.
          </p>
          <table>
            <tbody>
              <tr>
                <td>L</td>
                <td>L</td>
                <td>s</td>
                <td>L</td>
                <td>s</td>
              </tr>
              <tr>
                <td>352.885</td>
                <td>352.885</td>
                <td>70.672</td>
                <td>352.885</td>
                <td>70.672</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>+</td>
                <td>352.885</td>
                <td>=</td>
                <td>352.885</td>
              </tr>
              <tr>
                <td>352.885</td>
                <td>+</td>
                <td>352.885</td>
                <td>=</td>
                <td>705.770</td>
              </tr>
              <tr>
                <td>705.770</td>
                <td>+</td>
                <td>70.672</td>
                <td>=</td>
                <td>776.442</td>
              </tr>
              <tr>
                <td>776.442</td>
                <td>+</td>
                <td>352.885</td>
                <td>=</td>
                <td>1129.327</td>
              </tr>
              <tr>
                <td>1129.327</td>
                <td>+</td>
                <td>70.672</td>
                <td>=</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>

          <p>The complete scale:</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>352.885</td>
                <td>705.770</td>
                <td>776.443</td>
                <td>1129.328</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <button
          className="mb"
          onClick={() => setShowAxbyInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const TdInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          <h4 className="center">Process</h4>
          <p>
            With the Tonality Diamond function, a set of integers are chosen and
            combined with one another to create a set of ratios. Each integer
            chosen is combined with each other integer chosen to create two
            ratios, one with the larger number on top (the overtone version),
            and one with the smaller number on top (the undertone version).
          </p>
          <p>
            Depending on the integers chosen, sometimes multiple ratios within
            the diamond will reduce down to the same cents value. If this is the
            case, the duplicate values are removed. As more factors are
            included, more duplicates tend to arise, unless all factors chosen
            are prime numbers, since those cannot reduce.
          </p>
          <p>
            After choosing the integers, there is a choice to include in the
            scale all values in the diamond, only the overtones, or only the
            undertones. Interestingly, the overtones-only and undertones-only
            options end up creating the same final set of modal transformations,
            but generated in a different order.
          </p>
          <p>
            The "all" option will include both the overtones and undertones, and
            will always double the amount of values available in the scale other
            than 1/1 and 2/1.
          </p>
          <br />
          <h4 className="center">Example: 1-3-5, All</h4>
          <p>
            First let's look at all values created by 1, 3, and 5. This is the
            resulting table with totally raw values.
          </p>
          <table>
            <tbody>
              <tr>
                <td>*</td>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td className="tableTopRow">
                  <b>5</b>
                </td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td>1/1</td>
                <td>3/1</td>
                <td>5/1</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td>1/3</td>
                <td>3/3</td>
                <td>5/3</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>5</b>
                </td>
                <td>1/5</td>
                <td>3/5</td>
                <td>5/5</td>
              </tr>
            </tbody>
          </table>
          <p>
            Then octave reduce each ratio on the table. Notice that with this
            combination of integers all values on the table are unique.
          </p>
          <table>
            <tbody>
              <tr>
                <td>*</td>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td className="tableTopRow">
                  <b>5</b>
                </td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td>unison</td>
                <td>3/2</td>
                <td>5/4</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td>4/3</td>
                <td>unison</td>
                <td>5/3</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>5</b>
                </td>
                <td>8/5</td>
                <td>6/5</td>
                <td>unison</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now apply 1200*(log(x/y)/log(2) to each ratio to get its cents
            value, and sort the values in order.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>6/5</td>
                <td>315.641</td>
              </tr>
              <tr>
                <td>5/4</td>
                <td>386.314</td>
              </tr>
              <tr>
                <td>4/3</td>
                <td>498.045</td>
              </tr>
              <tr>
                <td>3/2</td>
                <td>701.955</td>
              </tr>
              <tr>
                <td>8/5</td>
                <td>813.686</td>
              </tr>
              <tr>
                <td>5/3</td>
                <td>884.359</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h4 className="center">Example: 1-3-9, Overtones Only</h4>
          <p>
            With some combinations of integers, the table will end up with
            duplicate values. For example, this happens with the factor
            combination 1-3-9. This example will use the overtone setting
            instead of using all the resulting values in the scale.
          </p>
          <table>
            <tbody>
              <tr>
                <td>*</td>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td className="tableTopRow">
                  <b>9</b>
                </td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td>1/1</td>
                <td>3/1</td>
                <td>9/1</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td>1/3</td>
                <td>3/3</td>
                <td>9/3</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>9</b>
                </td>
                <td>1/9</td>
                <td>3/9</td>
                <td>9/9</td>
              </tr>
            </tbody>
          </table>
          <p>Undertones removed and values octave reduced:</p>
          <table>
            <tbody>
              <tr>
                <td>*</td>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td className="tableTopRow">
                  <b>9</b>
                </td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>1</b>
                </td>
                <td>unison</td>
                <td>3/2</td>
                <td>9/8</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>3</b>
                </td>
                <td>*</td>
                <td>unison</td>
                <td>3/2</td>
              </tr>
              <tr>
                <td className="tableTopRow">
                  <b>9</b>
                </td>
                <td>*</td>
                <td>*</td>
                <td>unison</td>
              </tr>
            </tbody>
          </table>
          <p>
            9/3 and 3/1 both reduce to 3/2. As such, the 1-3-9 overtone set
            leaves only 1/1, 9/8, 3/2, and the octave 2/1.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>9/8</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>3/2</td>
                <td>701.955</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <br />
        <button
          className="mb"
          onClick={() => setShowTdInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const OtInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          <h4 className="center">Process</h4>
          <p>
            The Otonal and Utonal scale generation methods provide scales that
            are built off of a chosen integer, resulting in scale values that
            have low-complexity ratio relationships between one another. In the
            case of an Otonal scale, the user chooses the denominator, then
            chooses what values will appear in the numerators of each value in
            the scale by choosing a first value (Start), a last value (Stop),
            and how often the tool will take a value from that overtone series
            and insert it into the scale (Progression).
          </p>
          <p>
            It is important to note that the progression tool available here is
            only one way to create an Otonal scale. The values do not need to be
            evenly spaced. It is currently outside the scope of the tools
            available on this website, but one could create a scale using any
            interger numerators they like over the denominator they choose.
          </p>
          <p>
            It is also important to note that both the Otonal and Utonal scale
            tools here are not strict. A true Otonal scale should not have any
            numerator values less than the denominator, and a true Utonal scale
            should not have any denominator values less than the numerator, but
            this tool allows both because those settings can create useful
            results.
          </p>
          <br />
          <h4 className="center">Example - 5 to 10 over 5 - Progression 1</h4>
          <p>
            As an example, let's examine an overtone series with the denominator
            of 5, starting on 5, ending on 10, and with a progression of 1,
            meaning that every value in the series between 5 and 10 will be
            inserted into the final scale.
          </p>
          <p>The raw result:</p>
          <table>
            <tbody>
              <tr>
                <td>5/5</td>
                <td>6/5</td>
                <td>7/5</td>
                <td>8/5</td>
                <td>9/5</td>
                <td>10/5</td>
              </tr>
            </tbody>
          </table>

          <p>
            In this case there are no values other than the root and the octave
            that will reduce, due to 5 being prime.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>6/5</td>
                <td>7/5</td>
                <td>8/5</td>
                <td>9/5</td>
                <td>2/1</td>
              </tr>
            </tbody>
          </table>
          <p>
            The values are already in order, so all that needs to be done is to
            apply 1200*log(x/y)/log(2) to convert these values to cents.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>6/5</td>
                <td>315.641</td>
              </tr>
              <tr>
                <td>7/5</td>
                <td>582.512</td>
              </tr>
              <tr>
                <td>8/5</td>
                <td>813.686</td>
              </tr>
              <tr>
                <td>9/5</td>
                <td>1017.596</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h4 className="center">Example - 2 to 14 over 2 - Progression 2</h4>
          <p>
            As an additional example, to demonstrate how the Progression setting
            works and how duplicate values are eliminated, let's examine
            denominator 2, start value 2, end value 14, and progression 2.
          </p>
          <p>The raw result:</p>
          <table>
            <tbody>
              <tr>
                <td>2/2</td>
                <td>4/2</td>
                <td>6/2</td>
                <td>8/2</td>
                <td>10/2</td>
                <td>12/2</td>
                <td>14/2</td>
              </tr>
            </tbody>
          </table>
          <p>And now those values reduced:</p>

          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>2/1</td>
                <td>3/2</td>
                <td>2/1</td>
                <td>5/4</td>
                <td>3/2</td>
                <td>7/4</td>
              </tr>
            </tbody>
          </table>
          <p>
            6/2 and 12/2 both reduce to 3/2. 4/2 and 8/2 both reduce to 2/1,
            which is always implied in an octave based scale regardless.
            Therefore, despite the fact that the method generates 7 raw values,
            the outcome has only 4 unique pitches.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5/4</td>
                <td>386.313</td>
              </tr>
              <tr>
                <td>3/2</td>
                <td>701.955</td>
              </tr>
              <tr>
                <td>7/4</td>
                <td>968.826</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </div>
        <button
          className="mb"
          onClick={() => setShowOtInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const UtInfo = ({ stateData, setStateData }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="writtenAreas">
          <h4 className="center">Process</h4>
          <p>
            The Otonal and Utonal scale generation methods provide scales that
            are built off of a chosen integer, resulting in scale values that
            have low-complexity ratio relationships between one another. In the
            case of an Otonal scale, the user chooses the numerator, then
            chooses what values will appear in the denominators of each value in
            the scale by choosing a first value (Start), a last value (Stop),
            and how often the tool will take a value from that overtone series
            and insert it into the scale (Progression).
          </p>
          <p>
            It is important to note that the progression tool available here is
            only one way to create a Utonal scale. The values do not need to be
            evenly spaced. It is currently outside the scope of the tools
            available on this website, but one could create a scale using any
            interger denominators they like under the numerators they choose.
          </p>
          <p>
            It is also important to note that both the Otonal and Utonal scale
            tools here are not strict. A true Otonal scale should not have any
            numerator values less than the denominator, and a true Utonal scale
            should not have any denominator values less than the numerator, but
            this tool allows both because those settings can create useful
            results.
          </p>
          <br />
          <h4 className="center">Example - 5 to 10 over 5 - Progression 1</h4>
          <p>
            As an example, let's examine an undertone series with the
            denominator of 5, starting on 5, ending on 10, and with a
            progression of 1, meaning that every value in the series between 5
            and 10 will be inserted into the final scale.
          </p>
          <p>The raw result:</p>
          <table>
            <tbody>
              <tr>
                <td>5/5</td>
                <td>5/6</td>
                <td>5/7</td>
                <td>5/8</td>
                <td>5/9</td>
                <td>5/10</td>
              </tr>
            </tbody>
          </table>

          <p>Then transform each value to its positive form.</p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>5/3</td>
                <td>10/7</td>
                <td>5/4</td>
                <td>10/9</td>
                <td>2/1</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now we apply 1200*log(x/y)/log(2) to convert these values to cents
            and reverse them so they appear in order.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>10/9</td>
                <td>182.404</td>
              </tr>
              <tr>
                <td>5/4</td>
                <td>386.314</td>
              </tr>
              <tr>
                <td>10/7</td>
                <td>617.488</td>
              </tr>
              <tr>
                <td>5/3</td>
                <td>884.359</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h4 className="center">Example - 2 to 14 over 2 - Progression 2</h4>
          <p>
            As an additional example, to demonstrate how the Progression setting
            works and how duplicate values are eliminated, let's examine
            denominator 2, start value 2, end value 14, and progression 2.
          </p>
          <p>The raw result:</p>
          <table>
            <tbody>
              <tr>
                <td>2/2</td>
                <td>2/4</td>
                <td>2/6</td>
                <td>2/8</td>
                <td>2/10</td>
                <td>2/12</td>
                <td>2/14</td>
              </tr>
            </tbody>
          </table>
          <p>And now those values reduced:</p>

          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>2/1</td>
                <td>4/3</td>
                <td>2/1</td>
                <td>8/5</td>
                <td>4/3</td>
                <td>8/7</td>
              </tr>
            </tbody>
          </table>
          <p>
            2/6 and 2/12 both reduce to 4/3. 2/4 and 2/8 both reduce to 2/1,
            which is always implied in an octave based scale regardless.
            Therefore, despite the fact that the method generates 7 raw values,
            we only end up with 4 unique pitches.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>8/7</td>
                <td>231.174</td>
              </tr>
              <tr>
                <td>4/3</td>
                <td>498.045</td>
              </tr>
              <tr>
                <td>8/5</td>
                <td>813.686</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <br />
        <button
          className="mb"
          onClick={() => setShowUtInfo(stateData, setStateData)}
        >
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};
