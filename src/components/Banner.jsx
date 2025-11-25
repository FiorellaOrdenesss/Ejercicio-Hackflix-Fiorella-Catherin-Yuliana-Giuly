// src/components/Banner.jsx
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio//
import "./Banner.css";
import bannerImage from "../assets/vista-posterior-familia-viendo-tv.jpg";

export default function Banner() {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${bannerImage})`,
      }}
    >
      <div className="banner">
        <h1>Disfrutá tu serie favorita</h1>
        <p>Tu mundo de peliculas y series.</p>
      </div>
    </div>
  );
}
