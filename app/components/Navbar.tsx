import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-white sticky top-0 z-50">
      
      {/* LOGO */}
      <h1 className="text-xl font-bold tracking-wide">
        Jatin Chimney 
      </h1>

      {/* MENU */}
      <div className="flex gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-gray-500">
          Home
        </Link>

        <Link href="/products/1" className="hover:text-gray-500">
          Products
        </Link>

        <Link href="/cart" className="hover:text-gray-500">
          Cart
        </Link>
      </div>
    </nav>
  );
}