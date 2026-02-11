import { openDb } from '../db';
import sqlite3 from 'sqlite3';
import { Database } from 'sqlite';
import { Order, OrdersTableSchema } from '../models/order';
import { OrderItemsTableSchema } from '../models/orderItem';

/**
 * Creates the orders and order_items tables if they do not exist
 * Ran when initializing the backend
 */
export async function createOrdersTable() {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();

  // Execute the table creation queries
  await db.exec(OrdersTableSchema);
  await db.exec(OrderItemsTableSchema);

  await db.close();
}

/**
 * Inserts a new order into the database.
 * @param order - The order object, containing customer info, items, and total
 * @returns The order object with orderId added
 */
export async function createOrder(order: Order) {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();

  // Start transaction
  await db.exec('BEGIN TRANSACTION');

  // Insert order
  const result = await db.run(
    `INSERT INTO orders (customer_name, customer_email, total)
     VALUES (?, ?, ?)`,
    order.customerName,
    order.customerEmail,
    order.total
  );

  const orderId = result.lastID; // SQLite returns the auto-incremented order ID

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
    total: order.total
  };
}

/**
 * Fetches all orders from the database with their associated items.
 * Returns an array of orders, each containing a nested items array.
 * NOTE: For testing and debugging purposes
 */
export async function getAllOrders() {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();

  const rows = await db.all(`
    SELECT 
      o.id AS order_id,
      o.customer_name,
      o.customer_email,
      o.total,
      b.id AS beverage_id,
      b.name AS beverage_name,
      b.price AS beverage_price,
      oi.quantity
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    JOIN beverages b ON oi.beverage_id = b.id
    ORDER BY o.id, b.id
  `);

  await db.close();

  // Group rows by order_id and nest the items array for each order
  const orders = Object.values(
    rows.reduce((acc, row) => {

      // If this order has not been added yet, initialize it
      if (!acc[row.order_id]) {
        acc[row.order_id] = {
          orderId: row.order_id,
          customerName: row.customer_name,
          customerEmail: row.customer_email,
          total: row.total,
          items: []
        };
      }

      // Push the current row's beverage into the order's items array
      acc[row.order_id].items.push({
        beverage: {
          id: row.beverage_id,
          name: row.beverage_name,
          price: row.beverage_price
        },
        quantity: row.quantity
      });
      return acc;
    }, {} as Record<number, any>)
  );

  return orders;
}
