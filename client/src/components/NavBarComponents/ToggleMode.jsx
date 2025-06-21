const ToggleMode = ({ darkMode, onDarkMode }) => {
  const toggleDarkMode = () => onDarkMode((prev) => !prev);
  return (
    <li className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-[8px] border-2 border-neutral-200 bg-neutral-100 outline-none focus:ring-2 focus:ring-blue-700 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <img
          className="h-[22px] w-[22px]"
          src={
            darkMode
              ? "./assets/images/icon-sun.svg"
              : "./assets/images/icon-moon.svg"
          }
          alt={darkMode ? "Light mode" : "Dark mode"}
        />
      </button>
    </li>
  );
};

export default ToggleMode;
