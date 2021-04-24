import { Todo } from "./";
import { database } from "../../../config/database/database";

export const insert = async (newTodo: Todo) => {
  database.push(newTodo);
  return newTodo;
};
