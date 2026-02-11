# lemonade-stand
A digital lemonade stand application

# Technology Stack
- Node.js with Express
Used to build a simple REST API for retrieving beverages and submitting orders.

- React
Used to render the user interface, manage form state, and submit orders to the backend.

- TypeScript
Used to add type safety and make the code easier to understand and maintain.

- SQLite
Used as a lightweight database to store beverages and orders.

## Prerequisites
- Node.js LTS (v18+ recommended) [Developed using v24.13.0]
- npm

## Backend Setup
1. Navigate to the 'backend' folder:
`cd backend`

2. Install dependencies:
`npm install`

3. Seed the database:
`npm run seed`

4. Start the backend:
`npm run dev`

5. Verify the backend is running:
`http://localhost:3001/health`

6. Expected response:

```json
{
  "status": "OK",
  "message": "Backend is running!"
}
```

## Frontend Setup
1. Open a new terminal, and, navigate to the 'frontend' folder:
`cd frontend`

2. Install dependencies:
`npm install`

3. Start the React development server:
`npm start`

4. Open the application in your browser:
`http://localhost:3000`

## Notes / Assumptions

1. Database tables (beverages, orders, order_items) are created automatically when the backend starts.

2. Beverages are seeded only via npm run seed.

3. No authentication is required.