import { OrderItem } from "./orderItem";

export interface Order {
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
}

export const OrdersTableSchema = `
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  total REAL NOT NULL
);
`