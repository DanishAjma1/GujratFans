
"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "./context/CartContext";

const FloatingCartButton = () => {
  const { cart } = useCart();

  return (
    <Link
      href="/pages/cart"
      className="fixed right-4 bottom-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50 flex items-center group"
    >
      <div className="relative">
        <FiShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </div>
      <span className="ml-2 hidden sm:inline-block group-hover:underline">
        View Cart
      </span>
    </Link>
  );
};

export default FloatingCartButton;