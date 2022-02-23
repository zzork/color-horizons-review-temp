export const EdoInfo = ({ setShowEdoInfo }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        {/* <div className="writtenAreas" style={{ textAlign: "justify" }}> */}
        <div className="writtenAreas">
          <h2>Info</h2>
          <p>
            Splitting the octave into equal divisions other than 12 is one of
            the simplest methods for accessing new tonalities.
          </p>
          <p>
            In order to do so, take the octave in cents (1200) and divide by the
            amount you wish. Then add that value onto itself until you reach
            1200 cents again.
          </p>
          <p>
            Some options will provide you with more options for harmonious
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>(0 + 240)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>240</td>
                <td>(240 + 240)</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>240</td>
                <td>480</td>
                <td>(480 + 240)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>240</td>
                <td>480</td>
                <td>720</td>
                <td>(720 + 240)</td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>240</td>
                <td>480</td>
                <td>720</td>
                <td>960</td>
                <td>(960 + 240)</td>
              </tr>
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
        <button className="mb" onClick={() => setShowEdoInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const EdoMosInfo = ({ setShowEdoMosInfo }) => {
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>(0 + 694.7368...)</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>= 694.7368...</td>
                <td>(694.7368... + 694.7368...)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>= 1389.4737...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>(1389.4737... - 1200)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>= 189.4737...</td>
                <td>(189.4737... + 694.7368)</td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>189.4737...</td>
                <td>= 884.2105...</td>
                <td>(884.2105... + 694.7368...)</td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>189.4737...</td>
                <td>884.2105...</td>
                <td>= 1578.9474...</td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>189.4737...</td>
                <td>884.2105...</td>
                <td>(1578.9474... - 1200)</td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>189.4737...</td>
                <td>884.2105...</td>
                <td>= 378.9474...</td>
              </tr>
              <tr>
                <td>0</td>
                <td>694.7368...</td>
                <td>189.4737...</td>
                <td>884.2105...</td>
                <td>378.9474...</td>
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
                <td>(0 + 400)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>= 400</td>
                <td>(400 + 400)</td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>400</td>
                <td>= 800</td>
                <td>(800 + 400)</td>
              </tr>
              <tr>
                <td>0</td>
                <td>400</td>
                <td>800</td>
                <td>= 1200</td>
              </tr>
              <tr>
                <td>0</td>
                <td>400</td>
                <td>800</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <p>
            If your chosen EDO divided by your step amount (or its inversion)
            does not result in a whole number, you will be able to keep adding
            notes until you reach every single note in the EDO.
          </p>
          <p>
            If your chosen EDO is prime, every step choice will iterate through
            the every note available in the EDO. For example, with 11edo, for
            any chosen step value you will be able to run 11 iterations before
            the system closes on itself.
          </p>
          <p>
            As with other linear temperaments, this method will always result in
            scales with either 2 or 3 step sizes, never more. Myhill vs MOS???
          </p>
        </div>
        <br />
        <button className="mb" onClick={() => setShowEdoMosInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const IpInfo = ({ setShowIpInfo }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="textArea">Testing</div>
        <br />
        <button className="mb" onClick={() => setShowIpInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const LtbrInfo = ({ setShowLtbrInfo }) => {
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>(0 + 968.8259...)</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td> = 968.8259...</td>
                <td>(968.8259... + 968.8259...)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>= 1937.6518...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>(1937.6518... - 1200)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td> = 737.6518...</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>(737.6518... + 968.8259...)</td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>= 1706.4777...</td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>(1706.4777... - 1200)</td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>= 506.4777...</td>
                <td></td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>506.4777...</td>
                <td>(506.4777... + 968.8259...)</td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>506.4777...</td>
                <td>= 1475.3036...</td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>506.4777...</td>
                <td>(1475.3036... - 1200)</td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>506.4777...</td>
                <td>= 275.3036...</td>
              </tr>
              <tr>
                <td>0</td>
                <td>968.8259...</td>
                <td>737.6518...</td>
                <td>506.4777...</td>
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
        <button className="mb" onClick={() => setShowLtbrInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const LtbcInfo = ({ setShowLtbcInfo }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="textArea">Testing</div>
        <br />
        <button className="mb" onClick={() => setShowLtbcInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const AxbyInfo = ({ setShowAxbyInfo }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="textArea">Testing</div>
        <br />
        <button className="mb" onClick={() => setShowAxbyInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const TdInfo = ({ setShowTdInfo }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="textArea">Testing</div>
        <br />
        <button className="mb" onClick={() => setShowTdInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const OtInfo = ({ setShowOtInfo }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="textArea">Testing</div>
        <br />
        <button className="mb" onClick={() => setShowOtInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};

export const UtInfo = ({ setShowUtInfo }) => {
  return (
    <div>
      <div className="tableClone">
        <br />
        <div className="textArea">Testing</div>
        <br />
        <button className="mb" onClick={() => setShowUtInfo(false)}>
          Close
        </button>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
};
