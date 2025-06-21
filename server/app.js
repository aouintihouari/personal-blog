import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import logger from "./middleware/logger.js";
import articlesRouter from "./routes/articles.route.js";
import newsletterRouter from "./routes/newsletter.route.js";

const app = express();

app.use(helmet());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? ["https://yourdomain.com"]
      : ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get("/health", (req, res) =>
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
);

app.use("/api/v1/articles", articlesRouter);
app.use("/api/v1/newsletter", newsletterRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
