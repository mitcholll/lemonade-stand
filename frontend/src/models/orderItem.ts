// frontend/src/models/orderItem.ts
import { Beverage } from "./beverage";

/**
 * Represents an item and its quantity in an order
 */
export interface OrderItem {
  beverage: Beverage;
  quantity: number;
}

/**
 * Helper function, calculates the subtotal price for a single order item
 * @param item - OrderItem to calculate subtotal for
 * @returns Subtotal price
 */
export function calculateOrderItemSubtotal(item: OrderItem): number {
  return item.beverage.price * item.quantity;
}
