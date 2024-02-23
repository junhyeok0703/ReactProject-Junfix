import React from "react";

import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import { usePopularMoviesQuery } from "../../../../Hooks/usePopularMovies";

const Banner = ({ id }) => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  console.log(data);

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data?.results[0]?.poster_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="banner-text-area">
        <h1>{data?.results[0]?.title}</h1>
        <p>{data?.results[0]?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
