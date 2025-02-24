"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductGrid = () => {
  const [products, setProducts] = useState([
    {
      name: "CLASSIC MODEL   (OFF-WHITE)",
      image: "/Images/Classic_model_off_white.png",

      price: 5500,

    },
    {
      name: "CLASSIC MODEL   (BLACK)",
      image: "/Images/Classic_model_black.png",
      price: 5500,
    },
    {
      name: "FANTESY MODEL (BLACK)",
      image: "/Images/NM_model.png",
      price: 5500,
    },
    {
      name: "FANTESY MODEL (OFF-WHITE)",
      image: "/Images/N_M_model_white.png",
      price: 5500,
    },
    {
      name: "FANCY GOLD   (OFF-WHITE)",
      image: "/Images/Fancy_Gold_off_white.png",
      price: 5600,
    },
    {
      name: "FANCY GOLD   (BLACK)",
      image: "/Images/Fancy_Gold.png",
      price: 5600,
    },
    {
      name: "FANCY GOLD ",
      image: "/Images/FANCY GOLD.png",
      price: 9535,
    },
    {
      name: "FANCY LAHORE D1",
      image: "/Images/FANCY LAHORE D1.png",
      price: 9535,
    },
    {
      name: "FANCY LAHORE D2",
      image: "/Images/FANCY LAHORE D2.png",
      price: 9535,
    },
    {
      name: "RIZWAN MODEL ",
      image: "/Images/RIZWAN MODEL.png",
      price: 9535,
    },
    {
      name: "JUNAID MODEL",
      image: "/Images/JUNAID MODEL.png",
      price: 9535,
    },
    {
      name: "GUJRAT MODEL  (BLUE)",
      image: "/Images/GUJRAT MODEL  (BLUE).png",
      price: 9535,
    },
    {
      name: "GUJRAT MODEL   (MEHROON)",
      image: "/Images/GUJRAT MODEL   (MEHROON).png",
      price: 9535,
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
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 pr-4 mb-4 md:mb-0">
          <h2 className="text-lg font-medium mb-2">CATEGORIES</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="py-1">
                <Link
                  href={`/pages/category/${category
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

        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h1>ceiling Fans AC</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="border rounded-lg shadow-md p-4 flex flex-col justify-between"
              >
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-lg cursor-pointer"
                  />
                </div>

                <h2 className="text-lg font-medium mb-2 text-center">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 text-center">
                  PKR {product.price * (product.quantity || 1)}
                </p>

                <div className="flex items-center justify-center space-x-2 mb-4">
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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
