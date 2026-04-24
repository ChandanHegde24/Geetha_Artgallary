import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import PremiumCarousel from "./components/PremiumCarousel";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <HashRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <PremiumCarousel />
                <Hero />
                <Home />
              </>
            } />
            <Route path="/about" element={
              <>
                <About />
              </>
            } />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop title="Shop Collection" showFeaturedBadge={false} showCategories={true} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={
              <>
                <Contact />
                <FAQ />
              </>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </HashRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;