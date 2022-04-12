import { basicPlay } from "../../util/aboutNotePlayer";

const Subtraction = () => {
  return (
    <div>
      <h2 className="center">Distance Between Ratios (Subtraction)</h2>
      <p>
        Say that you wanted to determine what ratio would represent the distance
        between two intervals. This concept becomes particularly important when
        doing modal transformations of ratio-based scales.
      </p>
      <p>
        Let's take 3/2 and 7/4 again. In normal fraction math, one would find
        the common denominator, then subtract the numerators from one another.
        This would yield 1/4, which is equivalent to 2/1, the octave. Again, in
        a JI context this does not work. Don't do that.
      </p>
      <p>
        Instead, in a JI context,{" "}
        <i>
          to subtract one ratio from another, <b>divide</b> the two fractions
        </i>
        .
      </p>
      <p>
        This is accomplished by cross multiplication, or in different terms, by
        multiplying one fraction by the reciprocal of the other. Notice below
        that the fraction with the larger value, 7/4, is first, and that 3/2 has
        been flipped to become 2/3.
      </p>
      <table>
        <tbody>
          <tr>
            <td>7</td>
            <td>*</td>
            <td>2</td>
            <td>=</td>
            <td>14</td>
          </tr>
          <tr>
            <td>4</td>
            <td>*</td>
            <td>3</td>
            <td>=</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
      <p>This process yields 14/12, which reduces to 7/6.</p>
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220, 330])}>
          1/1, 3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([220, 385])}>
          1/1, 7/4
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330, 385])}>
          3/2, 7/4
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330, 385])}>
          3/2, 7/6 above 3/2
        </button>
      </div>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <b>
                  <i>Checking the math in cents:</i>
                </b>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subtraction;
