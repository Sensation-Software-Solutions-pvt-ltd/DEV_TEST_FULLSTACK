import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from '@routes/users.js'
import todoRoutes from "@routes/todo.js";
import { connectDatabase } from '@common/Database.js';
import { PORT } from '@config/config.js'

// Swagger Setup
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerDocument = require('config/Swagger.json');

const app = express();

app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));
app.use('/auth', userRoutes);
app.use('/todo', todoRoutes);

connectDatabase();
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
