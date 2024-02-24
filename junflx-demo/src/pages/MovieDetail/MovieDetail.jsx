import React from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { useMovieDetail } from "../../Hooks/useMovieDetail";
import Banner from "./components/Banner/BannerDetail";
import Detail from "./components/Detail/Detail";

const MovieDetail = () => {
  const parm = useParams();
  const { id } = parm;
  const { data, isLoading, isError, error } = useMovieDetail({ id });
  console.log("나여깄어", data);
  return (
    <div>
      <Detail data={data} />
    </div>
  );
};

export default MovieDetail;
