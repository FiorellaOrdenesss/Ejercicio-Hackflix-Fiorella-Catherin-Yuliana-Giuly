// src/components/Peliculas.jsx
import React, { useState } from "react";
import ModalPelicula from "./ModalPelicula";
import peliculasData from "../assets/movies.json";
import "./Peliculas.css";

const Peliculas = () => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const abrirModal = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  const cerrarModal = () => {
    setPeliculaSeleccionada(null);
  };

  return (
    <div className="peliculas-container">
      {peliculasData.map((pelicula) => (
        <div
          key={pelicula.id}
          className="pelicula-card"
          onClick={() => abrirModal(pelicula)}
        >
          <img
            src={pelicula.poster_path}
            alt={pelicula.title}
            className="pelicula-img"
          />
        </div>
      ))}

      {peliculaSeleccionada && (
        <ModalPelicula pelicula={peliculaSeleccionada} onClose={cerrarModal} />
      )}
    </div>
  );
};

export default Peliculas;
