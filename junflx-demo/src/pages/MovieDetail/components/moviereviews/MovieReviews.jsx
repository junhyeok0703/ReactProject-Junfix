// MovieReviews.js

import React, { useEffect, useState } from "react";
import api from "../../../../utils/api";
import "./MovieReviews.style.css"; // CSS 파일 import
import Review from "./Review";

const MovieReviews = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const fetchReviews = async () => {
    try {
      const response = await api.get(
        `/movie/${id}/reviews?language=en-US&page=`
      );
      setData(response.data);
    } catch (error) {
      console.error("리뷰를 불러오는 중 오류 발생:", error);
    }
  };

  console.log("리뷰데이터", data);

  return (
    <div>
      {data?.results?.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

export default MovieReviews;
