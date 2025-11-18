// src/components/Header.jsx
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Hackflix</h1>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/buscar">Buscar</Link>
      </nav>
    </header>
  );
};

export default Header;
