import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  slug: { type: String, unique: true },
});

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
