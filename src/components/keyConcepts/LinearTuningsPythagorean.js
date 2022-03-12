const LinearTuningsPythagorean = () => {
  return (
    <div>
      <h2 className="center">Linear Tunings and Pythagorean Tuning</h2>
      <p>
        So how can we achieve tuning systems that allow freer modulation,
        introducing fewer wolf intervals when the scale is transformed?
      </p>
      <p>One possibility is Pythagorean Tuning.</p>
      <p>
        Pythagorean tuning is a Linear Temperament, which means that it is a
        type of octave-based scale created by stacking a "generating interval"
        on top of itself. In the case of Pythagorean tuning, we use the simplest
        ratio possible, 3/2. You start with 1/1, then add the note 3/2 above to
        it, then add the note 3/2 above that, then add the note 3/2 to that,
        until you have the amount of notes you desire. Whenever the note you are
        adding goes into the second octave, it gets octave reduced.
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
        We end up with the Pythagorean version of the Major Pentatonic scale,
        which is a very strong scale with little dissonance that has been
        utilized by many cultures worldwide. The Major Pentatonic scale is
        derived from stacking five 3/2s on top of each other. Its modal
        transformations are consistent, all the 3/2s present in its
        transformations are perfect, and the rest of the intervals of all of its
        modes either precisely line up with Ptolemy's Intense Diatonic, or are
        ~21 cents off.
      </p>
      <p>Let's extend Pythagorean Tuning to 7 notes and see what happens.</p>
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
        Adding two more notes gives us the Pythagorean Diatonic scale! Stacking
        seven 3/2s results in the Pythagorean Lydian scale, specifically. The
        scale is most often modally transformed into its fifth mode, Ionian (aka
        the familiar 7 note Major Scale), because it replaces the instability of
        the Augmented 4th with the stability of the Perfect 4th while leaving
        every other interval the same. People tend to view the Ionian Mode as
        the basis of the Diatonic Scale, but truly Lydian is its first mode.
      </p>
      <p>
        The Pythagorean Diatonic again provides perfect 3/2s in all of its modal
        transformations. Again, all of the other intervals in the
        transformations either precisely line up with the simple ratios of
        Ptolemy's Intense Diatonic, or are ~21 cents off. While not perfectly in
        tune, all of the intervals are consistent.
      </p>
      <p>
        One thing worth noting at this point is that even this simple scale made
        of 3/2s starts to create large ratios fairly quickly. 729/512 is made up
        of much larger numbers than something like 5/3. The important thing to
        note here is that in the context, it still sounds harmonious.
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
        The 12 note Pythagorean Tuning has perfect 3/2s in every transformation
        of the scale with one exception: the sixth modal transformation has a
        wolf fifth at 678.49 cents. But as we add more notes, we come into a new
        problem, which is that every key has different consonant and dissonant
        intervals. Some intervals will be exact, some will be 2 cents off,
        others will be 19, 22, or 24 cents off from the pure intervals found in
        Ptolemy's Intense Diatonic.
      </p>
      <p>
        Pythagorean Tuning allows significant modulation, but each key has its
        own harmony characteristics that will lend it to using certain scales
        over others.
      </p>
      <p>
        It is important to note that any ratio, not just 3/2, can be used as a
        generating interval in a linear temperament. Not only that, any cents
        value can be used as the generating interval. It's fun to explore what
        types of scales come about as a result of trying other options. The
        section below on temperaments has further discussion on these ideas.
      </p>
    </div>
  );
};

export default LinearTuningsPythagorean;
