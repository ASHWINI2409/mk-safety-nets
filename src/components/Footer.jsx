import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1220] via-[#0f172a] to-black text-white py-10">
      
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Thanks for <span className="text-orange-500">Visiting!</span>
        </h2>

        {/* TAGLINE */}
        <p className="text-gray-400 text-sm md:text-base mb-6 max-w-2xl mx-auto">
          Protect Your Home from Birds Without Compromising Your View — MK Safety Net
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-5 mb-6">

          {/* CALL */}
          <a
            href="tel:7814478482"
            className="bg-white/5 hover:bg-orange-500/20 p-3 rounded-lg transition 
            hover:scale-110 shadow hover:shadow-orange-500/30"
          >
            <FaPhoneAlt size={18} className="text-orange-500" />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/917814478482"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 hover:bg-green-500/20 p-3 rounded-lg transition 
            hover:scale-110 shadow hover:shadow-green-500/30"
          >
            <FaWhatsapp size={18} className="text-green-500" />
          </a>

          {/* WEBSITE */}
          <a
            href="https://mksafetynet.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 hover:bg-blue-500/20 p-3 rounded-lg transition 
            hover:scale-110 shadow hover:shadow-blue-500/30"
          >
            <FaGlobe size={18} className="text-blue-400" />
          </a>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} MK Safety Net. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;