// src/components/Peliculas.jsx
import { useState, useEffect, useRef } from "react";
import HomeCard from "./HomeCard";
import "./Peliculas.css";

const API_KEY = "dfc76cd6e2e40143dcdc6ab4ee6bb34d";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const sentinelRef = useRef(null);

  const obtenerPeliculas = async () => {
    if (cargando) return;
    setCargando(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pagina}`
      );
      const data = await res.json();
      const results = Array.isArray(data.results) ? data.results : [];

      setPeliculas((prev) => [...prev, ...results]);
      setPagina((prev) => prev + 1);
      setError(null);
    } catch (err) {
      console.error("Error al cargar películas:", err);
      setError("No se pudieron cargar más películas");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !cargando && !error) {
          obtenerPeliculas();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [cargando, error, pagina]);

  return (
    <div>
      {error && <p style={{ padding: "0 20px" }}>{error}</p>}

      <div className="peliculas-container">
        {peliculas.length > 0
          ? peliculas.map((pelicula) => (
              <HomeCard key={pelicula.id} pelicula={pelicula} />
            ))
          : !cargando &&
            !error && <p>No se encontraron películas para mostrar</p>}
        <div ref={sentinelRef} style={{ height: 1 }} />
      </div>

      {cargando && <p className="loader">Cargando más películas...</p>}
    </div>
  );
};

export default Peliculas;
