// src/components/Peliculas.jsx
import { useState, useEffect } from "react";
import ModalPelicula from "./ModalPelicula";
import "./Peliculas.css";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const API_KEY = "dfc76cd6e2e40143dcdc6ab4ee6bb34d";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pagina}`;

  const obtenerPeliculas = async () => {
    if (cargando) return;
    setCargando(true);

    try {
      const respuesta = await fetch(API_URL);
      const datos = await respuesta.json();
      setPeliculas((prevPeliculas) => [...prevPeliculas, ...datos.results]);
      setPagina((prevPagina) => prevPagina + 1);
    } catch (error) {
      console.error("Error al cargar películas:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  useEffect(() => {
    const manejarScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !cargando
      ) {
        obtenerPeliculas();
      }
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, [cargando]);

  const abrirModal = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  const cerrarModal = () => {
    setPeliculaSeleccionada(null);
  };

  return (
    <div className="peliculas-container">
      {peliculas.map((pelicula) => (
        <div
          key={pelicula.id}
          className="pelicula-card"
          onClick={() => abrirModal(pelicula)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={pelicula.title}
            className="pelicula-img"
          />
        </div>
      ))}

      {peliculaSeleccionada && (
        <ModalPelicula pelicula={peliculaSeleccionada} onClose={cerrarModal} />
      )}

      {cargando && <p className="loader">Cargando más películas...</p>}
    </div>
  );
};

export default Peliculas;
