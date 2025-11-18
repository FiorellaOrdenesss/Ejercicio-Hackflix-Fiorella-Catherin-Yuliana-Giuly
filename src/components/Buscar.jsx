// src/components/Buscar.jsx
import { useState, useEffect, useRef } from "react";
import useInput from "../hooks/useInput";
import HomeCard from "./HomeCard";
import "./Peliculas.css";

const API_KEY = "dfc76cd6e2e40143dcdc6ab4ee6bb34d";

const Buscar = () => {
  const input = useInput("");
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const sentinelRef = useRef(null);

  // 🔹 Cargar películas populares
  const obtenerPopulares = async () => {
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

  // 🔹 Buscar películas por título
  const buscarPeliculas = async (query) => {
    setCargando(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      const results = Array.isArray(data.results) ? data.results : [];
      if (results.length === 0) {
        setError(
          "Lo sentimos, no se encontraron películas con el título buscado"
        );
        setPeliculas([]);
      } else {
        setError(null);
        setPeliculas(results);
      }
    } catch (err) {
      setError("Error al buscar películas");
      setPeliculas([]);
    } finally {
      setCargando(false);
    }
  };

  // 🔹 Al montar: cargar populares
  useEffect(() => {
    if (input.value.trim() === "") {
      obtenerPopulares();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 🔹 Al cambiar el input: buscar o volver a populares
  useEffect(() => {
    const query = input.value.trim();

    if (query === "") {
      setPeliculas([]);
      setPagina(1);
      obtenerPopulares();
    } else {
      setPeliculas([]);
      setPagina(1);
      buscarPeliculas(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.value]);

  // 🔹 Scroll infinito solo en modo populares
  useEffect(() => {
    if (input.value.trim() !== "") return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !cargando && !error) {
          obtenerPopulares();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cargando, error, pagina, input.value]);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Buscar película por título..."
        value={input.value}
        onChange={input.onChange}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {cargando && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <div className="peliculas-container">
        {peliculas.length > 0
          ? peliculas.map((pelicula) => (
              <HomeCard key={pelicula.id} pelicula={pelicula} />
            ))
          : !cargando && !error && <p>No se encontraron películas</p>}
        {input.value.trim() === "" && (
          <div ref={sentinelRef} style={{ height: 1 }} />
        )}
      </div>
    </div>
  );
};

export default Buscar;
