"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    const order = {
      name,
      address,
      cart,
      total,
    };

    console.log("Order placed:", order);

    clearCart();
    alert("Order placed successfully!");
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 w-full mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Address"
        className="border p-2 w-full mb-4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div className="text-xl font-bold mb-4">
        Total: ₹{total}
      </div>

      <button
        onClick={handleOrder}
        className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
      >
        Place Order
      </button>
    </div>
  );
}