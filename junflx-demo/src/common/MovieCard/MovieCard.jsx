import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import Over from "./over18.png";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenreQuery";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const gotoDetailMovie = (id) => {
    navigate(`/movies/${id}`);
  };
  const { data: genreData } = useMovieGenreQuery();
  console.log("영화데이터", movie);
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };
  return (
    <div
      onClick={() => gotoDetailMovie(movie.id)}
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
          {showGenre(movie.genre_ids).map((genre, ind) => (
            <Badge bg="danger" key={ind}>
              {genre}
            </Badge>
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
