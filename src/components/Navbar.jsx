import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { cn } from "../lib/utils";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = location.pathname === "/";
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

   useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname.includes(path);

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          {isHome ? (
            <span className="logo text-xl font-bold cursor-default">
              Velvet Rose
            </span>
          ) : (
            <Link to="/" className="logo text-xl font-bold">
              Velvet Rose
            </Link>
          )}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/category/skincare" className={cn(isActive('skincare') ? "text-black font-semibold" : "")}>Skincare</Link>
            <Link to="/category/makeup" className={cn(isActive('makeup') ? "text-black font-semibold" : "")}>Makeup</Link>
            <Link to="/category/fragrance" className={cn(isActive('fragrance') ? "text-black font-semibold" : "")}>Fragrance</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/login" className="flex items-center gap-2">
            <FiUser size={20}/>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md"
          >
            <FiShoppingCart size={20}/>
          </Link>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white z-50 
        transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6 p-6">
          <button
            className="self-end text-2xl"
            onClick={closeMenu}
          >
            <FiX />
          </button>
          <Link to="/category/skincare" onClick={closeMenu}>
            Skincare
          </Link>
          <Link to="/category/makeup" onClick={closeMenu}>
            Makeup
          </Link>
          <Link to="/category/fragrance" onClick={closeMenu}>
            Fragrance
          </Link>
          <Link to="/login" onClick={closeMenu}>
            Login
          </Link>
          <Link
            to="/cart"
            onClick={closeMenu}
            className="bg-black text-white px-4 py-2 rounded-md text-center"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}