import { Router, Request, Response } from 'express';
import { getAllBeverages } from '../services/beveragesService';

const router = Router();

// GET /beverages
router.get('/', async (req: Request, res: Response) => {
  try {
    const beverages = await getAllBeverages();
    res.json(beverages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch beverages' });
  }
});

export default router;
