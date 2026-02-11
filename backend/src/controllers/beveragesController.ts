import { Request, Response } from 'express';
import { getAllBeverages } from '../services/beveragesService';

/**
 * Handles GET requests to retrieve all beverages.
 * Calls the service layer to fetch beverages from the database
 * and returns them in JSON format.
 * Responds with a 500 status if an error occurs.
 * 
 * @param req - Express request object
 * @param res - Express response object
 */
export async function getBeverages(req: Request, res: Response) {
  try {
    const beverages = await getAllBeverages();
    res.json(beverages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch beverages' });
  }
};