const Subtraction = () => {
  return (
    <div>
      <h2 className="center">Distance Between Ratios (Subtraction)</h2>
      <p>
        Say that you wanted to determine what ratio would represent the distance
        between two intervals. This concept becomes particularly imporant when
        doing modal transformations of ratio based scales.
      </p>
      <p>
        Let's take 3/2 and 7/4 again. In normal math, you would find the common
        denominator, then subtract the numerators from one another. This would
        yield 1/4, which is equivalent to 2/1, the octave. Again, this is{" "}
        <b>wrong</b>. Don't do this.
      </p>
      <p>
        Instead, we will be dividing the two fractions. This is accomplished by
        cross multiplication, or in different terms, by multiplying one fraction
        by the reciprocal of the other. Notice below that the fraction with the
        larger value, 7/4, is first, and that 3/2 has been flipped to become
        2/3.
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
    </div>
  );
};

export default Subtraction;
