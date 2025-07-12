"use client";
import { useState } from "react";
import "./variables.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useLenis } from "lenis/react";
import { useEffect } from "react";
import Lenis from "lenis";
import Hostings from "./Pages/Hostings";
import WebsiteBuilder from "./Pages/WebsiteBuilder";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import FourOFour from "./components/FourOFour";
import ScrollToTop from "./components/ScrollToTop";
import { lenis } from "./lenisInstance";

function App() {
 

  useEffect(() => {
    if (!lenis) return;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [lenis]);
  return (
    <>
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
