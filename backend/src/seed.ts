import { createBeveragesTable, seedBeverages } from './services/beveragesService';
import { Beverage } from './models/beverage';

// Predefined list of beverages to seed the database
const beverages: Beverage[] = [
  { name: 'Classic Lemonade', price: 3.5 },
  { name: 'Strawberry Fizz', price: 4 },
  { name: 'Iced Tea', price: 3 },
];

// Seeds the beverages table in the database
async function seed() {
  await createBeveragesTable();
  await seedBeverages(beverages);
  console.log('Seeded beverages successfully!');
}

seed().catch(err => console.error('Error seeding database:', err));