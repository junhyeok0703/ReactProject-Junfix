import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import Over from "./over18.png";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenre";
const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlayout">
        <h1>{movie.title}</h1>
        <p>
          {movie.genre_ids.map((id) => (
            <Badge bg="danger">Danger</Badge>
          ))}
        </p>
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.poputlarity}</div>
          <div>
            {movie.adult ? "over18" : <img src={Over} width={30} height={30} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;