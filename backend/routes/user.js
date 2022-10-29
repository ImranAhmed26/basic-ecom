import express from "express";

import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { adminToken, editorToken, userToken } from "../middleware/authToken.js";

const router = express.Router();

router
  .get("/", adminToken, getUsers)
  .get("/:id", userToken, getUser)
  .put("/:id", adminToken, updateUser)
  .delete("/:id", adminToken, deleteUser);

export default router;
