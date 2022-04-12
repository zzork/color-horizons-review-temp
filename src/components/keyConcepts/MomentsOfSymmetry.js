const MomentsOfSymmetry = () => {
  return (
    <div>
      {" "}
      <h2 className="center">Moments of Symmetry</h2>
      <p>
        Rank-2 tunings have an interesting property.{" "}
        <i>
          They will <b>always</b>, without exception, create scales of 2 or 3
          step sizes.
        </i>{" "}
        For example, using 3/2 as a generating interval as we did in the
        previous section, we find that the scales created take on these step
        sizes:
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Note Total</td>
            <td className="lighterTable">Pattern</td>
            <td className="lighterTable">Large Step</td>
            <td className="lighterTable">Medium Step</td>
            <td className="lighterTable">Small Step</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ls</td>
            <td>701.955</td>
            <td>-</td>
            <td>498.045</td>
          </tr>
          <tr>
            <td>3</td>
            <td>sLL</td>
            <td>498.045</td>
            <td>-</td>
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
            <td>-</td>
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
            <td>-</td>
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
            <td>-</td>
            <td>90.225</td>
          </tr>
        </tbody>
      </table>
      <p>
        <i>
          Every scale that arises from this process with only 2 step sizes is
          known as a <b>Moment of Symmetry (MOS)</b> scale.
        </i>
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <p>
        The MOS scales are delineation points.{" "}
        <i>
          Anything with a medium step size is a subset of the next MOS larger
          than it.
        </i>{" "}
        The 4 note scale that arises from 3/2 is really just the 5 note MOS
        scale with one of the tones removed. The 6 note scale is really just the
        7 note MOS with one of the tones removed. The 8, 9, 10, and 11 note
        scales created by stacking 3/2 are the 12 note MOS with 4, 3, 2, and 1
        tone removed.
      </p>
      <p>
        This is why we went straight from 5 notes, to 7 notes, to 12 notes in
        the section above. (The MOS scales of 2 and 3 notes were skipped because
        with as few tones as those offer, they sound more like chords than
        scales.) 5 notes in a scale tends to be the amount at which the scale
        starts to allow for some actual musical storytelling.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Example: True MOS</h4>
      <p>
        A simple mistake to make is to assume that any scale with two step sizes
        is a MOS scale. Many scales with two step sizes are not MOS scales. The
        exact definition for Moments of Symmetry are{" "}
        <i>
          scales that have "exactly two specific intervals for every generic
          interval except the octave."
        </i>
      </p>
      <p>
        What does that mean? Take a 7 note scale with the step layout{" "}
        <b>LLsLLLs</b>. Starting from any note:
      </p>
      <ul>
        <li>Going up 1 note will result in a distance of L or s.</li>
        <li>Going up 2 notes will result in a distance of 2L or 1L+1s.</li>
        <li>Going up 3 notes will result in a distance of 2L+1s or 3L.</li>
        <li>Going up 4 notes will result in a distance of 3L+1s or 2L+2s.</li>
        <li>Going up 5 notes will result in a distance of 4L+1s or 3L+2s.</li>
        <li>Going up 6 notes will result in a distance of 5L+1s or 4L+2s.</li>
        <li>Going up 7 notes will result in the octave. ✔️</li>
      </ul>
      <p>
        In simple terms, if you add a certain amount of steps in the scale to a
        chosen starting point, you can only ever end up with two possible cents
        values.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Example: MODMOS</h4>
      <p>
        Now let's take the MOS LLLsLLs and change around the L and s steps in a
        way that does not result in one of the modal transformations of that
        scale. Let's flip the position of the 4th and 5th notes to arrive at{" "}
        <b>LLLLsLs</b>.
      </p>
      <ul>
        <li>Going up 1 note will result in a distance of L or s.</li>
        <li>Going up 2 notes will result in a distance of 2L or 1L+1s.</li>
        <li>
          Going up 3 notes will result in a distance of 3L or 2L+1s or 1L+2s. ❌
        </li>
      </ul>
      <p>
        We don't need to check every iteration because this scale is
        disqualified by its fourths. Starting from any note, if you add a
        certain amount of steps in the scale, you end up with more than two
        possible sizes for that interval.
      </p>
      <p>
        This scale is an example of what is known as a <b>MODMOS</b>.{" "}
        <i>
          It is a modification <b>(MOD)</b> of a Moment of Symmetry <b>(MOS)</b>{" "}
          scale.
        </i>{" "}
        Not all scales with 2 step sizes are necessarily MODMOS scales.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">
        Determining Which Note Totals Result in MOS Scales
      </h4>
      <p>
        One way to determine what note totals will create MOS scales from a
        given generator is to simply brute force it by plugging in numbers one
        by one until finding each scale with two step sizes. There is a more
        elegant solution.
      </p>
      <p className="center">
        <i>Part 1</i>
      </p>
      <div className="tableClone">
        <ol>
          <li>
            First, get the log(2) value of the generator. If the generator is in
            cents, divide by 1200. If the generator is a ratio, apply
            log(x/y)/log(2).
          </li>
          <li>Divide 1 by the log2 value.</li>
          <li>
            Record the whole number value before the decimal point, then remove
            it from the value. For example, if the log(2) value was 3.5647,
            write down the number 3, then use 0.5647 for the next step in the
            process.
          </li>
          <li>
            Divide 1 by the new decimal value. Again, write down the whole
            number value, then remove it and use the decimal value to repeat
            this process for as many iterations as you would like to run.
          </li>
        </ol>
      </div>
      <p>
        <i>
          The list of whole numbers that were removed from each value, which we
          will call the <b>1/x List</b>, will the be amount of iterations of
          each step of the process.
        </i>
      </p>
      <p className="center">
        <i>Part 2</i>
      </p>
      <div className="tableClone">
        <ol>
          <li>
            In every case, start with 1, and start with an <b>add value</b> of
            1.
          </li>
          <li>
            On the first iteration, take the first value from the 1/x List and
            add the add value that many times. Each result will be a note total
            that will make up a MOS scale.
          </li>
          <li>
            Take the penultimate value of the current list of MOS-generating
            note totals, and use it as the new add value.
          </li>
          <li>
            On the second iteration, take the new add value and add it the
            amount of times of the second value in the 1/x List. Each result
            will be a note total that will make up a MOS scale.
          </li>
          <li>
            Take the penultimate value of your current list of MOS-generating
            note totals, and use it as the new add value.
          </li>
          <li>
            <p>Repeat this process as desired.</p>
          </li>
        </ol>
      </div>
      <p>For this process, examples are worth a heck of a lot.</p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Example: 316 Cents</h4>
      <p className="center">
        316 / 1200 = <i>0.2633333333333333*</i>
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">-</td>
            <td className="lighterTable">
              Previous Outcome, Integer Part Removed
            </td>
            <td className="lighterTable">-</td>
            <td className="lighterTable">New Outcome</td>
            <td className="lighterTable">
              List of Integer Parts of Each Outcome
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>1 ÷ </td>
            <td>
              <i>0.2633333333333333*</i>
            </td>
            <td>=</td>
            <td>3.79746835443038</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1 ÷ </td>
            <td>0.79746835443038</td>
            <td>=</td>
            <td>1.2539682539682535</td>
            <td>3, 1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>1 ÷ </td>
            <td>0.2539682539682535</td>
            <td>=</td>
            <td>3.937500000000007</td>
            <td>3, 1, 3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1 ÷ </td>
            <td>0.937500000000007</td>
            <td>=</td>
            <td>1.0666666666666587</td>
            <td>3, 1, 3, 1</td>
          </tr>
          <tr>
            <td>5</td>
            <td>1 ÷ </td>
            <td>0.0666666666666587</td>
            <td>=</td>
            <td>15.000000000001801</td>
            <td>
              <b>3, 1, 3, 1, 15</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="center">
        The 1/x List is <b>3, 1, 3, 1, 15</b>.
      </p>
      <br />
      <p>Start with 1 as the base. Start with the add value as 1 by default.</p>
      <p className="center">
        <br />
        <i>Iteration 1 - Add Value 1</i>
      </p>
      <div className="tableClone">
        <ul>
          <li>
            Add the add value 3 times, since 3 is the first value in the 1/x
            List.
            <p className="center">
              1 + 1 = 2<br />
              2 + 1 = 3<br />
              3 + 1 = 4 <br />
            </p>
          </li>
          <li>
            We now know that note totals of <b>2, 3, and 4</b> create MOS scales
            with this generator.
          </li>
          <li>
            The penultimate value of the current MOS list, 3, will become the
            new add value.
          </li>
        </ul>
      </div>
      <p className="center">
        <br />
        <i>Iteration 2 - Add Value 3</i>
      </p>
      <div className="tableClone">
        <ul>
          <li>
            Add the add value 1 time, since 1 is the second value in the 1/x
            List.
            <p className="center">4 + 3 = 7</p>
          </li>
          <li>
            {" "}
            Now we know that note totals of <b>2, 3, 4, and 7</b> create MOS
            scales with this generator.
          </li>
          <li>
            The penultimate value of the current MOS list, 4, will become the
            new add value.
          </li>
        </ul>
      </div>
      <p className="center">
        <br />
        <i>Iteration 3 - Add Value 4</i>
      </p>
      <div className="tableClone">
        <ul>
          <li>
            Add the add value 3 times, since 3 is the third value in the 1/x
            List.
            <p className="center">
              7 + 4 = 11
              <br />
              11 + 4 = 15
              <br />
              15 + 4 = 19
            </p>
          </li>
          <li>
            Now we know that note totals of <b>2, 3, 4, 7, 11, 15, and 19</b>{" "}
            create MOS scales with this generator.
          </li>
          <li>
            The penultimate value of the current MOS list, 15, will become the
            new add value.
          </li>
        </ul>
      </div>
      <p className="center">
        <br />
        <br />
        ...continue this process as desired.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Example: 3/2</h4>
      <p className="center">
        log(3/2)/log(2) = <i>0.5849625007211562*</i>
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">-</td>
            <td className="lighterTable">
              Previous Outcome, Integer Part Removed
            </td>
            <td className="lighterTable">-</td>
            <td className="lighterTable">New Outcome</td>
            <td className="lighterTable">
              List of Integer Parts of Each Outcome
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>1 ÷ </td>
            <td>
              <i>0.5849625007211562*</i>
            </td>
            <td>=</td>
            <td>1.7095112913514547</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1 ÷ </td>
            <td>0.7095112913514547</td>
            <td>=</td>
            <td>1.409420839653209</td>
            <td>1, 1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>1 ÷ </td>
            <td>0.409420839653209</td>
            <td>=</td>
            <td>2.4424745961808587</td>
            <td>1, 1, 2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1 ÷ </td>
            <td>0.4424745961808587</td>
            <td>=</td>
            <td>2.2600167526708272</td>
            <td>1, 1, 2, 2</td>
          </tr>
          <tr>
            <td>5</td>
            <td>1 ÷ </td>
            <td>0.2600167526708272</td>
            <td>=</td>
            <td>3.8459060415463595</td>
            <td>
              <b>1, 1, 2, 2, 3</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="center">
        The 1/x List is <b>1, 1, 2, 2, 3</b>.
      </p>
      <br />
      <p>Start with 1 as the base. Start with the add value as 1 by default.</p>
      <p className="center">
        <br />
        <i>Iteration 1 - Add Value 1</i>
      </p>
      <div className="tableClone">
        <ul>
          <li>
            Add the add value 1 time, since 1 is the first value in the 1/x
            List.
            <p className="center">1 + 1 = 2</p>
          </li>
          <li>
            We now know that the note total of <b>2</b> creates MOS scales with
            this generator.
          </li>
          <li>
            Since there is only 1 value in the list so far, 1 remains the
            current add value.
          </li>
        </ul>
      </div>
      <p className="center">
        <br />
        <i>Iteration 2 - Add Value 1</i>
      </p>
      <div className="tableClone">
        <ul>
          <li>
            Add the add value 1 time, since 1 is the second value in the 1/x
            List.
            <p className="center">2 + 1 = 3</p>
          </li>
          <li>
            Now we know that note totals of <b>2 and 3</b> create MOS scales
            with this generator.
          </li>
          <li>
            The penultimate value of the current MOS list, 2, will become the
            new add value.
          </li>
        </ul>
      </div>
      <p className="center">
        <br />
        <i>Iteration 3 - Add Value 2</i>
      </p>
      <div className="tableClone">
        <ul>
          <li>
            Add the add value 2 time, since 2 is the third value in the 1/x
            List.
            <p className="center">
              3 + 2 = 5<br />5 + 2 = 7
            </p>
          </li>
          <li>
            Now we know that note totals of <b>2, 3, 5, and 7</b> create MOS
            scales with this generator.
          </li>
          <li>
            The penultimate value of the current MOS list, 5, will become the
            new add value.
          </li>
        </ul>
      </div>
      <p className="center">
        <br />
        <i>Iteration 4 - Add Value 5</i>
      </p>
      <div className="tableClone">
        <ul>
          <li>
            Add the add value 2 times, since 2 is the fourth value in the 1/x
            List.
            <p className="center">
              7 + 5 = 12
              <br />
              12 + 5 = 17
            </p>
          </li>
          <li>
            Now we know that note totals of <b>2, 3, 5, 7, 12, and 17</b> create
            MOS scales with this generator.
          </li>
          <li>
            The penultimate value of the current MOS list, 1, will become the
            new add value.
          </li>
        </ul>
      </div>
      <br />
      <br />
      <p className="center">...continue this process as desired.</p>
    </div>
  );
};

export default MomentsOfSymmetry;
