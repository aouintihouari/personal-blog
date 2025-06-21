import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const options = {
      dbName: "personal-blog",
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    const conn = await mongoose.connect(process.env.MONGO_URI, options);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);

    mongoose.connection.on("error", (err) =>
      console.error("❌ MongoDB error:", err)
    );

    mongoose.connection.on("disconnected", () =>
      console.warn("⚠️  MongoDB disconnected")
    );

    return conn;
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    throw error;
  }
};

export default connectDB;
