// frontend/src/models/order.ts
import { OrderItem } from './orderItem';

export interface Order {
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
}
