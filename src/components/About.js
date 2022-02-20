import { handleShowAbout } from "../eventHandlers";

const About = ({ stateData, setStateData }) => {
  return (
    <div>
      <h1>About Color Horizons</h1>
      <div className="tableClone">
        <div className="writtenAreas">
          <br />
          <h2>General</h2>
          <p>
            Color Horizons is a microtonal-capable scale generator and
            synthesizer.
          </p>
          <p>
            It is designed specifically to enable the user to instantly
            calculate how the notes of all modes of any scale that it can create
            compare against 12 tone equal temperament, the harmonic series, and
            other common just intonation intervals.
          </p>
          <p>
            The user can then immediately play these scales in the browser using
            the QWERTY keyboard and export them as .scl files that can be used
            to retune other synthesizers.
          </p>
          <p>
            Color Horizons is primarily designed for desktop/laptop use due to
            QWERTY playback capability, but it does support mobile platforms.
          </p>
          <br />
          <h2>Mission / Intentions</h2>
          <p>
            Color Horizons is developed by me, <b>Jon Lervold</b>.
          </p>
          <p>
            I sincerely believe that microtonality is not just a musical niche
            that attracts iconoclastic types, but that in time it will become
            the next frontier of popular music.
          </p>
          <p>
            Technology has reached a point where any musical tuning system
            imaginable can be launched instantly. The problem now is not the
            construction of microtonal capable instruments, but merely the lack
            of proliferation of this knowledge. Whatever the reasons may be, for
            the time being this field remains esoteric and nearly impenetrible
            for many newcomers.
          </p>
          <p>
            My goal is to actively participate in bringing understandings of
            these amazing tonal possibilities to the other non-math degree
            holding musicians out there. Simplify an esoteric and obscure field.
            I wish to share the knowledge that I have slowly and painfully
            gained, so that others can jump right in and start building. Why
            "Color Horizons"? This is a tool for exploring realms far off in the
            sonic distance. It can play any scale within 12TET, or it can help
            you discover entirely alien sonic realms.
          </p>
          <p>
            Feature Request? Teach me additional methods of scale generation!
          </p>
          <p>It is my deep wish that this tool can bring inspiration.</p>
          <br />
          <h2>Acknowledgements</h2>
          <p>
            Thank you to everyone involved with the <b>Xenharmonic Alliance</b>{" "}
            and <b>Microtonal Music and Tuning Theory</b> Facebook groups. The
            majority of my exposure to these concepts comes from discussions I
            have read in those communities. I've also met a lot of very
            interesting people through them and hope to continue to get to know
            more of you.
          </p>
          <p>
            Thank you to those who write and maintain the{" "}
            <b>Xenharmonic Wiki</b>. Though it is primarily written for those
            who are already deeply embedded in microtonal practice, I have
            managed to learn an incredible amount of concepts and information
            thanks to it.
          </p>
          <p>
            Thank you to <b>Manuel Op de Coul</b> for the wonderful tool known
            as <b>Scala</b>. Without a tool that could quickly generate and play
            scales outside of 12 tone equal temperament I never would have found
            any interest in microtonal music. Scala can do everything that this
            app can do, and an incredible amount more, albeit with a very
            different user interface. Some day I will understand every single
            function of the multitude that it provides.
          </p>
          <p>
            Thank you to <b>Brock Benzel</b> for my initial exposure to
            microtonal music while we were on tour in 2016. Prior to that, I was
            under the impression that all music outside of 12 tone equal
            temperament sounded inherently bad. How wrong I was!
          </p>
          <p>
            Thank you to <b>Jalil Laaraichi</b> for getting me started with
            React and for continuing to help guide my coding development. You
            have been an absolutely invaluable resource.
          </p>
          <br />
          <p>
            Made with <b>React</b> and <b>Web Audio API</b>.
          </p>
          <p>
            <b>Color Horizons GitHub</b>.
          </p>
          <br />

          <button
            className="mb"
            onClick={() => handleShowAbout(stateData, setStateData)}
          >
            Close
          </button>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;
