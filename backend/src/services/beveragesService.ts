import { openDb } from '../db';
import sqlite3 from 'sqlite3';
import { Database } from 'sqlite';
import { Beverage, BeverageTableSchema } from '../models/beverage';

export async function createBeveragesTable() {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();
  await db.exec(BeverageTableSchema);
  await db.close();
}

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

export async function getAllBeverages(): Promise<Beverage[]> {
  const db: Database<sqlite3.Database, sqlite3.Statement> = await openDb();
  const beverages: Beverage[] = await db.all(`SELECT id, name, price FROM beverages`);
  await db.close();
  return beverages;
}