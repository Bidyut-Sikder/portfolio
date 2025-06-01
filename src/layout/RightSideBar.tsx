import { useTheme } from "@/theme/theme-provider";

import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function RightSideBar({
  sidebar,
  setSidebar,
}: {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
}) {
  const { theme } = useTheme();

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };
  return (
    <div
      className={
        sidebar
          ? "sidebar fixed left-10 top-0 z-[999] h-screen w-full bg-btn/60 transition-all duration-500"
          : "sidebar fixed left-[110%] top-0 z-[999] h-screen w-full bg-btn/60 transition-all duration-500"
      }
    >
      <div className="ml-auto h-screen w-[300px] bg-white px-[30px] pt-[60px] dark:bg-card">
        <div className="relative flex justify-center">
          <button
            onClick={sidebarControl}
            className="group absolute left-[-78px] rounded-lg bg-white px-[15px]  py-[10px] text-[26px] dark:bg-card"
          >
            <FaXmark className="text-btn transition-all duration-500 group-hover:rotate-90  dark:text-white dark:group-hover:text-theme" />
          </button>
          <div>
            <img
              src={
                theme === "dark"
                  ? "/assets/images/logo.svg"
                  : "/assets/images/logo-dark.svg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
        <nav className="mt-[30px]">
          <ul>
            <li className="text-[18px] font-semibold">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "inline-block py-[8px] text-theme dark:text-theme"
                    : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="text-[18px] font-semibold">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "inline-block py-[8px] text-theme dark:text-theme"
                    : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                }
                to={"/about"}
              >
                About Me
              </NavLink>
            </li>

            <li className=" text-[18px] font-semibold">
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "inline-block py-[8px] text-theme dark:text-theme"
                    : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default RightSideBar;
