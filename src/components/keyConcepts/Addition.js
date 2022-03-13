import { basicPlay } from "../../util/aboutNotePlayer";

const Addition = () => {
  return (
    <div>
      <h2 className="center">Stacking Ratios (Addition)</h2>
      <p>
        Now that we have covered cents, we will cover a few more ratio topics
        that are more easily demonstrated with the assistance of that
        measurement.
      </p>
      <p>
        Another unexpected behavior of fractions within the world of JI comes
        when you stack ratios on top of one another.
      </p>
      <p>
        Let's say you want the note that is 3/2 above your root, and then the
        note that is 7/4 above that second note.{" "}
      </p>
      <p>
        In normal fraction math, you find the common denominator, then add the
        numerators together. This yields 13/4, which becomes 13/8 if we follow
        the octave reducing procedure. In a JI context, this method does not
        work. Don't do this.
      </p>
      <p>
        Instead, in a JI context, to add two ratios together, we must{" "}
        <b>multiply</b> the two fractions.
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
        21/8 reduces to 21/16. In its octave reduced notation, the chord that
        contains 3/2 and the note 7/4 above 3/2 will be built of the notes: 1/1,
        3/2, and 21/16.
      </p>
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220, 330])}>
          1/1, 3/2 above 1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330, 577.5])}>
          3/2, 7/4 above 3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([220, 577.5])}>
          1/1, 21/8 above 3/2
        </button>
        <br />
        <button
          className="mb"
          onPointerDown={() => basicPlay([220, 577.5, 330])}
        >
          1/1, 3/2, 21/8
        </button>
        <button
          className="mb"
          onPointerDown={() => basicPlay([220, 288.75, 330])}
        >
          Octave Reduced - 1/1, 3/2, 21/16
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
                701.955 + 968.826 = 1670.781
                <br />
                1670.781 - 1200 = 470.781
                <br />
                <br />
                21/16 = 470.781 ✔️
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Addition;
