import { Todo, insert, getTodo, getTodoById, deleteTodoById, update } from './model-todo'

const createTodo = async (todo: Todo) => {
   //retorna promisse com o resultado que o banco me gera
   return insert(todo);
}

const get = async (): Promise<Todo[]> => {
   //retorna promisse com o resultado que o banco me gera
   return getTodo();
}

const getById = async (idTodo: number): Promise<Todo | undefined> => {
   //retorna promisse com o resultado que o banco me gera
   return getTodoById(idTodo);
}

const deleteById = async (idTodo: number): Promise<boolean> => {
   //retorna promisse com o resultado que o banco me gera
   return deleteTodoById(idTodo);
}

const updateTodo = async (id: number, todo: any): Promise<Todo> => {
   const todoObject = { id, ...todo };
   //retorna promisse com o resultado que o banco me gera
   return update(id, todoObject);
}

export const serviceTodo = { createTodo, get, getById, deleteById, updateTodo };