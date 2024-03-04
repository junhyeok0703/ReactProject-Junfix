import React, { useEffect, useState } from "react";
import { usePopularMoviesQuery } from "../../../../Hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import api from "../../../../utils/api";
import Modalcompoent from "../../../MovieDetail/components/Model/Modalcompoent";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const [videodata, setVideodata] = useState();

  const fetchVideo = async () => {
    try {
      const response = await api.get(`/movie/${data?.results[0]?.id}/videos`);
      setVideodata(response.data);
    } catch (error) {
      console.error("리뷰를 불러오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  const videoId = videodata?.results[0]?.key;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

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
        <button onClick={() => setIsOpen(true)}>예고편 보기</button>
        {isOpen && (
          <Modalcompoent
            show={isOpen}
            onHide={() => setIsOpen(false)}
            id={videoId}
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
