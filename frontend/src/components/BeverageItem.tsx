// src/components/BeverageItem.tsx
/**
 * BeverageItem component
 * Displays a single beverage with its name, price, and an input to select quantity.
 * Used inside BeverageList to render all available beverages.
 */
import React from 'react';
import { Beverage } from '../models/beverage';

interface BeverageItemProps {
  beverage: Beverage;
  quantity: number;
  setQuantity: (q: number) => void;
}

// Render a single beverage with name, price, and quantity input
const BeverageItem: React.FC<BeverageItemProps> = ({ beverage, quantity, setQuantity }) => (
  <div style={{ marginBottom: '0.25rem' }}>
    <span style={{ display: 'inline-block', width: '150px' }}>{beverage.name}</span>
    <span style={{ display: 'inline-block', width: '60px' }}>${beverage.price.toFixed(2)}</span>
    <input
      type="number"
      min={0}
      value={quantity}
      onChange={e => setQuantity(Number(e.target.value))}
      style={{ width: '40px' }}
    />
  </div>
);

export default BeverageItem;
