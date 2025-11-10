// src/App.jsx
import Peliculas from "./components/Peliculas";

const App = () => {
  return (
    <div>
      <h1 style={styles.titulo}>Hackflix 🎬</h1>
      <Peliculas />
    </div>
  );
};

const styles = {
  titulo: {
    textAlign: "center",
    fontSize: "2.5rem",
    margin: "20px 0",
    color: "#333",
  },
};

export default App;
