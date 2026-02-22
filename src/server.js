import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { logger } from './middleware/logger.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import router from './routes/notesRoutes.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

// logger
app.use(logger);

// global middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/notes', router);

// 404 middleware
app.use(notFoundHandler);

// 500 middleware
app.use(errorHandler);

// підключення до MongoDB
await connectMongoDB();

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
