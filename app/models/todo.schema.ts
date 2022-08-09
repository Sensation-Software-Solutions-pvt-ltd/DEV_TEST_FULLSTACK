import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

let Todo = mongoose.model('Todo', todoSchema);

export default Todo;