import { handleShowAbout } from "../eventHandlers";

const KeyConcepts = ({ stateData, setStateData }) => {
  return (
    <div>
      <h1>Key Concepts</h1>
      <div className="tableClone">
        <div className="writtenAreas">
          <br />
          <h2 className="center">Sound</h2>
          <p>
            The phenomenon of sound is the phenomenon of vibration. Something
            vibrates, which causes the air molecules around it to move and bump
            into the air molecules around them, causing them to move, and so on
            until the energy emitted from the original vibration source has
            naturally disappated.
          </p>
          <p>
            This is a chain reaction known as a sound wave. The molecules the
            waves are passing through do not move along with the wave, the wave
            is just a pattern of motion of the molecules it passes through
            caused by molecules bumping into each other in a chain reaction
            pattern.
          </p>
          <p>
            Eventually, these sound waves bounce off the anatomy of the inner
            ear, which converts the vibrations it receives into electrical
            impulses which are transmitted to the brain, and interpreted by our
            consciousness as the glorious experience known as <i>sound</i>.
          </p>
          <br />
          <h2 className="center">Pitch</h2>
          <p>
            Why is this important? If an object vibrates at a consistent rate,
            we perceive it as having "pitch", which is how "high" or "low" we
            consider a sound to be. Pitch is a mental phenomenon that arises
            from a vibration's rate (its frequency). We measure frequency in
            absolute terms using Hertz (Hz), which is the amount of times the
            vibration happens per second.
          </p>
          <p>
            If something is vibrating too slowly or too quickly, we cannot hear
            it. The human range of perception has a sweet spot between 20
            vibrations per second (20Hz) and 20,000 vibrations per second
            (20kHz). Within that range is every sound you have ever experienced,
            and the lowest and highest pitches you can imagine.
          </p>
          <p>
            The buttons below will demonstrate some pure sound waves at various
            frequencies.
          </p>
          <button>250Hz</button>
          <button>325Hz</button>
          <button>440Hz</button>
          <br />
          <br />
          <h2 className="center">Ratios, Harmony</h2>
          <p>
            We perceive a rather magical effect when frequencies are related to
            each other by simple mathematical ratios: <i>harmony</i>
          </p>
          <p>
            Let's say we play one consistent vibration at 220Hz. At the same
            time, we play another consistent vibration at exactly 2 times that,
            at 440Hz. This is known as a 2/1 ratio, meaning that for every 1
            time the base tone vibrates, the second tone will vibrate exactly 2
            times. This is known as a justly tuned harmony. Making music with
            these ratios is known as using a Just Intonation system (JI).
          </p>
          <p>
            This is a special case that is also known as the second tone being
            one <i>octave</i> above the first tone. In the case of the octave
            harmony, individuals in most cultures in the world will recognize
            the two notes being played as the "<i>same note</i>".
          </p>
          <button>220Hz</button>
          <button>440Hz</button>
          <button>220Hz and 440Hz Together</button>
          <p>
            Things get a little bit more interesting as you start to expand into
            slightly more complex ratios. The next simplest ratio possible would
            be 3/2, or the second tone vibrating 3 times for every 2 times the
            first tone vibrates.{" "}
          </p>
          <p>
            The 3/2 ratio is often referred to as the "perfect fifth", which can
            be a confusing term when outside of the context of 12 tone equal
            temperament, the system that is used in the majority of music in the
            world. On this page, I will attempt to use the ratios themselves as
            much as possible for the sake of clarity.
          </p>
          <p>This simple 3/2 ratio produces a very strong, stable harmony.</p>
          <button>220Hz</button>
          <button>330Hz</button>
          <button>220Hz and 330Hz Together</button>
          <p>
            The third most simple ratio available is 4/3. This is often referred
            to as the "perfect fourth", expecially within the context of the 12
            tone equal temperament system.
          </p>
          <button>220Hz</button>
          <button>293.333Hz</button>
          <button>220Hz and 293.333Hz Together.</button>
          <p>
            Next we have 5/4, which is often referred to as the "minor third",
            especially within the context of the 12 tone equal temperament
            system.
          </p>
          <button>220Hz</button>
          <button>275Hz</button>
          <button>220Hz and 275Hz Together</button>
          <p>
            Next we have 5/3, which is often referred to as the "major sixth",
            especially within the context of the 12 tone equal temperament
            system.
          </p>
          <button>220Hz</button>
          <button>366.666Hz</button>
          <button>220Hz and 366.666Hz Together</button>
          <p>
            Lastly for now, we have 6/5, which is often referred to as the
            "minor third", especially within the context of 12 tone equal
            temperament.
          </p>
          <button>220Hz</button>
          <button>264Hz</button>
          <button>220Hz and 264Hz Together</button>
          <p>
            The amount of ratios available are infinite. For now we will stop
            here. Generally, ratios involving smaller numbers will sound more
            harmonious than those involving larger numbers. When you get a
            little more deep into it, the context of the entire note system
            utilized and the multiplicative factors that make up the numerator
            and denominator are important for the overall perception of
            harmoniousness.
          </p>
          <br />
          <h2 className="center">Equivalent Ratios</h2>
          <p>
            In the previous section, you may have noticed we started with 1/1 as
            the root note, then said 2/1 was the simplest harmony available to
            it. After that came 3/2, and then we went straight to 4/3, without
            examining 3/1. This is because of the octave phenomenon discussed
            above. The ratios of 3/2 and 3/1 represent the same harmony, just
            with an octave separating the notes, because 1 * 2 = 2.
          </p>
          <p>
            This is an element of JI ratios that can be confusing at first.
            Because multiplying or dividing an element of a ratio creates the
            same pitch, but just in a different octave, JI fractions have
            different equalities than fractions used in regular, basic math. In
            JI 3/2 = 3/1 = 6/1 = 12/4 = 24/16.
          </p>
          <p>
            The imprecise way to explain how to get the most reduced version of
            a JI fraction is to say that you need to multiply or divide the
            numerator and denominator by 2 until you end up with the octave
            reduced version. See the next section (<b>Cents</b>) for the formula
            that exposes if your fraction is within the first octave.
          </p>
          <p>Here's a precise instructional set:</p>
          <ol>
            <li>
              If the numerator is smaller than the denominator, multiply the
              numerator by 2 until it is larger than the denominator.
            </li>
            <li>
              If the denominator times 2 is less than the numerator, multiply
              the denominator by 2. When the denominator can no longer be
              multiplied by 2 without going over the numerator, stop.
            </li>
            <li>Determine all factors of the numerator.</li>
            <li>Determine all factors of the denominator.</li>
            <li>
              If there are any factors that divide into both the numerator and
              denominator, divide both the numerator and denominator by the
              greatest common factor.
            </li>
          </ol>
          <p>As an example, let's look at 124/256</p>
          <ol>
            <li>
              <ul>
                <li>{`124 < 256`}</li>
                <li>124 * 2 = 248</li>
                <li>{`248 < 256`}</li>
                <li>248 * 2 = 496</li>
                <li>496/256</li>
              </ul>
            </li>
            <li>N/A ({`256 * 2 > 496`})</li>
            <li>Factors of 496 - 1, 2, 4, 8, 16, 31, 62, 124, 248, 496</li>
            <li>Factors of 256 - 1, 2, 4, 8, 16, 32, 64, 128, 256</li>
            <li>
              <ul>
                <li>Greatest Common Factor - 16</li>
                <li>496/16 = 31</li>
                <li>256/16 = 16</li>
              </ul>
            </li>
          </ol>
          <p>The octave reduced version of 124/256 is 31/16.</p>
          <p>As a second example, let's look at 25/4.</p>
          <ol>
            <li>N/A ({`25 > 4`})</li>
            <li>
              <ul>
                <li>{`4 < 25`}</li>
                <li>4 * 2 = 8</li>
                <li>{`8 < 25`}</li>
                <li>8 * 2 = 16</li>
                <li>{`16 < 25`}</li>
                <li>16 * 2 = 32</li>
                <li>{`32 > 25`}</li>
                <li>Therefore, 16 is our final number in this step</li>
              </ul>
              <li>Factors of 25: 1, 5, 25</li>
              <li>Factors of 16: 1, 2, 4, 8, 16</li>
              <li>
                There are no common factors other than 1. No further reduction
                is possible.
              </li>
            </li>
          </ol>
          <p>The octave reduced version of 25/4 is 25/16.</p>
          <br />
          <h2 className="center">Cents</h2>
          <p>
            So far the math is easy enough. But human perception of sound has an
            odd property: it is logarithmic.
          </p>
          <p>
            What this means is that if 220Hz is your root note, 440Hz is
            perceived as the same pitch but one octave higher. That makes
            perfect sense. Intuition leads most people to expect 660Hz to be the
            third octave, 880Hz to be the fourth octave, and 1100Hz to be the
            fifth octave.
          </p>
          <p>
            But instead, the spacing is uneven! 880Hz is the third octave.
            1760Hz is the fourth octave. 3250Hz is the fifth octave. The size of
            the octave gets larger and larger as your frequencies get higher and
            higher, because each octave is another instance of multiplying the
            root frequency by 2.
          </p>
          <p>
            So this brings about an important point, the ratios we discussed
            earlier apply specifically to Hz measurements of sounds.
          </p>
          <p>
            While many phenomena in the world truly are mathematically
            logarithmic or exponential, it is difficult for the human mind to
            naturally think in those terms. Because of this, a system that evens
            out these logarithmic differences and measures frequencies in the
            straightforward way you would expect was developed: cents.
          </p>
          <p>
            The cents measurement divides the octave into 1200 units, meaning
            that each 100 matches one pitch of 12 tone equal temperament. If 0
            is your root pitch, 1200 is your octave. To get one octave above
            that, add 1200 again to reach 2400. To get one octave above that,
            add 1200 to reach 3600. This repeated addition is much simpler to
            comprehend than repeated multiplication.
          </p>
          <p>
            Cents measurement is kind of an imperfect system when working
            outside of 12 tone equal temperament, as it is inherently tied to
            that system, but microtonal music will need to become much more
            popular before a new, better standard becomes commonplace. So for
            now it's just the way it is!
          </p>
          <p>
            Below is the formula for converting a ratio to cents. Variables x
            and y are your ratio's numerator and denominator. Variable c is the
            cents measurement that represents that ratio.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1200 * ( log( x / y ) / log( 2 ) ) = c</td>
              </tr>
            </tbody>
          </table>
          <p>
            Cents measurement is inherently a measurement of difference. Without
            a reference note, it is meaningless. If someone says "play 300
            cents" without providing reference pitch in Hz, there is no way to
            determine what pitch that would be.
          </p>
          <p>
            There is also a reverse formula, that will get a Hz value from a
            cents measurement, again provided that you have a reference
            frequency:
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
            In the above formula, variable b is your base frequency in Hz.
            Variable c is the cents value by which you are modifying your root
            pitch. Variable n, the result, is the resulting Hz value.
          </p>
          <br />
          <h4 className="center">Equally Dividing the Octave</h4>
          <p>EDO vs Otones Goes Here</p>
          <h2 className="center">Stacking Ratios (Addition)</h2>
          <p>
            Now that we have covered cents, we will cover a few more ratio
            topics that are more easily demonstrated with the assistance of that
            measurement.
          </p>
          <p>
            Another unexpected behavior of fractions within the world of JI
            comes when you stack ratios on top of one another.
          </p>
          <p>
            Let's say you want the note that is 3/2 above your root, and then
            the note that is 7/4 above that second note.{" "}
          </p>
          <p>
            In normal fraction math, you find the common denominator, then add
            the numerators together. This yields 13/4, which becomes 13/8 if we
            follow the above procedure. In this context, this is <b>wrong</b>.
            Don't do this.
          </p>
          <p>
            Instead, we must <b>multiply</b> the two fractions.
          </p>
          <table>
            <tbody>
              <tr>
                <td>3</td>
                <td>*</td>
                <td>7</td>
                <td>=</td>
                <td>21</td>
              </tr>
              <tr>
                <td>2</td>
                <td>*</td>
                <td>4</td>
                <td>=</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
          <p>
            21/8 reduces to 21/16. In its octave reduced notation, the chord
            that contains 3/2 and the note 7/4 above 3/2 will be built of the
            notes: 1/1, 3/2, and 21/16.
          </p>
          <p>
            <i>Checking the math with cents:</i>
          </p>
          <p>
            3/2 = 701.955
            <br />
            7/4 = 968.826
            <br />
            <br />
            701.955 + 968.826 = 1670.781
            <br />
            1670.781 - 1200 = 470.781
            <br />
            <br />
            21/16 = 470.781
          </p>
          <br />
          <h2 className="center">Distance Between Ratios (Subtraction)</h2>
          <p>
            Say that you wanted to determine what ratio would represent the
            distance between two intervals. This concept becomes particularly
            imporant when doing modal transformations of ratio based scales.
          </p>
          <p>
            Let's take 3/2 and 7/4 again. In normal math, you would find the
            common denominator, then subtract the numerators from one another.
            This would yield 1/4, which is equivalent to 2/1, the octave. Again,
            this is <b>wrong</b>. Don't do this.
          </p>
          <p>
            Instead, we will be dividing the two fractions. This is accomplished
            by cross multiplication, or in different terms, by multiplying one
            fraction by the reciprocal of the other. Notice below that the
            fraction with the larger value, 7/4, is first, and that 3/2 has been
            flipped to become 2/3.
          </p>
          <table>
            <tbody>
              <tr>
                <td>7</td>
                <td>*</td>
                <td>2</td>
                <td>=</td>
                <td>12</td>
              </tr>
              <tr>
                <td>4</td>
                <td>*</td>
                <td>3</td>
                <td>=</td>
                <td>14</td>
              </tr>
            </tbody>
          </table>
          <p>This process yields 14/12, which reduces to 7/6.</p>
          <p>
            <i>Checking the math in cents:</i>
          </p>
          <p>
            3/2 = 701.955
            <br />
            7/4 = 968.826
            <br />
            <br />
            968.826 - 701.955 = 266.871
            <br />
            <br />
            7/6 = 266.817 ✔️
          </p>
          <br />
          <h2 className="center">Inverted Ratios</h2>
          <p>
            Intriguingly, ratios can be flipped around to represent the same
            pitch distance from 1/1, except going backward around the circle
            rather than forward. 3/2 and 4/3 are the first example of this.
          </p>
          <p>Let's subtract 4/3 from 2/1.</p>
          <table>
            <tbody>
              <tr>
                <td>2</td>
                <td>*</td>
                <td>3</td>
                <td>=</td>
                <td>6</td>
              </tr>
              <tr>
                <td>1</td>
                <td>*</td>
                <td>4</td>
                <td>=</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
          <p>
            6/4 reduces to 3/2. Meaning that going down 4/3 from your root note
            equates to going up 3/2 from your root note.
          </p>
          <p>
            <i>Checking the math in cents:</i>
          </p>
          <p>
            2/1 = 1200
            <br />
            4/3 = 498.045
            <br />
            <br />
            1200 - 498.048 = 701.955
            <br />
            <br />
            3/2 = 701.955 ✔️
          </p>
          <p>
            The opposite will be true as well. Let's now subtract 3/2 from 2/1.
          </p>
          <table>
            <tbody>
              <tr>
                <td>2</td>
                <td>*</td>
                <td>2</td>
                <td>=</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>*</td>
                <td>3</td>
                <td>=</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>
            In this case, we don't even need to octave reduce, the answer is
            4/3.
          </p>
          <p>
            <i>Checking the math in cents:</i>
          </p>
          <p>
            2/1 = 1200
            <br />
            3/2 = 701.955
            <br />
            <br />
            1200 - 701.955 = 498.045
            <br />
            <br />
            4/3 = 498.045 ✔️
          </p>
          <p>
            Every single ratio out of the infinite amount possible has an
            inverted ratio. In order to find it:
          </p>
          <ol>
            <li>Reverse the position of the numerator and denominator.</li>
            <li>Multiply the numerator by 2.</li>
            <li>Octave reduce the new fraction if possible.</li>
          </ol>
          <p>That's all. Let's find the inverted ratio of 15/8.</p>
          <ol>
            <li>8/15</li>
            <li>16/15</li>
            <li>N/A, already in the first octave.</li>
          </ol>
          <p>
            The inverted ratio of 15/8 is 16/15. We can actually verify the
            subtraction properties in the two tables above by instead adding
            15/8 and 16/15 together. If they equal 2/1 when added, then either
            one subtracted from 2/1 will equal the other.
          </p>
          <table>
            <tbody>
              <tr>
                <td>15</td>
                <td>*</td>
                <td>16</td>
                <td>=</td>
                <td>240</td>
              </tr>
              <tr>
                <td>8</td>
                <td>*</td>
                <td>15</td>
                <td>=</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
          <p>240/120 reduces to, you guessed it, 2/1.</p>
          <p>
            <i>Checking the math in cents:</i>
          </p>
          <p>
            15/8 = 1088.269
            <br />
            16/15 = 111.731
            <br />
            <br />
            1088.269 + 111.731 = 1200
            <br />
            <br />
            2/1 = 1200 ✔️
          </p>
          <p>
            This concept will be of interest in the section below on linear
            temperaments, as inverted ratio pairs create the same scales as each
            other.
          </p>
          <br />
          <h2 className="center">
            Modal Transformations of Ratio-Based Scales
          </h2>
          <p>
            We can construct scales entirely out of ratio sets. One such scale
            is Ptolemy's Intense Diatonic Scale, which can be said to be a pure
            version of what our standard 12 tone equal temperament major scale
            approximates.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Degree</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Ratio</td>
                <td>1/1</td>
                <td>9/8</td>
                <td>5/4</td>
                <td>4/3</td>
                <td>3/2</td>
                <td>5/3</td>
                <td>15/8</td>
                <td>2/1</td>
              </tr>
              <tr>
                <td>Cents</td>
                <td>0</td>
                <td>203.910</td>
                <td>386.314</td>
                <td>498.045</td>
                <td>701.955</td>
                <td>884.359</td>
                <td>1088.269</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <p>
            This scale is very harmonious, since it is made up entirely of very
            simple ratios.
          </p>
          <p>
            One thing that we like to do in music is play in different modes of
            a given scale, meaning that interpret one of the non-root intervals
            in the scale as the root.
          </p>
          <p>
            In order to do this, we take the scale degree that we would like to
            start on and subtract it from every other interval in the scale. As
            above, we do this by dividing the two intervals, which is the same
            as cross multiplication, meaning to multiply one ratio by the
            reciprocal of the other. Let's start on the second degree of the
            scale, 9/8.
          </p>
          <table>
            <tbody>
              <tr>
                <td>9/8</td>
                <td>÷</td>
                <td>9/8</td>
                <td>=</td>
                <td>72/72</td>
                <td>=</td>
                <td>1/1</td>
              </tr>
              <tr>
                <td>5/4</td>
                <td>÷</td>
                <td>9/8</td>
                <td>=</td>
                <td>40/36</td>
                <td>=</td>
                <td>10/9</td>
              </tr>
              <tr>
                <td>4/3</td>
                <td>÷</td>
                <td>9/8</td>
                <td>=</td>
                <td>32/27</td>
                <td>=</td>
                <td>32/27</td>
              </tr>
              <tr>
                <td>3/2</td>
                <td>÷</td>
                <td>9/8</td>
                <td>=</td>
                <td>24/18</td>
                <td>=</td>
                <td>4/3</td>
              </tr>
              <tr>
                <td>5/3</td>
                <td>÷</td>
                <td>9/8</td>
                <td>=</td>
                <td>40/27</td>
                <td>=</td>
                <td>40/27</td>
              </tr>
              <tr>
                <td>15/8</td>
                <td>÷</td>
                <td>9/8</td>
                <td>=</td>
                <td>120/72</td>
                <td>=</td>
                <td>5/3</td>
              </tr>
              <tr>
                <td>2/1</td>
                <td>÷</td>
                <td>9/8</td>
                <td>=</td>
                <td>16/9</td>
                <td>=</td>
                <td>16/9</td>
              </tr>
            </tbody>
          </table>
          <p>
            Thus, the modal transformation to the second degree of Ptolemy's
            Intense Diatonic scale yields:
          </p>
          <table>
            <tbody>
              <tr>
                <td>Degree</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Ratio</td>
                <td>1/1</td>
                <td>10/9</td>
                <td>32/27</td>
                <td>4/3</td>
                <td>40/27</td>
                <td>5/3</td>
                <td>16/9</td>
                <td>2/1</td>
              </tr>
              <tr>
                <td>Cents</td>
                <td>0</td>
                <td>182.403</td>
                <td>294.135</td>
                <td>498.045</td>
                <td>680.449</td>
                <td>884.359</td>
                <td>996.090</td>
                <td>1200</td>
              </tr>
            </tbody>
          </table>
          <p>
            First, please note that many scales have many excellent, usable
            modal transformations!
          </p>
          <p>
            But this one particularly results in what many consider to be a
            problem. This example was picked specifically because its 5th
            interval, 40/27, is close enough to 3/2 (about 22 cents off) that
            the ear tends to interpret it as a really out of tune 3/2. Without
            having specifically trained your pitch recognition, your ear will
            tend to interpret more complex ratios in the context of simpler
            ones. When a tone and a tone 40/27 away from it sound together, it
            creates a very noticeable "owowowowow" sound. This is known as a
            "wolf" interval. (Wolf 3/2 intervals are the most noticeable, since
            they are the simplest ratio other than the octave.)
          </p>
          <p>
            This is demonstrated to show why our modern musical system was
            created. It gets a little boring to have only music that is made
            entirely from the basic just ratios of Ptolemy's Intense Diatonic.
            It's a pretty sound, but it doesn't leave us with a huge amount of
            variety, which we do crave for the sonic storytelling of a
            well-crafted piece of music. But when we modulate within a system
            like this, we end up with dissonant intervals that many people
            consider unacceptably "bad" sounding.
          </p>
          <br />
          <h2 className="center">Linear Temperaments and Pythagorean Tuning</h2>
          <p>
            So how can we achieve tuning systems that allow freer modulation,
            introducing fewer wolf intervals when the scale is transformed?
          </p>
          <p>One possibility is Pythagorean Tuning.</p>
          <p>
            Pythagorean tuning is a Linear Temperament, which means that it is a
            type of octave-based scale created by stacking a "generating
            interval" on top of itself. In the case of Pythagorean tuning, we
            use the simplest ratio possible, 3/2. You start with 1/1, then add
            the note 3/2 above to it, then add the note 3/2 above that, then add
            the note 3/2 to that, until you have the amount of notes you desire.
            Whenever the note you are adding goes into the second octave, it
            gets octave reduced.
          </p>
          <p>
            Let's start by looking at what happens when we go through five
            iterations of this process:
          </p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Iteration</td>
                <td className="tableTopRow">Raw Ratio</td>
                <td className="tableTopRow">Reduced Ratio</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Reduced Cents</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1/1</td>
                <td>1/1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>3/2</td>
                <td>3/2</td>
                <td>701.955</td>
                <td>701.955</td>
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
                <td>27/8</td>
                <td>27/16</td>
                <td>2105.865</td>
                <td>905.865</td>
              </tr>
              <tr>
                <td>4</td>
                <td>81/16</td>
                <td>81/64</td>
                <td>2807.820</td>
                <td>407.820</td>
              </tr>
            </tbody>
          </table>
          <p>And then arrange the pitches in order:</p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Scale Degree</td>
                <td className="tableTopRow">Raw Ratio</td>
                <td className="tableTopRow">Reduced Ratio</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Reduced Cents</td>
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
          <p>
            We end up with the Pythagorean version of the Major Pentatonic
            scale, which is a very strong scale with little dissonance that has
            been utilized by many cultures worldwide. The Major Pentatonic scale
            is derived from stacking five 3/2s on top of each other. Its modal
            transformations are consistent, all the 3/2s present in its
            transformations are perfect, and the rest of the intervals of all of
            its modes either precisely line up with Ptolemy's Intense Diatonic,
            or are ~21 cents off.
          </p>
          <p>
            Let's extend Pythagorean Tuning to 7 notes and see what happens.
          </p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Iteration</td>
                <td className="tableTopRow">Raw Ratio</td>
                <td className="tableTopRow">Reduced Ratio</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Reduced Cents</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1/1</td>
                <td>1/1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>3/2</td>
                <td>3/2</td>
                <td>701.955</td>
                <td>701.955</td>
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
                <td>27/8</td>
                <td>27/16</td>
                <td>2105.865</td>
                <td>905.865</td>
              </tr>
              <tr>
                <td>4</td>
                <td>81/16</td>
                <td>81/64</td>
                <td>2807.820</td>
                <td>407.820</td>
              </tr>
              <tr>
                <td>5</td>
                <td>243/32</td>
                <td>243/128</td>
                <td>3509.775</td>
                <td>1109.775</td>
              </tr>
              <tr>
                <td>6</td>
                <td>729/64</td>
                <td>729/512</td>
                <td>4211.730</td>
                <td>611.730</td>
              </tr>
            </tbody>
          </table>
          <p>Then arrange the pitches in order:</p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Scale Degree</td>
                <td className="tableTopRow">Raw Ratio</td>
                <td className="tableTopRow">Reduced Ratio</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Reduced Cents</td>
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
          <p>
            Adding two more notes gives us the Pythagorean Diatonic scale!
            Stacking seven 3/2s results in the Pythagorean Lydian scale,
            specifically. The scale is most often modally transformed into its
            fifth mode, Ionian (aka the familiar 7 note Major Scale), because it
            replaces the instability of the Augmented 4th with the stability of
            the Perfect 4th while leaving every other interval the same. People
            tend to view the Ionian Mode as the basis of the Diatonic Scale, but
            truly Lydian is its first mode.
          </p>
          <p>
            The Pythagorean Diatonic again provides perfect 3/2s in all of its
            modal transformations. Again, all of the other intervals in the
            transformations either precisely line up with the simple ratios of
            Ptolemy's Intense Diatonic, or are ~21 cents off. While not
            perfectly in tune, all of the intervals are consistent.
          </p>
          <p>
            One thing worth noting at this point is that even this simple scale
            made of 3/2s starts to create large ratios fairly quickly. 729/512
            is made up of much larger numbers than something like 5/3. The
            important thing to note here is that in the context, it still sounds
            harmonious.
          </p>
          <p>The next note total that makes sense to examine is 12.</p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Iteration</td>
                <td className="tableTopRow">Raw Ratio</td>
                <td className="tableTopRow">Reduced Ratio</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Reduced Cents</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1/1</td>
                <td>1/1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>3/2</td>
                <td>3/2</td>
                <td>701.955</td>
                <td>701.955</td>
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
                <td>27/8</td>
                <td>27/16</td>
                <td>2105.865</td>
                <td>905.865</td>
              </tr>
              <tr>
                <td>4</td>
                <td>81/16</td>
                <td>81/64</td>
                <td>2807.820</td>
                <td>407.820</td>
              </tr>
              <tr>
                <td>5</td>
                <td>243/32</td>
                <td>243/128</td>
                <td>3509.775</td>
                <td>1109.775</td>
              </tr>
              <tr>
                <td>6</td>
                <td>729/64</td>
                <td>729/512</td>
                <td>4211.730</td>
                <td>611.730</td>
              </tr>
              <tr>
                <td>7</td>
                <td>2187/128</td>
                <td>2187/2048</td>
                <td>4913.685</td>
                <td>113.685</td>
              </tr>
              <tr>
                <td>8</td>
                <td>6561/256</td>
                <td>6561/4096</td>
                <td>5615.64</td>
                <td>815.640</td>
              </tr>
              <tr>
                <td>9</td>
                <td>19683/512</td>
                <td>19683/16384</td>
                <td>6317.595</td>
                <td>317.595</td>
              </tr>
              <tr>
                <td>10</td>
                <td>59049/1024</td>
                <td>59049/32768</td>
                <td>7019.550</td>
                <td>1019.550</td>
              </tr>
              <tr>
                <td>11</td>
                <td>177147/2048</td>
                <td>177147/131072</td>
                <td>7721.505</td>
                <td>521.505</td>
              </tr>
            </tbody>
          </table>
          <p>
            Then, when we arrange the pitches in order, we end up with something
            very similar to 12 tone equal temperament.
          </p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Scale degree</td>
                <td className="tableTopRow">Raw Ratio</td>
                <td className="tableTopRow">Reduced Ratio</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Reduced Cents</td>
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
          <p>
            The 12 note Pythagorean Tuning has perfect 3/2s in every
            transformation of the scale with one exception: the sixth modal
            transformation has a wolf fifth at 678.49 cents. But as we add more
            notes, we come into a new problem, which is that every key has
            different consonant and dissonant intervals. Some intervals will be
            exact, some will be 2 cents off, others will be 19, 22, or 24 cents
            off from the pure intervals found in Ptolemy's Intense Diatonic.
          </p>
          <p>
            Pythagorean Tuning allows significant modulation, but each key has
            its own harmony characteristics that will lend it to using certain
            scales over others.
          </p>
          <p>
            It is important to note that any ratio, not just 3/2, can be used as
            a generating interval in a linear temperament. Not only that, any
            cents value can be used as the generating interval. It's fun to
            explore what types of scales come about as a result of trying other
            options. The section below on temperaments has further discussion on
            these ideas.
          </p>
          <br />
          <h2 className="center">Moments of Symmetry</h2>
          <p>
            Linear temperaments have an interesting property. They will{" "}
            <b>always</b>, without exception, create scales of 2 or 3 step
            sizes. For example, using 3/2 as a generating interval, we find that
            the scales created take on these step sizes:
          </p>
          <table>
            <tbody>
              <tr>
                <td>Note Total</td>
                <td>Pattern</td>
                <td>Large Step</td>
                <td>Medium Step</td>
                <td>Small Step</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ls</td>
                <td>701.955</td>
                <td>N/A</td>
                <td>498.045</td>
              </tr>
              <tr>
                <td>3</td>
                <td>sLL</td>
                <td>498.045</td>
                <td>N/A</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>4</td>
                <td>sLsm</td>
                <td>498.045</td>
                <td>294.135</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>5</td>
                <td>ssLsL</td>
                <td>294.135</td>
                <td>N/A</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>6</td>
                <td>mmLmms</td>
                <td>294.135</td>
                <td>203.910</td>
                <td>90.225</td>
              </tr>
              <tr>
                <td>7</td>
                <td>LLLsLLs</td>
                <td>203.910</td>
                <td>N/A</td>
                <td>90.225</td>
              </tr>
              <tr>
                <td>8</td>
                <td>msLLsLLs</td>
                <td>203.910</td>
                <td>113.685</td>
                <td>90.225</td>
              </tr>
              <tr>
                <td>9</td>
                <td>msLLsmsLs</td>
                <td>203.910</td>
                <td>113.685</td>
                <td>90.225</td>
              </tr>
              <tr>
                <td>10</td>
                <td>msmsLsmsLs</td>
                <td>203.910</td>
                <td>113.685</td>
                <td>90.225</td>
              </tr>
              <tr>
                <td>11</td>
                <td>msmsLsmsmss</td>
                <td>203.910</td>
                <td>113.685</td>
                <td>90.225</td>
              </tr>
              <tr>
                <td>12</td>
                <td>LsLsLssLsLss</td>
                <td>113.685</td>
                <td>N/A</td>
                <td>90.225</td>
              </tr>
            </tbody>
          </table>
          <p>
            Every scale that arises from this process with only 2 step sizes is
            known as a Moment of Symmetry (MOS) scale.
          </p>
          <p>
            The MOS scales are deliniation points. Anything with a medium step
            size is a subset of the next MOS larger than it. The 4 note scale
            that arises from 3/2 is really just the 5 note MOS scale with one of
            the tones removed. The 6 note scale is really just the 7 note MOS
            with one of the tones removed. The 8, 9, 10, and 11 note scales
            created by stacking 3/2 are the 12 note MOS with 4, 3, 2, and 1 tone
            removed.
          </p>
          <p>
            This is why we went straight from 5 notes, to 7 notes, to 12 notes
            in the section above. The MOS scales of 2 and 3 notes were skipped
            because with as few tones as those offer, they sound more like
            chords than scales. 5 notes in a scale tends to be the amount at
            which the scale starts to allow for some actual harmonic motion.
          </p>
          <p>
            It is important to note that this is a different characteristic than
            Myhill's Property. A scale is said to be Myhill if it only has two
            step sizes. All MOS scales are Myhill, but not all Myhill scales are
            MOS.
          </p>
          <p>
            For example, it is possible to take the 7 note Pythagorean Lydian
            MOS LLLsLLs and change around the L and s steps in a way that does
            not result in one of the modal transformations of that scale. We
            could do LLLLsLs, resulting in this scale:
          </p>
          <table>
            <tbody>
              <tr>
                <td>Scale Degree</td>
                <td>Cents</td>
                <td>Step</td>
                <td>Difference</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2</td>
                <td>203.910</td>
                <td>L</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>3</td>
                <td>407.820</td>
                <td>L</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>4</td>
                <td>611.730</td>
                <td>L</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>5</td>
                <td>815.640</td>
                <td>L</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>6</td>
                <td>905.865</td>
                <td>s</td>
                <td>90.225</td>
              </tr>
              <tr>
                <td>7</td>
                <td>1109.775</td>
                <td>L</td>
                <td>203.910</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1200</td>
                <td>s</td>
                <td>90.225</td>
              </tr>
            </tbody>
          </table>
          <p>
            This scale is an example of what is known as a MODMOS. It is a
            modification (MOD) of a Moment of Symmetry (MOS) scale. It has
            Myhill's property, due to only having 2 step sizes, but it is not a
            true MOS scale. Please note that not all Myhill scales are MODMOS.
          </p>
          <h4>Determining Which Note Totals Result in MOS Scales</h4>
          <p>
            One way to determine what note totals will create MOS scales from a
            given generator is to simply brute force it by plugging in numbers
            until you find each MOS looking for scales with 2 step sizes. There
            is a more elegant solution.
          </p>
          <p>
            First, you will need the log(2) value of your generator. If your
            generator is in cents, divide by 1200. If your generator is a ratio,
            apply log(x/y)/log(2).
          </p>
          <p>Next, divide 1 by the log2 value.</p>
          <p>
            Record the whole number value before the decimal point, then remove
            it from the value. For example, if your log(2) value was 3.5647,
            write down the number 3, then use 0.5647 for the next step in the
            process.
          </p>
          <p>
            Now, divide 1 by the new decimal value. Again, write down the whole
            number value, then remove it and use the decimal value to repeat
            this process as many times as desired.
          </p>
          <p>
            The list of whole numbers that were removed from each value, which
            we will call the 1/x List, will the amount of iterations of each
            step of the process.
          </p>
          <p>
            In every case, start with 1, and start with an "add value" of 1.
          </p>
          <p>
            On your first iteration, take your first value from the 1/x List and
            add your add value that many times. Each result will be a note total
            that will make up a MOS scale.
          </p>
          Take the penultimate value of your current list of MOS-generating note
          totals, and use it as your new add value.
          <p>
            <p>
              On the second iteration, take your new add value and add it the
              amount of times of the second value in your 1/x List. Each result
              will be a note total that will make up a MOS scale.
            </p>
          </p>
          Take the penultimate value of your current list of MOS-generating note
          totals, and use it as your new add value.
          <p>
            <p>Repeat this process as desired.</p>
            <p>In this case, examples will be worth a heck of a lot:</p>
          </p>
          <p>Example Cents 316</p>
          <p>316 / 1200 = 0.2633333333333333</p>
          <table>
            <tbody>
              <tr>
                <td>Iteration</td>
                <td>-</td>
                <td>Previous Outcome, Interger Part Removed</td>
                <td>-</td>
                <td>New Outcome</td>
                <td>List of Interger Parts of Each Outcome</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1 / </td>
                <td>0.2633333333333333*</td>
                <td>=</td>
                <td>3.79746835443038</td>
                <td>3</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1 / </td>
                <td>0.79746835443038</td>
                <td>=</td>
                <td>1.2539682539682535</td>
                <td>3, 1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1 / </td>
                <td>0.2539682539682535</td>
                <td>=</td>
                <td>3.937500000000007</td>
                <td>3, 1, 3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>1 / </td>
                <td>0.937500000000007</td>
                <td>=</td>
                <td>1.0666666666666587</td>
                <td>3, 1, 3, 1</td>
              </tr>
              <tr>
                <td>5</td>
                <td>1 / </td>
                <td>0.0666666666666587</td>
                <td>=</td>
                <td>15.000000000001801</td>
                <td>3, 1, 3, 1, 15</td>
              </tr>
            </tbody>
          </table>
          <p>Our 1/x List is 3, 1, 3, 1, 15.</p>
          <p>
            Start with 1 as the base. Start with the add value as 1 by default.
          </p>
          <p className="center">
            <br />
            <i>Iteration 1 - Add Value 1</i>
          </p>
          <p>
            Add the add value 3 times, since 3 is the first value in our 1/x
            List.
          </p>
          <p className="center">
            1 + 1 = 2<br />
            2 + 1 = 3<br />
            3 + 1 = 4 <br />
          </p>
          <p>
            We now know that note totals of 2, 3, and 4 create MOS scales with
            this generator.
          </p>
          <p>
            The penultimate value of the current MOS list, 3, will become the
            new add value.
          </p>
          <p className="center">
            <br />
            <i>Iteration 2 - Add Value 3</i>
          </p>
          <p>
            Add the add value 1 time, since 1 is the second value in our 1/x
            List.
          </p>
          <p className="center">4 + 3 = 7</p>
          <p>
            {" "}
            Now we know that note totals of 2, 3, 4, and 7 create MOS scales
            with this generator.
          </p>
          <p>
            The penultimate value of the current MOS list, 4, will become the
            new add value.
          </p>
          <p className="center">
            <br />
            <i>Iteration 3 - Add Value 4</i>
          </p>
          <p>
            {" "}
            Add the add value 3 times, since 3 is the third value in our 1/x
            List.
          </p>
          <p className="center">
            7 + 4 = 11
            <br />
            11 + 4 = 15
            <br />
            15 + 4 = 19
          </p>
          <p>
            Now we know that note totals of 2, 3, 4, 7, 11, 15, and 19 create
            MOS scales with this generator.
          </p>
          <p>
            The penultimate value of the current MOS list, 15, will become the
            new add value.
          </p>
          <p>
            <br />
            <br />
            ...continue this process as desired.
          </p>
          <br />
          <br />
          <br />
          <p>Example Ratio - 3/2</p>
          <p>log(3/2)/log(2) = 0.5849625007211562</p>
          <table>
            <tbody>
              <tr>
                <td>Iteration</td>
                <td>-</td>
                <td>Previous Outcome, Interger Part Removed</td>
                <td>-</td>
                <td>New Outcome</td>
                <td>List of Interger Parts of Each Outcome</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1 / </td>
                <td>0.5849625007211562*</td>
                <td>=</td>
                <td>1.7095112913514547</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1 / </td>
                <td>0.7095112913514547</td>
                <td>=</td>
                <td>1.409420839653209</td>
                <td>1, 1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1 / </td>
                <td>0.409420839653209</td>
                <td>=</td>
                <td>2.4424745961808587</td>
                <td>1, 1, 2</td>
              </tr>
              <tr>
                <td>4</td>
                <td>1 / </td>
                <td>0.4424745961808587</td>
                <td>=</td>
                <td>2.2600167526708272</td>
                <td>1, 1, 2, 2</td>
              </tr>
              <tr>
                <td>5</td>
                <td>1 / </td>
                <td>0.2600167526708272</td>
                <td>=</td>
                <td>3.8459060415463595</td>
                <td>1, 1, 2, 2, 3</td>
              </tr>
            </tbody>
          </table>
          <p>Our 1/x List is 1, 1, 2, 2, 3.</p>
          <p>
            Start with 1 as the base. Start with the add value as 1 by default.
          </p>
          <p className="center">
            <br />
            <i>Iteration 1 - Add Value 1</i>
          </p>
          <p>
            Add the add value 1 time, since 1 is the first value in our 1/x
            List.
          </p>
          <p className="center">1 + 1 = 2</p>
          <p>
            We now know that the note total of 2 creates MOS scales with this
            generator.
          </p>
          <p>
            Since there is only 1 value in the list so far, 1 remains the
            current add value.
          </p>
          <p className="center">
            <br />
            <i>Iteration 2 - Add Value 1</i>
          </p>
          <p>
            Add the add value 1 time, since 1 is the second value in our 1/x
            List.
          </p>
          <p className="center">2 + 1 = 3</p>
          <p>
            Now we know that note totals of 2 and 3 create MOS scales with this
            generator.
          </p>
          <p>
            The penultimate value of the current MOS list, 2, will become the
            new add value.
          </p>
          <p className="center">
            <br />
            <i>Iteration 3 - Add Value 2</i>
          </p>
          <p>
            Add the add value 2 time, since 2 is the third value in our 1/x
            List.
          </p>
          <p className="center">
            3 + 2 = 5<br />5 + 2 = 7
          </p>
          <p>
            Now we know that note totals of 2, 3, 5, and 7 create MOS scales
            with this generator.
          </p>
          <p>
            The penultimate value of the current MOS list, 5, will become the
            new add value.
          </p>
          <p className="center">
            <br />
            <i>Iteration 4 - Add Value 5</i>
          </p>
          <p>
            Add the add value 2 times, since 2 is the fourth value in our 1/x
            List.
          </p>
          <p className="center">
            7 + 5 = 12
            <br />
            12 + 5 = 17
          </p>
          <p>
            Now we know that note totals of 2, 3, 5, 7, 12, and 17 create MOS
            scales with this generator.
          </p>
          <p>
            The penultimate value of the current MOS list, 1, will become the
            new add value.
          </p>
          <br />
          <br />
          ...continue this process as desired.
          <br />
          <br />
          <br />
          <br />
          <h2 className="center">Temperaments</h2>
          <p>
            The Linear Temperament by Cents tool can be used to create
            temperaments, which are tuning systems that equate different musical
            ratios to one another. This is accomplished by intentionally
            modifying the generating interval so that it is not a pure ratio.
          </p>
          <p>
            The primary example of a temperament is 12 Tone Equal Temperament,
            the most commonly used musical system in the world. Whether they are
            aware of it or not, 12 Tone Equal Temperament is the way most people
            solve the problems with other pure-ratio-based tuning systems
            discussed above.
          </p>
          <p>
            12 Tone Equal Temperament equates 12 stacks of the 3/2 ratio
            (701.955 cents) with 2/1 (1200 cents).
          </p>
          <p>
            Previously, we examined what happens when 3/2 is stacked on top of
            itself 11 times to create a scale with 12 unique pitches. Despite
            using a pure 3/2 as the generating interval, we still ended up with
            one wolf fifth at 678 cents. Here's why.
          </p>
          <p>
            When 3/2 is stacked on top of itself 12 times, the final value comes
            close to 2/1 (1200 cents), but ends up slightly above by ~23.460
            cents. This value is known as the Pythagorean Comma. (The
            Pythagorean Comma can also be expressed (3/2)<sup>12</sup>
            /(2/1)<sup>7</sup> or 531441/524288.)
          </p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Iteration</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Octave Reduced</td>
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
            generating ratio. This process is known as "tempering out" the
            comma. In this case, we would take the Pythagorean Comma and divide
            it by 12, since we arrived at this comma by stacking twelve 3/2s on
            one another.
          </p>
          <p>~23.46 / 12 = ~1.955</p>
          <p>
            Then, we reduce our original generator of ~701.955 cents by ~1.955
            and arrive at exactly 700 cents for the generator of 12 Tone Equal
            Temperament. Now, 12 stacks of the not-quite-justly-intonated 3/2
            our system uses exactly equal 2/1.
          </p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Iteration</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Octave Reduced</td>
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
            Due to the fundamental theorem of arithmetic, stacking 3/2 will
            always repeat infinitely, never exactly looping back onto 2/1. By
            tempering out this comma, we create an even, closed system that
            loops back in on itself, allowing for free key modulation.
          </p>
          <p>
            As an additional, less familiar example, we will examine the Mavila
            Temperament mentioned above. Mavila equates 3 stacks of 3/2
            (905.865) to 8/5 (813.686 cents).
          </p>
          <table>
            <tbody>
              <tr>
                <td className="tableTopRow">Iteration</td>
                <td className="tableTopRow">Raw Cents</td>
                <td className="tableTopRow">Octave Reduced</td>
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
            This difference is known as the Pelogic Comma and has a value of
            ~92.179 cents. This comma can also be expressed (3/2)<sup>3</sup>
            /(8/5)
            <sup>1</sup> or 135/128.
          </p>
          <p>
            To modify our generating 3/2 so that three iterations creates a
            perfect 8/5, we take the Pelogic Comma and divide it by 3, yielding
            ~30.726 cents. Then we subtract that value from the pure 3/2
            (701.955 cents) and arrive at 671.288 cents for our generator.
          </p>
          <p>
            Mavila Temperaments have an interesting characteristic: when
            extended to 7 notes, it provides what is known as an anti-Diatonic
            scale. Instead of LLLsLLs step sizes, it creates sssLssL. By
            applying modal transformations, one can find anti-Lydian,
            anti-Aeolian, anti-Dorian, etc.
          </p>
          <p>
            It should be noted that this is not the one and only Mavila
            Temperament, Mavila is a range of temperaments. This version with a
            generator of 671.288 creates a pure 8/5 target ratio (known as this
            temperament's "eigenmonzo", or unchanged interval). But one can
            choose to deliberately mistune the target ratio as well as the
            generating ratio, in order to bring other intervals that the scale
            creates closer to purer harmonies. The limits of what constitutes a
            Mavila Temperament are generally considered to be generators between
            666.666 cents and 685.713 cents.
          </p>
          <br />
          <h2>Determining EDO / Temperament Compatability</h2>
          <p>
            As just mentioned, each temperament has a range of generators, each
            creating slightly different scales that end up with very similar
            characteristics. How do we determine this range?
          </p>
          <p>
            The question that determines if a generator falls within the range
            is "does it temper the comma that defines this temperament?"
          </p>
          <p>
            This is done by examining which step counts used as generators of
            what EDOs temper the interval. Ok, now how do we do that? For this
            we use vals and monzos.
          </p>
          <h4>Vals</h4>
          <p>
            A val is a map of a given tuning that says which amount of steps is
            the closest to each prime interval. The prime intervals are 2/1
            (octave), 3/1 (perfect fifth), 5/1 (major third), 7/1 (not named in
            12tet), 11/1 (not named in 12tet), etc.
          </p>
          <p>
            The example for 12edo is {`<`}12, 19, 28, 34, 42]. This is the
            "patent val", which means the val which is arises if you just use
            the step values exactly as they are to determine which is closest to
            each prime interval. The patent val can be modified into a different
            val if you want to use the tuning in different ways, currently this
            is outside the scope of this writeup. For now we will only focus on
            the patent val.
          </p>
          <p>
            This means that it takes 12 steps of the tuning system to reach the
            octave, 19 steps to reach the note closest to a perfect 3/1 (reduces
            to the 7th note as 19-12=7), 28 steps to reach the note closest to
            5/1 (reduces to the 4th note as 28-24=4), 34 steps to reach the note
            closest to 7/1 (reduces to the 10th note as 34-24=10, though in
            12edo this is 33 cents off), etc.
          </p>
          <p>
            The easiest way to derive a patent val is to multiply your EDO by 1,
            log<sub>2</sub>(3), log<sub>2</sub>(5), log<sub>2</sub>(7), log
            <sub>2</sub>(11), log<sub>2</sub>(13), etc, then rounding those
            values to the nearest interger.
          </p>
          <h4>Monzos</h4>
          <p>
            A monzo is a notation that represents a ratio as its prime factors.
          </p>
          <p>
            As an example, the prime factorization of 81/80 is 3*3*3*3 /
            2*2*2*2*5. Therefore its monzo is [-4 4 -1{`>`}.
          </p>
          <p>
            Monzos look like vals, but with the brackets reversed. Similar to
            vals, the values represent the primes in order, so the first value
            represents how many 2s are present, the second value represents how
            many 3s are present, the third value represents how many 5s are
            present, etc.
          </p>
          <p>
            If a value in a monzo is positive, it means that prime is in the
            numerator of the ratio. If the value in a monzo is negative, it
            means that that prime appears in the denominator of the ratio.
          </p>
          <p>
            Uh... then go into how to tell if an EDO tempers an interval. Which
            requires a discussion of vals and monzos. Prime factorization. A
            database with choices to make! Temperament calculator!
          </p>
          <h4>Using Vals and Monzos Together</h4>
          <p>
            To determine if an EDO tempers out a given interval, we use the val
            of that EDO and the monzo of the interval. Let's check if 12edo
            tempers out 81/80. Vals and monzos together are sometimes notated
            like this.
          </p>
          <p>
            {`<`}12, 19, 28] | [-4 4 -1{`>`}
          </p>
          <p>
            81/80 is a 5 limit interval, so we will only use the first 3 numbers
            of the val. Take the first number of the val and multiply it by the
            first value of the monzo. Take the second number of the val and
            multiply it by the second value of the monzo. Take the third number
            of the val and multiply it by the third value of the monzo.
          </p>
          <p>
            12 * -4 = -48
            <br />
            19 * 4 = 76
            <br />
            28 * -1 = -28
          </p>
          <p>Now add all the values together. -48 + 76 + -28 = 0</p>
          <p>
            As the final answer is 0, that means that yes, 12edo tempers out
            81/80. What this means is that 81/80 and 1/1 become the same note within the system of 12edo.
          </p>
          <br />
          <br />
          <button
            className="mb"
            onClick={() => handleShowAbout(stateData, setStateData)}
          >
            Close About
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default KeyConcepts;
