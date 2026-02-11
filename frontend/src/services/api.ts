// src/services/api.ts

import { Beverage } from '../models/beverage';
import { Order } from '../models/order';

const API_URL = 'http://localhost:3001'; // backend URL

/**
 * Fetches all beverages from the backend
 * @returns Promise resolving to an array of Beverage objects
 */
export async function fetchBeverages(): Promise<Beverage[]> {
  const res = await fetch(`${API_URL}/beverages`);
  if (!res.ok) throw new Error('Failed to fetch beverages');
  return res.json();
}

/**
 * Submits an order to the backend
 * @param order - Order object containing customer info and selected items
 * @returns Promise resolving to the backend response
 */
export async function submitOrder(order: Order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });

  if (!res.ok) throw new Error('Failed to submit order');
  return res.json();
}
