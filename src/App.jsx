import { useState } from "react";
import './variables.css'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
  )

}

export default App;
