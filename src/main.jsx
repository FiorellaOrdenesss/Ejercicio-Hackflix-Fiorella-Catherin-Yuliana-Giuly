// src/main.jsx
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
