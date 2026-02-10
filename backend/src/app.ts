import express from 'express';
import type { Application, Request, Response } from 'express';
import beveragesRouter from './routes/beverages';
import ordersRouter from './routes/orders';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/beverages', beveragesRouter);
app.use('/orders', ordersRouter);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

export default app;
