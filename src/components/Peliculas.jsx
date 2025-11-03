// src/components/Peliculas.jsx
import React, { useEffect, useState } from "react";
import "./Peliculas.css";
import peliculasData from "../assets/movies.json";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    setPeliculas(peliculasData);
  }, []);

  return (
    <div className="peliculas-container">
      {peliculas.map((peli) => (
        <div key={peli.id} className="pelicula-card">
          <img src={peli.poster} alt={peli.title} className="pelicula-img" />
          <h3>{peli.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Peliculas;
