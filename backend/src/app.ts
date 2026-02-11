import express from 'express';
import cors from 'cors';
import type { Application, Request, Response } from 'express';
import beveragesRouter from './routes/beverages';
import ordersRouter from './routes/orders';

const app: Application = express();
const FRONTEND_URL = 'http://localhost:3000';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({ origin: FRONTEND_URL }));

// Route registration
app.use('/beverages', beveragesRouter);
app.use('/orders', ordersRouter);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

export default app;
