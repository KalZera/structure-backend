import { Todo } from "./";
import { database } from "../../../config/database/database";

export const update = async (idTodo: number, todo: Todo) => {
  const todoIndex = database.findIndex((todo: Todo) => todo.id === idTodo);
  database[todoIndex] = { ...database[todoIndex], ...todo };
  return database[todoIndex];
};
