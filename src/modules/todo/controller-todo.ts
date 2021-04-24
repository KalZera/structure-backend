import { Request, Response } from 'express';
import { serviceTodo } from './service-todo'

const createTodo = async (req: Request, res: Response) => {
   try {
      const todo = req.body;
      // {id:0, name:'teste'}
      const todoCreated = await serviceTodo.createTodo(todo);
      res.status(201).send(todoCreated);
   } catch (error) {
      res.status(500).send();
   }
}

const getTodo = async (req: Request, res: Response) => {
   try {
      const allTodos = await serviceTodo.get();
      res.status(200).send(allTodos);
   } catch (error) {
      res.status(500).send();
   }
}

const getTodoById = async (req: Request, res: Response) => {
   try {
      const todoId = parseInt(req.params.id);
      const todo = await serviceTodo.getById(todoId);
      res.status(200).send(todo);
   } catch (error) {
      res.status(500).send();
   }
}

const deleteTodoById = async (req: Request, res: Response) => {
   try {
      const todoId = parseInt(req.params.id);
      await serviceTodo.deleteById(todoId);
      res.status(200).send();
   } catch (error) {
      res.status(500).send();
   }
}

const updateTodo = async (req: Request, res: Response) => {
   try {
      const todoIdToUpdate = parseInt(req.params.id);
      const todoToUpdate = req.body;
      const todoUpdated = await serviceTodo.updateTodo(todoIdToUpdate, todoToUpdate);
      res.status(200).send(todoUpdated);
   } catch (error) {
      res.status(500).send();
   }
}

export const controllerTodo = { createTodo, getTodo, getTodoById, deleteTodoById, updateTodo };