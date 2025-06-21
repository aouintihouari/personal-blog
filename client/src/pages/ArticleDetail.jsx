import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await api.get(`/articles/${slug}`);
        setArticle(res.data.data);
      } catch (err) {
        setError("Article not found.", err);
      }
    };
    fetchArticle();
  }, [slug]);

  if (error) return <p>{error}</p>;
  if (!article) return <p>Loading...</p>;

  return (
    <article className="prose dark:prose-invert mx-auto max-w-screen-md overflow-x-hidden px-4">
      <h1 className="text-preset-1 dark:text-neutral-0 text-neutral-700">
        {article.title}
      </h1>
      <p className="text-preset-8-italic text-neutral-600 dark:text-neutral-400">
        <em>Published </em>
        {article.date}
      </p>
      <ReactMarkdown
        children={article.content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          p: ({ node, ...props }) => (
            <p
              className="text-preset-7 my-4 text-neutral-600 dark:text-neutral-400"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-preset-2 dark:text-neutral-0 mt-8 text-neutral-700"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-preset-3 dark:text-neutral-0 mt-6 text-neutral-700"
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              className="text-preset-4 dark:text-neutral-0 mt-5 text-neutral-700"
              {...props}
            />
          ),
          h5: ({ node, ...props }) => (
            <h5
              className="text-preset-5 dark:text-neutral-0 mt-4 text-neutral-700"
              {...props}
            />
          ),
          h6: ({ node, ...props }) => (
            <h6
              className="text-preset-6 dark:text-neutral-0 mt-3 text-neutral-700"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="my-4 list-disc space-y-1 pl-5" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="my-4 ml-3 list-decimal space-y-1 pl-5" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li
              className="text-preset-7 my-2 text-neutral-600 dark:text-neutral-400"
              {...props}
            />
          ),
          blockquote: ({ children, ...props }) => {
            const extractText = (node) => {
              if (typeof node === "string") return node;
              if (Array.isArray(node)) return node.map(extractText).join("");
              if (node?.props?.children)
                return extractText(node.props.children);
              return "";
            };
            const rawText = extractText(children);
            let type = null;
            let icon = "";
            let bgColor = "";
            let borderColor = "";
            let textColor = "";
            const trimmedText = rawText.trim();
            if (/^tip:/i.test(trimmedText)) type = "tip";
            else if (/^warning:/i.test(trimmedText)) type = "warning";
            else if (/^(information|info):/i.test(trimmedText)) type = "info";
            switch (type) {
              case "tip":
                icon = "/assets/images/icon-tip.svg";
                bgColor = "bg-green-200 dark:bg-green-900";
                borderColor =
                  "border-green-500 bg-green-200 dark:border-green-700";
                textColor =
                  "text-preset-7 text-neutral-600 dark:text-neutral-400";
                break;
              case "warning":
                icon = "/assets/images/icon-warning.svg";
                bgColor = "bg-yellow-200 dark:bg-yellow-900";
                borderColor = "border-yellow-500 dark:border-yellow-700";
                textColor =
                  "text-preset-7 text-neutral-600 dark:text-neutral-400";
                break;
              case "info":
                icon = "/assets/images/icon-info.svg";
                bgColor = "bg-blue-200 dark:bg-blue-900";
                borderColor = "dark:border-blue-700 border-blue-500";
                textColor =
                  "text-preset-7 text-neutral-600 dark:text-neutral-400";
                break;
              default:
                return null;
            }
            const cleanFirstText = (
              node,
              hasBeenCleaned = { value: false },
            ) => {
              if (hasBeenCleaned.value && typeof node === "string") return node;
              if (typeof node === "string") {
                hasBeenCleaned.value = true;
                return node.replace(
                  /^(tip:|warning:|info:|information:)\s*/i,
                  "",
                );
              }
              if (Array.isArray(node)) {
                return node.map((child) =>
                  cleanFirstText(child, hasBeenCleaned),
                );
              }
              if (node?.props?.children) {
                if (node.type === "strong") {
                  return {
                    ...node,
                    props: {
                      ...node.props,
                      className: `font-bold text-neutral-800 dark:text-neutral-100 ${node.props.className || ""}`,
                      children: cleanFirstText(
                        node.props.children,
                        hasBeenCleaned,
                      ),
                    },
                  };
                }
                return {
                  ...node,
                  props: {
                    ...node.props,
                    children: cleanFirstText(
                      node.props.children,
                      hasBeenCleaned,
                    ),
                  },
                };
              }
              return node;
            };
            const cleanedChildren = cleanFirstText(children);
            return (
              <>
                <blockquote
                  className={`not-prose flex gap-3 rounded-xl border-2 p-4 ${bgColor} ${borderColor} ${textColor}`}
                >
                  <img
                    src={icon}
                    alt={type}
                    className="mt-4.5 h-5 w-5 shrink-0"
                  />
                  <div className="text-sm leading-relaxed">
                    {cleanedChildren}
                  </div>
                </blockquote>
              </>
            );
          },
          strong: ({ node, ...props }) => (
            <strong
              className="text-preset-5 dark:text-neutral-0 text-neutral-700"
              {...props}
            />
          ),
          em: ({ node, ...props }) => <em className="italic" {...props} />,
          pre: ({ node, children, ...props }) => {
            return (
              <div className="my-6 w-full overflow-x-auto rounded-lg bg-neutral-200 dark:bg-neutral-800">
                <pre className="m-0 p-4 text-sm leading-relaxed whitespace-pre dark:text-neutral-100">
                  {children}
                </pre>
              </div>
            );
          },
          code: ({ node, inline, className = "", children, ...props }) => {
            if (inline) {
              return (
                <code
                  className="break-words whitespace-pre-wrap dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={`${className}`} {...props}>
                {children}
              </code>
            );
          },
          table: ({ node, ...props }) => (
            <table
              className="my-6 w-full border-collapse overflow-hidden rounded-lg text-left text-sm shadow-sm"
              {...props}
            />
          ),
          thead: ({ node, ...props }) => (
            <thead
              className="bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
              {...props}
            />
          ),
          tbody: ({ node, ...props }) => (
            <tbody
              className="divide-y divide-neutral-300 dark:divide-neutral-700"
              {...props}
            />
          ),
          tr: ({ node, ...props }) => (
            <tr
              className="transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              {...props}
            />
          ),
          th: ({ node, ...props }) => (
            <th
              className="bg-neutral-100 px-4 py-3 font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="px-4 py-2 text-neutral-600 dark:text-neutral-300"
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr
              className="my-8 border-t border-neutral-300 dark:border-neutral-700"
              {...props}
            />
          ),
        }}
      />
    </article>
  );
};

export default ArticleDetail;
