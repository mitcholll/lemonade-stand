import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

/**
 * Open a connection to the SQLite database.
 * 
 * @returns Promise<Database> - a connected SQLite database object
 */
export async function openDb(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
  return open({
    filename: process.env.DB_FILE || './db/database.sqlite',
    driver: sqlite3.Database
  });
}
