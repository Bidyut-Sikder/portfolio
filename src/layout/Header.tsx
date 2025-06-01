import { useTheme } from "@/theme/theme-provider";
import { Link, NavLink } from "react-router-dom";
import logo from "..//assets/images/LOGO.png";
import { ReactTyped } from "react-typed";
import { ModeButton } from "@/theme/ModeButton";
import { BiMenuAltRight } from "react-icons/bi";

function Header({ sidebarControl }: { sidebarControl: () => void }) {
  const { theme } = useTheme();
  return (
    <header>
      <div className=" container mx-auto pt-[30px]">
        <div className=" flex justify-between rounded-[10px] py-[20px]  bg-white  dark:bg-card  ">
          <div className="logo flex items-center px-[30px]">
            <Link to={"/"}>
              <img src={theme === "dark" ? logo : logo} alt="" />
            </Link>
          </div>
          <menu className="hidden items-center md:flex">
            <ul className="flex  gap-4">
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "font-semibold text-theme "
                      : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "font-semibold text-theme"
                      : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                  }
                  to={"/about"}
                >
                  About Me
                </NavLink>
              </li>
              <li className="w-[100px]">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "font-semibold text-theme"
                      : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                  }
                  to={"/contact"}
                >
                  <ReactTyped
                    strings={["Let's Start!", "Need Help?", "Contact Me!"]}
                    typeSpeed={200}
                    backSpeed={100}
                    backDelay={1}
                    loop
                    smartBackspace
                  />
                </NavLink>
              </li>
            </ul>
          </menu>
          <div className="flex items-center">
            <div className="flex items-center gap-4	 px-[30px]">
              <ModeButton />
              <button
                onClick={sidebarControl}
                className="rounded-full border border-[#919295] p-[5px] text-[25px] "
              >
                <BiMenuAltRight className="text-text dark:text-text" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
