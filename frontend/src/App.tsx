import React, { useState } from 'react';
import { Beverage } from './models/beverage';
import BeverageList from './components/BeverageList';
import OrderForm from './components/OrderForm';
import OrderSummary from './components/OrderSummary';
import { submitOrder } from './services/api';
import { Order } from './models/order';
import { OrderItem } from './models/orderItem';

function App() {
  // State for beverages fetched from backend
  const [beverages, setBeverages] = useState<Beverage[]>([]);

  // State to track quantities selected for each beverage
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  // State for customer information
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  // State to show confirmation messages after order submission
  const [confirmation, setConfirmation] = useState('');

   /**
   * Handles submitting an order to the backend
   * Resets form fields and sets a confirmation message on success
   * @param items - Array of OrderItem objects representing selected beverages and quantities
   * @param total - Total order price calculated in the frontend
   */
  const handleSubmitOrder = async (items: OrderItem[], total: number) => {
    const order: Order = { customerName, customerEmail, items, total };

    try {
      await submitOrder(order);

      // Set confirmation success message
      setConfirmation(`Success! Thanks ${order.customerName}, your order has been submitted.`);

      // Reset form fields
      setCustomerName('');
      setCustomerEmail('');
      setQuantities({});
    } catch (err) {
      console.error(err);
      setConfirmation('Failed to submit order.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mitchell's Lemonade Stand</h1>

      {/* Beverages */}
      <h2>Beverages:</h2>
      <BeverageList
        beverages={beverages}
        quantities={quantities}
        setQuantities={setQuantities}
        setBeverages={setBeverages}
      />

      {/* Customer Info */}
      <h2>Your Info:</h2>
      <OrderForm
        customerName={customerName}
        setCustomerName={name => {
          setCustomerName(name);
          setConfirmation(''); // Clear confirmation while typing
        }}
        customerEmail={customerEmail}
        setCustomerEmail={email => {
          setCustomerEmail(email);
          setConfirmation('');
        }}
      />

      {/* Order Summary */}
      <h2>Order:</h2>
      <OrderSummary
        beverages={beverages}
        quantities={quantities}
        handleSubmit={handleSubmitOrder}
      />

      {/* Confirmation */}
      {confirmation && (
        <pre style={{ marginTop: '1rem', fontWeight: 'bold' }}>{confirmation}</pre>
      )}
    </div>
  );
}

export default App;
