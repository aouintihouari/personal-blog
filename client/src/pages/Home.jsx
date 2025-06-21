import { NavLink } from "react-router";

import Separation from "../components/HomeComponents/Separation";
import Presentation from "../components/HomeComponents/Presentation";
import RecentArticles from "../components/HomeComponents/RecentArticles";
import SocialIcons from "../components/SocialIcons";

const Home = ({ darkMode }) => {
  return (
    <>
      <Presentation />
      <SocialIcons darkMode={darkMode} />
      <Separation />
      <RecentArticles />
      <NavLink
        to="/blog"
        className="text-preset-6 dark:text-neutral-0 text-neutral-700 underline decoration-blue-700 decoration-4 underline-offset-6 hover:text-neutral-500 dark:hover:text-neutral-400"
      >
        View all articles
      </NavLink>
    </>
  );
};

export default Home;
