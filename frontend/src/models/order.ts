// frontend/src/models/order.ts
import { OrderItem } from './orderItem';

/**
 * Represents a customer's full order
 */
export interface Order {
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
}
