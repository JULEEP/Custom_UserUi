import React, { useState, useEffect } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import Hero from "../Pages/Hero.jsx";
import Cat from "../Pages/Cat.jsx";
import BestSellers from "../Pages/BestSellers.jsx";
import Footer from './Footer.jsx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCat, setShowCat] = useState(false); // State to toggle between NavBar and Cat

  // List of categories
  const categories = [
    "View All",
    "Visiting Cards",
    "Stationery, Letterheads & Notebooks",
    "Personalised Pens",
    "Stamps and Ink",
    "Signs, Posters & Marketing Materials",
    "Labels, Stickers & Packaging",
    "Clothing, Caps & Bags",
    "Mugs, Albums & Gifts",
    "Calendars, Notebooks & Diaries",
    "Custom Winter Wear",
    "Bulk Orders",
  ];

  // Scroll event listener to toggle between NavBar and Cat
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowCat(scrollY >= 100); // Show Cat if scrollY is 100 or more
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Conditionally render NavBar or Cat based on scroll */}
      {!showCat ? (
        <header className="fixed top-0 left-0 w-full py-4 px-4 lg:py-4 lg:px-6 bg-gradient-back backdrop-blur-md z-[100]">
          <div className="w-full flex justify-between items-center">
            <a href="/" className="text-2xl lg:text-3xl text-black font-semibold">
              Jaiswal Offset
            </a>

            {/* Center - Search Bar (only visible on large screens) */}
            <div className="hidden lg:flex items-center w-1/3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-1 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Right side - Desktop Menu */}
            <div className="hidden lg:flex gap-4 items-center">
              <a href="/about" className="text-black text-sm">About</a>
              <a href="/contact" className="text-black text-sm">Contact</a>
              <a href="/sign-in" className="text-black text-sm">Login</a>
              <a href="/register" className="text-black text-sm">Sign Up</a>
              <a href="/cart" className="text-black text-sm">Cart</a>
              <a href="/orders" className="text-black text-sm">Orders</a>
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="text-3xl text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>

            {/* Open App Button */}
            <a
              href="/"
              className="hidden lg:inline-block border-2 border-white text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-yellow-700 transition"
            >
              Open App
            </a>
          </div>

          {/* Categories Row (Desktop only) */}
          <div className="hidden lg:flex w-full justify-center mt-10 bg-white py-2">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-black text-sm px-4 hover:text-blue-500"
              >
                {category}
              </a>
            ))}
          </div>

          {/* Horizontal Line Below Categories */}
          <div className="hidden lg:block w-full border-t border-gray-300 mt-4"></div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="absolute top-full left-0 w-full bg-gradient-back backdrop-blur-lg">
              <ul className="flex flex-col items-center py-4">
                <li>
                  <a href="/about" className="text-white py-2 block text-center w-full">About</a>
                </li>
                <li>
                  <a href="/contact" className="text-white py-2 block text-center w-full">Contact</a>
                </li>
                <li>
                  <a href="/login" className="text-white py-2 block text-center w-full">Login</a>
                </li>
                <li>
                  <a href="/signup" className="text-white py-2 block text-center w-full">Sign Up</a>
                </li>
              </ul>
            </nav>
          )}
        </header>
      ) : (
        // Render Cat component when scrolled
        <Cat />
      )}

      {/* Main Content */}
      <main className="pt-[200px]"> {/* Add padding to offset the fixed navbar */}
        <Hero />
        <Cat />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <Footer/>
      </main>
    </>
  );
};

export default NavBar;
