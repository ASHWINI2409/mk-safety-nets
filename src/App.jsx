import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import WhyChoose from "./sections/WhyChoose";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* PHOTO / GALLERY */}
      <Gallery />

      {/* OPTIONAL (Why Choose) */}
      <WhyChoose />

      {/* CONTACT */}
      <Contact />

      <Footer />
    </>
  );
}

export default App;