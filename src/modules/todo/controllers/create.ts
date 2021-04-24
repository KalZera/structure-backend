import { Request, Response } from "express";
import * as serviceTodo from "../services";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = req.body;
    // {id:0, name:'teste'}
    const todoCreated = await serviceTodo.createTodo(todo);
    res.status(201).send(todoCreated);
  } catch (error) {
    res.status(500).send();
  }
};
