import { OrderItem } from "./orderItem";

/**
 * Order interface
 * Represents a customer order in the application
 */
export interface Order {
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
}

/**
 * SQLite table schema for orders
 * Creates table if it doesn't exist
 */
export const OrdersTableSchema = `
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  total DECIMAL(10,2) NOT NULL
);
`