"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 border-b-2 border-blue-400">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-center">
          {/* Logo (Hidden on Mobile) */}
          <div className="hidden md:block">
            <Image
              src="/Icons/mainlogo.png"
              alt="GFC Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </div>
          {/* Brand Name */}
          <Link href="/" className="text-2xl font-bold">
            Gujrat Fans
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Products", "About", "Contact","SignIn"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative text-white hover:text-blue-300 transition duration-300 group"
            >
              {item}
              <span className="absolute left-1/2 bottom-[-2px] w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900"
      >
        {["Home", "Products", "About", "Contact","SignIn"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
}
