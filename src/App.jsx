// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Peliculas from "./components/Peliculas";
import MovieDetails from "./components/MovieDetails";
import Buscar from "./components/Buscar";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Peliculas />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
