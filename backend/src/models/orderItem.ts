import { Beverage } from './beverage';

/**
 * OrderItem interface
 * Represents a single beverage and its quantity within an order
 */
export interface OrderItem {
  beverage: Beverage;
  quantity: number;
}

/**
 * SQLite table schema for order items
 * Creates table if it doesn't exist
 */
export const OrderItemsTableSchema = `
CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL,
  beverage_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY(order_id) REFERENCES orders(id),
  FOREIGN KEY(beverage_id) REFERENCES beverages(id)
);
`