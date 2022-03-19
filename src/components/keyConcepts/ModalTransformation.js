import { basicPlay } from "../../util/aboutNotePlayer";

const ModalTransformation = () => {
  return (
    <div>
      <h2 className="center">Modal Transformations of Ratio-Based Scales</h2>
      <p>
        Scales can be constructed entirely out of ratio sets. One such scale is{" "}
        <b>Ptolemy's Intense Diatonic Scale</b>, which can be said to be a pure
        version of what the standard Major Scale within 12 Tone Equal
        Temperament approximates.
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Degree</td>
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
            <td className="lighterTable">Ratio</td>
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
            <td className="lighterTable">Cents</td>
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
      <br />

      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([247.5])}>
          9/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([275])}>
          5/4
        </button>
        <button className="mb" onPointerDown={() => basicPlay([293.333])}>
          4/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([366.666])}>
          5/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([412.5])}>
          15/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          2/1
        </button>
      </div>
      <p>
        This scale is very harmonious, since it is made up entirely of very
        simple ratios.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <p>
        One thing that we like to do in music is play in different <b>modes</b>{" "}
        of a given scale, meaning{" "}
        <i>
          to interpret one of the non-root intervals in the scale as the new
          root
        </i>
        . Then, we can{" "}
        <i>
          take the intervals that would be built from that note and build a new
          set of pitches from our base Hz value.
        </i>
      </p>
      <p>
        In order to do this, take the scale degree that you would like to start
        on and subtract it from every other interval in the scale. As above, do
        this by dividing the two intervals, which is the same as cross
        multiplication, meaning to multiply one ratio by the reciprocal of the
        other. Here's the process using 9/8 as the new starting note:
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
        Thus, the modal transformation to the second degree of Ptolemy's Intense
        Diatonic Scale yields:
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Degree</td>
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
            <td className="lighterTable">Ratio</td>
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
            <td className="lighterTable">Cents</td>
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
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([244.444])}>
          10/9
        </button>
        <button className="mb" onPointerDown={() => basicPlay([260.74])}>
          32/27
        </button>
        <button className="mb" onPointerDown={() => basicPlay([293.333])}>
          4/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([325.925])}>
          40/27
        </button>
        <button className="mb" onPointerDown={() => basicPlay([366.666])}>
          5/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([391.111])}>
          16/9
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          2/1
        </button>
      </div>
      <br />
      <br />
      <div className="center">—</div>
      <br />
      <p>
        This particular transformation results in what many consider to be a
        problem. This example was picked specifically because{" "}
        <i>
          its 5th interval, 40/27, is close enough to 3/2 (about 22 cents off)
          that the ear tends to interpret it as an out of tune 3/2
        </i>
        . The ear tends to interpret more complex ratios as mistunings of
        simpler ones. When a tone and the tone 40/27 away from it play together,
        it creates a noticeable "<i>owowowowow</i>" sound. This is known as a{" "}
        <b>wolf interval</b>.
      </p>
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220, 330])}>
          Pure 3/2 Fifth
        </button>
        <button className="mb" onPointerDown={() => basicPlay([220, 325.925])}>
          Wolf 40/27 Fifth
        </button>
      </div>
      <p>
        These wolf fifths are why our modern musical system was created. It gets
        a boring to only have music that is made entirely from the basic just
        ratios of Ptolemy's Intense Diatonic Scale. It's a pretty sound, but it
        doesn't leave us with a huge amount of variety, which we crave for the
        sonic storytelling of a well-crafted piece of music. But{" "}
        <i>
          when we modulate to different keys within a simple JI system like
          this, we end up with dissonant intervals that many people consider
          unacceptably "bad" sounding.
        </i>
      </p>
    </div>
  );
};

export default ModalTransformation;
