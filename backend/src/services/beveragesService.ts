import { openDb } from '../db';
import sqlite3 from 'sqlite3';
import { Database } from 'sqlite';
import { Beverage, BeverageTableSchema } from '../models/beverage';

/**
 * Creates the beverages table in the database if it does not already exist
 * Called during backend initialization to ensure the table is ready
 */
export async function createBeveragesTable() {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();

  // Create the table
  await db.exec(BeverageTableSchema);
  await db.close();
}

/**
 * Seeds the beverages table with initial data
 * Clears any existing rows and inserts the provided list of beverages
 * @param beverages - Array of beverage objects to insert into the table
 */
export async function seedBeverages(beverages: Beverage[]) {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();

  // Clear existing rows
  await db.exec('DELETE FROM beverages');

  // Prepare a statement for insertion
  const stmt = await db.prepare(`INSERT INTO beverages (name, price) VALUES (?, ?)`);

  // Insert each beverage
  for (const beverage of beverages) {
    await stmt.run(beverage.name, beverage.price);
  }

  // Finalize the statement
  await stmt.finalize();

  await db.close();
}

/**
 * Fetches all beverages from the database
 * @returns Array of Beverage objects containing id, name, and price
 */
export async function getAllBeverages(): Promise<Beverage[]> {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();
  const beverages: Beverage[] = await db.all(`SELECT id, name, price FROM beverages`);
  await db.close();
  return beverages;
}