import { Router } from 'express';
import { postOrder, getOrders } from '../controllers/ordersController';

const router = Router();

// POST /orders
router.post('/', postOrder);

// GET /orders
router.get('/', getOrders);

export default router;
