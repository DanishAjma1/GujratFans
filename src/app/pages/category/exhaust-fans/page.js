"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const [products, setProducts] = useState([
    {
      name: "CLASSIC MODEL (OFF-WHITE)",
      image: "/Images/Classic_model_off_white.png",
      price: 5500,
    },
    {
      name: "CLASSIC MODEL (BLACK)",
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
      name: "FANCY GOLD (OFF-WHITE)",
      image: "/Images/Fancy_Gold_off_white.png",
      price: 5600,
    },
    {
      name: "FANCY GOLD (BLACK)",
      image: "/Images/Fancy_Gold.png",
      price: 5600,
    },
    { name: "FANCY GOLD", image: "/Images/FANCY_GOLD.png", price: 9535 },
    {
      name: "FANCY LAHORE D1",
      image: "/Images/FANCY_LAHORE_D1.png",
      price: 9535,
    },
    {
      name: "FANCY LAHORE D2",
      image: "/Images/FANCY_LAHORE_D2.png",
      price: 9535,
    },
    { name: "RIZWAN MODEL", image: "/Images/RIZWAN_MODEL.png", price: 9535 },
    { name: "JUNAID MODEL", image: "/Images/JUNAID_MODEL.png", price: 9535 },
    {
      name: "GUJRAT MODEL (BLUE)",
      image: "/Images/GUJRAT_MODEL_BLUE.png",
      price: 9535,
    },
    {
      name: "GUJRAT MODEL (MEHROON)",
      image: "/Images/GUJRAT_MODEL_MEHROON.png",
      price: 9535,
    },
  ]);

  const categories = [
    "Ceiling Fans Ac",
    "Ceiling Fans Ac Dc",
    "Ceiling Fans Dc",
    "Bracket Fans",
    "Pedestal Fans",
    "Exhaust Fans",
  ];

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    const quantity = product.quantity || 1;
    const message = `Hi, I am interested in buying the ${
      product.name
    } fan. Quantity: ${quantity}. Price: PKR ${product.price * quantity}.`;
    const whatsappNumber = "923226409363";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className=" mx-auto p-4 bg-gradient-to-b from-blue-300 to-blue-500 min-h-screen">
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 pr-4 mb-4 md:mb-0">
          {/* Mobile Category Dropdown */}
          <div
            className="text-lg font-medium mb-2 md:hidden cursor-pointer flex items-center justify-between bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            <span>CATEGORIES</span>
            <FiChevronDown
              className={`ml-2 transform transition-transform duration-300 ${
                isCategoriesOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {/* Animated Categories List */}
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isCategoriesOpen || isDesktop ? "auto" : 0,
              opacity: isCategoriesOpen || isDesktop ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:block bg-white p-3 rounded-lg shadow-lg"
          >
            {categories.map((category, index) => (
              <li
                key={index}
                className="py-2 px-3 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white rounded-lg"
              >
                <Link
                  href={`/pages/category/${category
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="block text-gray-700 hover:text-white transition-colors duration-200"
                >
                  {category}
                </Link>
              </li>
            ))}
          </motion.ul>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
           Exhaust Fans
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="border rounded-lg shadow-xl p-4 bg-white hover:shadow-2xl transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg transition-transform duration-300"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 text-center font-medium">
                  PKR {product.price * (product.quantity || 1)}
                </p>

                <div className="flex flex-col items-center mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="font-bold">{product.quantity || 1}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg relative overflow-hidden transition-all duration-300 ease-in-out 
             hover:text-blue-200 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/15
             before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500"
                  >
                    BUY NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductGrid;
