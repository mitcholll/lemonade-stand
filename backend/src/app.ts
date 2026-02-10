import express from 'express';
import type { Application, Request, Response } from 'express';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

export default app;
