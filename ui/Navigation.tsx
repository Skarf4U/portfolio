import Link from "next/link";
import { FC, useState } from "react";
import { Icon, IconName } from "./Icon";
import { useRouter } from "next/router";

const navLinks: Array<{ label: string; url: string }> = [
  { label: "Projects", url: "/projects" },
  { label: "Contact", url: "/contact" },
];

const iconLinks: Array<{ label: string; icon: IconName; url: string }> = [
  { label: "Github", icon: "github", url: "https://github.com/skarf4u" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/adiamar",
  },
];

const NavLink: FC<{
  label?: string;
  hideLabel?: boolean;
  icon?: IconName;
  url: string;
}> = ({ label, hideLabel = false, icon, url }) => {
  const router = useRouter();
  const active = router.pathname.split("/")[1] == url.replace("/", "");

  return (
    <Link
      href={url}
      className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
        active
          ? "bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50 hover-no-color"
          : "text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
      }`}
      rel={"noreferrer"}
    >
      {label && <span className={hideLabel ? "sr-only" : ""}>{label}</span>}
    </Link>
  );
};
const IconLink: FC<{
  label?: string;
  hideLabel?: boolean;
  icon?: IconName;
  url: string;
}> = ({ label, hideLabel = false, icon, url }) => {
  const router = useRouter();
  const active = router.pathname.split("/")[1] == url.replace("/", "");

  return (
    <Link
      href={url}
      className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
        active
          ? "bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50"
          : "text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
      }`}
      target={"_blank"}
      rel={"noreferrer"}
    >
      {icon && (
        <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
          <Icon name={icon} />
        </span>
      )}
    </Link>
  );
};

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-0 fixed z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link
            href="/"
            className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white hover-no-color"
          >
            <svg
              width="140"
              viewBox="0 0 429.001 74.601"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                stroke-linecap="round"
                fill-rule="evenodd"
                font-size="9pt"
                stroke="#000"
                stroke-width=".35mm"
                fill="#000"
                style={{"stroke":"#000","strokeWidth":".35mm","fill":"#000"}}
              >
                <path
                  d="M 233.1 73.6 L 233.1 27.7 L 243.9 27.7 L 243.9 36 Q 246.1 31.3 250.35 28.9 Q 254.6 26.5 260.1 26.5 Q 266.514 26.552 270.345 28.861 A 10.975 10.975 0 0 1 275.2 35 A 15.151 15.151 0 0 1 280.227 29.719 A 18.947 18.947 0 0 1 281.8 28.8 Q 286.2 26.5 291.1 26.5 Q 298.3 26.5 302 29.25 A 12.76 12.76 0 0 1 306.341 35.093 A 16.847 16.847 0 0 1 306.95 37.05 A 34.592 34.592 0 0 1 307.609 40.543 Q 308.2 44.756 308.2 50.6 L 308.2 73.6 L 297.3 73.6 L 297.3 50.5 Q 297.3 44.175 296.294 40.655 A 11.603 11.603 0 0 0 295.65 38.9 A 5.746 5.746 0 0 0 291.521 35.633 A 9.889 9.889 0 0 0 289.3 35.4 A 14.823 14.823 0 0 0 285.37 35.891 A 10.317 10.317 0 0 0 279.75 39.65 A 15.071 15.071 0 0 0 277.144 45.18 Q 276.601 47.329 276.516 49.853 A 28.152 28.152 0 0 0 276.5 50.8 L 276.5 73.6 L 265.7 73.6 L 265.7 48.9 Q 265.7 43.6 265.3 41 A 7.356 7.356 0 0 0 264.682 38.936 A 5.969 5.969 0 0 0 263.1 36.9 A 5.373 5.373 0 0 0 261.482 36.001 Q 259.831 35.4 257.3 35.4 A 11.288 11.288 0 0 0 250.941 37.371 A 13.677 13.677 0 0 0 250.75 37.5 A 15.028 15.028 0 0 0 246.331 42.285 A 17.877 17.877 0 0 0 245.85 43.15 Q 244 46.7 244 50.8 L 244 73.6 L 233.1 73.6 Z M 35.2 0 L 36.3 0 L 71.7 73.6 L 58.8 73.6 L 52.5 59.2 L 18.8 59.2 L 12.5 73.6 L 0 73.6 L 35.2 0 Z M 191.1 0 L 192.2 0 L 227.6 73.6 L 214.7 73.6 L 208.4 59.2 L 174.7 59.2 L 168.4 73.6 L 155.9 73.6 L 191.1 0 Z M 113.2 36.2 L 112.7 28.4 L 112.7 0.1 L 123.3 0.1 L 123.3 73.6 L 113 73.6 L 112.8 65.5 Q 111.313 68.65 107.681 71.149 A 23.759 23.759 0 0 1 106.6 71.85 Q 102.1 74.6 96.5 74.6 Q 90.3 74.6 85.05 71.65 Q 79.8 68.7 76.65 63.25 A 23.297 23.297 0 0 1 73.808 54.882 A 30.225 30.225 0 0 1 73.5 50.5 A 31.589 31.589 0 0 1 74.34 43.009 A 21.957 21.957 0 0 1 79.6 33.05 A 20.183 20.183 0 0 1 91.608 26.836 A 28.871 28.871 0 0 1 96.1 26.5 Q 101.9 26.5 106.7 29.35 A 19.807 19.807 0 0 1 109.85 31.636 Q 112.134 33.692 113.2 36.2 Z M 358.5 35.4 L 358.7 27.7 L 369 27.7 L 369 73.6 L 358.8 73.6 L 358.6 65.5 Q 357.113 68.65 353.481 71.149 A 23.759 23.759 0 0 1 352.4 71.85 Q 347.9 74.6 342.3 74.6 Q 336.1 74.6 330.85 71.65 Q 325.6 68.7 322.45 63.25 A 23.297 23.297 0 0 1 319.608 54.882 A 30.225 30.225 0 0 1 319.3 50.5 A 31.941 31.941 0 0 1 319.904 44.146 A 24.358 24.358 0 0 1 322.05 37.9 Q 324.8 32.5 329.9 29.5 A 21.535 21.535 0 0 1 337.664 26.808 A 28.177 28.177 0 0 1 341.9 26.5 A 20.223 20.223 0 0 1 348.461 27.553 A 19.097 19.097 0 0 1 349.4 27.9 Q 352.9 29.3 355.3 31.35 Q 357.7 33.4 358.5 35.4 Z M 383.2 73.6 L 383.2 27.7 L 394 27.7 L 394 36.7 A 16.309 16.309 0 0 1 396.848 31.572 A 15.136 15.136 0 0 1 399.2 29.3 Q 402.8 26.5 407.4 26.5 Q 410.6 26.5 411.8 27.1 L 410.3 38 Q 409.4 37.4 406.4 37.4 Q 401.7 37.4 397.85 40.4 A 9.362 9.362 0 0 0 394.685 45.072 Q 394.172 46.678 394.043 48.643 A 20.757 20.757 0 0 0 394 50 L 394 73.6 L 383.2 73.6 Z M 138.4 73.6 L 138.4 27.7 L 149.6 27.7 L 149.6 73.6 L 138.4 73.6 Z M 111.8 51.2 L 111.8 50.5 A 17.595 17.595 0 0 0 111.23 45.947 A 14.932 14.932 0 0 0 110 42.8 Q 108.2 39.4 105.1 37.5 Q 102 35.6 98.3 35.6 A 15.794 15.794 0 0 0 94.158 36.113 A 11.172 11.172 0 0 0 88.4 39.75 A 14.498 14.498 0 0 0 85.314 46.252 A 20.753 20.753 0 0 0 84.9 50.5 Q 84.9 57.069 88.217 61.187 A 13.583 13.583 0 0 0 88.35 61.35 A 11.177 11.177 0 0 0 94.973 65.19 A 16.933 16.933 0 0 0 98.3 65.5 A 13.539 13.539 0 0 0 103.922 64.352 A 13.17 13.17 0 0 0 107.9 61.55 A 13.322 13.322 0 0 0 111.607 53.929 A 18.589 18.589 0 0 0 111.8 51.2 Z M 357.6 51.3 L 357.6 50.6 A 17.595 17.595 0 0 0 357.03 46.047 A 14.932 14.932 0 0 0 355.8 42.9 Q 354 39.5 350.9 37.6 Q 347.8 35.7 344.1 35.7 A 15.794 15.794 0 0 0 339.958 36.213 A 11.172 11.172 0 0 0 334.2 39.85 A 14.498 14.498 0 0 0 331.114 46.352 A 20.753 20.753 0 0 0 330.7 50.6 Q 330.7 57.169 334.017 61.287 A 13.583 13.583 0 0 0 334.15 61.45 A 11.177 11.177 0 0 0 340.773 65.29 A 16.933 16.933 0 0 0 344.1 65.6 A 13.539 13.539 0 0 0 349.722 64.452 A 13.17 13.17 0 0 0 353.7 61.65 A 13.322 13.322 0 0 0 357.407 54.029 A 18.589 18.589 0 0 0 357.6 51.3 Z M 35.7 21.3 L 31.3 31.3 L 23.3 49.1 L 48.1 49.1 L 40.2 31.4 L 35.9 21.3 L 35.7 21.3 Z M 191.6 21.3 L 187.2 31.3 L 179.2 49.1 L 204 49.1 L 196.1 31.4 L 191.8 21.3 L 191.6 21.3 Z M 421.753 74.6 A 8.744 8.744 0 0 0 421.8 74.6 Q 424.9 74.6 426.95 72.55 A 6.907 6.907 0 0 0 428.43 70.4 A 7.227 7.227 0 0 0 429 67.5 Q 429 64.4 426.95 62.35 A 6.791 6.791 0 0 0 424.465 60.747 A 7.688 7.688 0 0 0 421.8 60.3 Q 418.7 60.3 416.65 62.35 A 6.791 6.791 0 0 0 415.047 64.835 A 7.688 7.688 0 0 0 414.6 67.5 A 8.477 8.477 0 0 0 414.601 67.64 A 6.762 6.762 0 0 0 416.7 72.55 A 7.024 7.024 0 0 0 421.753 74.6 Z M 143.9 19.1 Q 140.8 19.1 138.7 17 A 7.046 7.046 0 0 1 136.601 11.897 A 9.082 9.082 0 0 1 136.6 11.8 A 6.366 6.366 0 0 1 138.563 7.134 A 8.16 8.16 0 0 1 138.7 7 Q 140.8 5 143.9 5 Q 146.9 5 149 7 Q 151.1 9 151.1 11.8 A 7.722 7.722 0 0 1 150.603 14.609 A 7.034 7.034 0 0 1 149.05 17 A 6.862 6.862 0 0 1 144.093 19.098 A 9.009 9.009 0 0 1 143.9 19.1 Z"
                  vector-effect="non-scaling-stroke"
                />
              </g>
            </svg>
          </Link>
        </div>
        {/* <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-end text-slate-600 dark:text-slate-300"
          >
            <span className="inline-block w-4">
              <Icon name={open ? "close" : "bars"} />
            </span>
          </button>
        </div> */}

        <div
          className="stack_stack__iZkUS stack lg-hidden"
          data-version="v1"
          style={
            {
              "--stack-flex": "initial",
              "--stack-direction": "row",
              "--stack-align": "center",
              "--stack-justify": "flex-start",
              "--stack-padding": "0px",
              "--stack-gap": "8px",
            } as React.CSSProperties
          }
        >
          <button
            aria-label="open menu"
            className="menu-toggle_menuToggle__6OaWw mobile-menu_indicator__le_Ik"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={
                { flexShrink: 0, color: "currentcolor" } as React.CSSProperties
              }
            >
              {open ? (
                // SVG for when the button is open
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
                  fill="currentColor"
                ></path>
              ) : (
                // SVG for when the button is closed
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.75 4H1V5.5H1.75H14.25H15V4H14.25H1.75ZM1.75 10.5H1V12H1.75H14.25H15V10.5H14.25H1.75Z"
                  fill="currentColor"
                ></path>
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="fixed inset-0 top-[65px] z-50 h-screen bg-gray-950/10 pb-20 backdrop-blur-lg backdrop-filter dark:bg-gray-950/50">
            <nav className="mobile-menu_wrapper__ehRfR lg-hidden">
              <ul className="mobile-menu_buttons__1lQLW">
                <li>
                  <a
                    role="link"
                    href="/contact"
                    type="submit"
                    className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_secondary__kMMNc button_invert__YNhnn"
                    data-geist-button=""
                    style={
                      {
                        minWidth: "100%",
                        maxWidth: "100%",
                        "--geist-icon-size": "16px",
                      } as React.CSSProperties
                    }
                  >
                    <span className="button_content__1aE1_">Contact</span>
                  </a>
                </li>
              </ul>
              <ul>
                <a className="link_link__hbWKh" href="/">
                  <li>Home</li>
                </a>
                <a className="link_link__hbWKh" href="/projects">
                  <li>Projects</li>
                </a>
              </ul>
              <span
                aria-hidden={true}
                className="geist-spacer"
                data-version="v1"
              ></span>
              <span
                aria-hidden={true}
                className="geist-spacer"
                data-version="v1"
                style={{ marginTop: "8.6px" } as React.CSSProperties}
              ></span>
            </nav>
          </div>
        )}
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            {navLinks.map(({ label, url }, index) => (
              <NavLink
                key={index}
                label={label}
                url={url}
                icon={"external-link"}
              />
            ))}
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            {iconLinks.map(({ label, icon, url }, index) => (
              <IconLink
                key={index}
                label={label}
                hideLabel
                url={url}
                icon={icon}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
