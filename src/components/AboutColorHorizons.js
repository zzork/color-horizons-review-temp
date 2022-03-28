import { handleShowAbout } from "../eventHandlers";

const AboutColorHorizons = ({ stateData, setStateData }) => {
  return (
    <div>
      <h1>About Color Horizons</h1>
      <div className="tableClone">
        <div className="writtenAreas">
          <br />
          <h2 className="center">General</h2>
          <p>
            Color Horizons is a microtonal-capable scale generator and
            synthesizer.
          </p>
          <p>
            It is designed specifically to enable the user to instantly
            calculate how the notes of all modes of any scale that it can
            generate compare against 12 tone equal temperament, the harmonic
            series, and more.
          </p>
          <p>
            The user can immediately play these scales in the browser using the
            QWERTY keyboard or their device's touchscreen and then can export
            those scales as .scl files that can be used to retune other
            synthesizers.
          </p>
          <br />
          <h2 className="center">Mission / Intentions</h2>
          <p>
            Color Horizons is developed by{" "}
            <a href="http://jonlervold.com" target="_blank" rel="noreferrer">
              <b>Jon Lervold</b>
            </a>
            .
          </p>
          <p>
            I sincerely believe that microtonality is not just a musical niche
            for iconoclasts, but that in time it will someday become the next
            frontier of popular music.
          </p>
          <p>
            There is an incredible wealth of musical expression that is
            inaccessible utilizing only 12 Tone Equal Temperament (12TET).
            Technology has reached a point where any musical tuning system
            imaginable can be tested instantly. The problem now is not
            necessarily the construction of microtonal-capable instruments, but
            the lack of proliferation of this knowledge. Whatever the reasons
            may be, at the moment this field remains esoteric. Many newcomers
            find it difficult to even know where to begin.
          </p>
          <p>
            My goal with this application is to become an active participant in
            spreading knowledge of these fruitful tonal possibilities to other
            musicians. Color Horizons is a tool for helping explore musical
            realms near and far from 12TET. What tonal colors are available off
            in the distance? Let's find out.
          </p>
          <p>
            It is my deep wish that this tool can help inspire and facilitate
            musical creation!
          </p>
          <br />
          <h2 className="center">Acknowledgements</h2>
          <p>
            Thank you to everyone involved with the{" "}
            <b>
              <a
                href="https://www.facebook.com/groups/476404232379884"
                target="_blank"
                rel="noreferrer"
              >
                Xenharmonic Alliance
              </a>
            </b>{" "}
            and{" "}
            <b>
              {" "}
              <a
                href="https://www.facebook.com/groups/497105067092502"
                target="_blank"
                rel="noreferrer"
              >
                Microtonal Music and Tuning Theory
              </a>
            </b>{" "}
            Facebook groups. The majority of my exposure to these concepts comes
            from discussions I have read in those communities. I've also met a
            lot of very interesting people through them and hope to continue to
            get to know more of you.
          </p>

          <p>
            Thank you to those who write and maintain the{" "}
            <a href="https://en.xen.wiki" target="_blank" rel="noreferrer">
              <b>Xenharmonic Wiki</b>
            </a>
            . It is absolutely full of cutting edge information.
          </p>
          <p>
            Thank you to <b>Manuel Op de Coul</b> for the excellent tool known
            as{" "}
            <a
              href="https://www.huygens-fokker.org/scala/"
              target="_blank"
              rel="noreferrer"
            >
              <b>Scala</b>
            </a>
            . Without an existing tool that could quickly generate and play
            scales outside of 12 tone equal temperament, I never would have
            found a persistent interest in microtonality. (Another great
            alternative is{" "}
            <a href="https://sevish.com" target="_blank" rel="noreferrer">
              <b>Sevish's</b>
            </a>{" "}
            <a
              href="https://sevish.com/scaleworkshop/"
              target="_blank"
              rel="noreferrer"
            >
              <b>Scale Workshop</b>
            </a>
            .)
          </p>
          <p>
            Thank you to <b>Brock Benzel</b> for my initial exposure to
            microtonal music while we were on tour in 2016. Prior to that, I was
            under the impression that all music outside of 12 tone equal
            temperament sounded inherently bad. How wrong I was!
          </p>
          <p>
            Thank you to <b>Jalil Laaraichi</b> for getting me started with
            React and for continuing to be an invaluable resource for my coding
            development.
          </p>
          <br />
          <p className="center">
            Made with{" "}
            <b>
              <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                React
              </a>
            </b>{" "}
            and{" "}
            <b>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
                target="_blank"
                rel="noreferrer"
              >
                Web Audio API
              </a>
            </b>
            .
          </p>
          <p className="center">
            Feature requests, bug reports, source code:
            <br />
            <b>
              <a
                href="https://github.com/jonlervold/color-horizons"
                target="_blank"
                rel="noreferrer"
              >
                <b>Color Horizons GitHub</b>.
              </a>
            </b>
          </p>
          <br />
          <div className="center">
            <button
              className="mb"
              onClick={() => handleShowAbout(stateData, setStateData)}
            >
              Home
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutColorHorizons;
