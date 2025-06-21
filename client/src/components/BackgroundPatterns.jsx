const BackgroundPatterns = () => {
  return (
    <div className="hidden xl:block">
      <div className="pointer-events-none absolute top-0 -right-1/12 block h-[500px] w-[500px] overflow-hidden dark:hidden">
        <img
          src="./assets/images/pattern-light.svg"
          alt="Light background top right"
          className="translate-x-1/4"
        />
      </div>
      <div className="pointer-events-none absolute top-2/12 -left-[13rem] block h-[500px] w-[500px] overflow-hidden dark:hidden">
        <img
          src="./assets/images/pattern-light.svg"
          alt="Light background bottom left"
        />
      </div>

      <div className="pointer-events-none absolute top-0 -right-1/12 hidden h-[500px] w-[500px] overflow-hidden dark:block">
        <img
          src="./assets/images/pattern-dark.svg"
          alt="Dark background top right"
          className="translate-x-1/4"
        />
      </div>
      <div className="pointer-events-none absolute top-2/12 -left-[13rem] hidden h-[500px] w-[500px] overflow-hidden dark:block">
        <img
          src="./assets/images/pattern-dark.svg"
          alt="Dark background bottom left"
        />
      </div>
    </div>
  );
};

export default BackgroundPatterns;
