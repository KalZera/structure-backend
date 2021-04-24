import { getTodo, Todo } from "../models";

export const get = async (): Promise<Todo[]> => {
  //retorna promisse com o resultado que o banco me gera
  return getTodo();
};
