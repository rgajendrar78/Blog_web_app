import axios from "axios";

const API_URL = "http://localhost:4000/api/blogs";

export const getBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createBlog = async (blogData) => {
  const res = await axios.get(API_URL, blogData);
  return res.data;
};

export const updateBlog = async (id, blogData) => {
  const res = await axios.get(`${API_URL}/${id}`, blogData);
  return res.data;
};

export const deleteblog = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
