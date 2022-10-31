import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Workshops from "./components/Workshops";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="main">
      <Header />
        <Routes>
          <Route path="/" element={<Home titel="Welcome to SchoolHacks" />} />
          <Route path="/workshops" element={<Workshops />} />
        </Routes>
        <footer className="container">
          <a
            href="https://www.schoolhacks.eu"
            target="_blank"
            rel="noreferrer noopener">
            SchoolHacks
          </a>
        </footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
