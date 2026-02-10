import { openDb } from '../db';
import sqlite3 from 'sqlite3';
import { Database } from 'sqlite';
import { Order, OrdersTableSchema } from '../models/order';
import { calculateOrderItemSubtotal, OrderItemsTableSchema } from '../models/orderItem';

// Create orders tables
export async function createOrdersTable() {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();
  await db.exec(OrdersTableSchema);
  await db.exec(OrderItemsTableSchema);
  await db.close();
}

// Insert an order into DB
export async function createOrder(order: Order) {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();

  // Start transaction
  await db.exec('BEGIN TRANSACTION');

  // Calculate total server-side
  const total = order.items.reduce(
    (sum, item) => sum + calculateOrderItemSubtotal(item),
    0
  );

  // Insert order
  const result = await db.run(
    `INSERT INTO orders (customer_name, customer_email, total)
     VALUES (?, ?, ?)`,
    order.customerName,
    order.customerEmail,
    total
  );

  const orderId = result.lastID; // SQLite gives the inserted row ID

  // Insert each item
  for (const item of order.items) {
    await db.run(
      `INSERT INTO order_items (order_id, beverage_id, quantity)
       VALUES (?, ?, ?)`,
      orderId,
      item.beverage.id,
      item.quantity
    );
  }

  // Commit transaction
  await db.exec('COMMIT');
  await db.close();

  return {
    orderId,
    customerName: order.customerName,
    customerEmail: order.customerEmail,
    items: order.items,
    total
  };
}

// NOTE: For testing and debugging purposes: fetch all orders
export async function getAllOrders() {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();

  const orders = await db.all(`
    SELECT * FROM orders
  `);

  await db.close();
  return orders;
}
