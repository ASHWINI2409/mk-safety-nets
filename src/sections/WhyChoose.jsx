import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaTools,
  FaStar,
  FaMoneyBillWave,
  FaBolt,
  FaSmile
} from "react-icons/fa";

const features = [
  {
    title: "100% Safety Guarantee",
    icon: <FaShieldAlt />,
    short: "Complete protection for your home, family, and balcony spaces.",
    desc: "We ensure maximum safety with strong and durable net installations that protect children, pets, and property from accidents and bird issues."
  },
  {
    title: "Professional Installation",
    icon: <FaTools />,
    short: "Expert team with clean and precise installation work.",
    desc: "Our trained professionals provide quick, hassle-free installation with proper finishing and attention to detail for long-lasting results."
  },
  {
    title: "High Quality Materials",
    icon: <FaStar />,
    short: "Durable, weather-resistant, and long-lasting materials.",
    desc: "We use premium quality nets and materials that are strong, rust-free, and designed to withstand harsh weather conditions."
  },
  {
    title: "Affordable Pricing",
    icon: <FaMoneyBillWave />,
    short: "Best price with high-quality service guaranteed.",
    desc: "Get premium safety solutions at budget-friendly pricing without compromising on quality or service standards."
  },
  {
    title: "Quick Service",
    icon: <FaBolt />,
    short: "Fast response and same-day installation available.",
    desc: "We value your time and provide quick service with flexible scheduling and fast installation across Delhi NCR."
  },
  {
    title: "Customer Satisfaction",
    icon: <FaSmile />,
    short: "Trusted by hundreds of happy customers.",
    desc: "Our goal is complete customer satisfaction through reliable service, quality work, and long-term trust."
  }
];

const WhyChoose = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="why" className="relative bg-white text-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-orange-500">Us</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            <span className="text-orange-500 font-semibold">100+</span> Happy Clients |
            <span className="text-orange-500 font-semibold ml-2">2+ Years</span> Experience |
            <span className="text-orange-500 font-semibold ml-2">24/7</span> Support
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              viewport={{ once: true }}
              className="
              group cursor-pointer
              bg-white
              border-2 border-gray-300
              rounded-2xl p-6 text-center
              shadow-md
              transition duration-300
              hover:border-orange-500
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              hover:bg-orange-50
              hover:-translate-y-2
              "
            >

              <div className="text-3xl text-orange-500 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.short}
              </p>

            </motion.div>
          ))}

        </div>

        {/* 🔥 SAME CTA BUTTONS ADDED */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap">

          <a
            href="tel:7814478482"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917814478482"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition shadow-lg"
          >
            WhatsApp
          </a>

        </div>

      </div>

      {/* POPUP */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl max-w-md text-center border border-orange-500 shadow-xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <div className="text-4xl text-orange-500 mb-4">
                {active.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {active.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {active.desc}
              </p>

              <button
                onClick={() => setActive(null)}
                className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default WhyChoose;