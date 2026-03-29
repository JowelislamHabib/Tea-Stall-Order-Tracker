import { LucideTrash2 } from "lucide-react";
import { useState } from "react";

export default function App() {
  // Step 1: Change orders to store objects
  const [orders, setOrders] = useState([]);

  // Step 2: add order function
  const addOrder = (name, price) => {
    const existing = orders.find((item) => item.name === name);
    if (existing) {
      // increase quantity
      setOrders(
        orders.map((item) =>
          item.name === name ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      // add new
      setOrders([...orders, { name, qty: 1, price }]);
    }
  };
  // Step 3: Remove specific order
  const remove = (nameToRemove) => {
    setOrders(orders.filter((item) => item.name !== nameToRemove));
  };

  // Step 4: Total money
  const totalMoney = orders.reduce(
    (acc, item) => acc + item.qty * item.price,
    0,
  );

  return (
    <div className="p-5 space-y-4">
      <h1 className="text-xl font-bold">Tea Stall Order Tracker</h1>

      {/* Buttons to add orders */}
      <div className="space-x-2">
        <button onClick={() => addOrder("Tea", 30)} className="btn btn-primary">
          Order Tea
        </button>
        <button
          onClick={() => addOrder("Samosa", 20)}
          className="btn btn-warning"
        >
          Order Samosa
        </button>
        <button
          onClick={() => addOrder("Tea + Samosa", 45)}
          className="btn btn-secondary"
        >
          Order Both
        </button>
        <button onClick={() => setOrders([])} className="btn btn-error">
          Clear All
        </button>
      </div>

      {/* Orders list */}
      <div className="mt-3 space-y-2">
        {orders.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center border rounded-sm p-2"
          >
            <p>
              {item.name} x {item.qty} = {item.qty * item.price} BDT
            </p>
            <button
              onClick={() => remove(item.name)}
              className="btn btn-sm btn-error"
            >
              <LucideTrash2 />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <p className="mt-3 font-bold">Total Orders: {orders.length}</p>
      <p className="font-bold">Total Money: {totalMoney} BDT</p>
    </div>
  );
}
