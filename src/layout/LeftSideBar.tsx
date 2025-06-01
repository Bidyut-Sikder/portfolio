import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function LeftSideBar() {
  return (
    <div className="info-card mt-[60px]">
      <div className="rounded-[20px] bg-white px-[45px] py-[40px] dark:bg-card">
        <div className="relative flex justify-center ">
          <img
            src="https://avatars.githubusercontent.com/u/89535239?v=4"
            alt=""
            className="w-[200px]"
          />
          <img
            src="/assets/images/show/underline.svg"
            alt=""
            className="absolute bottom-[0] "
          />
        </div>
        <div>
          <div className="mt-[25px]">
            <div className=" text-center">
              <h1 className="text-[24px] tracking-[1px] text-btn dark:text-white">
                Hy! I’m
                <h1 className="text-theme"> Bidyut Sikder</h1>
              </h1>
              <p className="text-btn dark:text-white">Software Developer</p>
              <p className="mt-[5px] text-[14px] text-btn dark:text-white">
                developerbidyut5@gmail.com
              </p>

              <div className="mt-[10px] flex justify-center gap-3">
                <Link
                  to={"https://web.facebook.com/bidyut.sikder.104696"}
                  target="_blank"
                >
                  <button
                    title="Facebook"
                    className="boxShadow hover:scale-110 rounded-lg border dark:bg-transparent p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme "
                  >
                    <FaFacebookF />
                  </button>
                </Link>
                <Link to={"https://github.com/Bidyut-Sikder"} target="_blank">
                  <button
                    title="Github"
                    className="boxShadow hover:scale-110 rounded-lg border dark:bg-transparent p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme "
                  >
                    <FaGithub />
                  </button>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/bidyutsikder/"}
                  target="_blank"
                >
                  <button
                    title="Linkedin"
                    className="boxShadow hover:scale-110 rounded-lg border dark:bg-transparent p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme "
                  >
                    <FaLinkedinIn />
                  </button>
                </Link>
              </div>
              <div className="mt-[30px]">
                <Link
                  to="/contact"
                  className="block rounded-full border-2 border-theme hover:bg-green-500 bg-theme py-[10px] font-medium  text-btn transition-all duration-300 dark:hover:bg-green-700 dark:hover:text-theme"
                >
                  Hire Me!
                </Link>
              </div>
              <div className="mt-[20px]">
                <div className="block rounded-full border-2 border-btn hover:bg-green-500 bg-green-50 dark:hover:bg-green-500 py-[10px] font-medium text-black transition-all duration-300   dark:hover:text-primary-foreground">
                  {ShowAlert()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;

function ShowAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Download CV</AlertDialogTrigger>
      <AlertDialogContent className="rounded-xl shadow-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold dark:text-white text-gray-800">
            Want To Download My CV?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-md text-gray-600 dark:text-white mt-2">
            Please reach out to me personally for access. I'm happy to share it
            upon request.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            <Link to="/contact"> Contact Me</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
