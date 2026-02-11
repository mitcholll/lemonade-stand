// src/components/OrderSummary.tsx
/**
 * OrderSummary component
 * Displays the selected beverages, their subtotals, total price, and a submit button.
 * Calls handleSubmit callback when order is submitted.
 */

import React from 'react';
import { Beverage } from '../models/beverage';
import { OrderItem, calculateOrderItemSubtotal } from '../models/orderItem';

interface OrderSummaryProps {
  beverages: Beverage[];
  quantities: { [id: number]: number };
  handleSubmit: (items: OrderItem[], total: number) => void;
}

// Display selected beverages, subtotals, total, and a submit button
const OrderSummary: React.FC<OrderSummaryProps> = ({ beverages, quantities, handleSubmit }) => {
  const items: OrderItem[] = beverages
    .filter(b => quantities[b.id] && quantities[b.id] > 0)
    .map(b => ({ beverage: b, quantity: quantities[b.id] }));

  // Calculate total order cost
  const total = items.reduce((sum, item) => sum + calculateOrderItemSubtotal(item), 0);

  return (
    <div style={{ marginTop: '1rem', maxWidth: '400px' }}>
      {/* Message if no items are selected */}
      {items.length === 0 ? (
        <p>No items selected yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map(item => (
            <li
              key={item.beverage.id}
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}
            >
              {/* Display quantity and beverage name */}
              <span>{item.quantity} x {item.beverage.name}</span>

              {/* Display subtotal for beverage */}
              <span>${calculateOrderItemSubtotal(item).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      
      {/* Total row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '0.5rem' }}>
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Submit button */}
      <button
        style={{ marginTop: '0.5rem' }}
        onClick={() => handleSubmit(items, total)}
        disabled={items.length === 0} // disable if no items selected
      >
        Submit Order
      </button>
    </div>
  );
};

export default OrderSummary;
