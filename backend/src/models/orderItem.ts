import { Beverage } from './beverage';

export interface OrderItem {
  beverage: Beverage;
  quantity: number;
}

export function calculateOrderItemSubtotal(item: OrderItem): number {
  return item.beverage.price * item.quantity;
}

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