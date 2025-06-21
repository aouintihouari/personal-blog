import SocialIcons from "./SocialIcons";

const Footer = ({ darkMode }) => {
  return (
    <div className="-mt-6 flex items-end justify-between">
      <p className="text-preset-8 text-neutral-600 dark:text-neutral-400">
        Made with ❤️ and ☕
      </p>
      <SocialIcons darkMode={darkMode} type="footer" />
    </div>
  );
};

export default Footer;
