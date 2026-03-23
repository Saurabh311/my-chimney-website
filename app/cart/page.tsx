"use client";
import Link from "next/link";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item:any, index:any) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-xl font-bold">
            Total: ₹{total}
          </div>
          <Link href="/checkout">
  <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
    Checkout
  </button>
</Link>
        </div>
      )}
    </div>
  );
}