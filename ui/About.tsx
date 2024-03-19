import { LIGHT_COLORS } from "@/lib/constants";
import { shuffleArray } from "@/lib/shuffleArray";
import { useIsFontReady } from "@/lib/useIsFontReady";
import delbaImg from "@/public/delba.jpg";
import { RainbowHighlight } from "@/ui/RainbowHighlight";
import Image from "next/image";
import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import cx from "clsx";
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";

export const About = () => {
  // Before animation, detect if custom fonts are loaded, so <RoughNotation />
  // SVG's are correctly positioned over the elements
  const isFontReady = useIsFontReady();

  const [colors, setColors] = React.useState<string[]>([]);

  // Shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  React.useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <main
      className="stack_stack__iZkUS stack intro_root__wSBQl"
      data-version="v1"
      style={
        {
          "--stack-flex": "initial",
          "--stack-direction": "column",
          "--stack-align": "center",
          "--stack-justify": "flex-start",
          "--stack-padding": "0px",
          "--stack-gap": "0px",
        } as React.CSSProperties
      }
    >
      <div className="intro_intro__k2TZw intro_gridLineTop__WIuPu">
        <RoughNotationGroup show={isFontReady}>
          <svg
            aria-hidden="true"
            className="intro_gridCircle__Hyh0y"
            data-side="top-left"
            fill="none"
            height="75"
            viewBox="0 0 75 75"
            width="75"
          >
            <path
              d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74"
              opacity="var(--line-opacity)"
              stroke="url(#paint0_angular_25_2122)"
              stroke-dasharray="2 2"
            ></path>
            <defs>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)"
                gradientUnits="userSpaceOnUse"
                id="paint0_angular_25_2122"
                r="1"
              >
                <stop></stop>
                <stop offset="0.5" stop-opacity="0.34"></stop>
                <stop offset="1"></stop>
              </radialGradient>
            </defs>
          </svg>
          {/* <h1 className="intro_title__TZuNV intro_gridLineBottom__z9ocp gradient-text"> */}
          <h1 className="intro_title__TZuNV intro_gridLineBottom__z9ocp">
            I'm Adi <span className="emoji"></span>, a{" "}
            <RainbowHighlight color={colors[0]}>full stack</RainbowHighlight>{" "}
            web developer based in{" "}
            <RainbowHighlight color={colors[2]}>Israel</RainbowHighlight>.
          </h1>

          <div
            className="stack_stack__iZkUS stack intro_footer__5Sy1W intro_gridLineBottom__z9ocp"
            data-version="v1"
            style={
              {
                "--stack-flex": "initial",
                "--stack-direction": "column",
                "--stack-align": "center",
                "--stack-justify": "flex-start",
                "--stack-padding": "0px",
                "--stack-gap": "0px",
              } as React.CSSProperties
            }
          >
            <div
              className="stack_stack__iZkUS stack intro_buttons__hi64e"
              data-version="v1"
              style={
                {
                  "--stack-flex": "initial",
                  "--stack-direction": "column",
                  "--stack-align": "center",
                  "--stack-justify": "flex-start",
                  "--stack-padding": "0px",
                  "--stack-gap": "16px",
                } as React.CSSProperties
              }
            >
              <div
                className="stack_stack__iZkUS stack"
                data-version="v1"
                style={
                  {
                    "--stack-flex": "initial",
                    "--stack-direction": "row",
                    "--stack-align": "stretch",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "16px",
                  } as React.CSSProperties
                }
              >
                <a
                  role="link"
                  href="https://linkedin.com/in/adiamar"
                  className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_large__fuY6E button_invert__YNhnn"
                  data-geist-button=""
                  target="_blank"
                  style={{ "--geist-icon-size": "16px" } as React.CSSProperties}
                >
                  <span className="button_content__1aE1_">View LinkedIn</span>
                </a>
                <a
                  role="link"
                  href="https://github.com/Skarf4U"
                  className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_secondary__kMMNc button_large__fuY6E button_invert__YNhnn"
                  data-geist-button=""
                  target="_blank"
                  style={{ "--geist-icon-size": "16px" } as React.CSSProperties}
                >
                  <span className="button_content__1aE1_">View GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </RoughNotationGroup>
      </div>
    </main>
  );
};

About;
