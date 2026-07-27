import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import img1 from "../assets/gallery10.jpg";
import img3 from "../assets/gallery30.jpg";
import img2 from "../assets/gallery20.jpg";
import img4 from "../assets/gallery40.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-black py-20 relative overflow-hidden"
    >
      {/* 🎨 Gradient Glow (unchanged) */}
      <div className="absolute w-[300px] h-[300px] bg-orange-500/20 blur-3xl rounded-full top-10 left-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          About <span className="text-orange-500">Us</span>
        </h2>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5 h-full"
          >
            {[img1, img3, img2, img4].map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group 
                shadow-lg hover:shadow-orange-500/40 transition-all duration-500"
              >
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-transparent 
                group-hover:border-orange-500/60 transition-all duration-500"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700"></div>

                <img
                  src={img}
                  className="rounded-xl h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  alt="gallery"
                />
              </div>
            ))}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between h-full"
          >

            {/* TOP CONTENT */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-black">About</span>{" "}
                <span className="text-orange-500">MK Safety Net</span>
              </h3>

              <p className="text-gray-700 font-medium leading-relaxed text-lg">
                MK Safety Net is a trusted and professional service provider
                specializing in bird netting, invisible grills, and safety
                solutions across Delhi NCR. We help protect homes, balconies,
                and commercial spaces from unwanted birds while maintaining a
                clean, hygienic, and visually appealing environment.
              </p>

              <p className="mt-5 text-gray-600 font-medium leading-relaxed">
                With years of experience, our expert team ensures high-quality
                installation using durable and weather-resistant materials.
                We focus on providing long-lasting solutions that do not
                compromise your view or the beauty of your property.
              </p>

              <p className="mt-5 text-gray-600 font-medium leading-relaxed">
                Our mission is to deliver safe, affordable, and reliable bird
                protection services with fast response and professional
                execution every time.
              </p>

              {/* POINTS */}
              <div className="mt-6 space-y-3">
                {[
                  "Trusted & Experienced Team",
                  "Safe & Hygienic Solutions",
                  "Affordable & Reliable Service",
                  "High-Quality & Durable Materials",
                  "Fast & Professional Installation",
                  "100% Customer Satisfaction",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-orange-500" />
                    <p className="text-gray-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="tel:7814478482"
                className="flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-lg font-semibold 
                hover:bg-orange-600 transition-all duration-300 hover:scale-105
                shadow-lg hover:shadow-orange-500/50 text-white"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/917814478482"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-lg font-semibold 
                hover:bg-green-600 transition-all duration-300 hover:scale-105
                shadow-lg hover:shadow-green-500/50 text-white"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* (Animation styles untouched) */}
      <style>
        {`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}
      </style>
    </section>
  );
};

export default About;