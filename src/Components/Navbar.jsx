import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-4 lg:py-4 lg:px-6 flex justify-between items-center bg-gradient-back backdrop-blur-md shadow-md z-[100]">
      {/* Left side - Logo */}
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

      {/* Right side - Desktop Menu (About, Contact, Login, Signup) */}
      <div className="hidden lg:flex gap-4 items-center">
        <a href="/about" className="text-black text-sm font-medium">About</a>
        <a href="/contact" className="text-black text-sm font-medium">Contact</a>
        <a href="/sign-in" className="text-black text-sm font-medium">Login</a>
        <a href="/register" className="text-black text-sm font-medium">Sign Up</a>
        <a href="/cart" className="text-black text-sm font-medium">Cart</a>
        <a href="/orders" className="text-black text-sm font-medium">Orders</a>


      </div>

      {/* Mobile Menu Icon */}
      <button
        className="text-3xl text-white lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-gradient-back backdrop-blur-lg shadow-md">
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

      {/* Open App Button */}
      <a
        href="/"
        className="hidden lg:inline-block border-2 border-white text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-yellow-700 transition"
      >
        Open App
      </a>
    </header>
  );
};

export default NavBar;
