import React, { useEffect, useState } from "react";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import { useRecommendationsMovies } from "../../../../Hooks/useRecommendationsMovies";
import api from "../../../../utils/api";
import { Col, Container, Row } from "react-bootstrap";

const Recommendedmovies = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const fetchReviews = async () => {
    try {
      const response = await api.get(`/movie/${id}/recommendations?`);
      setData(response.data);
    } catch (error) {
      console.error("리뷰를 불러오는 중 오류 발생:", error);
    }
  };

  console.log(data?.results);

  return (
    <Container>
      <Row>
        {data?.results &&
          data.results.map((item) => (
            <Col>
              <MovieCard movie={item} key={item.id} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Recommendedmovies;
