// src/components/Peliculas.jsx
import React, { useState, useEffect } from "react";
import ModalPelicula from "./ModalPelicula";
import "./Peliculas.css";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]); // almacena la lista de películas
  const [pagina, setPagina] = useState(1); // controla que la pagina de la api se va consultando
  const [cargando, setCargando] = useState(false); // indica si se están cargando más películas
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null); // controla la película seleccionada para el modal

  const API_KEY = "dfc76cd6e2e40143dcdc6ab4ee6bb34d";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pagina}`;
  // la api obvi
  const obtenerPeliculas = async () => {
    // función para obtener películas de la API
    if (cargando) return; // evita múltiples llamadas simultáneas
    setCargando(true); // indica que se está cargando

    try {
      // llamada a la API
      const respuesta = await fetch(API_URL); // el famoso fetch // espera la respuesta
      const datos = await respuesta.json(); // convierte la respuesta a JSON
      setPeliculas((prevPeliculas) => [...prevPeliculas, ...datos.results]);
      // agrega las nuevas películas a la lista existente
      setPagina((prevPagina) => prevPagina + 1); // incrementa el número de página para la próxima llamada
    } catch (error) {
      // maneja errores (por si hay)
      console.error("Error al cargar películas:", error); // muestra el error en la consola
    } finally {
      // siempre se ejecuta al final
      setCargando(false); // indica que ya no se está cargando
    }
  };

  useEffect(() => {
    // carga inicial de películas
    obtenerPeliculas(); // llama a la función para obtener películas cuando el componente se monta
  }, []); // el array vacío significa que solo se ejecuta una vez al montar

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
