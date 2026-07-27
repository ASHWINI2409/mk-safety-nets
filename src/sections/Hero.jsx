import { FaWhatsapp, FaPhoneAlt, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

import heroBg from "../assets/gallery1.jpg";

function Hero() {
  const [count, setCount] = useState(0);

  // 🔥 Typing Effect
  const [text, setText] = useState("");
  const fullText = "Bird Problem? We Fix It Instantly.";

  useEffect(() => {
    let animationFrame;
    let interval;

    const duration = 4000;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const startAnimation = () => {
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;

        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = easeOutCubic(progress);

        setCount(Math.floor(eased * 150));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    startAnimation();

    interval = setInterval(() => {
      setCount(0);
      startAnimation();
    }, 7000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
    };
  }, []);

  // 🔥 Typing animation
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      className="relative text-white min-h-screen flex items-center pt-20 md:pt-28 overflow-hidden"
    >
      {/* 🔥 ANIMATED BACKGROUND */}
      <div
        className="absolute inset-0 animate-zoom"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto px-1 md:px-3 py-10 grid md:grid-cols-2 items-center">

        {/* LEFT SIDE */}
        <div className="max-w-lg ml-0 md:ml-2">

          {/* 🔥 SEO H1 (NEW ADD) */}
          <h1 className="hidden">
            Bird Net Service in Delhi NCR | Pigeon Net | Balcony Safety Net | MK Safety Nets
          </h1>

          {/* COUNT */}
          <p className="text-green-400 font-semibold mb-2">
            ⭐ {count}+ Happy Customers | 2+ Years Experience
          </p>

          {/* 🔥 TYPING TEXT */}
          <p className="text-yellow-400 text-sm mb-2 h-5">
            {text}
          </p>

          {/* HEADING */}
          <h2 className="text-2xl md:text-5xl font-bold leading-tight">
            <span className="block md:whitespace-nowrap">
              Protect Your Home with
            </span>

            <span className="block mt-1 md:whitespace-nowrap">
              <span className="text-orange-500">MK Safety Net</span>{" "}
              <span className="text-white">in Delhi NCR</span>
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
            MK Safety Net provides premium safety nets, invisible grills, and bird protection solutions with expert installation and durable materials to keep your home safe, clean, and bird-free.<br />
            <span className="text-yellow-400 text-sm md:text-base font-semibold italic tracking-wide">
              Protect Your Home from Birds — Without Compromising Your View
            </span>
          </p>

          {/* SERVICES */}
          <div className="mt-5 space-y-1.5 text-white">
            <p className="flex gap-2"><span className="text-green-400">✔</span> Bird Net Installation</p>
            <p className="flex gap-2"><span className="text-green-400">✔</span> Balcony Safety Nets</p>
            <p className="flex gap-2"><span className="text-green-400">✔</span> Sports Netting</p>
            <p className="flex gap-2"><span className="text-green-400">✔</span> Mosquito Net</p>
            <p className="flex gap-2"><span className="text-green-400">✔</span> Invisible Grill</p>
            <p className="flex gap-2"><span className="text-green-400">✔</span> Bird Spikes</p>
          </div>

          {/* 🔥 SEO TEXT BLOCK (NEW ADD) */}
          <p className="hidden">
            We provide bird net service in Delhi NCR including Najafgarh, Dwarka, Noida and Gurgaon.
            Our services include pigeon net, balcony safety net and mosquito net installation.
          </p>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-300">
            <span>✔ 100% Safe Installation</span>
            <span>✔ No Damage</span>
            <span>✔ Long Durability</span>
          </div>

          {/* BUTTONS */}
          <div className="mt-7 flex gap-3 flex-wrap">

            {/* CALL BUTTON */}
            <a
              href="tel:7814478482"
              className="group flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-orange-500/50 hover:shadow-xl transition"
            >
              <FaPhoneAlt className="group-hover:rotate-12 transition" />
              Call Us
              <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">
                24/7
              </span>
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/917814478482"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/50 hover:shadow-xl transition"
            >
              <FaWhatsapp className="group-hover:scale-110 transition" size={18} />
              WhatsApp
            </a>

          </div>
        </div>

        {/* RIGHT EMPTY */}
        <div></div>
      </div>

      {/* FLOATING ICONS */}
      <div className="fixed right-4 bottom-6 flex flex-col gap-3 z-50">

        {/* CALL */}
        <div className="relative group">
          <a
            href="tel:7814478482"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition hover:scale-110 animate-pulse"
          >
            <FaPhoneAlt size={18} />
          </a>
          <span className="absolute right-14 top-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Call Now
          </span>
        </div>

        {/* WHATSAPP */}
        <div className="relative group">
          <a
            href="https://wa.me/917814478482"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition hover:scale-110 animate-pulse"
          >
            <FaWhatsapp size={18} />
          </a>
          <span className="absolute right-14 top-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            WhatsApp
          </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;