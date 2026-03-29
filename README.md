# Tea Stall Order Tracker – ReactJS

A simple React app to track tea stall orders using **useState**, **map()**, **filter()**, and **reduce()**.

## Features

- Add orders for Tea, Samosa, or both.
- Increment quantity if the same item is added again.
- Remove individual orders.
- Clear all orders.
- Calculate total money automatically.

## How it Works

- **useState** stores orders as objects: `{ name, qty, price }`.
- **addOrder()** checks if an item exists; increases quantity or adds a new one.
- **remove()** filters out the item to delete.
- **map()** displays the list of orders.
- **reduce()** calculates total money.

## Demo

Add and remove orders and watch totals update dynamically.

## Setup

1. Clone the repo:  
   `git clone https://github.com/yourusername/tea-stall-order-tracker.git`
2. Install dependencies:  
   `npm install`
3. Start the app:  
   `npm start`
4. Open `http://localhost:3000` in your browser.

## Learnings

- Managing dynamic lists with React hooks.
- Updating state immutably.
- Basic use of **map**, **filter**, and **reduce** in real-world scenarios.

---

MIT License © 2026 Jowel Islam Habib
