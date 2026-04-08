import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {FiShoppingCart, FiUser, FiMenu} from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();  
  const [isOpen, setIsOpen] = useState(false);

  const isHome = location.pathname === '/';

  return (
    <nav className="w-full bg-white shadow-md">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
         <div className="flex items-center gap-6">
               {isHome ? ( <span className="logo text-xl font-bold cursor-default">
            Velvet Rose
          </span>) : <Link to="/" className="logo text-xl font-bold">
          Velvet Rose
        </Link>}
        

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
         <Link to="/category/skincare">Skincare</Link>
         <Link to="/category/makeup">Makeup</Link>
         <Link to="/category/fragrance">Fragrance</Link>
        </div>
         </div>
    
        <div className="hidden md:flex items-center gap-6">
          <Link to="/login">
          <FiUser />
          Login
          </Link>
          <Link
            to="/cart"
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            <FiShoppingCart />
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
            <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 border-t">

          {/* Categories */}
          <Link to="/?category=skincare" onClick={() => setIsOpen(false)}>
            Skincare
          </Link>
          <Link to="/?category=makeup" onClick={() => setIsOpen(false)}>
            Makeup
          </Link>
          <Link to="/?category=fragrance" onClick={() => setIsOpen(false)}>
            Fragrance
          </Link>

          <hr />

          {/* Actions */}
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-4 py-2 rounded-md text-center"
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}