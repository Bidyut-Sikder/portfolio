import { useTheme } from "@/theme/theme-provider";
import logo from "..//assets/images/LOGO.png";

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <img
            src={theme === "dark" ? logo : logo}
            alt="Bidyut Sikder Logo"
            className="h-6 w-auto"
          />
          <span className="text-sm text-muted-foreground tracking-wide font-medium">
            Bidyut Sikder
          </span>
        </div>

        <p className="text-sm text-center  text-muted-foreground max-w-md">
          Crafting digital experiences with precision and purpose. Available for
          freelance, contract, or full-time collaborations in modern web &
          mobile development.
        </p>

        <p className="text-xs text-muted-foreground text-center">
          © 2025 Bidyut Sikder. All rights reserved. 
        </p>
      </div>
    </footer>

    // <footer>
    //   <div className="container mx-auto mt-[60px] flex justify-center pb-[40px]">
    //     <div>
    //       <p className="text-center text-text">
    //         Copyright <span className="text-theme">bidyutsikder</span> ©2025.
    //         All rights reserved
    //       </p>
    //       <div className="mt-[20px] flex justify-center text-center">
    //         <img src={theme === "dark" ? logo : logo} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;
