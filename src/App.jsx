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

function App() {
  const lenis = new Lenis({
    duration: 1.0, // lower duration = snappier (default is ~1.2)
    easing: (t) => t, // linear easing, no extra lag
  });

  useEffect(() => {
    if (!lenis) return;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [lenis]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hostings" element={<Hostings />} />
      <Route path="/website-builder" element={<WebsiteBuilder />} />
      <Route path="/about-us" element={<About />} />
      <Route path="*" element={<FourOFour/>}/>
    </Routes>
  );
}

export default App;
