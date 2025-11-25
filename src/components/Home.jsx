// src/components/Home.jsx
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio//
import Navbar from "./Navbar";
import Banner from "./Banner";
import Peliculas from "./Peliculas";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="home-content">
        <Peliculas />
      </div>
    </>
  );
}
