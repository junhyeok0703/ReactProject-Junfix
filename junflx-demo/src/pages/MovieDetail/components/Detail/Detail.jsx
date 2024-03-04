import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Banner/BannerDetail";
import Badge from "react-bootstrap/Badge";
import MovieReviews from "../moviereviews/MovieReviews";
import Recommendedmovies from "../Recommendedmovies/Recommendedmovies";
import "./Detail.style.css";
import starimg from "./star.png";
import over18 from "./19금.png";
const Detail = ({ data, id }) => {
  const [selectData, setSelectData] = useState("reviews");

  console.log("디테일페이지의 데이터", data);

  if (!data) {
    return null; //만약 데이터가 리퀘스트가 안되었을때 예외처리
  }

  return (
    <div>
      <Container>
        <Banner data={data} id={id} />
        <Row>
          <Col lg={6} sm={12}>
            <img
              className="w-80 "
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`}
              alt={data?.title}
            />
          </Col>
          <Col lg={6} sm={12}>
            <Col>
              {data.genres &&
                data.genres.map((item) => (
                  <Badge key={item.id} bg="danger">
                    {item.name}
                  </Badge>
                ))}
            </Col>
            <Col>
              <h1>{data.title}</h1>
              <h4>{data.tagline}</h4>
              <div className="d-flex">
                <img src={starimg} width={20} height={20} />
                <p>{data.vote_average}</p>
                <img
                  src="https://noona-netflix-v2.netlify.app/people4.png"
                  alt="관객사진"
                  width={20}
                  height={20}
                />
                <p>{data.popularity}</p>
                <p>
                  {data.adult === false ? (
                    <img
                      src="https://noona-netflix-v2.netlify.app/under18.svg"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <img src={over18} width={20} height={20} />
                  )}
                </p>
              </div>
              <div
                style={{
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                }}
              >
                {data.overview}
              </div>
              <div>
                <Badge bg="danger">Budget</Badge> ${data.budget}
              </div>
              <div>
                <Badge bg="danger">Revenue</Badge> ${data.revenue}
              </div>
              <div>
                <Badge bg="danger">Release Date</Badge> {data.release_date}
              </div>
              <div>
                <Badge bg="danger">Run time</Badge> {data.runtime}분
              </div>
            </Col>
          </Col>
          <Col>
            <button onClick={() => setSelectData("reviews")}>리뷰</button>

            <button onClick={() => setSelectData("Recommend")}>추천영화</button>

            {selectData === "reviews" ? (
              <MovieReviews id={data.id} />
            ) : (
              <Recommendedmovies id={data.id} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
