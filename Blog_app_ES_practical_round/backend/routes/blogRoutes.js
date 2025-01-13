import express from "express";
import {
  createBlog,
  deleteBlog,
  getUser,
  updateBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/", getUser);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
