import { About } from "@/ui/About";
import { Layout } from "@/ui/Layout";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">
        <div id="about">
          <About />
        </div>
        <div id="projects" className="projects">
          <div className="small-box-wrapper animate-in">
            <a href="https://notech.vercel.app/" target="_blank">
              <div className="small-box firstfloor">
                <video
                  className="firstfloor-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/jotion.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="title-description">
                <p className="job">
                  <b>Jotion</b>
                </p>
                <p className="work-description">
                  Notion clone, built with Next.js (from a tutorial).
                </p>
              </div>
            </a>
          </div>
          <div className="big-box-wrapper section-1 animate-in">
            <a href="https://retrac.co/" target="_blank">
              <div className="big-box instagram">
                <video
                  className="mindflow-resize"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/retrac.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="title-description">
                <p className="job">
                  <b>Retrac.co</b>
                </p>
                <p className="work-description">
                  Inventory management software for businesses.
                </p>
              </div>
            </a>
          </div>
          <div className="row2">
            <div className="big-box-wrapper animate-in">
              <a href="https://mindflower.vercel.app/" target="_blank">
                <div className="big-box mindflow">
                  <video
                    className="mindflow-resize"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/mindflow.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="title-description">
                  <p className="job">
                    <b>MindFlow</b>
                  </p>
                  <p className="work-description">
                    A unique platform to clear your mind through raw,
                    unfiltered writing.
                  </p>
                </div>
              </a>
            </div>
            <div className="small-box-wrapper section-2 animate-in">
              <a href="https://mbgaragedoorsllc.com/" target="_blank">
                <div className="small-box curve">
                  <video
                    className="instagram-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/mbgd.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="title-description">
                  <p className="job">
                    <b>mbgaragedoorsllc.com</b>
                  </p>
                  <p className="work-description">
                    Website design for a business.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <section
          className="templates_templates__kjjRA"
          style={{ margin: "128px 0" }}
        >
          <h1 className="contact-link text-5xl font-extrabold">
            <a href="/contact" className="flex flex-row items-center">
              <span className="wave mr-2">👋</span>
              get in touch
            </a>
          </h1>
        </section>
      </div>
    </Layout>
  );
} 