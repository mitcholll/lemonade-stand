// src/components/OrderForm.tsx
/**
 * OrderForm component
 * Simple form for collecting customer name and email.
 */

import React from 'react';

interface OrderFormProps {
  customerName: string;
  setCustomerName: (name: string) => void;
  customerEmail: string;
  setCustomerEmail: (email: string) => void;
}

// Enter name and email
const OrderForm: React.FC<OrderFormProps> = ({ customerName, setCustomerName, customerEmail, setCustomerEmail }) => (
  <div>
    <input
      placeholder="Name"
      value={customerName}
      onChange={e => setCustomerName(e.target.value)}
    />
    <input
      placeholder="Email"
      value={customerEmail}
      onChange={e => setCustomerEmail(e.target.value)}
    />
  </div>
);

export default OrderForm;
