export interface Todo {
   id: number;
   name: string;
}

const database: Todo[] = [{ id: 1, name: 'teste1' }, { id: 2, name: 'teste2' }];

const insert = async (newTodo: Todo) => {
   database.push(newTodo);
   return newTodo;
}

const getTodo = async () => {
   return database;
   //return await getBanco
}

const getTodoById = async (idTodo: number) => {
   return database.find(({ id }: { id: number }) => id === idTodo);
}

const deleteTodoById = async (idTodo: number) => {
   const todoIndex = database.findIndex(({ id }: { id: number }) => id === idTodo);
   database.splice(todoIndex, 1);
   //só pra poder passar no catch 
   return true;
}

const update = async (idTodo: number, todo: Todo) => {
   const todoIndex = database.findIndex(({ id }: { id: number }) => id === idTodo);
   database[todoIndex] = todo;
   return todo;
}

export { insert, getTodo, getTodoById, deleteTodoById, update };