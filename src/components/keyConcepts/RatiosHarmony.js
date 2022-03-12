const RatiosHarmony = () => {
  return (
    <div>
      <h2 className="center">Ratios, Harmony</h2>
      <p>
        We perceive a rather magical effect when frequencies are related to each
        other by simple mathematical ratios: <i>harmony</i>
      </p>
      <p>
        Let's say we play one consistent vibration at 220Hz. At the same time,
        we play another consistent vibration at exactly 2 times that, at 440Hz.
        This is known as a 2/1 ratio, meaning that for every 1 time the base
        tone vibrates, the second tone will vibrate exactly 2 times. This is
        known as a justly tuned harmony. Making music with these ratios is known
        as using a Just Intonation system (JI).
      </p>
      <p>
        This is a special case that is also known as the second tone being one{" "}
        <i>octave</i> above the first tone. In the case of the octave harmony,
        individuals in most cultures in the world will recognize the two notes
        being played as the "<i>same note</i>".
      </p>
      <button>220Hz</button>
      <button>440Hz</button>
      <button>220Hz and 440Hz Together</button>
      <p>
        Things get a little bit more interesting as you start to expand into
        slightly more complex ratios. The next simplest ratio possible would be
        3/2, or the second tone vibrating 3 times for every 2 times the first
        tone vibrates.{" "}
      </p>
      <p>
        The 3/2 ratio is often referred to as the "perfect fifth", which can be
        a confusing term when outside of the context of 12 tone equal
        temperament, the system that is used in the majority of music in the
        world. On this page, I will attempt to use the ratios themselves as much
        as possible for the sake of clarity.
      </p>
      <p>This simple 3/2 ratio produces a very strong, stable harmony.</p>
      <button>220Hz</button>
      <button>330Hz</button>
      <button>220Hz and 330Hz Together</button>
      <p>
        The third most simple ratio available is 4/3. This is often referred to
        as the "perfect fourth", expecially within the context of the 12 tone
        equal temperament system.
      </p>
      <button>220Hz</button>
      <button>293.333Hz</button>
      <button>220Hz and 293.333Hz Together.</button>
      <p>
        Next we have 5/4, which is often referred to as the "minor third",
        especially within the context of the 12 tone equal temperament system.
      </p>
      <button>220Hz</button>
      <button>275Hz</button>
      <button>220Hz and 275Hz Together</button>
      <p>
        Next we have 5/3, which is often referred to as the "major sixth",
        especially within the context of the 12 tone equal temperament system.
      </p>
      <button>220Hz</button>
      <button>366.666Hz</button>
      <button>220Hz and 366.666Hz Together</button>
      <p>
        Lastly for now, we have 6/5, which is often referred to as the "minor
        third", especially within the context of 12 tone equal temperament.
      </p>
      <button>220Hz</button>
      <button>264Hz</button>
      <button>220Hz and 264Hz Together</button>
      <p>
        The amount of ratios available are infinite. For now we will stop here.
        Generally, ratios involving smaller numbers will sound more harmonious
        than those involving larger numbers. When you get a little more deep
        into it, the context of the entire note system utilized and the
        multiplicative factors that make up the numerator and denominator are
        important for the overall perception of harmoniousness.
      </p>
    </div>
  );
};

export default RatiosHarmony;
