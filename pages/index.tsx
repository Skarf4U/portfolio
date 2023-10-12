import { getAllPostsMeta } from "@/lib/mdx";
import { About } from "@/ui/About";
import { Layout } from "@/ui/Layout";
import { MediaPreview } from "@/ui/MediaPreview";
import { PostPreview } from "@/ui/PostPreview";
import { InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticProps = async () => {
  const posts = getAllPostsMeta("post");
  return { props: { posts } };
};

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

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
              style={{
                "--stack-flex": "initial",
                "--stack-direction": "row",
                "--stack-align": "stretch",
                "--stack-justify": "flex-start",
                "--stack-padding": "0px",
                "--stack-gap": "32px",
              }}
              bis_skin_checked="1"
            >
              <div
                className="stack_stack__iZkUS stack showcase-preview_gridDesktop__y7Cwi"
                data-version="v1"
                style={{
                  flex: "initial",
                  flexDirection: "row",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                  padding: "0px",
                  gap: "32px",
                }}
              >
                <div
                  className="stack_stack__iZkUS stack"
                  data-version="v1"
                  style={{
                    flex: "initial",
                    flexDirection: "column",
                    alignItems: "stretch",
                    justifyContent: "flex-start",
                    padding: "0px",
                    gap: "32px",
                  }}
                >
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="/showcase"
                    style={{ width: "388px", height: "316px" }}
                  >
                    <img
                      alt="Screenshot of Audible's website"
                      loading="lazy"
                      width={388}
                      height={316}
                      decoding="async"
                      data-nimg={1}
                      srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-audible.6063405a.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x, https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-audible.6063405a.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 2x"
                      src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-audible.6063405a.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                      style={{ color: "transparent" }}
                    />
                    <div className="showcase-preview_title__jFvZn">
                      Audible
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
                        style={{
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        }}
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </a>
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="/showcase"
                    style={{ width: "388px", height: "210px" }}
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
                      style={{ color: "transparent" }}
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
                        style={{
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        }}
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
                style={{
                  "--stack-flex": 1,
                  "--stack-direction": "column",
                  "--stack-align": "stretch",
                  "--stack-justify": "flex-start",
                  "--stack-padding": "0px",
                  "--stack-gap": "0px",
                }}
                bis_skin_checked="1"
              >
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={{ width: "302px", height: "538px" }}
                >
                  <img
                    alt="Screenshot of Twitch's website"
                    loading="lazy"
                    width="302"
                    height="538"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-twitch.4ed9ddb3.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x"
                    src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-twitch.4ed9ddb3.png&w=640&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                    style={{ color: "transparent" }}
                  />
                  <div className="showcase-preview_title__jFvZn">
                    Twitch
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
                      style={{
                        color: "rgb(177, 177, 177)",
                        width: "14px",
                        height: "14px",
                      }}
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
                style={{
                  "--stack-flex": "initial",
                  "--stack-direction": "column",
                  "--stack-align": "stretch",
                  "--stack-justify": "flex-start",
                  "--stack-padding": "0px",
                  "--stack-gap": "32px",
                }}
              >
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={{ width: "390px", height: "312px" }}
                >
                  <img
                    alt="Screenshot of Notion's website"
                    loading="lazy"
                    width="390"
                    height="312"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-notion.2bd1f0c5.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 1x, https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-notion.2bd1f0c5.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP 2x"
                    src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-notion.2bd1f0c5.png&w=828&q=75&dpl=dpl_7sYJnsycDVdcxq5Fb62iEKdyeFjP"
                    style={{ color: "transparent" }}
                  />
                  <div className="showcase-preview_title__jFvZn">
                    Notion
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
                      style={{
                        color: "rgb(177, 177, 177)",
                        width: "14px",
                        height: "14px",
                      }}
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </a>
                <div
                  className="stack_stack__iZkUS stack"
                  data-version="v1"
                  style={{
                    "--stack-flex": "initial",
                    "--stack-direction": "row",
                    "--stack-align": "stretch",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "32px",
                  }}
                >
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="/showcase"
                    style={{ width: "179px", height: "125px" }}
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
                      style={{ color: "transparent" }}
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
                        style={{
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        }}
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </a>
                  <a
                    className="showcase-preview_preview__HcSHu"
                    href="/showcase"
                    style={{ width: "179px", height: "125px" }}
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
                      style={{ color: "transparent" }}
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
                        style={{
                          color: "rgb(177, 177, 177)",
                          width: "14px",
                          height: "14px",
                        }}
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
                style={{
                  "--stack-flex": "initial",
                  "--stack-direction": "column",
                  "--stack-align": "stretch",
                  "--stack-justify": "flex-start",
                  "--stack-padding": "0px",
                  "--stack-gap": "32px",
                }}
              >
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={{ width: "390px", height: "312px" }}
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
                    style={{ color: "transparent" }}
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
                      style={{
                        color: "rgb(177, 177, 177)",
                        width: "14px",
                        height: "14px",
                      }}
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </a>
                <a
                  className="showcase-preview_preview__HcSHu"
                  href="/showcase"
                  style={{ width: "390px", height: "312px" }}
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
                    style={{ color: "transparent" }}
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
                      style={{
                        color: "rgb(177, 177, 177)",
                        width: "14px",
                        height: "14px",
                      }}
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
            You can find more projects on my <strong><a href="https://github.com/Skarf4U" target="_blank">GitHub</a></strong>.{" "}
            <span style={{ display: "block" }}></span>
            Next.js is trusted by some
            of the biggest names on the Web.
          </p>
          <a
            role="link"
            href="/showcase"
            type="submit"
            className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_large__fuY6E button_invert__YNhnn mx-auto-important"
            data-geist-button=""
            data-version="v1"
          >
            <span className="button_content__1aE1_">
              View the Next.js Showcase
            </span>
          </a>
        </section>
      </div>
    </Layout>
  );
}
