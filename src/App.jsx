// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Peliculas from "./components/Peliculas";
import MovieDetails from "./components/MovieDetails";
import Buscar from "./components/Buscar";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

const App = () => {
  const [ratingFilter, setRatingFilter] = useState(0);

  return (
    <>
      {/* Pasamos la función al Header */}
      <Header onRatingChange={setRatingFilter} />

      <Routes>
        {/* Pasamos el valor a Peliculas */}
        <Route path="/" element={<Peliculas ratingFilter={ratingFilter} />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
