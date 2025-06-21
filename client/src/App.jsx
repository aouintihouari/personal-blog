import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NewsLetter from "./pages/NewsLetter";
import ArticleDetail from "./pages/ArticleDetail";

import BackgroundPatterns from "./components/BackgroundPatterns";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BodyContainer from "./components/BodyContainer";
import Separation from "./components/HomeComponents/Separation";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="relative h-screen overflow-x-hidden bg-neutral-100 transition-colors duration-500 dark:bg-neutral-900">
      <BackgroundPatterns />
      <NavBar darkMode={darkMode} onDarkMode={setDarkMode} />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:slug" element={<ArticleDetail />} />
          <Route path="/newsletter" element={<NewsLetter />} />
        </Routes>
        <Separation />
        <Footer darkMode={darkMode} />
      </BodyContainer>
    </main>
  );
}

export default App;
