"use client";

import Navbar from "./components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white text-black">

      <section className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
  
  {/* LEFT TEXT */}
  <div>
    <h1 className="text-5xl font-bold leading-tight">
      Upgrade Your Kitchen Experience
    </h1>

    <p className="mt-6 text-gray-600">
      Powerful, silent, and stylish chimneys designed for modern homes.
    </p>

    <a href="/products/1">
      <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
        Explore Products
      </button>
    </a>
  </div>

  {/* RIGHT IMAGE */}
  <div>
    <img
      src="/chimney.jpg"
      className="rounded-2xl shadow-lg w-full"
      alt="chimney"
    />
  </div>

</section>
      <section className="text-center py-32 px-6 bg-gray-50">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Upgrade Your Kitchen Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-gray-600"
        >
          Powerful, silent, and stylish chimneys for modern homes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href="/products/1">
            <button className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition">
              Explore Products
            </button>
          </Link>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Wall Mounted", "Auto Clean", "Island"].map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium">{cat}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <motion.img
          src="/chimney.jpg"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold">
            Smart Auto-Clean Chimney
          </h2>

          <p className="mt-4 text-gray-600">
            Designed for heavy cooking with zero smoke and noise.
          </p>

          <Link href="/products/1">
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              View Product
            </button>
          </Link>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold"
        >
          Need Help Choosing?
        </motion.h2>

        <p className="mt-4 text-gray-300">
          Talk to our expert and find the perfect chimney.
        </p>

        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
          Chat on WhatsApp
        </button>
      </section>
    </div>
  );
}