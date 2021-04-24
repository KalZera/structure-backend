import { Request, Response } from "express";
import * as serviceTodo from "../services";

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const todoId = parseInt(req.params.id);
    const todo = await serviceTodo.getById(todoId);
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send();
  }
};
