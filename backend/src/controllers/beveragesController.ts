import { Request, Response } from 'express';
import { getAllBeverages } from '../services/beveragesService';

// Get all beverages
export async function getBeverages(req: Request, res: Response) {
  try {
    const beverages = await getAllBeverages();
    res.json(beverages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch beverages' });
  }
};