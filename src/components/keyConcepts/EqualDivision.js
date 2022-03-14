const EqualDivision = () => {
  return (
    <div>
      <h2 className="center">Equally Dividing the Octave</h2>
      <p>
        One of the most common terms in microtonal music is EDO, for Equal
        Division of the Octave. This specifically refers to dividing the octave
        equally in <b>cents</b>. When the octave is divided in cents, we
        perceive every tone as being evenly spaced in pitch.
      </p>
      <p>
        In order to create an EDO scale, we take the octave in cents (1200) and
        divide by how many tones we desire. Then we stack that number on top of
        itself until we reach 1200.
      </p>
      <h4 className="center">Example: 7edo - Reference Pitch 220Hz</h4>
      <table>
        <tbody>
          <tr>
            <td>1200 / 7 = 171.429</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Iteration</td>
            <td className="lighterTable">Cents Value</td>
            <td className="lighterTable">Cents Difference from Previous</td>
            <td className="lighterTable">Hz Value</td>
            <td className="lighterTable">Hz Difference from Previous</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>-</td>
            <td>220</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>171.429</td>
            <td>171.429</td>
            <td>242.900</td>
            <td>22.900</td>
          </tr>
          <tr>
            <td>2</td>
            <td>342.858</td>
            <td>171.429</td>
            <td>268.183</td>
            <td>25.283</td>
          </tr>
          <tr>
            <td>3</td>
            <td>514.287</td>
            <td>171.429</td>
            <td>296.098</td>
            <td>27.915</td>
          </tr>
          <tr>
            <td>4</td>
            <td>685.716</td>
            <td>171.429</td>
            <td>326.920</td>
            <td>30.821</td>
          </tr>
          <tr>
            <td>5</td>
            <td>857.145</td>
            <td>171.429</td>
            <td>360.948</td>
            <td>34.029</td>
          </tr>
          <tr>
            <td>6</td>
            <td>1028.574</td>
            <td>171.429</td>
            <td>398.519</td>
            <td>37.571</td>
          </tr>
          <tr>
            <td>7</td>
            <td>1200</td>
            <td>171.429</td>
            <td>440</td>
            <td>41.481</td>
          </tr>
        </tbody>
      </table>
      <p>
        With an EDO scale, our interpretation of how far apart the notes are in
        pitch (the cents value) is perfectly even with every step increase. Due
        to the way our hearing works, as the scale rises in pitch, the Hz values
        between each note become larger and larger.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <h4 className="center">Otonal Scales</h4>
      <p>
        So what if we divide the octave evenly in Hertz instead? We end up with
        what is called an otonal scale, thanks to its relationship to the
        overtone series.
      </p>
      <p>
        The way to do this is to take a value equal to 1/1 and then increase the
        numerator until you reach the value equal to 2/1. If you started at 7/7,
        you would add 8/7, 9/7, 10/7... until reaching 14/7.
      </p>
      <h4 className="center">Example: Otones 7-14 - Reference Pitch 220Hz</h4>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Ratio</td>
            <td className="lighterTable">Hz Value</td>
            <td className="lighterTable">Hz Difference from Previous</td>
            <td className="lighterTable">Cents Value</td>
            <td className="lighterTable">Cents Difference from Previous</td>
          </tr>
          <tr>
            <td>7/7</td>
            <td>220</td>
            <td>31.429</td>
            <td>0</td>
            <td>-</td>
          </tr>
          <tr>
            <td>8/7</td>
            <td>251.428</td>
            <td>31.429</td>
            <td>231.174</td>
            <td>231.174</td>
          </tr>
          <tr>
            <td>9/7</td>
            <td>282.857</td>
            <td>31.429</td>
            <td>435.084</td>
            <td>203.910</td>
          </tr>
          <tr>
            <td>10/7</td>
            <td>314.286</td>
            <td>31.429</td>
            <td>617.488</td>
            <td>182.404</td>
          </tr>
          <tr>
            <td>11/7</td>
            <td>345.714</td>
            <td>31.429</td>
            <td>782.492</td>
            <td>165.004</td>
          </tr>
          <tr>
            <td>12/7</td>
            <td>377.1429</td>
            <td>31.429</td>
            <td>933.129</td>
            <td>150.637</td>
          </tr>
          <tr>
            <td>13/7</td>
            <td>408.571</td>
            <td>31.429</td>
            <td>1071.702</td>
            <td>138.573</td>
          </tr>
          <tr>
            <td>14/7</td>
            <td>440</td>
            <td>31.429</td>
            <td>1200</td>
            <td>128.298</td>
          </tr>
        </tbody>
      </table>
      <p>
        With an Otonal scale, the opposite effect from an EDO is observed. In
        the objective math, the frequency differences between the notes (the Hz
        values) are exactly even note to note. Due to the way our hearing works,
        as the scale rises in pitch, the cents values between each note get
        smaller and smaller. The pitches do not sound like they are evenly
        spaced out, the pitches get closer together as the scale gets higher
        before reaching the octave and starting over.
      </p>
    </div>
  );
};

export default EqualDivision;
