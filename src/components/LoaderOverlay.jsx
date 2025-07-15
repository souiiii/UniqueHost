// src/components/LoaderOverlay.jsx
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";

const loaderStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(var(--backgrnd1), var(--backgrnd2))",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  transition: "opacity 0.5s ease",
};

const LoaderOverlay = ({ visible }) => {
  return (
    
    <div
      style={{
        ...loaderStyle,
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
      }}
    >
        
      <div
        style={{
          width: "300px", // Base size on mobile
          maxWidth: "40vw", // More generous size for large screens
        }}
      >
        
        <Lottie
          animationData={loaderAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      
    </div>
  );
};

export default LoaderOverlay;
