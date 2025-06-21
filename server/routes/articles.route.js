import express from "express";
import {
  getRecentArticlesMetadata,
  getAllArticles,
  createArticle,
  getArticleBySlug,
  updateArticle,
  deleteArticle,
} from "../controllers/articles.controller.js";

const router = express.Router();

router.route("/").get(getAllArticles).post(createArticle);
router.get("/recent", getRecentArticlesMetadata);
router
  .route("/:slug")
  .get(getArticleBySlug)
  .patch(updateArticle)
  .delete(deleteArticle);

export default router;
