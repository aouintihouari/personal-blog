import { useState } from "react";
import ToggleMode from "./NavBarComponents/ToggleMode";
import ToggleMenu from "./NavBarComponents/ToggleMenu";
import ComputerNavBarMenu from "./NavBarComponents/ComputerNavBarMenu";
import MobileNavBarMenu from "./NavBarComponents/MobileNavBarMenu";

const NavBar = ({ darkMode, onDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const linkClass =
    "text-preset-8 hover:border-4 hover:border-t-0 hover:border-r-0 hover:border-b-4 p-1 hover:border-l-0 hover:border-b-blue-700 focus:rounded-[10px] mx-1 outline-none focus:ring-2 focus:ring-blue-700";

  const paths = ["/", "/blog", "/about", "/newsletter"];
  const labels = ["Home", "Blog", "About", "Newsletter"];

  return (
    <>
      <header className="bg-neutral-0 mx-auto mt-6 flex w-11/12 items-center justify-between rounded-[10px] border-2 border-neutral-200 p-2 shadow md:w-[calc(80%)] xl:w-[calc(35%)] dark:border-neutral-700 dark:bg-neutral-800">
        <div>
          <img
            src="./assets/images/image-avatar.jpg"
            alt="Avatar"
            className="rounded-8 h-10 w-10"
          />
        </div>
        <nav className="hidden lg:block">
          <ul className="text-preset-2 flex items-start gap-0.5 text-neutral-600 dark:text-neutral-400">
            <ComputerNavBarMenu
              paths={paths}
              linkClass={linkClass}
              labels={labels}
            />
            <ToggleMode darkMode={darkMode} onDarkMode={onDarkMode} />
          </ul>
        </nav>
        <div className="flex lg:hidden">
          <ToggleMenu
            darkMode={darkMode}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />
          <ToggleMode darkMode={darkMode} onDarkMode={onDarkMode} />
        </div>
      </header>
      <nav className="block lg:hidden">
        <MobileNavBarMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          paths={paths}
          labels={labels}
          linkClass={linkClass}
        />
      </nav>
    </>
  );
};

export default NavBar;
