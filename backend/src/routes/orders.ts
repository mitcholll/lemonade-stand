import { Router, Request, Response } from 'express';
import { createOrder } from '../services/ordersService';

const router = Router();

// POST /orders
router.post('/', async (req: Request, res: Response) => {
  try {
    const order = req.body; // Expect { customerName, customerEmail, items: [{ beverage: { id }, quantity }] }
    const result = await createOrder(order);
    res.status(201).json({ message: 'Order created!', order: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

export default router;
