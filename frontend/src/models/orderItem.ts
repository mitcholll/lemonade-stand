// frontend/src/models/orderItem.ts
import { Beverage } from "./beverage";

export interface OrderItem {
  beverage: Beverage;
  quantity: number;
}

// Helper for subtotal calculation
export function calculateOrderItemSubtotal(item: OrderItem): number {
  return item.beverage.price * item.quantity;
}
