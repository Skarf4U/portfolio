import Link from "next/link";
import { FC, useState } from "react";
import { Icon, IconName } from "./Icon";
import { useRouter } from "next/router";

const navLinks: Array<{ label: string; url: string }> = [
  { label: "About", url: "/#about" },
  { label: "Projects", url: "/projects" },
];

const iconLinks: Array<{ label: string; icon: IconName; url: string }> = [
  { label: "Github", icon: "github", url: "https://github.com/skarf4u" },
  { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/adiamar" },
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
    (<Link
      href={url}
      className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
        active
          ? "bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50"
          : "text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
      }`}
      rel={"noreferrer"}>

      {label && <span className={hideLabel ? "sr-only" : ""}>{label}</span>}

    </Link>)
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
    (<Link
      href={url}
      className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
        active
          ? "bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50"
          : "text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200"
      }`}
      target={"_blank"}
      rel={"noreferrer"}>

      {icon && (
        <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
          <Icon name={icon} />
        </span>
      )}

    </Link>)
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
            className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">

            <span className="-mt-0.5">Adi Amar</span>

          </Link>
        </div>
        <div className="lg:hidden">
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
        </div>
        {open && (
          <div className="fixed inset-0 top-[65px] z-50 h-screen bg-gray-950/10 pb-20 backdrop-blur-lg backdrop-filter dark:bg-gray-950/50">
            <nav className="lg:hidden absolute right-0 h-full divide-y divide-gray-200 border-l border-gray-200 bg-white p-8 dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex flex-col space-y-2 pb-8">
                {navLinks.map(({ label, url }, index) => (
                  <NavLink
                    key={index}
                    label={label}
                    url={url}
                    icon={"external-link"}
                  />
                ))}
              </div>
              <div className="flex items-center justify-end space-x-4 pt-8">
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
