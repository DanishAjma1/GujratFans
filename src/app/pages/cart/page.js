// app/pages/cart/page.js
"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  const handleBuyAll = () => {
    const whatsappNumber = "923226409363";
    const message = cart
      .map(
        (item) =>
          `${item.name} - Quantity: ${item.quantity} - Price: PKR ${
            item.price * item.quantity
          }`
      )
      .join("\n");
    const totalMessage = `Total: PKR ${cartTotal}\n\nI want to buy all these items.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `${message}\n\n${totalMessage}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleBuyItem = (item) => {
    const whatsappNumber = "923226409363";
    const message = `Hi, I am interested in buying the ${
      item.name
    } fan. Quantity: ${item.quantity}. Price: PKR ${item.price * item.quantity}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className=" mx-auto p-4 min-h-screen bg-gradient-to-b from-blue-300 to-blue-500">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link
            href="/pages/products"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {cart.map((item) => (
              <div
                key={item.name}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">Price: PKR {item.price}</p>
                <div className="flex items-center mb-4">
                  <button
                    onClick={() =>
                      updateQuantity(item.name, item.quantity - 1)
                    }
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.name, item.quantity + 1)
                    }
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="font-bold mb-4">
                  Total: PKR {item.price * item.quantity}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBuyItem(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex-1"
                  >
                    Buy This Item
                  </button>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>PKR {cartTotal}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span className="font-bold">PKR {cartTotal}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleBuyAll}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex-1"
              >
                Buy All Items
              </button>
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
            </div>
            <Link
              href="/pages/products"
              className="block text-center mt-4 text-blue-500 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;