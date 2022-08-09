import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import TodoService from '@services/todo.service.js'

const router = express.Router();

export const getTodos = async (req: Request, res: Response) => {
    const { page } = req.query;

    try {
        const value: { pages: number, todos: any } = await TodoService.list(Number(page));

        res.json({ data: value.todos, currentPage: Number(page), numberOfPages: value.pages });
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
}

export const getTodo = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const todo = await TodoService.findById(id)
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: (error as Error).message });
    }
}

export const createTodo = async (req: Request, res: Response) => {
    const todo = req.body;

    try {
        const newTodo = await TodoService.createTodo(todo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: (error as Error).message });
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, creator } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);

    const updatedTodo = { creator, title, description, _id: id };
    await TodoService.updateTodo(id, updateTodo)

    res.json(updatedTodo);
}

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);

    await TodoService.removeTodo(id)

    res.json({ message: "Todo deleted successfully." });
}

export default router;