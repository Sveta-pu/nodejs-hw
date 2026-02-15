import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import pinoHttp from 'pino-http';

const app = express();
const PORT = process.env.PORT || 3000;

// logger
app.use(pinoHttp());

// global middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({
    message: `Retrieved note with ID: ${noteId}`,
  });
});

app.get('/test-error', (req, res, next) => {
  next(new Error('Test error'));
});

// 404 middleware
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// 500 middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
