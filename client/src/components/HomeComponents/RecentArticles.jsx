import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import api from "../../api.js";

const RecentArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const response = await api.get("/articles/recent");
        setArticles(response.data.data);
      } catch (error) {
        console.error("Error during recent articles loading:", error);
      }
    };
    fetchRecentArticles();
  }, []);

  return (
    <>
      <h2 className="text-preset-2 dark:text-neutral-0 my-2 text-neutral-700">
        Latest Articles
        <span className="mx-4 inline-block h-0.5 w-11 bg-blue-500"></span>
      </h2>
      <ul className="my-8">
        {articles.map((article) => (
          <NavLink to={article.slug}>
            <li className="mb-4" key={article.slug}>
              <h3 className="text-preset-5 dark:text-neutral-0 cursor-pointer text-neutral-700 hover:underline hover:decoration-1 hover:underline-offset-2">
                {article.title}
              </h3>
              <p className="text-preset-8-italic dark:text-neutral-400">
                {article.date}
              </p>
            </li>
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default RecentArticles;
