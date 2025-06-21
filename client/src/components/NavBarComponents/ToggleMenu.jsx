const ToggleMenu = ({ darkMode, toggleMenu, isMenuOpen }) => {
  return (
    <button
      onClick={toggleMenu}
      className="mr-4 text-black lg:hidden dark:text-white"
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      {isMenuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="5"
          fill="none"
          viewBox="0 0 20 20"
          className="rounded-8 h-9 w-9 bg-black p-1 dark:bg-white"
        >
          <path
            stroke={darkMode ? "#1C1A19" : "#fff"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 5 5 15M5 5l10 10"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
          className="mr-2 stroke-black dark:stroke-white"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.5 10h15m-15-5h15m-15 10h15"
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleMenu;
