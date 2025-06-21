import Subscriber from "../models/Subscriber.js";

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().select("-__v");
    res.status(200).json({
      success: true,
      data: subscribers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve subscribers",
      error: error.message,
    });
  }
};

export const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email)
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    if (!/\S+@\S+\.\S+/.test(email))
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber)
      return res.status(400).json({
        success: false,
        message: "Email already subscribed",
      });
    const newSubscriber = await Subscriber.create({ email });
    return res.status(201).json({
      success: true,
      message: "Subscription successful",
      data: newSubscriber,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
