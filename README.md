# lemonade-stand
A digital lemonade stand application

# Technology Stack
- Node.js with Express
  - Used to build a simple REST API for retrieving beverages and submitting orders.

- React
  - Used to render the user interface, manage form state, and submit orders to the backend.

- TypeScript
  - Used to add type safety and make the code easier to understand and maintain.

- SQLite
  - Used as a lightweight database to store beverages and orders.

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

4. Check Beverages
  - To verify that beverages are added to the database, open your browser and visit:
  `http://localhost:3001/beverages`

  - Expected response:

```json
[
  {
    "id": 1,
    "name": "Classic Lemonade",
    "price": 3.5
  },
  {
    "id": 2,
    "name": "Strawberry Fizz",
    "price": 4
  },
  {
    "id": 3,
    "name": "Iced Tea",
    "price": 3
  }
]
```

5. Check Orders
  - To verify that orders are correctly stored and propogated in the database, open your browser and visit:
    `http://localhost:3001/orders`

  - Expected response:

```json
[
  {
    "orderId": 1,
    "customerName": "Mitchell",
    "customerEmail": "mitchell.weingust@gmail.com",
    "total": 20.5,
    "items": [
      {
        "beverage": {
          "id": 1,
          "name": "Classic Lemonade",
          "price": 3.5
        },
        "quantity": 1
      },
      {
        "beverage": {
          "id": 2,
          "name": "Strawberry Fizz",
          "price": 4
        },
        "quantity": 2
      },
      {
        "beverage": {
          "id": 3,
          "name": "Iced Tea",
          "price": 3
        },
        "quantity": 3
      }
    ]
  },
  {
    "orderId": 2,
    "customerName": "Michael",
    "customerEmail": "Michael.realperson@gmail.org",
    "total": 104.5,
    "items": [
      {
        "beverage": {
          "id": 1,
          "name": "Classic Lemonade",
          "price": 3.5
        },
        "quantity": 1
      },
      {
        "beverage": {
          "id": 2,
          "name": "Strawberry Fizz",
          "price": 4
        },
        "quantity": 11
      },
      {
        "beverage": {
          "id": 3,
          "name": "Iced Tea",
          "price": 3
        },
        "quantity": 19
      }
    ]
  }
]
```
  - This additional endpoint was used to implement additional functionality for testing and debugging orders via getAllOrders in the backend.

  6. The total for an order is calculated in the frontend, per the project instructions. This ensures that the correct total is displayed to the user before submitting their order. When an order is submitted, the customer’s name, email, selected beverages and their quantities, and the total order price are sent to the backend. For better maintainability and consistency in a real-world application, the backend could calculate the total dynamically instead of storing it. This approach avoids redundancy and aligns with database normalization principles.