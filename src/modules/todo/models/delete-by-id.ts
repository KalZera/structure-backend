import { Todo } from "./";
import { database } from "../../../config/database/database";

export const deleteTodoById = async (idTodo: number) => {
  const todoIndex = database.findIndex((todo: Todo) => todo.id === idTodo);
  if (!!todoIndex) {
    database.splice(todoIndex, 1);
    return;
  }
  throw new Error("error");
};
