import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer text-gray-300 mt-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="text-left">
          <h2 className="footer__logo text-xl font-bold">Velvet Rose</h2>
          <p className="mt-3 text-sm">
            Premium beauty products curated for modern lifestyles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer__link-title font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="footer__link-title font-semibold mb-3">Categories</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/category/skincare">Skincare</Link>
            <Link to="/category/makeup">Makeup</Link>
            <Link to="/category/fragrance">Fragrance</Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer__link-title font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center gap-4 text-xl">
            <FiFacebook className="cursor-pointer hover:text-white" />
            <FiInstagram className="cursor-pointer hover:text-white" />
            <FiTwitter className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Velvet Rose. All rights reserved.
      </div>
    </footer>
  );
}