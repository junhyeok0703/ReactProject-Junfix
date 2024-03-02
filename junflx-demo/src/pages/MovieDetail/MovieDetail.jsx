import React from "react";
import { useParams } from "react-router-dom";

import { useMovieDetail } from "../../Hooks/useMovieDetail";

import Detail from "./components/Detail/Detail";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenreQuery";

const MovieDetail = () => {
  const parm = useParams();
  const { id } = parm;
  const { data, isLoading, isError, error } = useMovieDetail({ id });
  console.log("나여깄어", data);
  const a = useMovieGenreQuery({ id });
  console.log("hell", a);
  return (
    <div>
      <Detail data={data} />
    </div>
  );
};

export default MovieDetail;
