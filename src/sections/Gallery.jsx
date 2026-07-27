import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES (.jpeg)
import img1 from "../assets/gallery1.jpeg";
import img2 from "../assets/gallery2.jpeg";
import img3 from "../assets/gallery3.jpeg";
import img4 from "../assets/gallery4.jpeg";
import img5 from "../assets/gallery5.jpeg";
import img6 from "../assets/gallery6.jpeg";
import img7 from "../assets/gallery7.jpeg";
import img8 from "../assets/gallery8.jpeg";
import img9 from "../assets/gallery9.jpeg";

const images = [
  img1, img2, img3,
  img4, img5, img6,
  img7, img8, img9
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Check out our recent installations and completed projects.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }} // 🔥 FAST
              viewport={{ once: true }}
              className="
              group
              border-2 border-gray-300
              rounded-xl 
              overflow-hidden 
              transition duration-300
              hover:border-orange-500
              hover:shadow-[0_0_20px_rgba(255,115,0,0.3)]
              "
            >

              {/* IMAGE */}
              <div
                className="cursor-pointer overflow-hidden"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`work-${index}`}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CTA BOX */}
              <div className="
                flex justify-between items-center
                p-4
                border-t border-gray-200
                bg-white
                group-hover:border-orange-500
                transition
              ">

                <button
                  onClick={() => setSelectedImg(img)}
                  className="text-orange-500 font-semibold text-sm hover:underline"
                >
                  View Photo
                </button>

                <a
                  href="https://wa.me/917814478482"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 text-sm font-semibold hover:underline"
                >
                  Get Service →
                </a>

              </div>

            </motion.div>
          ))}
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="flex justify-center gap-6 mt-16 flex-wrap">

          <a
            href="tel:7814478482"
            className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition shadow-lg hover:scale-105"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917814478482"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white hover:bg-green-600 px-8 py-3 rounded-full font-semibold transition shadow-lg hover:scale-105"
          >
            WhatsApp
          </a>

        </div>

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="full"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;