import { Router, Request, Response } from 'express';
import { createOrder, getAllOrders } from '../services/ordersService';

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

// GET /orders
// NOTE: For testing and debugging purposes
//       Used to verify orders are being saved correctly in the database
router.get('/', async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

export default router;
