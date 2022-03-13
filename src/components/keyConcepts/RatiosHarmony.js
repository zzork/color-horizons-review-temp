import { basicPlay } from "../../util/aboutNotePlayer";

const RatiosHarmony = () => {
  return (
    <div>
      <h2 className="center">Ratios, Harmony</h2>
      <p>
        We perceive a rather magical effect when frequencies are related to each
        other by simple mathematical ratios: <i>harmony</i>
      </p>
      <br />
      <h4 className="center">2/1</h4>
      <p>
        Let's say we play one consistent vibration at 220Hz. At the same time,
        we play another consistent vibration at exactly 2 times that, at 440Hz.
        This is known as a 2/1 ratio, meaning that for every 1 time the base
        tone vibrates, the second tone will vibrate exactly 2 times.
      </p>
      <p>
        {" "}
        Harmonies that are exact frequency ratios like this are referred to as
        Just, or Justly Tuned. Making music with these ratios is known as using
        Just Intonation (JI).
      </p>
      <p>
        This is a special case that is also known as the second tone being one{" "}
        <i>octave</i> above the first tone. In the case of the octave harmony,
        individuals in most cultures in the world will recognize the two notes
        being played as the "<i>same note</i>".
      </p>
      <div className="center">
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          440Hz
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220, 440])}>
          220Hz and 440Hz Together
        </button>
        <br />
        <br />
        <br />—
      </div>
      <br />
      <h4 className="center">3/2</h4>
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
      <div className="center">
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          330Hz
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220, 330])}>
          220Hz and 330Hz Together
        </button>
        <br />
        <br />
        <br />—
      </div>
      <br />
      <h4 className="center">4/3</h4>
      <p>
        The third most simple ratio available is 4/3. This is often referred to
        as the "perfect fourth", expecially within the context of the 12 tone
        equal temperament system.
      </p>
      <div className="center">
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([293.333])}>
          293.333Hz
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220, 293.333])}>
          220Hz and 293.333Hz Together.
        </button>
        <br />
        <br />
        <br />—
      </div>
      <br />
      <h4 className="center">5/4</h4>
      <p>
        Next we have 5/4, which is often referred to as the "major third",
        especially within the context of the 12 tone equal temperament system.
      </p>
      <div className="center">
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([275])}>
          275Hz
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220, 275])}>
          220Hz and 275Hz Together
        </button>
        <br />
        <br />
        <br />—
      </div>
      <br />
      <h4 className="center">5/3</h4>
      <p>
        Next we have 5/3, which is often referred to as the "major sixth",
        especially within the context of the 12 tone equal temperament system.
      </p>
      <div className="center">
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([366.666])}>
          366.666Hz
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220, 366.666])}>
          220Hz and 366.666Hz Together
        </button>
        <br />
        <br />
        <br />—
        <br />
      </div>
      <br />
      <h4 className="center">6/5</h4>
      <p>
        Lastly for now, we have 6/5, which is often referred to as the "minor
        third", especially within the context of 12 tone equal temperament.
      </p>
      <div className="center">
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          220Hz
        </button>
        <button className="mb" onPointerDown={() => basicPlay([264])}>
          264Hz
        </button>
        <br />
        <button className="mb" onPointerDown={() => basicPlay([220, 264])}>
          220Hz and 264Hz Together
        </button>
        <br />
        <br />
        <br />—
      </div>
      <br />
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
