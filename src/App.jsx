import { useState } from "react";
import "./App.css";
import Peliculas from "./components/Peliculas";

function App() {
  return (
    <div>
      <h1>Hackflix 🎬</h1>
      <Peliculas />
    </div>
  );
}

export default App;
