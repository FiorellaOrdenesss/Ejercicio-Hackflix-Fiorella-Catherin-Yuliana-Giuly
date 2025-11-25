// src/components/Movielist.jsx//
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio//
function MovieList({ movies }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "25px",
        padding: "20px",
      }}
    >
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
