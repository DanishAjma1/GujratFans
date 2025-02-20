"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Icons/mainlogo.png"
            alt="GFC Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <Link href="/" className="text-2xl font-bold">
            Gujarat Fans
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`hidden md:flex space-x-6 ${
            isMenuOpen ? "block" : ""
          } md:block`}
        >
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/ProductCard" className="hover:text-blue-300">
            Products
          </Link>
          <Link href="/About" className="hover:text-blue-300">
            About
          </Link>
          <Link href="/Contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (when opened) */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-700`}
      >
        <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-600">
          Home
        </Link>
        <Link
          href="/ProductCard"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          Products
        </Link>
        <Link
          href="/About"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          About
        </Link>
        <Link
          href="/Contact"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
