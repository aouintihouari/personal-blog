import { useState, useEffect } from "react";
import { NavLink } from "react-router";

import api from "../api";
import Separation from "../components/HomeComponents/Separation";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("/articles");
        setArticles(response.data.data);
      } catch (error) {
        console.error("Error during articles loading:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section>
      <h1 className="text-preset-2 dark:text-neutral-0 my-2 text-neutral-700">
        My Articles
        <span className="mx-4 inline-block h-0.5 w-9 bg-blue-500"></span>
      </h1>
      <p className="text-preset-7 text-neutral-600 dark:text-neutral-400">
        Below are all my recent blog posts. Click on any title to read the full
        article.
      </p>
      {articles.map((article) => (
        <div key={article.slug}>
          <Separation />
          <NavLink to={`/${article.slug}`}>
            <h3 className="text-preset-5 dark:text-neutral-0 cursor-pointer text-neutral-700 hover:underline hover:decoration-1 hover:underline-offset-2">
              {article.title}
            </h3>
          </NavLink>
          <p className="text-preset-8-italic text-neutral-600 dark:text-neutral-400">
            {article.date}
          </p>
          <p className="text-preset-7 text-neutral-600 dark:text-neutral-400">
            {article.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Blog;
