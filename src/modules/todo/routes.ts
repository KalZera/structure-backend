import express from "express";
const router = express.Router();

import {
  createTodo,
  updateTodo,
  getTodo,
  deleteTodoById,
  getTodoById,
} from "./controllers";

router.post("/", createTodo);
router.get("/", getTodo);
router.put("/:id", updateTodo);
router.get("/:id", getTodoById);
router.delete("/:id", deleteTodoById);

export default router;
