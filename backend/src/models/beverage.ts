export interface Beverage {
  id?: number;
  name: string;
  price: number;
}

export const BeverageTableSchema = `
CREATE TABLE IF NOT EXISTS beverages (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL
)
`;