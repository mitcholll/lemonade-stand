/**
 * Beverage interface
 * Represents a beverage item in the application
 */
export interface Beverage {
  id?: number;
  name: string;
  price: number;
}

/**
 * SQLite table schema for beverages
 * Creates table if it doesn't exist
 */
export const BeverageTableSchema = `
CREATE TABLE IF NOT EXISTS beverages (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL
)
`;