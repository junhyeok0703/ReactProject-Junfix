import React from "react";
import { useMovieReviews } from "../../../../Hooks/useMovieReviews";

const MovieReviews = ({ id }) => {
  const { data, isLoading } = useMovieReviews({ id });
  console.log(data);
  return <div>ghell</div>;
};

export default MovieReviews;
