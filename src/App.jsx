import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Home />
            <Shop title="Popular Picks" />
          </>
        } />
        <Route path="/about" element={
          <>
            <About />
            <Home />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop title="Shop Collection" showFeaturedBadge={false} showCategories={true} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;