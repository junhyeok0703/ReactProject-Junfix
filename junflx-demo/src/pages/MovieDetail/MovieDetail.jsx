import React from "react";
import { useParams } from "react-router-dom";

import { useMovieDetail } from "../../Hooks/useMovieDetail";

import Detail from "./components/Detail/Detail";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenreQuery";

const MovieDetail = () => {
  const parm = useParams();
  const { id } = parm;
  const { data, isLoading, isError, error } = useMovieDetail({ id });
  console.log("영화디테일데이터", data);
  const a = useMovieGenreQuery({ id });
  console.log("장르쿼리데이터", a);

  return (
    <div>
      <Detail data={data} />
    </div>
  );
};

export default MovieDetail;
