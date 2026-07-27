import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Get in touch for bird net, invisible grill & safety net services across Delhi NCR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-md transition duration-300 hover:border-orange-500 hover:bg-orange-50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          >

            <h3 className="text-2xl font-bold mb-2 text-black">
              MK Safety Net
            </h3>

            <p className="text-gray-700 mb-3">
              Services: Gurgaon, Noida, Faridabad & All Delhi NCR
            </p>

            <p className="text-green-600 font-semibold mb-6">
              Free Site Inspection & Quotation
            </p>

            <h4 className="text-lg font-semibold mb-4 underline text-blue-500">
              Contact Information
            </h4>

            <div className="space-y-4">

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <a href="tel:7814478482" className="hover:underline">
                  +91 7814478482
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:info@mksafetynets.com"
                  className="hover:underline text-blue-500"
                >
                  info@mksafetynets.com
                </a>
              </div>

              {/* WEBSITE */}
              <div className="flex items-center gap-3">
                <FaGlobe className="text-orange-500" />
                <a
                  href="https://mksafetynets.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-blue-500"
                >
                  mksafetynets.com
                </a>
              </div>

              {/* TIME */}
              <div className="flex items-center gap-3">
                <FaClock className="text-orange-500" />
                <span>8 AM - 8 PM</span>
              </div>

            </div>

            {/* ADDRESS */}
            <div className="mt-6 bg-white border-2 border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Najafgarh, Delhi - 110043</span>
              </div>

              <a
                href="https://www.google.com/maps?q=Najafgarh+Delhi+110043"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-sm flex items-center gap-2 hover:underline"
              >
                📍 Get Directions
              </a>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">

              <a
                href="tel:7814478482"
                className="flex-1 text-center bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/917814478482"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-md transition duration-300 hover:border-orange-500 hover:bg-orange-50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          >
            <h3 className="text-2xl font-bold mb-4">
              Send a <span className="text-orange-500">Message</span>
            </h3>

            <p className="text-gray-600 mb-6">
              Fill the form & we’ll contact you instantly.
            </p>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-orange-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-orange-500 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-orange-500 outline-none"
              ></textarea>

              <a
                href="https://wa.me/917814478482"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp />
                Send via WhatsApp
              </a>

              <p className="text-gray-500 text-sm text-center">
                Opens directly in WhatsApp
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;