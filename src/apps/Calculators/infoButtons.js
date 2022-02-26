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
            amount you wish. Then add that value onto itself until you reach
            1200 cents.
          </p>
          <p>
            Some options will provide you with more possibilities of harmonious
            results than others.
          </p>
          <p>
            As an example, we will split the octave into 5 equal divisions. 5edo
            is the lowest option that provides harmonies unavailable within
            12edo, as 2, 3, and 4 are all factors of 12.
          </p>
          <p>1200 / 5 = 240</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>+ 240</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>= 240</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>240</td>
                <td> + 240</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 480</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>480</td>
                <td>+ 240</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>= 720</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>720</td>
                <td>+ 240</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 960</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>960</td>
                <td>+ 240</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1200</td>
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
            5edo provides us with a loose approximation of the perfect fifth
            (3/2) and perfect fourth (4/3), which are accessible within 12edo,
            but no other intervals that are contained within 12edo (no minor or
            major seconds, thirds, sixths, sevenths). Instead we get
            approximations of the 8th harmonic (8/7) and its inverted interval,
            the harmonic minor 7th (7/4). These are consonant sounds that are
            not accessible within 12edo. Every step of 5edo approximates
            intervals early in the harmonic series.
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
            A linear temperament is an octave based scale that is created by
            choosing a generating interval and then continually stacking it on
            top of itself. If the result of the current step in the process is
            greater than 1200, then we reduce the amount by 1200.
          </p>
          <p>
            In this case, our generating interval will be a certain amount of
            steps of an EDO. This is often notated "steps\edo".
          </p>
          <p>
            For example, we can create a 5 note scale using 11 steps of 19edo
            (11\19). We find the generator by dividing 1200 by 19, then
            multiplying that number by 8.
          </p>
          <p>1200 / 19 = 63.1579...</p>
          <p>63.1579... * 11 = 694.7368...</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>+ 694.7368...</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>= 694.7368...</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>694.7368...</td>
                <td>+ 694.7368...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 1389.4737...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>- 1200</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 189.4737...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>189.4737...</td>
                <td>+ 694.7368...</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>= 884.2105...</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>884.2105...</td>
                <td>+ 694.7368...</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1578.9474...</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>- 1200</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 378.9474...</td>
              </tr>
            </tbody>
          </table>
          <p>
            Once you have reached your chosen amount of iterations, arrange the
            pitches in order.
          </p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>189.4737...</td>
                <td>378.9474...</td>
                <td>694.7368...</td>
                <td>884.2105...</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <p>
            The inverted generator can be found by taking the EDO and
            subtracting your chosen amount of steps from it. Your inverted
            generator will create the same modes, but the order of the modes
            will be reversed.
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
          <p>1200 / 12 = 100</p>
          <p>100 * 4 = 400</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>+ 400</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>= 400</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>400</td>
                <td>+ 400</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 800</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>800</td>
                <td>+ 400</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1200</td>
              </tr>
            </tbody>
          </table>

          <p>
            If your chosen EDO divided by your step amount (or its inversion)
            does not result in a whole number, you will be able to keep adding
            notes until you reach every single note in the EDO. For example, 12
            / 5 = 2.4, so 5\12 will iterate through every note available within
            12edo.
          </p>
          <p>
            If your chosen EDO is prime, every step choice possible will iterate
            through the every note available in the EDO. For example, with
            11edo, for any chosen step value you will be able to run 11
            iterations before the system closes on itself.
          </p>
          <p>
            As with other linear temperaments, this method will always result in
            scales with either 2 or 3 step sizes, never more. Myhill vs MOS???
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
          <p>5 + 5 + 1 + 5 + 1 = 17</p>
          <p>
            Then we divide the octave by the EDO to determine the cents value of
            a single step in the EDO.
          </p>
          <p>1200 / 17 = 70.5882...</p>
          <p>
            Then, we multiply each value in the input by the EDO's single step
            step value to get the step values of our scale.
          </p>
          <table>
            <tbody>
              <tr>
                <td>70.5882... * 5</td>
                <td>70.5882... * 5</td>
                <td>70.5882... * 1</td>
                <td>70.5882... * 5</td>
                <td>70.5882... * 1</td>
              </tr>
              <tr>
                <td>= 352.9412...</td>
                <td>= 352.9412...</td>
                <td>= 70.5882...</td>
                <td>= 352.9412...</td>
                <td>= 70.5882...</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now we add each value to the sum of the values that come before it
            until we have the cents values of each note in the scale.
          </p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>+ 352.9412...</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>= 352.9412...</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>352.9412...</td>
                <td>+ 352.9412...</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 705.8823...</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>705.8823...</td>
                <td>+ 70.5882...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>= 776.4705...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>776.4705...</td>
                <td>+ 352.9412...</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1129.4117...</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1129.4117...</td>
                <td>+ 70.5882...</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1200</td>
              </tr>
            </tbody>
          </table>
          <p>The complete scale:</p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>352.9412...</td>
                <td>705.8823...</td>
                <td>776.4705...</td>
                <td>1129.4117...</td>
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
            A linear temperament is an octave based scale that is created by
            choosing a generating interval and then continually stacking it on
            top of itself. If the result of the current step in the process is
            greater than 1200, then we reduce the amount by 1200.
          </p>
          <p>
            In this case, our generating interval is a ratio. In order to
            convert a ratio to cents, we must apply the following formula.
          </p>
          <p>(1200 * log(numerator / denominator)) / log(2)</p>
          <p>
            In this case, we will choose 7/4 as our generating interval, and we
            will iterate over this process until we have 5 notes in our scale.
          </p>
          <p>(1200 * log(7 / 4)) / log(2) = 968.8259...</p>

          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>+ 968.8259...</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td> = 968.8259...</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>968.8259...</td>
                <td>+ 968.8259...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 1937.6518...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>- 1200</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td> = 737.6518...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>737.6518...</td>
                <td>+ 968.8259...</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1706.4777...</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>- 1200</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>= 506.4777...</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>506.4777...</td>
                <td>+ 968.8259...</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1475.3036...</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>- 1200</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 275.3036...</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>275.3036...</td>
              </tr>
            </tbody>
          </table>
          <p>
            Once you have reached your chosen amount of iterations, arrange the
            pitches in order.
          </p>
          <table>
            <tbody>
              {" "}
              <tr>
                <td>0</td>
                <td>275.3036...</td>
                <td>506.4777...</td>
                <td>737.6518...</td>
                <td>968.8259...</td>
              </tr>
            </tbody>
          </table>
          <p>
            Something to note is that every single linear temperament generated
            by a ratio will continue on infinitely. No ratio will ever line up
            perfectly with 2/1 (1200 cents) when repeating this process. You can
            always add more notes to a scale created in this manner, the circle
            will never close.
          </p>
          <p>
            Also of interest is that this process will always create scales with
            either 2 or 3 step sizes, never more. In the case of 5 steps of 7/4,
            we end up with a large step of 275.3036 cents and a small step of
            231.1741 cents. If you add one additional iteration, for a total of
            6 notes, you instead end up with step sizes of 231.17409 and
            44.12953. Scales with exactly two step sizes are known as having
            Myhill property. This is related to the concept of a Moment of
            Symmetry scale but I don't know the difference!
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
            A linear temperament is an octave based scale that is created by
            choosing a generating interval and then continually stacking it on
            top of itself. If the result of the current step in the process is
            greater than 1200, then we reduce the amount by 1200.
          </p>
          <p>
            The linear temperament by cents option can create any scale that the
            EDO, EDO Steps, or Linear Temperament by Ratio tools can create. At
            their core, each of those are just subsets of what is available
            utilizing this tool.
          </p>
          <p>
            For example, a 5 note scale using a generator of 671.288. This scale
            is known as a Mavila Temperament.
          </p>
          <table>
            <tbody>
              <tr>
                <td>0</td>
                <td>+ 671.288</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>= 671.288</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>671.288</td>
                <td>+ 671.288</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 1342.576</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>- 1200</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 142.576</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>142.576</td>
                <td>+ 671.288</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>= 813.864</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>813.864</td>
                <td>+ 671.288</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1485.152</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>- 1200</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 285.152</td>
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
            The ax + by = p method is relatively straightforward, and will often
            lead to more dissonant results than the other methods available
            here, but with experimentation can sometimes yield interesting
            results.
          </p>
          <h4 className="center">Process</h4>
          <p>
            It uses basic algebraic principles. We manually create variable A,
            the size of the first interval, and variable X, how many instances
            of the first variable size are present in the scale.
          </p>
          <p>
            Lastly, we manually choose variable Y, which represents how many
            instances of the second interval we would like to have.
          </p>
          <p>
            The variable P on the other side of the equation represents the
            "period", which is at what value the scale repeats itself. In all of
            our cases on this website at the moment, the P will be the octave
            (2/1 or 1200 cents).
          </p>
          <p>The formula:</p>
          <table>
            <tbody>
              <tr>
                <td>( a</td>
                <td></td>
                <td>( b</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>*</td>
                <td>+</td>
                <td>*</td>
                <td>=</td>
                <td>p</td>
              </tr>
              <tr>
                <td>x )</td>
                <td></td>
                <td>y )</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>Made explicit:</p>
          <table>
            <tbody>
              <tr>
                <td>( size of first interval</td>
                <td></td>
                <td>( size of second interval</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>*</td>
                <td>+</td>
                <td>*</td>
                <td>=</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>instances of first interval )</td>
                <td></td>
                <td>instances of second interval )</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>
            After all of the input fields have been filled, the tool solves the
            only variable left in the equation, which is B, the size of the
            second interval.
          </p>
          <p>
            Once Y is solved for, the tool will spread the two intervals out
            amongst each other as evenly as possible. It does this by taking the
            larger step count of the two provided and dividing it by the smaller
            step count. If this results in a decimal value, the result is always
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
            If we wanted a 5 note scale with this as a the small step, we could
            enter 2 in the First Interval Steps box, then 3 in the Second
            Interval Steps box. This gives us a complete equation to solve:
            (70.672 * 2) + (b * 3) = 1200.
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
          <p>Solving for b yields a neutral third of 352.885.</p>
          <p>
            Now we take the larger step amount of the two provided, in this case
            3, and divide it by the lower amount, in this case 2. This provides
            1.5, and this tool will always round any decimal value up, so it
            becomes 2. Now we iterate over the larger step count, in this case
            LLL, and place the smaller step size at least every 2 iterations, in
            this case yielding LLsLs.
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
                <td>+ 352.885</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>= 352.885</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>352.885</td>
                <td>+ 352.885</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>= 705.770</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>705.770</td>
                <td>+ 70.672</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>=776.443</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>776.443</td>
                <td>+ 352.885</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1129.328</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1129.328</td>
                <td>+ 70.672</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>= 1200</td>
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
        <div className="writtenAreas">Testing</div>
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
        <div className="writtenAreas">Testing</div>
        <br />
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
        <div className="writtenAreas">Testing</div>
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
