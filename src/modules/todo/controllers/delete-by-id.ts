import { Request, Response } from "express";
import * as serviceTodo from "../services";

export const deleteTodoById = async (req: Request, res: Response) => {
  try {
    const todoId = parseInt(req.params.id);
    await serviceTodo.deleteById(todoId);
    res.status(200).send();
  } catch (error) {
    res.status(500).send();
  }
};
