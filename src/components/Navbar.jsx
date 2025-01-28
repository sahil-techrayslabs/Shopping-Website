// import React from 'react';

// const Navbar = () => {
//   return (
//     <header className="flex justify-between items-center px-8 py-4 bg-blue-950 border-b border-muted">
//       <div className="text-2xl font-bold text-gray-200">Monogram</div>
//       <nav>
//         <ul className="flex gap-6 text-sm">
//           <li><a href="#features" className="text-gray-200 hover:text-red-600">Features</a></li>
//           <li><a href="#products" className="text-gray-200 hover:text-red-600">Products</a></li>
//           <li><a href="#contact" className="text-gray-200 hover:text-red-600">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-blue-950 border-b border-muted">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-200">Monogram</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 text-sm">
          <li><a href="#features" className="text-gray-200 hover:text-gray-500">Features</a></li>
          <li><a href="#products" className="text-gray-200 hover:text-gray-500">Products</a></li>
          <li><a href="#contact" className="text-gray-200 hover:text-gray-500">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-200 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm">
            <li><a href="#features" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#products" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>Products</a></li>
            <li><a href="#contact" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;


