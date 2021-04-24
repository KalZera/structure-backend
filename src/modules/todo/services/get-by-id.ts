import { getTodoById, Todo } from "../models";

export const getById = async (idTodo: number): Promise<Todo | undefined> => {
  //retorna promisse com o resultado que o banco me gera
  return getTodoById(idTodo);
};
