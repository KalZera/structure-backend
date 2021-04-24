import express from 'express';
const router = express.Router();

import { controllerTodo } from './controller-todo'

router.post('/', controllerTodo.createTodo);
router.get('/', controllerTodo.getTodo);
router.put('/:id', controllerTodo.updateTodo);
router.get('/:id', controllerTodo.getTodoById);
router.delete('/:id', controllerTodo.deleteTodoById);

export default router;