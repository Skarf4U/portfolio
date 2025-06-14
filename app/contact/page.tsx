'use client';
import { Footer } from "@/ui/Footer";
import { Navigation } from "@/ui/Navigation";
import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      phone: String(e.target.phone.value),
      note: String(e.target.note.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      setIsSubmitted(true);
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.phone.value = "";
      e.target.note.value = "";
    }
    if (!response.ok) {
      setLoading(false);
    }
  }

  return (
    <>
      <Navigation />
      <div
        style={{
          "--contact-gradient-rotation": "-1.9124589006386765rad",
        } as React.CSSProperties}
      >
        {isSubmitted ? (
          <div
            className="stack_stack__iZkUS stack contact-sales_thankYou__OvJQU"
            data-version="v1"
            style={{
              "--stack-flex": "initial",
              "--stack-direction": "column",
              "--stack-align": "stretch",
              "--stack-justify": "flex-start",
              "--stack-padding": "0px",
              "--stack-gap": "0px",
            } as React.CSSProperties}
          >
            <div
              className="stack_stack__iZkUS stack contact-sales_vercelLogo__ReEQX"
              data-version="v1"
              style={{
                "--stack-flex": "initial",
                "--stack-direction": "column",
                "--stack-align": "center",
                "--stack-justify": "flex-start",
                "--stack-padding": "0px",
                "--stack-gap": "0px",
              } as React.CSSProperties}
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="239"
                viewBox="0 0 257 239"
                width="257"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_124_3642)">
                  <path
                    clipRule="evenodd"
                    d="M128.416 64.0176L192.424 175.337H64.407L128.416 64.0176Z"
                    fill="white"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <h1
              className="contact-sales_title__hSxIu"
              data-testid="contact-page/title"
            >
              Your message has been sent
            </h1>
            <p
              className="text_wrapper__i87JK"
              data-version="v1"
              style={{
                "--text-color": "var(--ds-gray-900)",
                "--text-size": "1.5rem",
                "--text-line-height": "1.5rem",
                "--text-letter-spacing": "-0.029375rem",
                "--text-weight": 400,
                "--text-align": "center",
              } as React.CSSProperties}
            >
              Thanks for getting in touch, I will reach out shortly.
            </p>
            <div
              className="stack_stack__iZkUS stack"
              data-version="v1"
              style={{
                "--stack-flex": "initial",
                "--stack-direction": "column",
                "--stack-align": "center",
                "--stack-justify": "flex-start",
                "--stack-padding": "0px",
                "--stack-gap": "0px",
              } as React.CSSProperties}
            >
              <h1 className="home-link text-2xl font-extrabold pt-10">
                <a href="/" className="flex flex-row items-center">
                  <span className="home mr-2">🏠</span>
                  back to homepage
                </a>
              </h1>
            </div>
          </div>
        ) : (
          <div
            className="stack_stack__iZkUS stack contact-sales_contactContainer__huPZU contact-sales_dynamic__WV_k5"
            data-version="v1"
            style={{
              "--stack-flex": "initial",
              "--stack-direction": "column",
              "--stack-align": "center",
              "--stack-justify": "flex-start",
              "--stack-padding": "0px",
              "--stack-gap": "0px",
            } as React.CSSProperties}
          >
            <h1
              className="contact-sales_contactSalesTitle__OKV_C"
              data-testid="contact-page/title"
            >
              Connect with me
            </h1>
            <h2 className="contact-sales_subtitle__qAaE3">
              Your digital partner for success.
            </h2>
            <div
              className="stack_stack__iZkUS stack contact-sales_formAndSidebarContainer__YvVZQ"
              data-version="v1"
              style={{
                "--stack-flex": "initial",
                "--sm-stack-direction": "column",
                "--lg-stack-direction": "row",
                "--sm-stack-align": "center",
                "--lg-stack-align": "baseline",
                "--stack-justify": "center",
                "--stack-padding": "0px",
                "--stack-gap": "32px",
              } as React.CSSProperties}
            >
              <div
                className="stack_stack__iZkUS stack contact-sales_formContainer__AzR8V"
                data-version="v1"
                style={{
                  "--stack-flex": "initial",
                  "--stack-direction": "column",
                  "--stack-align": "center",
                  "--stack-justify": "flex-start",
                  "--stack-padding": "0px",
                  "--stack-gap": "0px",
                } as React.CSSProperties}
              >
                <form
                  className="contact-sales_form__hEJyG"
                  onSubmit={handleSubmit}
                >
                  <div
                    className="stack_stack__iZkUS stack"
                    data-version="v1"
                    style={{
                      "--stack-flex": "initial",
                      "--stack-direction": "column",
                      "--stack-align": "stretch",
                      "--stack-justify": "flex-start",
                      "--stack-padding": "0px",
                      "--sm-stack-gap": "16px",
                      "--md-stack-gap": "28px",
                      "--lg-stack-gap": "28px",
                    } as React.CSSProperties}
                  >
                    <div
                      className="stack_stack__iZkUS stack"
                      data-version="v1"
                      style={{
                        "--stack-flex": "initial",
                        "--stack-direction": "column",
                        "--stack-align": "stretch",
                        "--stack-justify": "flex-start",
                        "--stack-padding": "0px",
                        "--sm-stack-gap": "16px",
                        "--md-stack-gap": "28px",
                        "--lg-stack-gap": "28px",
                      } as React.CSSProperties}
                    >
                      <label
                        data-version="v1"
                        htmlFor="name"
                        style={{ width: "100%" } as React.CSSProperties}
                      >
                        <div className="label_label__tW6NP label_input__5eDQ5 label_capitalize__mJBX4">
                          Full Name
                        </div>
                        <div
                          className="input_container__eoK_W"
                          data-geist-input-wrapper=""
                          data-version="v1"
                          style={{
                            width: "100%",
                            "--geist-icon-size": "16px",
                          } as React.CSSProperties}
                        >
                          <input
                            id="name"
                            name="name"
                            required
                            autoComplete="name"
                            className="input_input__1Zknj"
                            data-geist-input=""
                            spellCheck="false"
                            type="name"
                          />
                        </div>
                      </label>
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
                        "--sm-stack-gap": "16px",
                        "--md-stack-gap": "28px",
                        "--lg-stack-gap": "28px",
                      } as React.CSSProperties}
                    >
                      <label
                        data-version="v1"
                        htmlFor="email"
                        style={{ width: "100%" } as React.CSSProperties}
                      >
                        <div className="label_label__tW6NP label_input__5eDQ5 label_capitalize__mJBX4">
                          Email address
                        </div>
                        <div
                          className="input_container__eoK_W"
                          data-geist-input-wrapper=""
                          data-version="v1"
                          style={{
                            width: "100%",
                            "--geist-icon-size": "16px",
                          } as React.CSSProperties}
                        >
                          <input
                            id="email"
                            name="email"
                            required
                            autoComplete="email"
                            className="input_input__1Zknj"
                            data-geist-input=""
                            spellCheck="false"
                            type="email"
                          />
                        </div>
                      </label>
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
                        "--sm-stack-gap": "16px",
                        "--md-stack-gap": "28px",
                        "--lg-stack-gap": "28px",
                      } as React.CSSProperties}
                    >
                      <label
                        data-version="v1"
                        htmlFor="phone"
                        style={{ width: "100%" } as React.CSSProperties}
                      >
                        <div className="label_label__tW6NP label_input__5eDQ5 label_capitalize__mJBX4">
                          Phone number
                        </div>
                        <div
                          className="input_container__eoK_W"
                          data-geist-input-wrapper=""
                          data-version="v1"
                          style={{
                            width: "100%",
                            "--geist-icon-size": "16px",
                          } as React.CSSProperties}
                        >
                          <input
                            id="phone"
                            name="phone"
                            required
                            autoComplete="phone"
                            className="input_input__1Zknj"
                            data-geist-input=""
                            spellCheck="false"
                            type="phone"
                          />
                        </div>
                      </label>
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
                        "--stack-gap": "0px",
                      } as React.CSSProperties}
                    >
                      <label data-version="v1">
                        <div className="label_label__tW6NP label_input__5eDQ5 label_capitalize__mJBX4">
                          What kind of work are you looking for?
                        </div>
                        <div className="textarea_container__4PMhf input_container__eoK_W">
                          <textarea
                            autoComplete="off"
                            spellCheck="false"
                            className="textarea_textarea__RIW97 input_input__1Zknj"
                            id="note"
                            name="note"
                            required
                            rows={8}
                          ></textarea>
                        </div>
                      </label>
                    </div>
                    <div
                      className="stack_stack__iZkUS stack"
                      data-version="v1"
                      style={{
                        "--stack-flex": "initial",
                        "--stack-direction": "column",
                        "--sm-stack-align": "center",
                        "--md-stack-align": "end",
                        "--stack-justify": "flex-start",
                        "--stack-padding": "0px",
                        "--stack-gap": "0px",
                      } as React.CSSProperties}
                    >
                      <button
                        type="submit"
                        data-testid="contact-sales/submit"
                        className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_invert__YNhnn disabled:bg-gray-400 disabled:text-gray-100"
                        data-geist-button=""
                        disabled={loading}
                        style={{
                          minWidth: "164px",
                          maxWidth: "164px",
                          "--geist-icon-size": "16px",
                        } as React.CSSProperties}
                      >
                        <span className="button_content__1aE1_ ">Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="stack_stack__iZkUS stack contact-sales_sidebar__8_C2O"
                data-version="v1"
                style={{
                  "--stack-flex": "initial",
                  "--stack-direction": "column",
                  "--stack-align": "center",
                  "--stack-justify": "flex-start",
                  "--stack-padding": "0px",
                  "--stack-gap": "56px",
                } as React.CSSProperties}
              >
                <figure
                  className="stack_stack__iZkUS stack contact-sales_quote__xNVW_"
                  data-version="v1"
                  style={{
                    "--stack-flex": "initial",
                    "--stack-direction": "column",
                    "--stack-align": "stretch",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "0px",
                  } as React.CSSProperties}
                >
                  <blockquote className="text_blockquote__L8WOL">
                    <p
                      className="text_wrapper__i87JK"
                      data-version="v1"
                      style={{
                        "--text-color": "var(--ds-gray-1000)",
                        "--text-size": "1.5rem",
                        "--text-line-height": "2rem",
                        "--text-letter-spacing": "-0.029375rem",
                        "--text-weight": 400,
                      } as React.CSSProperties}
                    >
                      Every great project begins with a simple hello <span className="wave mr-2">👋</span>. Let's
                      start building something amazing together.
                    </p>
                  </blockquote>
                </figure>
                <div
                  className="stack_stack__iZkUS stack contact-sales_testimonials__Kh43G"
                  data-version="v1"
                  style={{
                    "--stack-flex": "initial",
                    "--stack-direction": "column",
                    "--stack-align": "stretch",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "0px",
                  } as React.CSSProperties}
                >
                  <div
                    className="stack_stack__iZkUS stack carousel_logo-carousel__g1_fJ"
                    data-version="v1"
                    style={{
                      "--stack-flex": "initial",
                      "--stack-direction": "column",
                      "--stack-align": "stretch",
                      "--stack-justify": "flex-start",
                      "--stack-padding": "0px",
                      "--stack-gap": "0px",
                    } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 