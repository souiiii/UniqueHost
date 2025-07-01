import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css"; // required base CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>
);
