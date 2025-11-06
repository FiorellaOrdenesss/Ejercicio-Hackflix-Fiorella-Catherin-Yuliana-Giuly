// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieNavbar from "./components/Navbar";
import Banner from "./components/Banner";
import Peliculas from "./components/Peliculas";

function App() {
  return (
    <Router>
      <div className="App">
        <MovieNavbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Peliculas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
