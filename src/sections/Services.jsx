import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaFeatherAlt,
  FaBug,
  FaFutbol,
  FaShieldAlt,
  FaTools,
  FaPaw,
  FaBuilding,
  FaSnowflake,
} from "react-icons/fa";

// IMAGES
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import service4 from "../assets/service4.jpeg";
import service5 from "../assets/service5.jpeg";
import service6 from "../assets/service6.jpeg";
import service7 from "../assets/service7.jpeg";
import service8 from "../assets/service8.jpeg";
import service9 from "../assets/service9.jpeg";

const services = [
  {
    title: "Invisible Grill",
    icon: <FaHome />,
    img: service1,
    desc: "Modern safety solution for balconies that provides strong protection while maintaining a clear and open view of your surroundings.",
  },
  {
    title: "Bird Net Installation",
    icon: <FaFeatherAlt />,
    img: service2,
    desc: "Keep pigeons and unwanted birds away from your balcony with durable, long-lasting net installations for complete safety.",
  },
  {
    title: "Mosquito Protection Nets",
    icon: <FaBug />,
    img: service3,
    desc: "High-quality mosquito nets designed to protect your home from insects while allowing fresh air and visibility.",
  },
  {
    title: "Sports Netting",
    icon: <FaFutbol />,
    img: service4,
    desc: "Strong and reliable netting solutions for sports grounds, cricket practice areas, and playground safety.",
  },
  {
    title: "Balcony Safety Net",
    icon: <FaShieldAlt />,
    img: service5,
    desc: "Ensure complete protection for children and pets in balconies, terraces, and open spaces with high-strength nets.",
  },
  {
    title: "Bird Spikes",
    icon: <FaTools />,
    img: service6,
    desc: "Effective stainless steel bird spikes that prevent birds from sitting and nesting on ledges and surfaces.",
  },
  {
    title: "Pet Safety Net",
    icon: <FaPaw />,
    img: service7,
    desc: "Keep your pets safe on balconies and open spaces with strong and secure safety nets designed to prevent accidental falls without blocking airflow or visibility.",
  },
  {
    title: "Rooftop Safety Net",
    icon: <FaBuilding />,
    img: service8,
    desc: "High-strength rooftop netting solutions to ensure complete safety for children, pets, and workers in open terrace areas with durable and weather-resistant materials.",
  },
  {
    title: "AC Outdoor Netting",
    icon: <FaSnowflake />,
    img: service9,
    desc: "Protect your AC outdoor units from birds, dust, and nesting with specialized netting that maintains airflow while preventing damage and blockage.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Premium safety and protection solutions for modern homes.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white border-2 border-gray-300 rounded-2xl overflow-hidden transition duration-300 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(255,115,0,0.3)] hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="h-52 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* ICON + TITLE */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-orange-500 text-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/917814478482"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-green-600 font-semibold text-sm hover:underline"
                >
                  Get Service →
                </a>

              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
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
    </section>
  );
};

export default Services;