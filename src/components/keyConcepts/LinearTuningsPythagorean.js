import { basicPlay } from "../../util/aboutNotePlayer";

const LinearTuningsPythagorean = () => {
  return (
    <div>
      <h2 className="center">Linear Tunings and Pythagorean Tuning</h2>
      <p>
        So how can we achieve tuning systems that allow freer modulation,
        introducing fewer wolf intervals when the scale is transformed?
      </p>
      <p>
        One possibility is <b>Pythagorean Tuning</b>. (
        <i>
          Side note - Pythagorean Tuning is actually centuries older than
          Ptolemy's Intense Diatonic Scale.
        </i>
        )
      </p>
      <p>
        Pythagorean tuning is a <b>Linear Tuning</b>, which means that{" "}
        <i>
          it is a type of octave-based system created by stacking a "generating
          interval" on top of itself
        </i>
        . In the case of Pythagorean tuning, we use the simplest ratio possible,
        3/2. Start with 1/1, then add the note 3/2 above it, then add the note
        3/2 above that, then add the note 3/2 to that, until the amount of notes
        desired is reached. Then octave reduce all of the notes.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">5 Notes - Major Pentatonic</h4>
      <p>
        Let's start by looking at what happens after five iterations of this
        process:
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">Raw Ratio</td>

            <td className="lighterTable">Raw Cents</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1/1</td>

            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>3/2</td>

            <td>701.955</td>
          </tr>
          <tr>
            <td>2</td>
            <td>9/4</td>

            <td>1403.910</td>
          </tr>
          <tr>
            <td>3</td>
            <td>27/8</td>

            <td>2105.865</td>
          </tr>
          <tr>
            <td>4</td>
            <td>81/16</td>
            <td>2807.820</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([495])}>
          9/4
        </button>
        <button className="mb" onPointerDown={() => basicPlay([742.5])}>
          27/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([1113.75])}>
          81/16
        </button>
      </div>
      <p>Then octave reduce, arrange the pitches in order, add the octave:</p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Scale Degree</td>
            <td className="lighterTable">Raw Ratio</td>
            <td className="lighterTable">Reduced Ratio</td>
            <td className="lighterTable">Raw Cents</td>
            <td className="lighterTable">Reduced Cents</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1/1</td>
            <td>1/1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>9/4</td>
            <td>9/8</td>
            <td>1403.910</td>
            <td>203.910</td>
          </tr>
          <tr>
            <td>3</td>
            <td>81/16</td>
            <td>81/64</td>
            <td>2807.820</td>
            <td>407.820</td>
          </tr>
          <tr>
            <td>4</td>
            <td>3/2</td>
            <td>3/2</td>
            <td>701.955</td>
            <td>701.955</td>
          </tr>

          <tr>
            <td>5</td>
            <td>27/8</td>
            <td>27/16</td>
            <td>2105.865</td>
            <td>905.865</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([247.5])}>
          9/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([278.438])}>
          81/64
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([371.25])}>
          27/16
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          2/1
        </button>
      </div>
      <p>
        This generates the Pythagorean version of the <b>Major Pentatonic</b>{" "}
        scale. The Major Pentatonic is a very strong scale that has been
        utilized by many cultures throughout history.{" "}
        <i>
          The Major Pentatonic scale is derived from stacking five 3/2s on top
          of each other
        </i>
        . Its modal transformations are consistent, all the 3/2s present in its
        transformations are perfect, and the rest of the intervals of all of its
        modes either precisely line up with Ptolemy's Intense Diatonic, or are
        ~21 cents off.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">7 Notes - Diatonic (Lydian)</h4>
      <p>Let's extend Pythagorean Tuning to 7 notes and see what happens.</p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">Raw Ratio</td>
            <td className="lighterTable">Raw Cents</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1/1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>3/2</td>
            <td>701.955</td>
          </tr>
          <tr>
            <td>2</td>
            <td>9/4</td>
            <td>1403.910</td>
          </tr>
          <tr>
            <td>3</td>
            <td>27/8</td>
            <td>2105.865</td>
          </tr>
          <tr>
            <td>4</td>
            <td>81/16</td>
            <td>2807.820</td>
          </tr>
          <tr>
            <td>5</td>
            <td>243/32</td>
            <td>3509.775</td>
          </tr>
          <tr>
            <td>6</td>
            <td>729/64</td>
            <td>4211.730</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([495])}>
          9/4
        </button>
        <button className="mb" onPointerDown={() => basicPlay([742.5])}>
          27/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([1113.75])}>
          81/16
        </button>
        <button className="mb" onPointerDown={() => basicPlay([1670.625])}>
          243/32
        </button>
        <button className="mb" onPointerDown={() => basicPlay([2505.938])}>
          729/64
        </button>
      </div>
      <p>Then octave reduce, arrange the pitches in order, and add 2/1:</p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Scale Degree</td>
            <td className="lighterTable">Raw Ratio</td>
            <td className="lighterTable">Reduced Ratio</td>
            <td className="lighterTable">Raw Cents</td>
            <td className="lighterTable">Reduced Cents</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1/1</td>
            <td>1/1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>9/4</td>
            <td>9/8</td>
            <td>1403.910</td>
            <td>203.910</td>
          </tr>
          <tr>
            <td>3</td>
            <td>81/16</td>
            <td>81/64</td>
            <td>2807.820</td>
            <td>407.820</td>
          </tr>
          <tr>
            <td>4</td>
            <td>729/64</td>
            <td>729/512</td>
            <td>4211.730</td>
            <td>611.730</td>
          </tr>
          <tr>
            <td>5</td>
            <td>3/2</td>
            <td>3/2</td>
            <td>701.955</td>
            <td>701.955</td>
          </tr>
          <tr>
            <td>6</td>
            <td>27/8</td>
            <td>27/16</td>
            <td>2105.865</td>
            <td>905.865</td>
          </tr>

          <tr>
            <td>7</td>
            <td>243/32</td>
            <td>243/128</td>
            <td>3509.775</td>
            <td>1109.775</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([247.5])}>
          9/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([278.438])}>
          81/64
        </button>
        <button className="mb" onPointerDown={() => basicPlay([313.242])}>
          729/512
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([371.25])}>
          27/16
        </button>
        <button className="mb" onPointerDown={() => basicPlay([417.656])}>
          243/128
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          2/1
        </button>
      </div>
      <p>
        Adding two more notes gives us the Pythagorean version of the{" "}
        <b>Diatonic</b> scale.{" "}
        <i>
          Stacking seven 3/2s results in the Pythagorean <b>Lydian</b> scale
        </i>
        , specifically. The scale is most often modally transformed into its
        fifth mode, <b>Ionian</b> (a.k.a. the familiar Major Scale), because it
        replaces the instability of the Augmented 4th with the stability of the
        Perfect 4th while leaving every other interval the same. People tend to
        view the Ionian Mode as the basis of the Diatonic Scale, but truly
        Lydian is its first mode.
      </p>
      <p>
        The Pythagorean Diatonic again provides perfect 3/2s in all of its modal
        transformations. Again, all of the other intervals in the
        transformations either precisely line up with the simple ratios of
        Ptolemy's Intense Diatonic, or are ~21 cents off.
      </p>
      <p>
        One thing worth noting at this point is that{" "}
        <i>
          even this simple scale made of stacked 3/2s starts to create large
          ratios fairly quickly
        </i>
        . 729/512 is made up of much larger numbers than something like 5/3. The
        important thing to note here is that the overall system still sounds
        harmonious because every interval is made up entirely of multiples of 3s
        and 2s.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">12 Notes - Pythagorean 12 Tone</h4>
      <p>The next note total that makes sense to examine is 12.</p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">Raw Ratio</td>

            <td className="lighterTable">Raw Cents</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1/1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>3/2</td>
            <td>701.955</td>
          </tr>
          <tr>
            <td>2</td>
            <td>9/4</td>
            <td>1403.910</td>
          </tr>
          <tr>
            <td>3</td>
            <td>27/8</td>
            <td>2105.865</td>
          </tr>
          <tr>
            <td>4</td>
            <td>81/16</td>
            <td>2807.820</td>
          </tr>
          <tr>
            <td>5</td>
            <td>243/32</td>
            <td>3509.775</td>
          </tr>
          <tr>
            <td>6</td>
            <td>729/64</td>
            <td>4211.730</td>
          </tr>
          <tr>
            <td>7</td>
            <td>2187/128</td>
            <td>4913.685</td>
          </tr>
          <tr>
            <td>8</td>
            <td>6561/256</td>
            <td>5615.64</td>
          </tr>
          <tr>
            <td>9</td>
            <td>19683/512</td>
            <td>6317.595</td>
          </tr>
          <tr>
            <td>10</td>
            <td>59049/1024</td>
            <td>7019.550</td>
          </tr>
          <tr>
            <td>11</td>
            <td>177147/2048</td>
            <td>7721.505</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([495])}>
          9/4
        </button>
        <button className="mb" onPointerDown={() => basicPlay([742.5])}>
          27/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([1113.75])}>
          81/16
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([1670.625])}>
          243/32
        </button>
        <button className="mb" onPointerDown={() => basicPlay([2505.938])}>
          729/64
        </button>
        <button className="mb" onPointerDown={() => basicPlay([3758.906])}>
          2187/128
        </button>
        <button className="mb" onPointerDown={() => basicPlay([5638.359])}>
          6561/256
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([8457.539])}>
          19683/512
        </button>
        <button className="mb" onPointerDown={() => basicPlay([12686.309])}>
          59049/1024
        </button>
        <button className="mb" onPointerDown={() => basicPlay([19029.463])}>
          177147/2048
        </button>
      </div>
      <p>
        Then when we octave reduce, arrange the pitches in order, and add the
        octave, we end up with something somewhat like 12 Tone Equal
        Temperament.
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Scale Degree</td>
            <td className="lighterTable">Raw Ratio</td>
            <td className="lighterTable">Reduced Ratio</td>
            <td className="lighterTable">Raw Cents</td>
            <td className="lighterTable">Reduced Cents</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1/1</td>
            <td>1/1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2187/128</td>
            <td>2187/2048</td>
            <td>4913.685</td>
            <td>113.685</td>
          </tr>
          <tr>
            <td>3</td>
            <td>9/4</td>
            <td>9/8</td>
            <td>1403.910</td>
            <td>203.910</td>
          </tr>
          <tr>
            <td>4</td>
            <td>19683/512</td>
            <td>19683/16384</td>
            <td>6317.595</td>
            <td>317.595</td>
          </tr>
          <tr>
            <td>5</td>
            <td>81/16</td>
            <td>81/64</td>
            <td>2807.820</td>
            <td>407.820</td>
          </tr>
          <tr>
            <td>6</td>
            <td>177147/2048</td>
            <td>177147/131072</td>
            <td>7721.505</td>
            <td>521.505</td>
          </tr>
          <tr>
            <td>7</td>
            <td>729/64</td>
            <td>729/512</td>
            <td>4211.730</td>
            <td>611.730</td>
          </tr>
          <tr>
            <td>8</td>
            <td>3/2</td>
            <td>3/2</td>
            <td>701.955</td>
            <td>701.955</td>
          </tr>
          <tr>
            <td>9</td>
            <td>6561/256</td>
            <td>6561/4096</td>
            <td>5615.64</td>
            <td>815.640</td>
          </tr>
          <tr>
            <td>10</td>
            <td>27/8</td>
            <td>27/16</td>
            <td>2105.865</td>
            <td>905.865</td>
          </tr>
          <tr>
            <td>11</td>
            <td>59049/1024</td>
            <td>59049/32768</td>
            <td>7019.550</td>
            <td>1019.550</td>
          </tr>
          <tr>
            <td>12</td>
            <td>243/32</td>
            <td>243/128</td>
            <td>3509.775</td>
            <td>1109.775</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([234.937])}>
          2187/2048
        </button>
        <button className="mb" onPointerDown={() => basicPlay([247.5])}>
          9/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([264.298])}>
          19683/16384
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([278.438])}>
          81/64
        </button>
        <button className="mb" onPointerDown={() => basicPlay([297.335])}>
          177147/131072
        </button>
        <button className="mb" onPointerDown={() => basicPlay([313.242])}>
          729/512
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([352.397])}>
          6561/4096
        </button>
        <button className="mb" onPointerDown={() => basicPlay([371.25])}>
          27/16
        </button>
        <button className="mb" onPointerDown={() => basicPlay([396.447])}>
          59049/32768
        </button>
        <button className="mb" onPointerDown={() => basicPlay([417.656])}>
          243/128
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          2/1
        </button>
      </div>
      <p>
        The 12 note Pythagorean Tuning has perfect 3/2s in every transformation
        of the scale with one exception: the sixth modal transformation has a
        wolf fifth at 678.49 cents. But as we add more notes, we come into a new
        problem, which is that every key has different consonant and dissonant
        intervals. Some intervals will be exact, some will be 2 cents off,
        others will be 19, 22, or 24 cents off from the pure intervals found in
        Ptolemy's Intense Diatonic.
      </p>
      <p>
        12 Note Pythagorean Tuning allows significant modulation, but if you
        tune an instrument in this way, each key will again have its own harmony
        characteristics. In each key some scales will sound in tune while others
        will sound out of tune.
      </p>
      <p>
        As an example, let's compare the 1st and 10th modes of Pythagorean 12
        tone to simple JI.{" "}
        <i>
          Other transformations can be seen by entering Numerator: 3,
          Denominator: 2, Note Total: 12 into the Rank-2 Scale by Ratio (Octave)
          tool on the main page.
        </i>
      </p>
      <table style={{ tableLayout: "auto" }}>
        <tbody>
          <tr>
            <td className="lighterTable">Interval</td>
            <td className="lighterTable">Simple JI</td>
            <td className="lighterTable">
              Pythagorean
              <br />
              1st Mode
            </td>
            <td className="lighterTable">
              Pythagorean
              <br />
              10th Mode
            </td>
          </tr>
          <tr>
            <td>Minor Third</td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 264])}
              >
                6/5
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 264.298])}
              >
                19683/16384
                <br />
                (+17.595)
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 260.741])}
              >
                32/27
                <br />
                (-5.865)
              </button>
            </td>
          </tr>
          <tr>
            <td>Major Third</td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 275])}
              >
                5/4
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 278.438])}
              >
                81/64
                <br />
                (+7.820)
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 278.438])}
              >
                81/64
                <br />
                (+7.820)
              </button>
            </td>
          </tr>
          <tr>
            <td>Perfect Fourth</td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 293.333])}
              >
                4/3
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 297.335])}
              >
                177147/131072
                <br />
                (+21.505)
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 293.333])}
              >
                4/3
                <br />
                (0.000)
              </button>
            </td>
          </tr>
          <tr>
            <td>Perfect Fifth</td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 330])}
              >
                3/2
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 330])}
              >
                3/2
                <br />
                (0.000)
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 330])}
              >
                3/2
                <br />
                (0.000)
              </button>
            </td>
          </tr>
          <tr>
            <td>Minor Sixth</td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 352])}
              >
                8/5
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 352.397])}
              >
                6561/4096
                <br />
                (+5.865)
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 352.397])}
              >
                6561/4096
                <br />
                (+5.865)
              </button>
            </td>
          </tr>
          <tr>
            <td>Major Sixth</td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 366.666])}
              >
                5/3
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 371.25])}
              >
                27/16
                <br />
                (+5.865)
              </button>
            </td>
            <td>
              <button
                className="mb"
                onPointerDown={() => basicPlay([220, 371.25])}
              >
                27/16
                <br />
                (+5.865)
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        The way to resolve this problem within Pythagorean Tuning is to add more
        notes to the original stacking process. The problem that then arises is
        that these new notes lack their proper harmonies, so the stacking
        process must be extended further to accommodate for them. Then those new
        notes will lack their proper harmonies, so more notes must be added...
        and so on, infinitely.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <p>
        <i>
          Any ratio, not just 3/2, can be used as a generating interval in a
          rank-2 scale
        </i>
        . Not only that,{" "}
        <i>any cents value can also be used as the generating interval</i>. It's
        fun to explore what types of scales come about as a result of trying
        other options.
      </p>
      <p>
        <i>
          If generating interval is a ratio, no matter which ratio you choose,
          the system will never close in on itself.
        </i>{" "}
        No matter how many times you stack any ratio, it will never equal 2/1.
        As the process approachs infinite repetitions, it will get infinitely
        closer and closer to 2/1, but it will not ever actually equal the pure
        octave.
      </p>
      <p>
        You can, however, divide the octave evenly in cents and use multiples of
        those values to create perfectly closed tuning systems.
      </p>
    </div>
  );
};

export default LinearTuningsPythagorean;
