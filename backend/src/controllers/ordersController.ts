import { Request, Response } from 'express';
import { createOrder, getAllOrders } from '../services/ordersService';
import { Order } from '../models/order';

/**
 * POST /orders
 * Receives an order from the frontend, saves it in the database,
 * and returns a confirmation along with the saved order.
 */
export async function postOrder(req: Request, res: Response) {
  try {
    const order: Order = req.body; // Expect { customerName, customerEmail, items: [{ beverage: { id }, quantity }] }
    const result = await createOrder(order);
    res.status(201).json({ message: 'Order created!', order: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

/**
 * GET /orders
 * Additional Functionality
 * For testing/debugging: fetches all orders along with their items.
 * Used to verify orders are being saved correctly in the database
 */
export async function getOrders(req: Request, res: Response) {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
