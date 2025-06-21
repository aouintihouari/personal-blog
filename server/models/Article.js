import mongoose from "mongoose";
import slugify from "slugify";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 10,
      maxlength: 120,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: 20,
      maxlength: 500,
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: 100,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

articleSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    const shortId = nanoid();
    const cleanSlug = slugify(this.title, {
      lower: true,
      strict: true,
    });
    this.slug = `${cleanSlug}-${shortId}`;
  }
  next();
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
