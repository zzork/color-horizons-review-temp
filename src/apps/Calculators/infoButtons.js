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
                <td>
                  ( <b>a</b>: size of first interval
                </td>
                <td></td>
                <td>
                  ( <b>b</b>: size of second interval
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>*</td>
                <td>+</td>
                <td>*</td>
                <td>=</td>
                <td>
                  <b>p</b>: period - 1200
                </td>
              </tr>
              <tr>
                <td>
                  <b>x</b>: instances of first interval )
                </td>
                <td></td>
                <td>
                  <b>y</b>: instances of second interval )
                </td>
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
        <div className="writtenAreas">
          <h4 className="center">Process</h4>
          <p>
            With the Tonality Diamond function, a set of factors are chosen and
            are combined with one another to create a set of ratios. Each factor
            chosen is combined with each other factor chosen to create two
            ratios, one with the larger number on top (the overtone version),
            and one with the smaller number on top (the undertone version).
          </p>
          <p>
            Depending on the factors chosen, sometimes multiple ratios within
            the diamond will reduce down to the same cents value. If this is the
            case, the duplicate values are removed. As more factors are
            included, more duplicates tend to arise, unless all factors chosen
            are prime numbers, since they can't reduce.
          </p>
          <p>
            We have the choice of including all values in the diamond, only the
            overtones, or only the undertones. Interestingly, the overtones-only
            and undertones-only options end up creating the same final set of
            modal transformations, just starting on opposite ends of the set of
            modes generated.
          </p>
          <p>
            The "all" option will include both the overtones and undertones, and
            will always double the amount of values available in the scale other
            than 1/1 and 2/1.
          </p>
          <br />
          <h4 className="center">Example: 1-3-5, All</h4>
          <p>
            First we will look at all values created by factors 1, 3, and 5.
            This is the resulting table with totally raw values.
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
            Then we octave reduce each ratio on the table. Notice that with this
            combination of factors all values on the table are unique.
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
            With some combinations of factors, the table will end up with
            duplicate values. For example, this happens with the factor
            combination 1-3-9. In this example we will also choose just the
            overtone setting instead of using all the resulting values in our
            scale.
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
          <h4 className="center">
            Applying Modal Transformations to Ratio Scales
          </h4>
          <p>
            In order to find the distance between two ratios, the process of
            cross multiplication is utilized. This process can be applied to an
            entire scale to find its modal transformations. As a demonstration
            we will apply this to the simple scale created by this tool when it
            is set to 1-3-9 Overtones Only.
          </p>
          <p>
            To do so, take the scale degree you would like to be your new
            starting note, and then cross multiply it with every note in the
            scale except 2/1, which is implied as these are octave based scales.
            Then octave reduce each ratio.
          </p>
          <p>
            Let's use the second scale degree, 9/8, as our new starting note.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>*</td>
                <td>9/8</td>
                <td>=</td>
                <td>8/9</td>
                <td>=</td>
                <td>16/9</td>
              </tr>
              <tr>
                <td>9/8</td>
                <td>*</td>
                <td>9/8</td>
                <td>=</td>
                <td>72/72</td>
                <td>=</td>
                <td>1/1</td>
              </tr>
              <tr>
                <td>3/2</td>
                <td>*</td>
                <td>9/8</td>
                <td>=</td>
                <td>24/18</td>
                <td>=</td>
                <td>4/3</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now that the new values have been calculated and octave reduced,
            place them in order of pitch.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>4/3</td>
                <td>498.045</td>
              </tr>
              <tr>
                <td>16/9</td>
                <td>996.090</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
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
            are built off of a chosen factor, resulting in scale values that
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
            As an example, we will examine an overtone series with the
            denominator of 5, starting on 5, ending on 10, and with a
            progression of 1, meaning that every value in the series between 5
            and 10 will be inserted into the final scale.
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
            works and how duplicate values are eliminated, we will show
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
            we only end up with 4 unique pitches.
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
          <h4 className="center">
            Applying Modal Transformations to Ratio Scales
          </h4>
          <p>
            In order to find the distance between two ratios, the process of
            cross multiplication is utilized. This process can be applied to an
            entire scale to find its modal transformations. As a demonstration
            we will apply this to the simple scale created by this tool when it
            is set to Denominator 2, Start 2, End 14, Progression 2.
          </p>
          <p>
            To do so, take the scale degree you would like to be your new
            starting note, and then cross multiply it with every note in the
            scale except 2/1, which is implied as these are octave based scales.
            Then octave reduce each ratio.
          </p>
          <p>Let's use the second degree, 5/4, as our new starting note.</p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>*</td>
                <td>5/4</td>
                <td>=</td>
                <td>4/5</td>
                <td>=</td>
                <td>8/5</td>
              </tr>
              <tr>
                <td>5/4</td>
                <td>*</td>
                <td>5/4</td>
                <td>=</td>
                <td>20/20</td>
                <td>=</td>
                <td>1/1</td>
              </tr>
              <tr>
                <td>3/2</td>
                <td>*</td>
                <td>5/4</td>
                <td>=</td>
                <td>12/10</td>
                <td>=</td>
                <td>6/5</td>
              </tr>
              <tr>
                <td>7/4</td>
                <td>*</td>
                <td>5/4</td>
                <td>=</td>
                <td>28/20</td>
                <td>=</td>
                <td>7/5</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now that the new values have been calculated and octave reduced,
            place them in order of pitch.
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
                <td>2/1</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <p>
            Worth noticing is that all of the new values are of denominator 5.
            If we transform the scale again using the second degree of this new
            scale, the values all end up being denominator 3, or multiples of
            denominator 3. Repeating this process again yields values all of
            denominator 7. Modal transformations of Otonal scales result in new
            scales with shared denominator factors because each step in the
            scale is multiplied by the same value.
          </p>
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
            are built off of a chosen factor, resulting in scale values that
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
            As an example, we will examine an undertone series with the
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

          <p>Then we transform each value to its positive form.</p>
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
            works and how duplicate values are eliminated, we will show
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
          <h4 className="center">
            Applying Modal Transformations to Ratio Scales
          </h4>
          <p>
            In order to find the distance between two ratios, the process of
            cross multiplication is utilized. This process can be applied to an
            entire scale to find its modal transformations. As a demonstration
            we will apply this to the simple scale created by this tool when it
            is set to Denominator 2, Start 2, End 14, Progression 2.
          </p>
          <p>
            To do so, take the scale degree you would like to be your new
            starting note, and then cross multiply it with every note in the
            scale except 2/1, which is implied as these are octave based scales.
            Then octave reduce each ratio.
          </p>
          <p>Let's use the second degree, 8/7, as our new starting note.</p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>*</td>
                <td>8/7</td>
                <td>=</td>
                <td>7/8</td>
                <td>=</td>
                <td>7/4</td>
              </tr>
              <tr>
                <td>8/7</td>
                <td>*</td>
                <td>8/7</td>
                <td>=</td>
                <td>56/56</td>
                <td>=</td>
                <td>1/1</td>
              </tr>
              <tr>
                <td>4/3</td>
                <td>*</td>
                <td>8/7</td>
                <td>=</td>
                <td>28/24</td>
                <td>=</td>
                <td>7/6</td>
              </tr>
              <tr>
                <td>8/5</td>
                <td>*</td>
                <td>8/7</td>
                <td>=</td>
                <td>56/40</td>
                <td>=</td>
                <td>7/5</td>
              </tr>
            </tbody>
          </table>
          <p>
            Now that the new values have been calculated and octave reduced,
            place them in order of pitch.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1/1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>7/6</td>
                <td>266.871</td>
              </tr>
              <tr>
                <td>7/5</td>
                <td>582.512</td>
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
          <p>
            Worth noticing is that all of the new values are of numerator 7. If
            we transform the scale again using the second degree of this new
            scale, the values all end up having numerator 3 or multiples of
            numerator 3. Repeating this process again yields values all of
            numerator 5. Modal transformations of Utonal scales result in new
            scales with shared denominator factors because each step in the
            scale is multiplied by the same value.
          </p>
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
