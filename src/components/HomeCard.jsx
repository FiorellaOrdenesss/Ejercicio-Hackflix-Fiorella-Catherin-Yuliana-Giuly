// src/components/HomeCard.jsx
import { useNavigate, useLocation } from "react-router-dom";
import "./HomeCard.css";

const HomeCard = ({ pelicula }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const desdeBuscador = location.pathname === "/buscar";

  const handleClick = () => {
    navigate(`/pelicula/${pelicula.id}`, {
      state: { from: desdeBuscador ? "search" : "home" },
    });
  };

  return (
    <div className="home-card" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
        alt={pelicula.title}
        className="home-card-img"
      />
    </div>
  );
};

export default HomeCard;
