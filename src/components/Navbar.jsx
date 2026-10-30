// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from 'react-router-dom'; // Cleanly importing our router links

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#F3E9D4]/70 backdrop-blur-md border-b border-[#C3601E]/10 shadow-sm text-[#16221A]">
      <div className="flex justify-between items-center bg-transparent text-md p-5 relative">
        
        {/* Mobile Hamburguer Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-[#C3601E] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : ( 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo Link to Home */}
        <Link to="/">
          <img src="/logos/logo1.png" alt="Logo" className="object-contain h-12 w-auto cursor-pointer"/>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="items-center gap-6 md:flex hidden bg-transparent font-medium">
          <Link to="/" className="hover:text-[#C3601E] transition-colors">Home</Link>
          <Link to="/aboutall" className="hover:text-[#C3601E] transition-colors">About</Link>
          <Link to="/allprograms" className="hover:text-[#C3601E] transition-colors">Programs</Link>
          <Link to="/partners" className="hover:text-[#C3601E] transition-colors">Partner</Link>
        </nav>

        {/* Action Button */}
        <Link to="/donate">
        <button className="text-md font-medium bg-[#C3601E] px-4 py-2 text-white hover:bg-[#a84f16] transition-colors rounded-md cursor-pointer">
          Donate
        </button>
        </Link>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F3E9D4] pb-6 px-5 flex flex-col gap-4 text-center border-t border-[#C3601E]/10 font-medium">
          {/* Clicking a mobile link will automatically toggle the menu closed */}
          <Link to="/" onClick={() => setIsOpen(false)} className="py-2 hover:bg-[#C3601E]/10 rounded-sm">Home</Link>
          <Link to="/aboutall" onClick={() => setIsOpen(false)} className="py-2 hover:bg-[#C3601E]/10 rounded-sm">About</Link>
          <Link to="/allprograms" onClick={() => setIsOpen(false)} className="py-2 hover:bg-[#C3601E]/10 rounded-sm">Programs</Link>
          <Link to="/partners" onClick={() => setIsOpen(false)} className="py-2 hover:bg-[#C3601E]/10 rounded-sm">Partner</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;