// src/components/Header.jsx
import { Link } from "react-router-dom";
import RatingFilter from "./RatingFilter";
import "./Header.css";

const Header = ({ onRatingChange }) => {
  return (
    <header className="header">
      <h1 className="logo">Hackflix</h1>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/buscar">Buscar</Link>

        {/* ⭐ Filtro usando la librería */}
        <RatingFilter onRatingChange={onRatingChange} />
      </nav>
    </header>
  );
};

export default Header;
