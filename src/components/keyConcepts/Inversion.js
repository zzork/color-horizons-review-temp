import { basicPlay } from "../../util/aboutNotePlayer";

const Inversion = () => {
  return (
    <div>
      <h2 className="center">Inverted Ratios</h2>
      <p>
        Intriguingly, ratios can be flipped around to represent the same pitch
        distance from 1/1, except going backward around the circle rather than
        forward. 3/2 and 4/3 are the first example of this.
      </p>
      <br />
      <h4 className="center">Example: 1/1 - 4/3 = 3/2</h4>
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
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220, 330])}>
          1/1, 3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([220, 165])}>
          4/3 below 1/1, 1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330, 165])}>
          4/3 below 1/1, 3/2
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
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Reversed: 1/1 - 3/2 = 4/3</h4>
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
        In this case, we don't even need to octave reduce, the answer is 4/3.
      </p>
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220, 293.333])}>
          1/1, 4/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([220, 146.666])}>
          3/2 below 1/1, 1/1
        </button>
        <button
          className="mb"
          onPointerDown={() => basicPlay([293.333, 146.666])}
        >
          3/2 below 1/1, 4/3
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
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Deriving the Inverted Ratio</h4>
      <p>
        Every single ratio out of the infinite amount possible has an inverted
        ratio. In order to find it:
      </p>
      <div className="tableClone">
        <ol>
          <li>Reverse the position of the numerator and denominator.</li>
          <li>Multiply the new numerator by 2.</li>
          <li>Octave reduce the new fraction if possible.</li>
        </ol>
      </div>
      <br />
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Example: Inverting 15/8</h4>
      <div className="tableClone">
        <ol>
          <li>15/8 → 8/15</li>
          <li>8 * 2 → 16/15</li>
          <li>N/A, already in the first octave.</li>
        </ol>
      </div>
      <p className="center">The inverted ratio of 15/8 is 16/15. </p>
      <br />
      <p>
        We can actually verify the subtraction properties in the two tables
        above by instead adding 15/8 and 16/15 together. If they equal 2/1 when
        added, then either one subtracted from 2/1 will equal the other. Recall
        that when we add ratios in JI, we actually multiply their values.
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
      <p>
        240/120 reduces to 2/1. Therefore yes, they are inversions of one
        another.
      </p>
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
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <p>
        This concept will be of interest in the section below on linear scales,
        as inverted ratio pairs create the same scales as each other.
      </p>
    </div>
  );
};

export default Inversion;
