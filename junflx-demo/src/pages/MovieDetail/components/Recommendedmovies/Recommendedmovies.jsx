import React from "react";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const Recommendedmovies = ({ id }) => {
  return (
    <div>
      <MovieCard id={id} />
    </div>
  );
};

export default Recommendedmovies;
