// src/components/RatingFilter.jsx
// Fiorella Ordenes, Catherine Rojas, Yuliana Nuñes y Giuliana Poggio
import { Rating } from "react-simple-star-rating";

const RatingFilter = ({ onRatingChange }) => {
  const handleRating = (value) => {
    const estrellas = value / 20;
    onRatingChange(estrellas);
  };

  return (
    <Rating
      onClick={handleRating}
      size={25}
      allowFraction
      fillColor="#f5c518"
    />
  );
};

export default RatingFilter;
