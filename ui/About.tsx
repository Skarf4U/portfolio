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
      <svg
        className="sm-hidden"
        fill="none"
        height="110"
        viewBox="0 0 800 110"
        width="100%"
        data-divider="true"
        role="separator"
      >
        <path
          d="M0 30H800"
          opacity="0.12"
          stroke="url(#paint0_linear_52_11950)"
          stroke-dasharray="2 2"
        ></path>
        <path
          d="M0 78H800"
          opacity="0.12"
          stroke="url(#paint1_linear_52_11950)"
          stroke-dasharray="2 2"
        ></path>
        <path
          d="M76 106L76 4"
          opacity="0.12"
          stroke="url(#paint2_linear_52_11950)"
          stroke-dasharray="2 2"
        ></path>
        <path
          d="M88 30C88 27.6266 87.2962 25.3065 85.9776 23.3332C84.6591 21.3598 82.7849 19.8217 80.5922 18.9134C78.3995 18.0052 75.9867 17.7676 73.6589 18.2306C71.3311 18.6936 69.1929 19.8365 67.5147 21.5147C65.8365 23.1929 64.6936 25.3311 64.2306 27.6589C63.7676 29.9867 64.0052 32.3995 64.9134 34.5922C65.8217 36.7849 67.3598 38.6591 69.3332 39.9776C71.3065 41.2962 73.6266 42 76 42"
          opacity="0.12"
          stroke="url(#paint3_angular_52_11950)"
          stroke-dasharray="2 2"
        ></path>
        <path
          d="M400 106L400 4"
          opacity="0.12"
          stroke="url(#paint4_linear_52_11950)"
          stroke-dasharray="2 2"
        ></path>
        <path
          d="M724 110L724 -3.27826e-07"
          opacity="0.12"
          stroke="url(#paint5_linear_52_11950)"
          stroke-dasharray="2 2"
        ></path>
        <path
          d="M712 78C712 80.3734 712.704 82.6935 714.022 84.6668C715.341 86.6402 717.215 88.1783 719.408 89.0866C721.601 89.9948 724.013 90.2324 726.341 89.7694C728.669 89.3064 730.807 88.1635 732.485 86.4853C734.164 84.8071 735.306 82.6689 735.769 80.3411C736.232 78.0133 735.995 75.6005 735.087 73.4078C734.178 71.2151 732.64 69.3409 730.667 68.0224C728.693 66.7038 726.373 66 724 66"
          opacity="0.12"
          stroke="url(#paint6_angular_52_11950)"
          stroke-dasharray="2 2"
        ></path>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_52_11950"
            x1="0"
            x2="800"
            y1="30"
            y2="30"
          >
            <stop stop-opacity="0"></stop>
            <stop offset="0.0328358"></stop>
            <stop offset="0.692529"></stop>
            <stop offset="1" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_52_11950"
            x1="0"
            x2="800"
            y1="78"
            y2="78"
          >
            <stop stop-opacity="0"></stop>
            <stop offset="0.115"></stop>
            <stop offset="0.893678"></stop>
            <stop offset="1" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_52_11950"
            x1="76"
            x2="76"
            y1="106"
            y2="3.99999"
          >
            <stop stop-opacity="0"></stop>
            <stop offset="0.333333"></stop>
            <stop offset="0.666667"></stop>
            <stop offset="1" stop-opacity="0"></stop>
          </linearGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(76 30) rotate(90) scale(12)"
            gradientUnits="userSpaceOnUse"
            id="paint3_angular_52_11950"
            r="1"
          >
            <stop></stop>
            <stop offset="0.5" stop-opacity="0.34"></stop>
            <stop offset="1"></stop>
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_52_11950"
            x1="400"
            x2="400"
            y1="106"
            y2="3.99999"
          >
            <stop stop-opacity="0"></stop>
            <stop offset="0.333333"></stop>
            <stop offset="0.666667"></stop>
            <stop offset="1" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_52_11950"
            x1="724"
            x2="724"
            y1="110"
            y2="-6.55651e-06"
          >
            <stop stop-opacity="0"></stop>
            <stop offset="0.333333"></stop>
            <stop offset="0.666667"></stop>
            <stop offset="1" stop-opacity="0"></stop>
          </linearGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(724 78) rotate(-90) scale(12)"
            gradientUnits="userSpaceOnUse"
            id="paint6_angular_52_11950"
            r="1"
          >
            <stop></stop>
            <stop offset="0.5" stop-opacity="0.34"></stop>
            <stop offset="1"></stop>
          </radialGradient>
        </defs>
      </svg>
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
          <div
            aria-hidden="true"
            className="intro_gridContainerLine__GHkon"
            data-fade="true"
            data-offset="true"
            data-side="left"
          ></div>
          <h1 className="intro_title__TZuNV intro_gridLineBottom__z9ocp gradient-text">
            Hello! I'm Adi, a{" "}
            <RainbowHighlight color={colors[0]}>
              full-stack web developer
            </RainbowHighlight>{" "}
            based in{" "}
            <RainbowHighlight color={colors[2]}>Israel</RainbowHighlight>.
          </h1>
          <div className="intro_subtitle__7jvxT intro_gridLineBottom__z9ocp">
            <p>
              I am recent high school graduate at the age of 17. Over the past
              five years, I've been dedicated to{" "}
              <strong>
                <RoughNotation type="box" iterations={5} animationDuration={1200} color={colors[1]}>
                  self-learning
                </RoughNotation>
              </strong>{" "}
              in the field of programming - mainly focused on{" "}
              <strong>
                <RainbowHighlight color={colors[2]}>
                  full-stack web development
                </RainbowHighlight>
                .
              </strong>
            </p>
            <RoughNotation
              type="bracket"
              brackets={['left', 'right']}
              multiline={false}
              animationDuration={1500}
              iterations={3}
              strokeWidth={3}
              padding={5}
              color={colors[3]}
            >
              <p className="mt-2">
                I am now{" "}
                <strong>
                  <RainbowHighlight color={colors[0]}>
                    actively seeking employment opportunities
                  </RainbowHighlight>
                </strong>{" "}
                that will allow me to conduct research and development while
                effectively applying my current expertise, furthering my
                knowledge, acquiring new skills, and finding fulfillment in the
                process.{" "}
                <RoughNotation
                  type="circle"
                  multiline={true}
                  animationDuration={1500}
                  animationDelay={500}
                  strokeWidth={2}
                  iterations={3}
                  padding={5}
                  color={colors[1]}
                >
                  <a className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none">
                    Hire me?
                  </a>
                </RoughNotation>
              </p>
            </RoughNotation>
          </div>
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
                aria-hidden="true"
                className="intro_gridContainerLine__GHkon"
                data-fade="true"
                data-offset="true"
                data-side="left"
              ></div>
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
              <div
                aria-hidden="true"
                className="intro_gridContainerLine__GHkon"
                data-fade="true"
                data-offset="true"
                data-side="right"
              ></div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="intro_gridContainerLine__GHkon"
            data-fade="true"
            data-offset="true"
            data-side="right"
          ></div>
        </RoughNotationGroup>
      </div>
    </main>
  );
};

About;
