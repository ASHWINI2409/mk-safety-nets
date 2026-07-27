import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white">
          MK <span className="text-orange-500">Safety Net</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-8 text-white">

          <a href="#home" className="hover:text-orange-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-orange-400 transition">
            Services
          </a>

          {/* ✅ FIXED */}
          <a href="#gallery" className="hover:text-orange-400 transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>

        </div>

        {/* CALL BUTTON */}
        <a
          href="tel:7814478482"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;