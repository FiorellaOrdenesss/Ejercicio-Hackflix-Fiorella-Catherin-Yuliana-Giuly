// src/components/RatingFilter.jsx
import { Rating } from "react-simple-star-rating";

const RatingFilter = ({ onRatingChange }) => {
  const handleRating = (value) => {
    // value llega de 0 a 100 → lo pasamos a 0–5 estrellas
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
