import express from 'express';

import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodo);

router.post('/', createTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;