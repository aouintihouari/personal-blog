import Article from "../models/Article.js";

export const getRecentArticlesMetadata = async (req, res) => {
  try {
    const articles = await Article.find()
      .limit(5)
      .select("title slug createdAt");
    const formattedArticles = articles.map((article) => ({
      title: article.title,
      slug: article.slug,
      date: new Date(article.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));
    res.status(200).json({
      success: true,
      data: formattedArticles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().select(
      "title slug description createdAt"
    );
    const formattedArticles = articles.map((article) => ({
      title: article.title,
      slug: article.slug,
      description: article.description,
      date: new Date(article.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));

    res.status(200).json({
      success: true,
      data: formattedArticles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getArticleBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const article = await Article.findOne({ slug }).select(
      "-_id title content createdAt"
    );
    if (!article)
      return res.status(404).json({
        success: false,
        message: "Article not found.",
      });

    const formattedArticle = {
      title: article.title,
      content: article.content,
      date: new Date(article.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    res.status(200).json({ success: true, data: formattedArticle });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const createArticle = async (req, res) => {
  const { title, description, content } = req.body;
  if (!title || !description || !content)
    return res.status(400).json({
      success: false,
      message: "Title, description, and content are required.",
    });
  try {
    const article = await Article.create({ title, description, content });
    res.status(201).json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const updateArticle = async (req, res) => {
  const { slug } = req.params;
  const updates = req.body;
  if (!Object.keys(updates).length)
    return res.status(400).json({
      success: false,
      message:
        "At least one field (title, description, content) must be provided.",
    });
  try {
    const article = await Article.findOneAndUpdate({ slug }, updates, {
      new: true,
      runValidators: true,
    }).select("-__v");
    if (!article)
      return res.status(404).json({
        success: false,
        message: "Article not found.",
      });
    res.status(200).json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const deleteArticle = async (req, res) => {
  const { slug } = req.params;
  try {
    const article = await Article.findOneAndDelete({ slug });
    if (!article)
      return res.status(404).json({
        success: false,
        message: "Article not found.",
      });
    res
      .status(204)
      .json({ success: true, message: "Article deleted successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
