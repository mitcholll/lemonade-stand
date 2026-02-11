// src/services/api.ts
import { Beverage } from '../models/beverage';
import { Order } from '../models/order';

const API_URL = 'http://localhost:3001'; // backend URL

export async function fetchBeverages(): Promise<Beverage[]> {
  const res = await fetch(`${API_URL}/beverages`);
  if (!res.ok) throw new Error('Failed to fetch beverages');
  return res.json();
}

export async function submitOrder(order: Order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });

  if (!res.ok) throw new Error('Failed to submit order');
  return res.json();
}
