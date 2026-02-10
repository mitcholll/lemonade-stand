import { Beverage } from "./beverage";

export interface OrderItem {
  beverage: Beverage;
  quantity: number;
}

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
  total REAL NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL,
  beverage_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY(order_id) REFERENCES orders(id),
  FOREIGN KEY(beverage_id) REFERENCES beverages(id)
);
`;