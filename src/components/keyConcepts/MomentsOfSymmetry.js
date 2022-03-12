const MomentsOfSymmetry = () => {
  return (
    <div>
      {" "}
      <h2 className="center">Moments of Symmetry</h2>
      <p>
        Linear temperaments have an interesting property. They will{" "}
        <b>always</b>, without exception, create scales of 2 or 3 step sizes.
        For example, using 3/2 as a generating interval, we find that the scales
        created take on these step sizes:
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
        The MOS scales are deliniation points. Anything with a medium step size
        is a subset of the next MOS larger than it. The 4 note scale that arises
        from 3/2 is really just the 5 note MOS scale with one of the tones
        removed. The 6 note scale is really just the 7 note MOS with one of the
        tones removed. The 8, 9, 10, and 11 note scales created by stacking 3/2
        are the 12 note MOS with 4, 3, 2, and 1 tone removed.
      </p>
      <p>
        This is why we went straight from 5 notes, to 7 notes, to 12 notes in
        the section above. The MOS scales of 2 and 3 notes were skipped because
        with as few tones as those offer, they sound more like chords than
        scales. 5 notes in a scale tends to be the amount at which the scale
        starts to allow for some actual harmonic motion.
      </p>
      <p>
        It is important to note that this is a different characteristic than
        Myhill's Property. A scale is said to be Myhill if it only has two step
        sizes. All MOS scales are Myhill, but not all Myhill scales are MOS.
      </p>
      <p>
        For example, it is possible to take the 7 note Pythagorean Lydian MOS
        LLLsLLs and change around the L and s steps in a way that does not
        result in one of the modal transformations of that scale. We could do
        LLLLsLs, resulting in this scale:
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
        modification (MOD) of a Moment of Symmetry (MOS) scale. It has Myhill's
        property, due to only having 2 step sizes, but it is not a true MOS
        scale. Please note that not all Myhill scales are MODMOS.
      </p>
      <h4>Determining Which Note Totals Result in MOS Scales</h4>
      <p>
        One way to determine what note totals will create MOS scales from a
        given generator is to simply brute force it by plugging in numbers until
        you find each MOS looking for scales with 2 step sizes. There is a more
        elegant solution.
      </p>
      <p>
        First, you will need the log(2) value of your generator. If your
        generator is in cents, divide by 1200. If your generator is a ratio,
        apply log(x/y)/log(2).
      </p>
      <p>Next, divide 1 by the log2 value.</p>
      <p>
        Record the whole number value before the decimal point, then remove it
        from the value. For example, if your log(2) value was 3.5647, write down
        the number 3, then use 0.5647 for the next step in the process.
      </p>
      <p>
        Now, divide 1 by the new decimal value. Again, write down the whole
        number value, then remove it and use the decimal value to repeat this
        process as many times as desired.
      </p>
      <p>
        The list of whole numbers that were removed from each value, which we
        will call the 1/x List, will the amount of iterations of each step of
        the process.
      </p>
      <p>In every case, start with 1, and start with an "add value" of 1.</p>
      <p>
        On your first iteration, take your first value from the 1/x List and add
        your add value that many times. Each result will be a note total that
        will make up a MOS scale.
      </p>
      Take the penultimate value of your current list of MOS-generating note
      totals, and use it as your new add value.
      <p>
        <p>
          On the second iteration, take your new add value and add it the amount
          of times of the second value in your 1/x List. Each result will be a
          note total that will make up a MOS scale.
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
      <p>Start with 1 as the base. Start with the add value as 1 by default.</p>
      <p className="center">
        <br />
        <i>Iteration 1 - Add Value 1</i>
      </p>
      <p>
        Add the add value 3 times, since 3 is the first value in our 1/x List.
      </p>
      <p className="center">
        1 + 1 = 2<br />
        2 + 1 = 3<br />
        3 + 1 = 4 <br />
      </p>
      <p>
        We now know that note totals of 2, 3, and 4 create MOS scales with this
        generator.
      </p>
      <p>
        The penultimate value of the current MOS list, 3, will become the new
        add value.
      </p>
      <p className="center">
        <br />
        <i>Iteration 2 - Add Value 3</i>
      </p>
      <p>
        Add the add value 1 time, since 1 is the second value in our 1/x List.
      </p>
      <p className="center">4 + 3 = 7</p>
      <p>
        {" "}
        Now we know that note totals of 2, 3, 4, and 7 create MOS scales with
        this generator.
      </p>
      <p>
        The penultimate value of the current MOS list, 4, will become the new
        add value.
      </p>
      <p className="center">
        <br />
        <i>Iteration 3 - Add Value 4</i>
      </p>
      <p>
        {" "}
        Add the add value 3 times, since 3 is the third value in our 1/x List.
      </p>
      <p className="center">
        7 + 4 = 11
        <br />
        11 + 4 = 15
        <br />
        15 + 4 = 19
      </p>
      <p>
        Now we know that note totals of 2, 3, 4, 7, 11, 15, and 19 create MOS
        scales with this generator.
      </p>
      <p>
        The penultimate value of the current MOS list, 15, will become the new
        add value.
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
      <p>Start with 1 as the base. Start with the add value as 1 by default.</p>
      <p className="center">
        <br />
        <i>Iteration 1 - Add Value 1</i>
      </p>
      <p>
        Add the add value 1 time, since 1 is the first value in our 1/x List.
      </p>
      <p className="center">1 + 1 = 2</p>
      <p>
        We now know that the note total of 2 creates MOS scales with this
        generator.
      </p>
      <p>
        Since there is only 1 value in the list so far, 1 remains the current
        add value.
      </p>
      <p className="center">
        <br />
        <i>Iteration 2 - Add Value 1</i>
      </p>
      <p>
        Add the add value 1 time, since 1 is the second value in our 1/x List.
      </p>
      <p className="center">2 + 1 = 3</p>
      <p>
        Now we know that note totals of 2 and 3 create MOS scales with this
        generator.
      </p>
      <p>
        The penultimate value of the current MOS list, 2, will become the new
        add value.
      </p>
      <p className="center">
        <br />
        <i>Iteration 3 - Add Value 2</i>
      </p>
      <p>
        Add the add value 2 time, since 2 is the third value in our 1/x List.
      </p>
      <p className="center">
        3 + 2 = 5<br />5 + 2 = 7
      </p>
      <p>
        Now we know that note totals of 2, 3, 5, and 7 create MOS scales with
        this generator.
      </p>
      <p>
        The penultimate value of the current MOS list, 5, will become the new
        add value.
      </p>
      <p className="center">
        <br />
        <i>Iteration 4 - Add Value 5</i>
      </p>
      <p>
        Add the add value 2 times, since 2 is the fourth value in our 1/x List.
      </p>
      <p className="center">
        7 + 5 = 12
        <br />
        12 + 5 = 17
      </p>
      <p>
        Now we know that note totals of 2, 3, 5, 7, 12, and 17 create MOS scales
        with this generator.
      </p>
      <p>
        The penultimate value of the current MOS list, 1, will become the new
        add value.
      </p>
      <br />
      <br />
      <p>...continue this process as desired.</p>
    </div>
  );
};

export default MomentsOfSymmetry;
