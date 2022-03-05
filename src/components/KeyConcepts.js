import { handleShowAbout } from "../eventHandlers";

const KeyConcepts = ({ stateData, setStateData }) => {
  return (
    <div>
      <h1>Key Concepts</h1>
      <div className="tableClone">
        <div className="writtenAreas">
          <br />
          <h2>Sound</h2>
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
          <h2>Pitch</h2>
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
          <h2>Ratios, Harmony</h2>
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
          <h2>Equivalent Ratios</h2>
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
          <h2>Cents</h2>
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
          <h2>Ratio Beyond A Ratio (Addition)</h2>
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

          <h2>Distance Between Ratios (Subtraction)</h2>
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
          <h2>Inverted Ratios</h2>
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
          <h2>Modal Transformations of Ratio-Based Scales</h2>
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
            modal transformations!{" "}
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
          <h2>Linear Temperaments and Pythagorean Tuning</h2>
          <p>
            So how can we achieve tuning systems that allow freer modulation,
            introducing fewer wolf intervals when the scale is transformed?
          </p>
          <p>One possibility is Pythagorean Tuning.</p>

          <br />
          <br />
          <br />
          <h2>Commas</h2>
          <h2>Temperaments</h2>
          <p>
            vals, monzos, prime factorization, applying temperaments to EDOs,
            otonal vs edo equal divisions
          </p>
          <h3>A Brief Discussion of the Concept of Temperaments</h3>
          <p>
            This tool can be used to create temperaments, which are tuning
            systems that equate different musical ratios to one another. This is
            accomplished by intentionally modifying the generating interval so
            that it is not a pure ratio.
          </p>
          <p>
            The primary example of a temperament is 12 Tone Equal Temperament,
            the most commonly used musical system in the world. This system
            equates 12 stacks of the 3/2 ratio (~701.955 cents) with 2/1 (1200
            cents).
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
          <p>
            Uh... then go into how to tell if an EDO tempers an interval. Which
            requires a discussion of vals and monzos. Prime factorization. A
            database with choices to make! Temperament calculator!
          </p>
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
