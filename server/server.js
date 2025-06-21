import { config } from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.error(err.name, err.message);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! 💥 Shutting down...");
  console.error(err.name, err.message);
  server.close(() => process.exit(1));
});

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(PORT, () =>
      console.log(`🚀 Server started in ${NODE_ENV} mode on port ${PORT}`)
    );

    const gracefulShutdown = () => {
      console.log("🛑 Gracefully shutting down server...");
      server.close(() => {
        console.log("✅ Server closed properly");
        process.exit(0);
      });
    };
    process.on("SIGTERM", gracefulShutdown);
    process.on("SIGINT", gracefulShutdown);
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
