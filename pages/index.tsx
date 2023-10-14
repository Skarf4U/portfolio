import { About } from "@/ui/About";
import { Layout } from "@/ui/Layout";
import { MediaPreview } from "@/ui/MediaPreview";
import { PostPreview } from "@/ui/PostPreview";
import { InferGetStaticPropsType } from "next";
import React from "react";

const projects = [
  {
    name: "QuizWiz",
    image: "/projects/quizwiz.png",
    url: "https://quizwizai.vercel.app/",
    description:
      "The story of how I dropped out of medical school, left home at 18, and eventually learned how to code. It spans 3 countries and a decade, it's been a long journey with a few detours, but I eventually found my career path.",
  },
  {
    name: "How I Built the Portfolio That Landed Me a Dev Role (Tech Stack Explained)",
    image: "/projects/zl9iXZrw_dw.png",
    url: "https://www.youtube.com/watch?v=zl9iXZrw_dw",
    description:
      "In this video, I go through how I built the website/portfolio that helped me land my first developer role at one of my dream companies.",
  },
];

export default function Home({}) {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">
        <div id="about">
          <About />
        </div>
        <section className="stack_stack__iZkUS stack customers_root__6St4m">
          <svg
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
          <h2 className="customers_title__0hAia gradient-text">
            Projects showcase
          </h2>
          <div className="showcase-preview_root__4D7rp">
            <div
              className="stack_stack__iZkUS stack showcase-preview_gridDesktop__y7Cwi"
              data-version="v1"
              style={
                {
                  "--stack-flex": "initial",
                  "--stack-direction": "row",
                  "--stack-align": "stretch",
                  "--stack-justify": "flex-start",
                  "--stack-padding": "0px",
                  "--stack-gap": "32px",
                } as React.CSSProperties
              }
            >
              <div
                className="stack_stack__iZkUS stack showcase-preview_gridDesktop__y7Cwi"
                data-version="v1"
                style={
                  {
                    flex: "initial",
                    flexDirection: "row",
                    alignItems: "stretch",
                    justifyContent: "flex-start",
                    padding: "0px",
                    gap: "32px",
                  } as React.CSSProperties
                }
              >
                <div
                  className="stack_stack__iZkUS stack"
                  data-version="v1"
                  style={
                    {
                      flex: "initial",
                      flexDirection: "column",
                      alignItems: "stretch",
                      justifyContent: "flex-start",
                      padding: "0px",
                      gap: "32px",
                    } as React.CSSProperties
                  }
                >
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="https://quizwizai.vercel.app"
                    target="_blank"
                    style={
                      { width: "388px", height: "316px" } as React.CSSProperties
                    }
                  >
                    <img
                      alt="Screenshot of QuizWiz's website"
                      loading="lazy"
                      width={388}
                      height={316}
                      decoding="async"
                      data-nimg={1}
                      srcSet="https://i.ibb.co/g4g84Pc/quizwiz.png 1x, https://i.ibb.co/g4g84Pc/quizwiz.png 2x"
                      src="https://i.ibb.co/g4g84Pc/quizwiz.png"
                      style={{ color: "transparent" } as React.CSSProperties}
                    />
                    <div className="showcase-preview_title__jFvZn">
                      QuizWiz
                      <hr />
                      <svg
                        className="with-icon_icon__MHUeb"
                        data-testid="geist-icon"
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        width={24}
                        style={
                          {
                            color: "rgb(177, 177, 177)",
                            width: "14px",
                            height: "14px",
                          } as React.CSSProperties
                        }
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </a>
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="/showcase"
                    style={
                      { width: "388px", height: "210px" } as React.CSSProperties
                    }
                  >
                    <img
                      alt="Screenshot of Sonos's website"
                      loading="lazy"
                      width={388}
                      height={210}
                      decoding="async"
                      data-nimg={1}
                      srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-sonos.a3dbc334.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x, https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-sonos.a3dbc334.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 2x"
                      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-sonos.a3dbc334.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                      style={{ color: "transparent" } as React.CSSProperties}
                    />
                    <div className="showcase-preview_title__jFvZn">
                      Sonos
                      <hr />
                      <svg
                        className="with-icon_icon__MHUeb"
                        data-testid="geist-icon"
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        width={24}
                        style={
                          {
                            color: "rgb(177, 177, 177)",
                            width: "14px",
                            height: "14px",
                          } as React.CSSProperties
                        }
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="stack_stack__iZkUS stack"
                data-version="v1"
                style={
                  {
                    "--stack-flex": 1,
                    "--stack-direction": "column",
                    "--stack-align": "stretch",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "0px",
                  } as React.CSSProperties
                }
              >
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={
                    { width: "302px", height: "538px" } as React.CSSProperties
                  }
                >
                  <img
                    alt="Screenshot of MBGDS's website mobile"
                    loading="lazy"
                    width="302"
                    height="538"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://i.ibb.co/dMZB4BJ/mbgaragedoorsllc-com-i-Phone-13-Pro-Max.png 1x"
                    src="https://i.ibb.co/dMZB4BJ/mbgaragedoorsllc-com-i-Phone-13-Pro-Max.png"
                    style={{ color: "transparent" } as React.CSSProperties}
                  />
                  <div className="showcase-preview_title__jFvZn">
                    MBGD
                    <hr />
                    <svg
                      className="with-icon_icon__MHUeb"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      style={
                        {
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        } as React.CSSProperties
                      }
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </a>
              </div>
              <div
                className="stack_stack__iZkUS stack"
                data-version="v1"
                style={
                  {
                    "--stack-flex": "initial",
                    "--stack-direction": "column",
                    "--stack-align": "stretch",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "32px",
                  } as React.CSSProperties
                }
              >
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={
                    { width: "390px", height: "312px" } as React.CSSProperties
                  }
                >
                  <img
                    alt="Screenshot of Oref's website"
                    loading="lazy"
                    width="390"
                    height="312"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://i.ibb.co/TMwDc6p/Screenshot-2023-10-09-at-8-21-21-PM.png 1x, https://i.ibb.co/TMwDc6p/Screenshot-2023-10-09-at-8-21-21-PM.png 2x"
                    src="https://i.ibb.co/TMwDc6p/Screenshot-2023-10-09-at-8-21-21-PM.png"
                    style={{ color: "transparent" } as React.CSSProperties}
                  />
                  <div className="showcase-preview_title__jFvZn">
                    Oref
                    <hr />
                    <svg
                      className="with-icon_icon__MHUeb"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      style={
                        {
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        } as React.CSSProperties
                      }
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </a>
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
                      "--stack-gap": "32px",
                    } as React.CSSProperties
                  }
                >
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="/showcase"
                    style={
                      { width: "179px", height: "125px" } as React.CSSProperties
                    }
                  >
                    <img
                      alt="Screenshot of Today's website"
                      loading="lazy"
                      width="179"
                      height="125"
                      decoding="async"
                      data-nimg="1"
                      srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-today.98d66e07.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x, https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-today.98d66e07.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 2x"
                      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-today.98d66e07.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                      style={{ color: "transparent" } as React.CSSProperties}
                    />
                    <div className="showcase-preview_title__jFvZn">
                      Today
                      <hr />
                      <svg
                        className="with-icon_icon__MHUeb"
                        data-testid="geist-icon"
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        style={
                          {
                            color: "rgb(177, 177, 177)",
                            width: "14px",
                            height: "14px",
                          } as React.CSSProperties
                        }
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </a>
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="/showcase"
                    style={
                      { width: "179px", height: "125px" } as React.CSSProperties
                    }
                  >
                    <img
                      alt="Screenshot of ProductHunt's website"
                      loading="lazy"
                      width="179"
                      height="125"
                      decoding="async"
                      data-nimg="1"
                      srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-ph.c43e26c6.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x, https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-ph.c43e26c6.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 2x"
                      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-ph.c43e26c6.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                      style={{ color: "transparent" } as React.CSSProperties}
                    />
                    <div className="showcase-preview_title__jFvZn">
                      ProductHunt
                      <hr />
                      <svg
                        className="with-icon_icon__MHUeb"
                        data-testid="geist-icon"
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        style={
                          {
                            color: "rgb(177, 177, 177)",
                            width: "14px",
                            height: "14px",
                          } as React.CSSProperties
                        }
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="stack_stack__iZkUS stack"
                data-version="v1"
                style={
                  {
                    "--stack-flex": "initial",
                    "--stack-direction": "column",
                    "--stack-align": "stretch",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "32px",
                  } as React.CSSProperties
                }
              >
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={
                    { width: "390px", height: "312px" } as React.CSSProperties
                  }
                >
                  <img
                    alt="Screenshot of Nike's website"
                    loading="lazy"
                    width="390"
                    height="312"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-nike.ae99d521.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x, https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-nike.ae99d521.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 2x"
                    src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-nike.ae99d521.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                    style={{ color: "transparent" } as React.CSSProperties}
                  />
                  <div className="showcase-preview_title__jFvZn">
                    Nike
                    <hr />
                    <svg
                      className="with-icon_icon__MHUeb"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      style={
                        {
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        } as React.CSSProperties
                      }
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </a>
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={
                    { width: "390px", height: "312px" } as React.CSSProperties
                  }
                >
                  <img
                    alt="Screenshot of Washington Post's website"
                    loading="lazy"
                    width="390"
                    height="312"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-wapo.2769ff64.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x, https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-wapo.2769ff64.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 2x"
                    src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-wapo.2769ff64.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                    style={{ color: "transparent" } as React.CSSProperties}
                  />
                  <div className="showcase-preview_title__jFvZn">
                    Washington Post
                    <hr />
                    <svg
                      className="with-icon_icon__MHUeb"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      style={
                        {
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        } as React.CSSProperties
                      }
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p className="customers_subtitle__W6oUd">
            You can find more projects on my{" "}
            <strong>
              <a href="https://github.com/Skarf4U" target="_blank">
                GitHub
              </a>
            </strong>
            . <span style={{ display: "block" } as React.CSSProperties}></span>
            Head over to the projects page to find all of my LIVE web apps!
          </p>
          <a
            role="link"
            href="/projects"
            type="submit"
            className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_large__fuY6E button_invert__YNhnn mx-auto-important"
            data-geist-button=""
            data-version="v1"
          >
            <span className="button_content__1aE1_">View Projects</span>
          </a>
        </section>

        <section className="skills-section skills-container">
          <div className="tiny-heading_heading__xYu2W">
            <small
              style={
                {
                  fontSize: "0.75rem",
                  letterSpacing: "0.2rem",
                  marginTop: "0",
                  paddingLeft: "0.2rem",
                  color: "var(--accents-5)",
                } as React.CSSProperties
              }
              className="jsx-2423190812 text_text__SJB2H text_small__huEsi geist-themed geist-secondary geist-text-no-margin text_noMargin__KfT5Y text_center__PuA5N text_themed__SN6Oj"
            >
              Technical Skills
            </small>
          </div>
          <div className="skills-wrapper">
            <div className="geist-wrapper" data-version="v1">
              <div
                style={
                  {
                    "--flex": 1,
                    "--justify-content": "flex-start",
                    "--align-items": "stretch",
                  } as React.CSSProperties
                }
                className="jsx-499702677 geist-container"
              >
                <span
                  className="path-line_line__6Sfx1 path-line_gradient__qbumR"
                  style={
                    {
                      height: "100px",
                      "--start-color": "var(--geist-background)",
                      "--end-color": "var(--develop-line-end)",
                    } as React.CSSProperties
                  }
                ></span>
                <div className="section-label_label__dupZ9">
                  <span
                    className="section-label_number__LhpKk"
                    style={
                      {
                        "--start-color": "var(--develop-start-gradient)",
                        "--end-color": "var(--develop-end-gradient)",
                      } as React.CSSProperties
                    }
                  >
                    1
                  </span>
                  <h3 className="section-label_heading__uoxFW">
                    <span
                      className="section-label_text__ReaxV"
                      style={
                        {
                          "--padding": "0.2em",
                          "--start-color": "var(--develop-start-gradient)",
                          "--end-color": "var(--develop-end-gradient)",
                        } as React.CSSProperties
                      }
                    >
                      Front-End
                    </span>
                  </h3>
                </div>
                <h4 className="section-title_title__2JZeK">
                  <span
                    data-br=":R6lalddmamlla:"
                    data-brr="0.6"
                    style={
                      {
                        display: "inline-block",
                        verticalAlign: "top",
                        textDecoration: "inherit",
                        textWrap: "balance",
                      } as React.CSSProperties
                    }
                  >
                    Where UX becomes a work of art
                  </span>
                </h4>
                <div className="frameworks_frameworks__WYJbT">
                  <a
                    aria-label="Next.js solution page"
                    className="link_link__hbWKh"
                    href="/solutions/nextjs"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        aria-label="Next.js logomark"
                        className="next-mark_root__iLw9v"
                        height="34"
                        role="img"
                        viewBox="0 0 180 180"
                        width="34"
                      >
                        <mask
                          height="180"
                          id=":R53palddmamlla:mask0_408_134"
                          maskUnits="userSpaceOnUse"
                          style={{ maskType: "alpha" } as React.CSSProperties}
                          width="180"
                          x="0"
                          y="0"
                        >
                          <circle cx="90" cy="90" fill="black" r="90"></circle>
                        </mask>
                        <g mask="url(#:R53palddmamlla:mask0_408_134)">
                          <circle
                            cx="90"
                            cy="90"
                            data-circle="true"
                            fill="black"
                            r="90"
                          ></circle>
                          <path
                            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                            fill="url(#:R53palddmamlla:paint0_linear_408_134)"
                          ></path>
                          <rect
                            fill="url(#:R53palddmamlla:paint1_linear_408_134)"
                            height="72"
                            width="12"
                            x="115"
                            y="54"
                          ></rect>
                        </g>
                        <defs>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id=":R53palddmamlla:paint0_linear_408_134"
                            x1="109"
                            x2="144.5"
                            y1="116.5"
                            y2="160.5"
                          >
                            <stop stop-color="white"></stop>
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            ></stop>
                          </linearGradient>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id=":R53palddmamlla:paint1_linear_408_134"
                            x1="121"
                            x2="120.799"
                            y1="54"
                            y2="106.875"
                          >
                            <stop stop-color="white"></stop>
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="React solution page"
                    className="link_link__hbWKh"
                    href="/solutions/react"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        fill="none"
                        height="34"
                        stroke="var(--geist-foreground)"
                        viewBox="0 0 24 22"
                      >
                        <path d="M12 12.807a2.05 2.05 0 100-4.1 2.05 2.05 0 000 4.1z"></path>
                        <path d="M12 14.957c6.075 0 11-1.88 11-4.2 0-2.32-4.925-4.2-11-4.2s-11 1.88-11 4.2c0 2.32 4.925 4.2 11 4.2z"></path>
                        <path d="M8.363 12.857c3.037 5.261 7.128 8.586 9.137 7.426 2.009-1.16 1.175-6.365-1.863-11.626C12.6 3.396 8.51.071 6.5 1.231 4.491 2.39 5.325 7.596 8.363 12.857z"></path>
                        <path d="M8.363 8.657C5.325 13.918 4.49 19.124 6.5 20.283c2.009 1.16 6.1-2.165 9.137-7.426C18.675 7.596 19.51 2.391 17.5 1.231 15.491.07 11.4 3.396 8.363 8.657z"></path>
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Svelte project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsvelte&amp;template=svelte&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>HTML5</title>
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Nuxt template"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnuxtjs&amp;template=nuxtjs&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>CSS3</title>
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Vue solution page"
                    className="link_link__hbWKh"
                    href="/solutions/vue"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Bootstrap</title>
                        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Ember project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fember&amp;template=ember&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Tailwind CSS</title>
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Ember project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fember&amp;template=ember&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Figma</title>
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Hugo project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fhugo&amp;template=hugo&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>JavaScript</title>
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Gatsby solution page"
                    className="link_link__hbWKh"
                    href="/solutions/gatsby"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>TypeScript</title>
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="geist-wrapper" data-version="v1">
              <div
                style={
                  {
                    "--flex": 1,
                    "--justify-content": "flex-start",
                    "--align-items": "stretch",
                  } as React.CSSProperties
                }
                className="jsx-499702677 geist-container"
              >
                <span
                  className="path-line_line__6Sfx1 path-line_gradient__qbumR"
                  style={
                    {
                      height: "100px",
                      "--start-color": "var(--geist-background)",
                      "--end-color": "var(--preview-line-end)",
                    } as React.CSSProperties
                  }
                ></span>
                <div className="section-label_label__dupZ9">
                  <span
                    className="section-label_number__LhpKk"
                    style={
                      {
                        "--start-color": "var(--preview-start-gradient)",
                        "--end-color": "var(--preview-end-gradient)",
                      } as React.CSSProperties
                    }
                  >
                    2
                  </span>
                  <h3 className="section-label_heading__uoxFW">
                    <span
                      className="section-label_text__ReaxV"
                      style={
                        {
                          "--padding": "0.2em",
                          "--start-color": "var(--preview-start-gradient)",
                          "--end-color": "var(--preview-end-gradient)",
                        } as React.CSSProperties
                      }
                    >
                      Back-End
                    </span>
                  </h3>
                </div>
                <h4 className="section-title_title__2JZeK">
                  <span
                    data-br=":R6lalddmamlla:"
                    data-brr="0.6"
                    style={
                      {
                        display: "inline-block",
                        verticalAlign: "top",
                        textDecoration: "inherit",
                        textWrap: "balance",
                      } as React.CSSProperties
                    }
                  >
                    The muscle that flexes behind the scenes
                  </span>
                </h4>
                <div className="frameworks_frameworks__WYJbT">
                  <a
                    aria-label="Angular solution page"
                    className="link_link__hbWKh"
                    href="/solutions/angular"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Express</title>
                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="React solution page"
                    className="link_link__hbWKh"
                    href="/solutions/react"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Django</title>
                        <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Svelte project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsvelte&amp;template=svelte&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Node.js</title>
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Nuxt template"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnuxtjs&amp;template=nuxtjs&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Flask</title>
                        <path d="M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777-.446-1.355-.6-2.808-1.174-4.11-.602-.944.103-1.978 1.138-2.28.46-.087 1.272-.522.293-.211-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.66-.43 1.6-.903.463-1.544C1.5 1.08 4.34.835 3.64 2.285 3.473 3.4 5.624 2.08 5.125 3.368c.507.619 1.9.14 1.865 1.009.74.05.993.672 1.687.72.72.325 2.022.58 2.266 1.39-.713.566-2.364-1.165-2.443.398.215 2.31.16 4.689 1.004 6.888.4 1.332 1.37 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306a19.86 19.86 0 01-3.484.29c-1.912-.15-3.865-.214-5.684-.88-1.024-.297-2.023-.881-2.924-1.464zm1.615.7c1 .432 1.978.888 3.074 1.026 1.74.24 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.291-1.452-1.277-.466.66.598 1.005.685.798.453-.877-.233-1.114-.421-.668-.375-.754-.297-.066.084.139.08.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.45-.622-.196-.341-.751-.557-.36-.74-.704.244-.737-.93-1.07-.763-.744-.235-.29-1.07-1.176-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.647c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.31-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.312-.3-.484-.188 0 0zm1.127.63c.191-.282-.61-.107 0 0zM8.19 19.728c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.397.25 2.32.55 1.115.103-.2.042-2.23-.574-1.116-.103zm-3.921-3.054c-.04-.167-.616-.185 0 0zm1.15.67c.3-.21-.621-.16 0 0zm.966.593c.43-.162-.696-.163 0 0zm-2.584-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17zm3.24 1.978c.193-.33-.815-.19 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.973 1.14c1.08.01-.975-.147 0 0zm-4.644-2.96c-.042-.2-.266.018 0 0zm6.47 3.985c.028-.363-.353.27 0 0zm-4.63-2.856c-.064-.191-.336-.008 0 0zm-1.738-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zm5.407 3.435c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.528-.077 0 0zm-2.506-1.592c.46-.05-.74-.311 0 0zm4.241 2.637c.718-.285-.7-.14 0 0zM9.03 18.545c.827.106-.985-.563-.181-.06zm2.876 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.29.103.696-.467 1.726.22 2.376.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.22-2.044-.703-2.517-1.542-.192-.315.28.044-.166-.47-.57-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.688-.826-.002-.571.595-.285.176-.707-.09-.592-.386-1.21-.475-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.58-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.1.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.06.328-.905-.12-.83.64-.573-.241-.078.9.209.514.975.264.686.866.71 1.437-.158.333-.784-.783-.14-.731-.507-.827-.561-.3-.984.085-.1.028 1.079.547.34.803.65.1.668.67.8 1.03.39.407.31-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.44-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.24-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.72.155.552.58.778.88.497.224-.712-1.522.142-.526.898.81.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.975 1.34-.027.897-.348-.313-1.58-.7-.573-.104.929.43 1.665.688 2.561 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.01-.468.107.36 0 0zm-.322-.433c-.372-.72.47.204 0 0zm-3.9-2.692c.219-.06.108.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.192-1.525c-.155-.278.323.26 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.217c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.05.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.04-.603.23.413 0 0zm.45.155c.216-.455.366.634 0 0zm-1.084-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.06-.25.66.12.327 1.082-.077.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18zm3.11 1.808c-.47-.282-.123-1.984.037-.82.457-.148-.025.6.315.594-.053.473-.206.643-.35.226zm1.15.68c.048-.513.099.35 0 0zm-.2-.198c.054-.22.007.258 0 0zM4.57 9.955c-.697-.963 2.027.973.447.244-.165-.043-.364-.06-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.587c.415-.088 1.718.729.52.234-.132-.148-.416-.08-.52-.234zm3.56 1.775c.044-.83.248-.495.002.118zM4.985 9.299c.169-.248-.45-1.12.089-.313.232.185.672.31.283.387.61.539-.15.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.427c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.51c-.053-.32.18.404 0 0zm.314-.51c-.216-.38.272-1.673.326-.87-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.923c.094-.115.02.139 0 0zM7.47 17.544c-.128-.111.016.07 0 0zm1.11.56c.615.16.612-.095.055-.17-.3-.28-1.246-.575-.4-.035.057.142.235.139.344.206zM6.389 16.65c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.07-.51-.305-.06-1.52-.54-.804.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.69.46.892.6zm1.16.667c1.41.454-.691-.556 0 0zm5.94 3.598c.02-.28-.193.24 0 0zm.611.257c.325-.315.013.503.54-.077.005-.415-.017-.66-.606-.156-.162.09-.234.473.066.233zm-9.692-6.087c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.32 1.662.236.44.04-.182-.27-1.151-.204-.44-.04zm5.097 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 13.743c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.135-.734-.466-.32 0 0zm.866.34c.57-.488-.36-.102 0 0zM4.215 14.255c.163-.242-.42-.031 0 0zm11.305 7.129c.551-.355-.126-.3-.1.032zm-7.47-4.71c-.02-.24-.291.02 0 0zm.46.267c-.145-.297-.224.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.57 14.08c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.41.426-.845-.413-.474.204-.31.374-.224.052.299.196.233.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.13.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.681 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zM15.4 20.24c.216-.16-.27-.02 0 0zM3.39 12.52c.62-.24-.664-.17 0 0zm8.984 5.662c-.007-.401-.395.1 0 0zm-9.23-6.231c.399-.135-.367-.09 0 0zm1.156.56c-.007-.133-.122.05 0 0zm14.09 8.64c.512-.104 1.678.26 1.866-.136-.62-.015-2.15-.438-2.222.1l.136.023.22.013zM4.667 12.603c.009-.407-.317-.015 0 0zM1.63 10.495c-.138-.775-.525-.118 0 0zm.724.182c.009-.25-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.22-.167c-.035-.32-.19.04 0 0zm1.22.729c.518-.203-.94-.42-.104-.04zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.05 0 0zM2.573 9.38c.055-.38-.41.075 0 0zM.837 8.218c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.11 1.67-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.29-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.06zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.12zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.23 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.25-.347c-.055-1.214 1.119.432 0 0zm.64-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.067c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.602 12.89c.012-.355-.304.16 0 0zm-2.093-1.43c.06-.408-.27.037 0 0zm2.67 1.568c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 8.959c.45-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.7.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.39-.105-.343-.746-.407-1.06-.544-.176.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.824 4.215c.28-.496-1.155-.668-.188-.175.09.03.07.21.188.175z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Vue solution page"
                    className="link_link__hbWKh"
                    href="/solutions/vue"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Python</title>
                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Ember project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fember&amp;template=ember&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="34"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54a11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77c-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86s-1.86-2.22 2.51-4.75z"
                        />
                        <path
                          fill="currentColor"
                          d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0c-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58c8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37c-.93 1.41.47 2.92 2.34 4.63z"
                        />
                        <path
                          fill="currentColor"
                          d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83c0 0-.26.64-2.99 1.16z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Angular solution page"
                    className="link_link__hbWKh"
                    href="/solutions/angular"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>C Sharp</title>
                        <path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Hugo project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fhugo&amp;template=hugo&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>MongoDB</title>
                        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Gatsby solution page"
                    className="link_link__hbWKh"
                    href="/solutions/gatsby"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Prisma</title>
                        <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Gatsby solution page"
                    className="link_link__hbWKh"
                    href="/solutions/gatsby"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>PostgreSQL</title>
                        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Gatsby solution page"
                    className="link_link__hbWKh"
                    href="/solutions/gatsby"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>MySQL</title>
                        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Gatsby solution page"
                    className="link_link__hbWKh"
                    href="/solutions/gatsby"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>SQLite</title>
                        <path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="geist-wrapper" data-version="v1">
              <div
                style={
                  {
                    "--flex": 1,
                    "--justify-content": "flex-start",
                    "--align-items": "stretch",
                  } as React.CSSProperties
                }
                className="jsx-499702677 geist-container"
              >
                <span
                  className="path-line_line__6Sfx1 path-line_gradient__qbumR"
                  style={
                    {
                      height: "100px",
                      "--start-color": "var(--geist-background)",
                      "--end-color": "var(--ship-line-end)",
                    } as React.CSSProperties
                  }
                ></span>
                <div className="section-label_label__dupZ9">
                  <span
                    className="section-label_number__LhpKk"
                    style={
                      {
                        "--start-color": "var(--ship-start-gradient)",
                        "--end-color": "var(--ship-end-gradient)",
                      } as React.CSSProperties
                    }
                  >
                    3
                  </span>
                  <h3 className="section-label_heading__uoxFW">
                    <span
                      className="section-label_text__ReaxV"
                      style={
                        {
                          "--padding": "0.2em",
                          "--start-color": "var(--ship-start-gradient)",
                          "--end-color": "var(--ship-end-gradient)",
                        } as React.CSSProperties
                      }
                    >
                      Tools & Cloud
                    </span>
                  </h3>
                </div>
                <h4 className="section-title_title__2JZeK">
                  <span
                    data-br=":R6lalddmamlla:"
                    data-brr="0.6"
                    style={
                      {
                        display: "inline-block",
                        verticalAlign: "top",
                        textDecoration: "inherit",
                        textWrap: "balance",
                      } as React.CSSProperties
                    }
                  >
                    Turning dreams into reality
                  </span>
                </h4>
                <div className="frameworks_frameworks__WYJbT">
                  <a
                    aria-label="Next.js solution page"
                    className="link_link__hbWKh"
                    href="/solutions/nextjs"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Git</title>
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="React solution page"
                    className="link_link__hbWKh"
                    href="/solutions/react"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Svelte project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsvelte&amp;template=svelte&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Postman</title>
                        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Nuxt template"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnuxtjs&amp;template=nuxtjs&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Google Cloud</title>
                        <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Vue solution page"
                    className="link_link__hbWKh"
                    href="/solutions/vue"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Amazon AWS</title>
                        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Ember project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fember&amp;template=ember&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>DigitalOcean</title>
                        <path d="M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 014.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.59-3.985-6.446-7.575-7.575A12.8 12.8 0 0012.039 0zM7.39 19.362H3.828v3.564H7.39zm-3.563 0v-2.978H.85v2.978z" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Angular solution page"
                    className="link_link__hbWKh"
                    href="/solutions/angular"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Cloudflare</title>
                        <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
                      </svg>
                    </span>
                  </a>
                  <a
                    aria-label="Deploy a new Hugo project"
                    className="link_link__hbWKh"
                    href="/new/clone?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fhugo&amp;template=hugo&amp;id=67753070&amp;b=main"
                  >
                    <span
                      className="tooltip_container__ZmIgh"
                      data-testid="legacy/tooltip-trigger"
                      data-version="v1"
                    >
                      <svg
                        role="img"
                        height="34"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Vercel</title>
                        <path d="M24 22.525H0l12-21.05 12 21.05z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
