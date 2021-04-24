import { insert, Todo } from "../models";

export const createTodo = async (todo: Todo) => {
  //retorna promisse com o resultado que o banco me gera
  return insert(todo);
};
