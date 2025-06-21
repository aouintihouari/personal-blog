import { NavLink } from "react-router";

const MobileNavBarMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  paths,
  labels,
  linkClass,
}) => {
  return (
    <>
      {isMenuOpen && (
        <nav className="mx-auto mt-2 w-11/12 rounded-[10px] border-2 border-neutral-200 bg-neutral-50 p-4 shadow md:w-10/12 lg:hidden xl:w-4/12 dark:border-neutral-700 dark:bg-neutral-800">
          <ul className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
            {paths.map((path, i) => (
              <li
                className={`${i < paths.length - 1 ? "border-b-1 border-b-neutral-200 dark:border-b-neutral-700" : ""}`}
                key={path}
              >
                <NavLink
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${linkClass} block ${
                      isActive
                        ? "dark:text-neutral-0 text-neutral-900"
                        : "text-neutral-600 dark:text-neutral-400"
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileNavBarMenu;
