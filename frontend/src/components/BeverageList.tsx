// src/components/BeverageList.tsx
/**
 * BeverageList component
 * Fetches beverages from backend and displays a list of BeverageItem components.
 */

import React, { useEffect } from 'react';
import { Beverage } from '../models/beverage';
import BeverageItem from './BeverageItem';
import { fetchBeverages } from '../services/api';

interface BeverageListProps {
  beverages: Beverage[];
  setBeverages: (bev: Beverage[]) => void;
  quantities: { [id: number]: number };
  setQuantities: (q: { [id: number]: number }) => void;
}

// Render list of beverages
const BeverageList: React.FC<BeverageListProps> = ({ beverages, setBeverages, quantities, setQuantities }) => {
  useEffect(() => {
    // Fetch beverages from backend
    fetchBeverages().then(setBeverages).catch(console.error);
  }, [setBeverages]);

  return (
    <div>
      {beverages.map(bev => (
        <BeverageItem
          key={bev.id}
          beverage={bev}
          quantity={quantities[bev.id] || 0}
          setQuantity={(q: number) => setQuantities({ ...quantities, [bev.id]: q })}
        />
      ))}
    </div>
  );
};

export default BeverageList;
