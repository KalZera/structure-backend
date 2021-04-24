import { Request, Response } from "express";
import * as serviceTodo from "../services";

export const getTodo = async (req: Request, res: Response) => {
  try {
    const allTodos = await serviceTodo.get();
    res.status(200).send(allTodos);
  } catch (error) {
    res.status(500).send();
  }
};
