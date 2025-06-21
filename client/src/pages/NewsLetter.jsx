import { useState } from "react";
import api from "../api.js";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setStatus("");

    try {
      const res = await api.post("/newsletter", { email });
      setMessage(res.data.message);
      setStatus("success");
      setEmail("");
    } catch (error) {
      const errMsg =
        error.response?.data?.message || "An unexpected error occurred";
      setMessage(errMsg);
      setStatus("error");
    }
  };

  return (
    <section className="mb-40">
      <h1 className="text-preset-2 dark:text-neutral-0 my-2 text-neutral-700">
        Newsletter
      </h1>
      <p className="text-preset-7 my-4 text-neutral-600 dark:text-neutral-400">
        Want to stay updated on my latest articles, coding tutorials, and
        personal adventures? Sign up for my newsletter!
      </p>
      <h2 className="text-preset-5 dark:text-neutral-0 my-4 text-neutral-700">
        I'd love to have you along for the ride and also hear about your own
        journey!
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <label
          htmlFor="email"
          className="text-preset-7 dark:text-neutral-0 my-6 text-neutral-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          className={`placeholder:text-preset-7 rounded-8 my-6 h-[50px] w-full border-2 p-4 text-neutral-700 placeholder:text-neutral-700 focus:outline-blue-500 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-300 ${
            status === "error"
              ? "border-red-400 dark:border-red-500"
              : status === "success"
                ? "border-green-500 dark:border-green-500"
                : "border-neutral-300 dark:border-neutral-600"
          }`}
        />
        <p
          className={`my-1 flex text-sm ${
            status === "error"
              ? "text-red-400"
              : status === "success"
                ? "text-green-500"
                : "hidden"
          }`}
        >
          <img
            className="mr-2"
            src={
              status === "success"
                ? "assets/images/icon-success.svg"
                : "assets/images/icon-error.svg"
            }
            alt="icon"
          />
          {message}
        </p>
        <button
          type="submit"
          className="rounded-8 text-preset-6 my-4 h-12 w-[40%] cursor-pointer bg-blue-500 text-neutral-900 md:w-[22%]"
        >
          Stay updated
        </button>
      </form>

      <p className="text-preset-8 my-2 text-neutral-600 dark:text-neutral-400">
        Unsubscribe anytime. No spam, I promise 🙂
      </p>
    </section>
  );
};

export default NewsLetter;
