import { update, Todo } from "../models";

export const updateTodo = async (id: number, todo: Todo): Promise<Todo> => {
  //retorna promisse com o resultado que o banco me gera
  return update(id, todo);
};
