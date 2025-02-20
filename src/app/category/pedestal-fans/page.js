"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductGrid = () => {
  const [products, setProducts] = useState([
    {
      name: "SAPPHIRE",
      image: "/Icons/mainlogo.png",
      price: 9535,
    },
    {
      name: "MARVEL",
      image: "/images/marvel_fan.jpg",
      price: 9195,
    },
    {
      name: "ALPHA WOODEN",
      image: "/images/alpha_wooden_fan.jpg",
      price: 9995,
    },
  ]);

  const categories = [
    "ceiling-fans-ac",
    "ceiling-fans-ac-dc",
    "ceiling-fans-dc",
    "bracket-fans",
    "pedestal-fans",
    "exhaust-fans",
  ];

  const handleQuantityChange = (index, delta) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      const updatedProduct = { ...updatedProducts[index] };
      updatedProduct.quantity = Math.max(
        1,
        (updatedProduct.quantity || 1) + delta
      );
      updatedProducts[index] = updatedProduct;
      return updatedProducts;
    });
  };

  const handleBuyNow = (product) => {
    const message = `Hi, I am interested in buying the ${
      product.name
    } fan. Quantity: ${product.quantity}. Price: PKR ${
      product.price * product.quantity
    }. `;
    const whatsappNumber = "923226409363"; // Replace with your actual WhatsApp number (with country code)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/4 p-4">
          <h2 className="text-lg font-medium mb-2">CATEGORIES</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="py-1">
                <Link
                  href={`/category/${category
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="text-gray-700 hover:text-blue-500 cursor-pointer"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1>Pedestal Fans {/* Make total count dynamic */}</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="border rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <div className="relative h-48 mb-4 overflow-hidden w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-lg cursor-pointer"
                  />
                </div>

                <h2 className="text-lg font-medium mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">
                  PKR {product.price * (product.quantity || 1)}
                </p>

                <div className="flex items-center space-x-2 mb-4">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{product.quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                  BUY NOW
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductGrid;
