import cx from "clsx";
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer
      className="footer_footer__O_b2S footer_dashboardFooter__TZlJo"
      data-version="v1"
    >
      <nav aria-label="Vercel Directory" role="navigation">
        <div className="footer_topWrapper__X8Ibt" data-version="v1">
          <div
            className="stack_stack__iZkUS stack"
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
            <a style={{ display: "flex" }} href="/home">
              <img src="/code.png" alt="" width="16" />
            </a>
            <div>
              <p
                className="text_wrapper__i87JK"
                style={
                  {
                    "--text-color": "var(--ds-gray-900)",
                    "--text-size": "0.875rem",
                    "--text-line-height": "1.25rem",
                    "--text-letter-spacing": "initial",
                    "--text-weight": 400,
                    whiteSpace: "nowrap",
                  } as React.CSSProperties
                }
              >
                Copyright © 2023. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <ul className="footer_dashboardFooterLinks__ssDUW">
          <li className="footer_contactWrapper__OpiLd">
            <span className="footer_contact__f20st">
              <ul className="footer_social__nmdaq">
                <li>
                  <a
                    aria-label="GitHub"
                    className="footer_github__C0XBp"
                    href="https://github.com/Skarf4U"
                    rel="noopener"
                    target="_blank"
                  >
                    <svg
                      aria-label="github"
                      height="19"
                      viewBox="0 0 14 14"
                      width="19"
                    >
                      <path
                        d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v-1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                        fill="currentColor"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    aria-label="X formerly known as Twitter"
                    className="footer_bird__eNkIZ"
                    href="https://linkedin.com/in/adiamar"
                    rel="noopener"
                    target="_blank"
                  >
                    <svg
                      role="img"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        fill="currentColor"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </span>
            <div
              className="switch_switch__ZmhO8 theme-switcher_iconVersion__IHYBT switch_icon__a6j_0 switch_rounded__INtu1 switch_borderLess__ZXdBs"
              data-geist-switch=""
              role="radiogroup"
            >
              <button
                aria-checked="false"
                aria-label="Dark"
                className="switch_button__afTgf switch_roundedButton__2bDLD"
                data-geist-switch-item=""
                data-version="v1"
                role="radio"
                type="button"
              >
                <span>
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "currentcolor",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.82804 1.8717C3.30641 2.76542 1.5 5.17204 1.5 8.0001C1.5 11.5899 4.41015 14.5001 8 14.5001C10.8282 14.5001 13.2348 12.6936 14.1285 10.1718C13.3293 10.5427 12.4386 10.7499 11.5 10.7499C8.04822 10.7499 5.25 7.95172 5.25 4.49994C5.25 3.56144 5.45718 2.67078 5.82804 1.8717ZM0 8.0001C0 3.78268 3.26298 0.328073 7.40265 0.0220947L8.009 1.27881C7.22684 2.12601 6.75 3.25644 6.75 4.49994C6.75 7.12329 8.87665 9.24994 11.5 9.24994C12.7436 9.24994 13.8741 8.77304 14.7213 7.99079L15.978 8.59708C15.6722 12.7369 12.2175 16.0001 8 16.0001C3.58172 16.0001 0 12.4184 0 8.0001Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button
                aria-checked="true"
                aria-label="Light"
                className="switch_button__afTgf switch_roundedButton__2bDLD"
                data-geist-switch-item=""
                data-version="v1"
                role="radio"
                type="button"
              >
                <span>
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "currentcolor",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button
                aria-checked="false"
                aria-label="System"
                className="switch_button__afTgf switch_roundedButton__2bDLD"
                data-geist-switch-item=""
                data-version="v1"
                role="radio"
                type="button"
              >
                <span>
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "currentcolor",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 2C0 1.44772 0.447715 1 1 1H15C15.5523 1 16 1.44772 16 2V10.5C16 11.0523 15.5523 11.5 15 11.5H8.75V14.5H9.75H10.5V16H9.75H6.25H5.5V14.5H6.25H7.25V11.5H1C0.447714 11.5 0 11.0523 0 10.5V2ZM1.5 2.5V10H14.5V2.5H1.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </li>
          <li className="footer_item__tMf_5">
            <a className="link_link__hbWKh link_secondary__F1rqx" href="/">
              Home
            </a>
          </li>
          <li className="footer_item__tMf_5">
            <a className="link_link__hbWKh link_secondary__F1rqx" href="/projects">
              Projects
            </a>
          </li>
          <li className="footer_item__tMf_5">
            <a
              className="link_link__hbWKh link_secondary__F1rqx"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
