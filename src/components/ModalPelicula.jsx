// src/components/ModalPelicula.jsx
import "./ModalPelicula.css";

const ModalPelicula = ({ pelicula, onClose }) => {
  if (!pelicula) return null;

  const { title, overview, release_date, vote_average } = pelicula;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">{title}</h3>
        <hr className="modal-divider" />
        <div className="modal-info">
          <p>
            <strong>Año:</strong> {release_date?.slice(0, 4)}
          </p>
          <p>
            <strong>Descripción:</strong> {overview}
          </p>
          <p>
            <strong>Calificación:</strong> {vote_average} / 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalPelicula;
