// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieNavbar from "./components/Navbar";
import Peliculas from "./components/Peliculas";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <MovieNavbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Peliculas />} />
      </Routes>
    </Router>
  );
}
export default App;
