import app from './app';
import { createOrdersTable } from './services/ordersService';
import { createBeveragesTable } from './services/beveragesService';

const PORT = 3001;

// Run setup first
async function startServer() {
  try {
    // Ensure tables exist
    await createBeveragesTable();
    await createOrdersTable();

    // Start the server after tables are ready
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

// Call async startServer function
startServer();
