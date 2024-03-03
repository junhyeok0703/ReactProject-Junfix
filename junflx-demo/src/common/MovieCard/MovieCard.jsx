import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenreQuery";
import { useNavigate } from "react-router-dom";
import over18 from "./19금.png";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const gotoDetailMovie = (id) => {
    navigate(`/movies/${id}`);
  };
  const { data: genreData } = useMovieGenreQuery();

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
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${
            movie.backdrop_path === null
              ? movie.poster_path
              : movie.backdrop_path
          }` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlayout">
        <h3>{movie.title}</h3>
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
            {movie.adult ? (
              <img src={over18} width={30} height={30} />
            ) : (
              <img
                src={"https://noona-netflix-v2.netlify.app/under18.svg"}
                width={30}
                height={30}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
