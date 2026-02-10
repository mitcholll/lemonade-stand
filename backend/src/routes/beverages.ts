import { Router } from 'express';
import { getBeverages } from '../controllers/beveragesController';

const router = Router();

// GET /beverages
router.get('/', getBeverages);

export default router;
