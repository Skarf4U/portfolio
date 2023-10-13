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
          ? "bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50"
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
            className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white"
          >
            <span className="-mt-0.5">Adi Amar</span>
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
