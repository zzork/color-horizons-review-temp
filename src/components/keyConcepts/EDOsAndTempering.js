const EDOsAndTempering = () => {
  return (
    <div>
      {" "}
      <h2>Determining EDO / Temperament Compatability</h2>
      <p>
        As just mentioned, each temperament has a range of generators, each
        creating slightly different scales that end up with very similar
        characteristics. How do we determine this range?
      </p>
      <p>
        The question that determines if a generator falls within the range is
        "does it temper the comma that defines this temperament?"
      </p>
      <p>
        This is done by examining which step counts used as generators of what
        EDOs temper the interval. Ok, now how do we do that? For this we use
        vals and monzos.
      </p>
      <h4>Vals</h4>
      <p>
        A val is a map of a given tuning that says which amount of steps is the
        closest to each prime interval. The prime intervals are 2/1 (octave),
        3/1 (perfect fifth), 5/1 (major third), 7/1 (not named in 12tet), 11/1
        (not named in 12tet), etc.
      </p>
      <p>
        The example for 12edo is {`<`}12, 19, 28, 34, 42]. This is the "patent
        val", which means the val which is arises if you just use the step
        values exactly as they are to determine which is closest to each prime
        interval. The patent val can be modified into a different val if you
        want to use the tuning in different ways, currently this is outside the
        scope of this writeup. For now we will only focus on the patent val.
      </p>
      <p>
        This means that it takes 12 steps of the tuning system to reach the
        octave, 19 steps to reach the note closest to a perfect 3/1 (reduces to
        the 7th note as 19-12=7), 28 steps to reach the note closest to 5/1
        (reduces to the 4th note as 28-24=4), 34 steps to reach the note closest
        to 7/1 (reduces to the 10th note as 34-24=10, though in 12edo this is 33
        cents off), etc.
      </p>
      <p>
        The easiest way to derive a patent val is to multiply your EDO by 1, log
        <sub>2</sub>(3), log<sub>2</sub>(5), log<sub>2</sub>(7), log
        <sub>2</sub>(11), log<sub>2</sub>(13), etc, then rounding those values
        to the nearest interger.
      </p>
      <h4>Monzos</h4>
      <p>A monzo is a notation that represents a ratio as its prime factors.</p>
      <p>
        As an example, the prime factorization of 81/80 is 3*3*3*3 / 2*2*2*2*5.
        Therefore its monzo is [-4 4 -1{`>`}.
      </p>
      <p>
        Monzos look like vals, but with the brackets reversed. Similar to vals,
        the values represent the primes in order, so the first value represents
        how many 2s are present, the second value represents how many 3s are
        present, the third value represents how many 5s are present, etc.
      </p>
      <p>
        If a value in a monzo is positive, it means that prime is in the
        numerator of the ratio. If the value in a monzo is negative, it means
        that that prime appears in the denominator of the ratio.
      </p>
      <h4>Using Vals and Monzos Together</h4>
      <p>
        To determine if an EDO tempers out a given interval, we use the val of
        that EDO and the monzo of the interval. Let's check if 12edo tempers out
        81/80. Vals and monzos together are sometimes notated like this.
      </p>
      <p>
        {`<`}12, 19, 28] | [-4 4 -1{`>`}
      </p>
      <p>
        81/80 is a 5 limit interval, so we will only use the first 3 numbers of
        the val. Take the first number of the val and multiply it by the first
        value of the monzo. Take the second number of the val and multiply it by
        the second value of the monzo. Take the third number of the val and
        multiply it by the third value of the monzo.
      </p>
      <p>
        12 * -4 = -48
        <br />
        19 * 4 = 76
        <br />
        28 * -1 = -28
      </p>
      <p>Now add all the values together. -48 + 76 + -28 = 0</p>
      <p>
        As the final answer is 0, that means that yes, 12edo tempers out 81/80.
        What this means is that 81/80 and 1/1 become the same note within the
        system of 12edo.
      </p>
    </div>
  );
};

export default EDOsAndTempering;
