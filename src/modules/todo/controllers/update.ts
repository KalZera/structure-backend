import { Request, Response } from "express";
import * as serviceTodo from "../services";

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const todoIdToUpdate = parseInt(req.params.id);
    const todoToUpdate = req.body;
    const todoUpdated = await serviceTodo.updateTodo(
      todoIdToUpdate,
      todoToUpdate
    );
    res.status(200).send(todoUpdated);
  } catch (error) {
    res.status(500).send();
  }
};
