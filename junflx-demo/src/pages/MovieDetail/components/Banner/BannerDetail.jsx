import React, { useEffect, useState } from "react";
import "./Banner.style.css";
import Modalcompoent from "../Model/Modalcompoent";
import api from "../../../../utils/api";

const Banner = ({ data, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videodata, setVideodata] = useState();

  useEffect(() => {
    fetchVideo();
  }, [id]);

  const fetchVideo = async () => {
    try {
      const response = await api.get(`/movie/${id}/videos`);
      setVideodata(response.data);
    } catch (error) {
      console.error("리뷰를 불러오는 중 오류 발생:", error);
    }
  };

  const videoId = videodata?.results?.[0]?.key;
  console.log(videodata);
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data?.poster_path})`,
      }}
      className="banner"
    >
      <div className="banner-text-area">
        <h1>{data?.title}</h1>
        <p>{data?.overview}</p>
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
