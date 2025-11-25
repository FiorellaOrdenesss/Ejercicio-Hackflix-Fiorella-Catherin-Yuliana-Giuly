// src/App.jsx
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Buscar from "./components/Buscar";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pelicula/:id" element={<MovieDetails />} />
      <Route path="/buscar" element={<Buscar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
