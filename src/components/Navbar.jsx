// src/components/Navbar.jsx
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <button
        className="logo-btn"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        HACKFLIX
      </button>

      <div className="nav-actions">
        <Link to="/buscar" className="search-btn">
          Buscar
        </Link>
      </div>
    </header>
  );
}
