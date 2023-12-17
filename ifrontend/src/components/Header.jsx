import React, { useState } from "react";
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <h3 className="text-2xl font-bold">iLearner</h3>
        <nav className="flex space-x-4">
          <a href="http://localhost:3000/home" className="hover:underline">Home</a>
          <a href="http://localhost:3000/sheet" className="hover:underline">Sheets</a>
        </nav>
      </div>
      <div className="relative">
        <button onClick={toggleDropdown} className="rounded-full p-2 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300">
          <UserCircleIcon className="h-8 w-8 text-white hover:text-indigo-200" />
        </button>
        {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-50">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
            <div className="border-t border-gray-200"></div>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
  </div>
)}

      </div>
    </div>
  );
};

export default Header;
