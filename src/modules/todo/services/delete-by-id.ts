import { deleteTodoById } from "../models";

export const deleteById = async (idTodo: number): Promise<void> => {
  //retorna promisse com o resultado que o banco me gera
  return deleteTodoById(idTodo);
};
