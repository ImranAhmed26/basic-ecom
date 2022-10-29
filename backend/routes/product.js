import express from "express";

import { adminToken, editorToken, userToken } from "../middleware/authToken.js";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router
  .post("/createProduct", editorToken, createProduct)
  .get("/", userToken, getProducts)
  .get("/:id", userToken, getProduct)
  .put("/:id", editorToken, updateProduct)
  .delete("/:id", adminToken, deleteProduct);

export default router;
