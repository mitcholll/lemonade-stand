# lemonade-stand
A digital lemonade stand application

# Technology Stack
- Node.js with Express
- React
- TypeScript
- SQLite

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

\`\`\`json
{
  "status": "OK",
  "message": "Backend is running!"
}


## Notes / Assumptions

1. Database tables (beverages, orders, order_items) are created automatically when the backend starts.

2. Beverages are seeded only via npm run seed.

3. No authentication is required.