import { Footer } from "@/ui/Footer";
import { Navigation } from "@/ui/Navigation";
import React, { useState } from "react";

type Props = {};

const contact = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = {
      email: String(e.target.email.value),
      note: String(e.target.note.value),
    };

    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      setIsSubmitted(true);

      e.target.email.value = "";
      e.target.note.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <>
      <Navigation />
      <div
        style={
          {
            "--contact-gradient-rotation": "-1.9124589006386765rad",
          } as React.CSSProperties
        }
      >
        {isSubmitted ? ( // Conditionally render the thank you message
          <div className="stack_stack__iZkUS stack contact-sales_thankYou__OvJQU" data-version="v1" style={{ 
            '--stack-flex': 'initial', 
            '--stack-direction': 'column', 
            '--stack-align': 'stretch', 
            '--stack-justify': 'flex-start', 
            '--stack-padding': '0px', 
            '--stack-gap': '0px' 
          } as React.CSSProperties
            }>
            <div className="stack_stack__iZkUS stack contact-sales_vercelLogo__ReEQX" data-version="v1" style={{ 
              '--stack-flex': 'initial', 
              '--stack-direction': 'column', 
              '--stack-align': 'center', 
              '--stack-justify': 'flex-start', 
              '--stack-padding': '0px', 
              '--stack-gap': '0px' 
            } as React.CSSProperties
            }>
              <svg aria-hidden="true" fill="none" height="239" viewBox="0 0 257 239" width="257" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_124_3642)">
                  <path clip-rule="evenodd" d="M128.416 64.0176L192.424 175.337H64.407L128.416 64.0176Z" fill="white" fill-rule="evenodd"></path>
                </g>
              </svg>
            </div>
            <h1 className="contact-sales_title__hSxIu" data-testid="contact-page/title">Your message has been sent</h1>
            <p className="text_wrapper__i87JK" data-version="v1" style={{ 
              '--text-color': 'var(--ds-gray-900)', 
              '--text-size': '1.5rem', 
              '--text-line-height': '1.5rem', 
              '--text-letter-spacing': '-0.029375rem', 
              '--text-weight': 400, 
              '--text-align': 'center' 
            } as React.CSSProperties
            }>
              Thanks for getting in touch, we will reach out shortly.
            </p>
            <div className="stack_stack__iZkUS stack" data-version="v1" style={{ 
              '--stack-flex': 'initial', 
              '--stack-direction': 'column', 
              '--stack-align': 'center', 
              '--stack-justify': 'flex-start', 
              '--stack-padding': '0px', 
              '--stack-gap': '0px' 
            } as React.CSSProperties
            }>
              <ul className="contact-sales_cardContainer__fD75k">
                <li className="contact-sales_card__mUZ0c">
                  <svg className="contact-sales_arrowUpRight__MnkSk" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style={{ color: 'currentcolor' } as React.CSSProperties
            }>
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                  <h2 className="text_wrapper__i87JK contact-sales_devolverQuote___YWW5" data-version="v1" style={{ 
                    '--text-color': 'var(--ds-gray-1000)', 
                    '--text-size': '0.875rem', 
                    '--text-line-height': '3.5rem', 
                    '--text-letter-spacing': 'initial', 
                    '--text-weight': 400 
                  } as React.CSSProperties
            }>
                    <a className="link_link__hbWKh" href="/customers/devolver">
                      <span className="text_wrapper__i87JK contact-sales_percentage__RmIUV" data-version="v1" style={{ 
                        '--text-color': 'var(--ds-gray-1000)', 
                        '--text-size': '0.875rem', 
                        '--text-line-height': '1.25rem', 
                        '--text-letter-spacing': 'initial', 
                        '--text-weight': 400 
                      } as React.CSSProperties
            }>
                        73%
                      </span>
                      faster project creation with Vercel
                    </a>
                  </h2>
                  <img data-version="v1" alt="Logo for Devolver Digital" loading="lazy" width="120" height="54" decoding="async" data-nimg="1" className="image_intrinsic__ulrJk contact-sales_logo__m0gvL" srcSet="https://assets.vercel.com/image/upload/front/home/new/logos/devolver-digital.svg 1x, https://assets.vercel.com/image/upload/front/home/new/logos/devolver-digital.svg 2x" src="https://assets.vercel.com/image/upload/front/home/new/logos/devolver-digital.svg" style={{ color: 'transparent' } as React.CSSProperties
            } />
                </li>
                <li className="contact-sales_card__mUZ0c">
                  <svg className="contact-sales_arrowUpRight__MnkSk" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style={{ color: 'currentcolor' } as React.CSSProperties
            }>
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                  <p className="text_wrapper__i87JK contact-sales_improvementTitle__AfXhB" data-version="v1" style={{ 
                    '--text-color': 'var(--ds-gray-1000)', 
                    '--text-size': '2rem', 
                    '--text-line-height': '2.5rem', 
                    '--text-letter-spacing': '-0.049375rem', 
                    '--text-weight': 700 
                  } as React.CSSProperties
            }>
                    4 ways to improve your frontend workflow
                  </p>
                  <p className="text_wrapper__i87JK contact-sales_improvementQuote__40jW2" data-version="v1" style={{ 
                    '--text-color': 'var(--ds-gray-900)', 
                    '--text-size': '1rem', 
                    '--text-line-height': '1.5rem', 
                    '--text-letter-spacing': 'initial', 
                    '--text-weight': 400 
                  } as React.CSSProperties
            }>
                    Learn what makes a healthy Web development workflow and how Vercel accelerates that journey at every stage while making the developer experience genuinely great.
                  </p>
                  <h2 className="text_wrapper__i87JK" data-version="v1" style={{ 
                    '--text-color': 'var(--ds-gray-1000)', 
                    '--text-size': '0.875rem', 
                    '--text-line-height': '3.5rem', 
                    '--text-letter-spacing': 'initial', 
                    '--text-weight': 400 
                  } as React.CSSProperties
            }>
                    <a className="link_link__hbWKh contact-sales_guideLink___9CQI" href="/try/ebook-workflow">Get The Guide</a>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div
            className="stack_stack__iZkUS stack contact-sales_contactContainer__huPZU contact-sales_dynamic__WV_k5"
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
              style={
                {
                  "--stack-flex": "initial",
                  "--sm-stack-direction": "column",
                  "--lg-stack-direction": "row",
                  "--sm-stack-align": "center",
                  "--lg-stack-align": "baseline",
                  "--stack-justify": "center",
                  "--stack-padding": "0px",
                  "--stack-gap": "32px",
                } as React.CSSProperties
              }
            >
              <div
                className="stack_stack__iZkUS stack contact-sales_formContainer__AzR8V"
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
                <form
                  className="contact-sales_form__hEJyG"
                  onSubmit={handleSubmit}
                >
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
                        "--sm-stack-gap": "16px",
                        "--md-stack-gap": "28px",
                        "--lg-stack-gap": "28px",
                      } as React.CSSProperties
                    }
                  >
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
                          "--sm-stack-gap": "16px",
                          "--md-stack-gap": "28px",
                          "--lg-stack-gap": "28px",
                        } as React.CSSProperties
                      }
                    >
                      <label
                        data-version="v1"
                        htmlFor="your-email-275"
                        style={{ width: "100%" } as React.CSSProperties}
                      >
                        <div className="label_label__tW6NP label_input__5eDQ5 label_capitalize__mJBX4">
                          Email address
                        </div>
                        <div
                          className="input_container__eoK_W"
                          data-geist-input-wrapper=""
                          data-version="v1"
                          style={
                            {
                              width: "100%",
                              "--geist-icon-size": "16px",
                            } as React.CSSProperties
                          }
                        >
                          <input
                            aria-describedby="your-email-hint"
                            aria-invalid="false"
                            data-testid="contact-sales/email"
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
                      style={
                        {
                          "--stack-flex": "initial",
                          "--stack-direction": "column",
                          "--stack-align": "stretch",
                          "--stack-justify": "flex-start",
                          "--stack-padding": "0px",
                          "--stack-gap": "0px",
                        } as React.CSSProperties
                      }
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
                      style={
                        {
                          "--stack-flex": "initial",
                          "--stack-direction": "column",
                          "--sm-stack-align": "center",
                          "--md-stack-align": "end",
                          "--stack-justify": "flex-start",
                          "--stack-padding": "0px",
                          "--stack-gap": "0px",
                        } as React.CSSProperties
                      }
                    >
                      <button
                        type="submit"
                        data-testid="contact-sales/submit"
                        className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_invert__YNhnn disabled:bg-gray-400 disabled:text-gray-100"
                        data-geist-button=""
                        disabled={loading}
                        style={
                          {
                            minWidth: "164px",
                            maxWidth: "164px",
                            "--geist-icon-size": "16px",
                          } as React.CSSProperties
                        }
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
                style={
                  {
                    "--stack-flex": "initial",
                    "--stack-direction": "column",
                    "--stack-align": "center",
                    "--stack-justify": "flex-start",
                    "--stack-padding": "0px",
                    "--stack-gap": "56px",
                  } as React.CSSProperties
                }
              >
                <figure
                  className="stack_stack__iZkUS stack contact-sales_quote__xNVW_"
                  data-version="v1"
                  style={
                    {
                      "--stack-flex": "initial",
                      "--stack-direction": "column",
                      "--stack-align": "stretch",
                      "--stack-justify": "flex-start",
                      "--stack-padding": "0px",
                      "--stack-gap": "0px",
                    } as React.CSSProperties
                  }
                >
                  <blockquote className="text_blockquote__L8WOL">
                    <p
                      className="text_wrapper__i87JK"
                      data-version="v1"
                      style={
                        {
                          "--text-color": "var(--ds-gray-1000)",
                          "--text-size": "1.5rem",
                          "--text-line-height": "2rem",
                          "--text-letter-spacing": "-0.029375rem",
                          "--text-weight": 400,
                        } as React.CSSProperties
                      }
                    >
                      "All of our result pages were developed and deployed on
                      Vercel, and it was the smoothest election night anyone
                      could remember.”
                    </p>
                  </blockquote>
                  <figcaption>
                    <div
                      className="stack_stack__iZkUS stack"
                      data-version="v1"
                      style={
                        {
                          "--stack-flex": "initial",
                          "--stack-direction": "row",
                          "--stack-align": "center",
                          "--stack-justify": "flex-start",
                          "--stack-padding": "0px",
                          "--stack-gap": "12px",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className="contact-sales_quoteLogo__fziWk"
                        style={{ maxWidth: "12em" } as React.CSSProperties}
                      >
                        <img
                          data-version="v1"
                          alt="The Washington Post Logo"
                          loading="lazy"
                          width="350"
                          height="60"
                          decoding="async"
                          data-nimg="1"
                          style={
                            { color: "transparent" } as React.CSSProperties
                          }
                          src="https://assets.vercel.com/image/upload/front/home/new/logos/washingtonpost.svg"
                        />
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div
                  className="stack_stack__iZkUS stack contact-sales_testimonials__Kh43G"
                  data-version="v1"
                  style={
                    {
                      "--stack-flex": "initial",
                      "--stack-direction": "column",
                      "--stack-align": "stretch",
                      "--stack-justify": "flex-start",
                      "--stack-padding": "0px",
                      "--stack-gap": "0px",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="stack_stack__iZkUS stack carousel_logo-carousel__g1_fJ"
                    data-version="v1"
                    style={
                      {
                        "--stack-flex": "initial",
                        "--stack-direction": "column",
                        "--stack-align": "stretch",
                        "--stack-justify": "flex-start",
                        "--stack-padding": "0px",
                        "--stack-gap": "0px",
                      } as React.CSSProperties
                    }
                  >
                    <div className="tiny-heading_heading__xYu2W tiny-heading_small-margin__r2_Da carousel_heading__cSXOv">
                      <small
                        style={
                          {
                            fontSize: "0.75rem",
                            letterSpacing: "0.2rem",
                            marginTop: 0,
                            paddingLeft: "0.2rem",
                            color: "var(--accents-5)",
                          } as React.CSSProperties
                        }
                        className="jsx-2423190812 text_text__SJB2H text_small__huEsi geist-themed geist-secondary geist-text-no-margin text_noMargin__KfT5Y text_center__PuA5N text_themed__SN6Oj"
                      >
                        Trusted by the best frontend teams
                      </small>
                    </div>
                    <div
                      className="carousel_carousel__dGciW"
                      style={
                        { opacity: 1, "--copies": 2 } as React.CSSProperties
                      }
                    >
                      <div
                        className="carousel_track__gsYZO"
                        style={
                          {
                            animationDuration: "80s",
                            animationPlayState: "running",
                          } as React.CSSProperties
                        }
                      >
                        <ul
                          aria-hidden="false"
                          className="carousel_slides__FS1pI"
                        >
                          <div className="carousel_slides__FS1pI carousel_logos__AbzgU">
                            <div className="carousel_slide__IH4do">
                              <img
                                data-version="v1"
                                alt="Netflix Logo"
                                loading="eager"
                                width="113.9"
                                height="30.6"
                                decoding="async"
                                data-nimg="1"
                                style={
                                  {
                                    color: "transparent",
                                  } as React.CSSProperties
                                }
                                srcSet="https://assets.vercel.com/image/upload/front/home/new/logos/netflix.svg 1x, https://assets.vercel.com/image/upload/front/home/new/logos/netflix.svg 2x"
                                src="https://assets.vercel.com/image/upload/front/home/new/logos/netflix.svg"
                              />
                            </div>
                            {/* Add more carousel_slide__IH4do elements for other logos */}
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default contact;
