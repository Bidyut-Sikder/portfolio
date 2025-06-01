import { useState } from "react";

// import { cvToast } from "../Helpers/SessionHelper";

import RightSideBar from "./RightSideBar";

import LeftSideBar from "./LeftSideBar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: any) => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="bg-accent">
        {/* Header Section */}

        <Header sidebarControl={sidebarControl} />
        {/* <header>
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
                        strings={[" Hire Me!", "Need Help?", "Contact Now"]}
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
        </header> */}
        {/* sidebar intro */}

        <RightSideBar sidebar={sidebar} setSidebar={setSidebar} />
        {/* Info Page Section */}
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 lg:col-span-3 ">
                <div className="info-card mt-[60px]">
                  <LeftSideBar />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
                <div className="main__body">{props.children}</div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
