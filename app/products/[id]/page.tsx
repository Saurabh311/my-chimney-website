"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

const product = {
  id: 1,
  name: "Smart Auto-Clean Chimney",
  price: 12999,
  image: "/chimney.jpg",
  features: [
    "1200 m³/hr high suction",
    "Auto-clean technology",
    "Silent motor operation",
    "Touch control panel",
  ],
};

export default function ProductPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    comment: "Very powerful chimney. No smoke at all!",
  },
  {
    name: "Priya Patel",
    rating: 4,
    comment: "Looks stylish and works great in my kitchen.",
  },
  {
    name: "Amit Verma",
    rating: 5,
    comment: "Best purchase. Easy to clean and silent.",
  },
];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 pb-32">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div>
          <img
            src={product.image}
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            {product.name}
          </h1>

          <p className="text-2xl mt-4 font-semibold">
            ₹{product.price}
          </p>

          {/* FEATURES */}
          <ul className="mt-6 space-y-2 text-gray-600">
            {product.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          {/* BUTTON */}
          <button
            onClick={() => {
              addToCart(product);
              router.push("/cart");
            }}
            className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold">
          Designed for Modern Kitchens
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Powerful performance with elegant design. Perfect for heavy cooking with zero smoke and noise.
        </p>
      </div>
      {/* STICKY BUY BAR */}
<div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg px-6 py-4 flex justify-between items-center">
  
  <div>
    <p className="font-medium">{product.name}</p>
    <p className="text-sm text-gray-600">₹{product.price}</p>
  </div>

  <button
    onClick={() => {
      addToCart(product);
      router.push("/cart");
    }}
    className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
  >
    Add to Cart
  </button>
</div>

{/* REVIEWS SECTION */}
<div className="mt-24 max-w-5xl mx-auto px-6">
  <h2 className="text-3xl font-semibold text-center">
    Customer Reviews
  </h2>

  <div className="mt-10 grid md:grid-cols-3 gap-6">
    {reviews.map((r, i) => (
      <div
        key={i}
        className="p-6 border rounded-2xl shadow-sm"
      >
        {/* Stars */}
        <div className="text-yellow-500 mb-2">
          {"⭐".repeat(r.rating)}
        </div>

        <p className="text-gray-600 text-sm">
          {r.comment}
        </p>

        <p className="mt-4 font-medium">
          — {r.name}
        </p>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}