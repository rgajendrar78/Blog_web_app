import Blog from "../models/Blog.js";

const generateSlug = (title, category) =>
  `${title.toLowerCase().replace(/ /g, "-")}-${category.toLowerCase()}`;

export const createBlog = async (req, res) => {
  const { title, category, description, status } = req.body;

  if (!title || !category) {
    return res.status(400).json({ error: "title and category are required" });
  }

  try {
    const newBlog = new Blog({
      title,
      description,
      category,
      status,
      slug: generateSlug(title, category),
    });
    const saveBlog = await newBlog.save();
    res.status(201).json(saveBlog);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateBlog);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const status = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
