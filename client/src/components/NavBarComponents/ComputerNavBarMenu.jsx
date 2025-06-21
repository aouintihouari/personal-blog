import { NavLink } from "react-router";

const ComputerNavBarMenu = ({ paths, linkClass, labels }) => {
  return (
    <>
      {paths.map((path, i) => (
        <li key={path}>
          <NavLink
            to={path}
            tabIndex={0}
            className={({ isActive }) =>
              `${linkClass} relative z-10 inline-block ${
                isActive
                  ? "dark:text-neutral-0 text-neutral-700 before:absolute before:bottom-0 before:left-0 before:z-0 before:h-[6px] before:w-full before:bg-blue-700 before:content-['']"
                  : ""
              }`
            }
          >
            <span className="relative z-20">{labels[i]}</span>
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default ComputerNavBarMenu;
