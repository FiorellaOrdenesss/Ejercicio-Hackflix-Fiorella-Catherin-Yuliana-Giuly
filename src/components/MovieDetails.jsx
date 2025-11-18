import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetails.css";

const API_KEY = "dfc76cd6e2e40143dcdc6ab4ee6bb34d";

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const fromSearch = location.state?.from === "search";

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`
        );
        setMovie(response.data);
        setError(null);
      } catch (err) {
        console.error("Error al obtener los detalles de la película:", err);
        setError("No se pudo cargar la información de la película.");
      }
    };

    fetchMovie();
  }, [id]);

  const handleBack = () => {
    navigate(fromSearch ? "/buscar" : "/");
  };

  if (error) {
    return <p style={{ padding: "20px" }}>{error}</p>;
  }

  if (!movie) {
    return <p style={{ padding: "20px" }}>Cargando detalles...</p>;
  }

  return (
    <div className="detalle-container">
      <h1 className="detalle-title">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster de ${movie.title}`}
        className="detalle-img"
      />
      <div className="detalle-info">
        <p>
          <strong>Año:</strong> {movie.release_date?.slice(0, 4)}
        </p>
        <p>
          <strong>Descripción:</strong> {movie.overview}
        </p>
        <p>
          <strong>Calificación promedio:</strong> {movie.vote_average} / 10
        </p>
      </div>
      <button onClick={handleBack} className="volver-btn">
        {fromSearch ? "Volver al buscador" : "Volver a Home"}
      </button>
    </div>
  );
};

export default MovieDetails;
