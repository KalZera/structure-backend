import { Todo } from "./";
import { database } from "../../../config/database/database";

export const getTodoById = async (idTodo: number) => {
  return database.find((todo: Todo) => todo.id === idTodo);
};
