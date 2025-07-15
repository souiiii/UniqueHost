"use client";
import { useState, useEffect } from "react";
import "./variables.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Hostings from "./Pages/Hostings";
import WebsiteBuilder from "./Pages/WebsiteBuilder";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import FourOFour from "./components/FourOFour";
import ScrollToTop from "./components/ScrollToTop";
import { lenis } from "./lenisInstance";
import LoaderOverlay from "./components/LoaderOverlay";

function App() {
  const [loading, setLoading] = useState(true);

  // Lenis scroll logic
  useEffect(() => {
    if (!lenis) return;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [lenis]);

  // Simulate loading (you can replace this with actual readiness checks)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoaderOverlay visible={loading} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hostings" element={<Hostings />} />
        <Route path="/website-builder" element={<WebsiteBuilder />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </>
  );
}

export default App;
