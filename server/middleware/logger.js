const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    const statusColor = status >= 400 ? "\x1b[31m" : "\x1b[32m";

    console.log(
      `${new Date().toISOString()} - ${req.method} ${
        req.originalUrl
      } - ${statusColor}${status}\x1b[0m - ${duration}ms`
    );
  });

  next();
};

export default logger;
