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
    </Routes>
  );
}

export default App;
