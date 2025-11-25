// src/components/Peliculas.jsx
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio
import { useState, useEffect, useRef } from "react";
import HomeCard from "./HomeCard";
import "./Peliculas.css";
import { Rating } from "react-simple-star-rating";

const API_KEY = "dfc76cd6e2e40143dcdc6ab4ee6bb34d";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const [ratingMinimo, setRatingMinimo] = useState(0);

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

  const handleRating = (value) => {
    const tmdbRating = value * 2;
    console.log("Nuevo rating mínimo:", tmdbRating);
    setRatingMinimo(tmdbRating);
  };

  const peliculasFiltradas = peliculas.filter((p) => {
    if (!ratingMinimo) return true;
    return p.vote_average >= ratingMinimo;
  });

  return (
    <div style={{ padding: "20px" }}>
      <div className="rating-filter">
        <span className="rating-label">Filtrar por rating: </span>
        <Rating
          onClick={handleRating}
          initialValue={ratingMinimo / 2}
          size={25}
        />
        {ratingMinimo > 0 && <span className="rating-label">&nbsp; & Más</span>}
      </div>

      <div className="peliculas-container">
        {peliculasFiltradas.map((pelicula) => (
          <HomeCard key={pelicula.id} pelicula={pelicula} />
        ))}
        <div ref={sentinelRef} style={{ height: 1 }} />
      </div>

      {cargando && <p className="loader">Cargando más películas...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Peliculas;
