import { basicPlay } from "../../util/aboutNotePlayer";

const Tempering = () => {
  return (
    <div>
      <h2 className="center">Tempering</h2>
      <p>
        The Rank-2 Scale by Cents (Octave Period) tool can be used to{" "}
        <b>temper</b> intervals, which means{" "}
        <i>
          intentionally modifying the generating interval so that it is slightly
          impure in order to make other intervals in the scales that arise from
          that generator closer to just ratios
        </i>
        . It can also be used for the purpose of generating temperaments, which
        are systems which equate different ratios to one another. I plan to
        eventually include a full discussion of temperaments here, but at the
        moment the topic is something I am still working on getting a thorough
        comprehension of. For now we will touch on the basics of the most
        important one.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">12 Tone Equal Temperament</h4>
      <p>
        The primary example of a temperament is 12 Tone Equal Temperament, the
        most commonly used musical system in the world. Whether they are aware
        of it or not, 12 Tone Equal Temperament is the way most people solve the
        problems with other pure-ratio-based tuning systems discussed above.
        This system comes with its own trade-offs, however.
      </p>
      <p>
        <i>
          12 Tone Equal Temperament equates a stack of 12 instances of the 3/2
          ratio (701.955 cents) with 2/1 (1200 cents).
        </i>
      </p>
      <p>
        Previously, we examined what happens when 3/2 is stacked on top of
        itself 11 times to create a scale with 12 unique pitches (Pythagorean
        Tuning). Despite using a pure 3/2 as the generating interval, we still
        ended up with one wolf fifth at 678 cents. Here's why:
      </p>
      <p>
        When 3/2 is stacked on top of itself 12 times, the final value comes
        close to 2/1 (1200 cents), but ends up slightly above by ~23.460 cents.
        This value is known as the <b>Pythagorean Comma</b>. (The Pythagorean
        Comma can also be expressed (3/2)<sup>12</sup>
        /(2/1)<sup>7</sup> or 531441/524288.)
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">Raw Cents</td>
            <td className="lighterTable">Octave Reduced</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>701.955</td>
            <td>701.955</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1403.910</td>
            <td>203.910</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2105.865</td>
            <td>905.865</td>
          </tr>
          <tr>
            <td>4</td>
            <td>2807.820</td>
            <td>407.820</td>
          </tr>
          <tr>
            <td>5</td>
            <td>3509.775</td>
            <td>1109.775</td>
          </tr>
          <tr>
            <td>6</td>
            <td>4211.730</td>
            <td>611.730</td>
          </tr>
          <tr>
            <td>7</td>
            <td>4913.685</td>
            <td>113.685</td>
          </tr>
          <tr>
            <td>8</td>
            <td>5615.64</td>
            <td>815.640</td>
          </tr>
          <tr>
            <td>9</td>
            <td>6317.595</td>
            <td>317.595</td>
          </tr>
          <tr>
            <td>10</td>
            <td>7019.550</td>
            <td>1019.550</td>
          </tr>
          <tr>
            <td>11</td>
            <td>7721.505</td>
            <td>521.505</td>
          </tr>
          <tr>
            <td>12</td>
            <td>8423.460</td>
            <td>
              <b>23.460</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        To eliminate this difference, it is possible to deliberately mistune the
        3/2 generating ratio. This process is known as <b>tempering</b> the
        comma. In this case, let's take the Pythagorean Comma and divide it by
        12, since this comma arises from stacking twelve 3/2s on one another.
      </p>
      <table>
        <tbody>
          <tr>
            <td>~23.46 / 12 = ~1.955</td>
          </tr>
        </tbody>
      </table>
      <p>
        Then, reduce the original generator of ~701.955 cents by ~1.955 and
        arrive at exactly 700 cents for the generator of 12 Tone Equal
        Temperament. Now, 12 stacks of the not-quite-justly-intonated 3/2 our
        system uses exactly equal 2/1.
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">Raw Cents</td>
            <td className="lighterTable">Octave Reduced</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>700</td>
            <td>700</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1400</td>
            <td>200</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2100</td>
            <td>900</td>
          </tr>
          <tr>
            <td>4</td>
            <td>2800</td>
            <td>400</td>
          </tr>
          <tr>
            <td>5</td>
            <td>3500</td>
            <td>1100</td>
          </tr>
          <tr>
            <td>6</td>
            <td>4200</td>
            <td>600</td>
          </tr>
          <tr>
            <td>7</td>
            <td>4900</td>
            <td>100</td>
          </tr>
          <tr>
            <td>8</td>
            <td>5600</td>
            <td>800</td>
          </tr>
          <tr>
            <td>9</td>
            <td>6300</td>
            <td>300</td>
          </tr>
          <tr>
            <td>10</td>
            <td>7000</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>11</td>
            <td>7700</td>
            <td>500</td>
          </tr>
          <tr>
            <td>12</td>
            <td>8400</td>
            <td>
              <b>0</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        No matter how many iterations of the process are added, stacking pure
        3/2s will always repeat infinitely, never exactly looping back onto 2/1.{" "}
        <i>
          But by mistuning the 3/2 generator only slightly, the Pythagorean
          Comma is eliminated, creating an even, closed system that loops back
          in on itself, allowing for free key modulation.
        </i>{" "}
        With this type of system, we don't need to worry about different keys
        having different tonal characteristics. All keys are identical.
      </p>
      <p>
        When compared directly against the simple JI ratios that each 12 Tone
        Equal Temperament interval approximates, it is easy to hear that the
        intervals are not quite in tune. But our collective consciousness seems
        to have determined that the positives of this system are worth it.
        Within 12TET, we have relatively few notes to deal with, and they allow
        us to create fairly complex harmonies with an acceptable level of pitch
        accuracy.
      </p>

      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Interval</td>
            <td className="lighterTable">Simple JI</td>
            <td className="lighterTable">12TET</td>
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
                onPointerDown={() => basicPlay([220, 261.626])}
              >
                300 cents
                <br />
                (-15.641)
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
                onPointerDown={() => basicPlay([220, 277.183])}
              >
                400 cents
                <br />
                (+13.686)
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
                onPointerDown={() => basicPlay([220, 293.665])}
              >
                500 cents
                <br />
                (+1.955)
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
                onPointerDown={() => basicPlay([220, 329.628])}
              >
                700 cents
                <br />
                (-1.955)
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
                onPointerDown={() => basicPlay([220, 349.228])}
              >
                800 cents
                <br />
                (-13.686)
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
                onPointerDown={() => basicPlay([220, 369.994])}
              >
                900 cents
                <br />
                (+15.641)
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        I used to sometimes try tuning my 12TET guitar by making one chord sound
        perfectly in tune. But then I would find that when I played another
        chord, it would sound severely out of tune! I would then retune the
        guitar so that the out-of-tune chord sounded nice, but then the original
        chord would be severely out of tune! I didn't understand why and it
        drove me a little batty. Now I understand that this is because 12TET
        compromises by making all chords somewhat out of tune for the sake of
        easy modulation. When compared to the JI intervals they approximate, the
        thirds and sixths are noticeably off. We have become conditioned to
        those mistunings of 13 and 15 cents as being "in tune."
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <p>
        12 Tone Equal Temperament is an excellent system overall for many
        reasons. But there are multitudes of other options that allow for aural
        world building that 12TET simply does not have available. This brings us
        to the point of this entire project: help facilitate exploration of the
        universe of harmony and encourage people to make music in alternative
        systems.
      </p>
      {/* <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Mavila Scales</h4>
      <p>
        As an additional, less familiar example, we will examine the phenomenon
        known as Mavila scales. Mavila is a temperament that equates 3 stacks of
        3/2 (905.865) to 8/5 (813.686 cents).
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">Raw Cents</td>
            <td className="lighterTable">Octave Reduced</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>701.955</td>
            <td>701.955</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1403.910</td>
            <td>203.910</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2105.865</td>
            <td>905.865</td>
          </tr>
        </tbody>
      </table>
      <p>
        This difference is known as the Pelogic Comma and has a value of ~92.179
        cents. This comma can also be expressed (3/2)<sup>3</sup>
        /(8/5)
        <sup>1</sup> or 135/128.
      </p>
      <p>
        To modify our generating 3/2 so that three iterations creates a perfect
        8/5, we take the Pelogic Comma and divide it by 3, yielding ~30.726
        cents. Then we subtract that value from the pure 3/2 (701.955 cents) and
        arrive at 671.288 cents for our generator.
      </p>
      <p>
        Mavila Temperaments have an interesting characteristic: when extended to
        7 notes, it provides what is known as an anti-Diatonic scale. Instead of
        LLLsLLs step sizes, it creates sssLssL. By applying modal
        transformations, one can find anti-Lydian, anti-Aeolian, anti-Dorian,
        etc.
      </p>
      <p>
        It should be noted that this is not the one and only Mavila Temperament,
        Mavila is a range of temperaments. This version with a generator of
        671.288 creates a pure 8/5 target ratio (known as this temperament's
        "eigenmonzo", or unchanged interval). But one can choose to deliberately
        mistune the target ratio as well as the generating ratio, in order to
        bring other intervals that the scale creates closer to purer harmonies.
        The limits of what constitutes a Mavila Temperament are generally
        considered to be generators between 666.667 cents and 685.713 cents.
      </p> */}
    </div>
  );
};

export default Tempering;
