import Todo from '@models/todo.schema.js';

export default {
    list: async (page: number) => {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

        const total = await Todo.countDocuments({});
        const todos = await Todo.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        return { pages: Math.ceil(total / LIMIT), todos }
    },
    findById: async (id: string) => {
        return await Todo.findById(id);
    },
    createTodo: async (todo: any) => {
        const newTodo = await new Todo({ ...todo, createdAt: new Date().toISOString() })
        await newTodo.save();
        return newTodo;
    },
    updateTodo: async (id: string, updatedTodo: any) => {
        await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
    },
    removeTodo: async (id: string) => {
        await Todo.findByIdAndRemove(id);
    }
}