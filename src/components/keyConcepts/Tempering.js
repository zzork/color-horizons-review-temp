import { basicPlay } from "../../util/aboutNotePlayer";

const Tempering = () => {
  return (
    <div>
      <h2 className="center">Temperaments</h2>
      <p>
        The Linear Temperament by Cents tool can be used to create temperaments,
        which are tuning systems that equate different musical ratios to one
        another. This is accomplished by intentionally modifying the generating
        interval so that it is not a pure ratio.
      </p>
      <p>
        The primary example of a temperament is 12 Tone Equal Temperament, the
        most commonly used musical system in the world. Whether they are aware
        of it or not, 12 Tone Equal Temperament is the way most people solve the
        problems with other pure-ratio-based tuning systems discussed above.
      </p>
      <p>
        12 Tone Equal Temperament equates 12 stacks of the 3/2 ratio (701.955
        cents) with 2/1 (1200 cents).
      </p>
      <p>
        Previously, we examined what happens when 3/2 is stacked on top of
        itself 11 times to create a scale with 12 unique pitches. Despite using
        a pure 3/2 as the generating interval, we still ended up with one wolf
        fifth at 678 cents. Here's why.
      </p>
      <p>
        When 3/2 is stacked on top of itself 12 times, the final value comes
        close to 2/1 (1200 cents), but ends up slightly above by ~23.460 cents.
        This value is known as the Pythagorean Comma. (The Pythagorean Comma can
        also be expressed (3/2)<sup>12</sup>
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
        To eliminate this difference, we can deliberately mistune the 3/2
        generating ratio. This process is known as "tempering out" the comma. In
        this case, we would take the Pythagorean Comma and divide it by 12,
        since we arrived at this comma by stacking twelve 3/2s on one another.
      </p>
      <p>~23.46 / 12 = ~1.955</p>
      <p>
        Then, we reduce our original generator of ~701.955 cents by ~1.955 and
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
              <b>0 aka 1200 aka 2/1</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Due to the fundamental theorem of arithmetic, stacking 3/2 will always
        repeat infinitely, never exactly looping back onto 2/1. By tempering out
        this comma, we create an even, closed system that loops back in on
        itself, allowing for free key modulation.
      </p>
      <p>Problem: 3rds are whack</p>
      <button className="mb" onPointerDown={() => basicPlay([220, 275])}>
        5/4 Major Third
      </button>
      <button className="mb" onPointerDown={() => basicPlay([220, 277.183])}>
        400 Cents Major Third
      </button>
      <br />
      <button className="mb" onPointerDown={() => basicPlay([220, 264])}>
        6/5 Minor Third
      </button>
      <button className="mb" onPointerDown={() => basicPlay([220, 261.626])}>
        300 Cents Minor Third
      </button>
      <p>
        As an additional, less familiar example, we will examine the Mavila
        Temperament mentioned above. Mavila equates 3 stacks of 3/2 (905.865) to
        8/5 (813.686 cents).
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
        considered to be generators between 666.666 cents and 685.713 cents.
      </p>
    </div>
  );
};

export default Tempering;
