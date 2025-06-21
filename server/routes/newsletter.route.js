import express from "express";
import {
  getSubscribers,
  subscribeToNewsletter,
} from "../controllers/newsletter.controller.js";

const router = express.Router();

router.route("/").get(getSubscribers).post(subscribeToNewsletter);

export default router;
