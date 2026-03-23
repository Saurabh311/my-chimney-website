import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          
          {/* NAVBAR visible everywhere */}
          <Navbar />

          {/* Page content */}
          {children}

        </CartProvider>
      </body>
    </html>
  );
}