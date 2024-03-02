import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Banner/BannerDetail";
import Badge from "react-bootstrap/Badge";
import MovieReviews from "../moviereviews/MovieReviews";
import Recommendedmovies from "../Recommendedmovies/Recommendedmovies";

const Detail = ({ data }) => {
  console.log("안녕", data);

  // Check if data is defined before accessing properties
  if (!data) {
    return null; // or return a loading indicator or error message
  }

  return (
    <div>
      <Container>
        <Banner data={data} />
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
              {/* Check if genres is defined before mapping */}
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
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlxrOQsVFT-_r9Q71VtaI6T-RSskPTNNxOA&usqp=CAU"
                  }
                  width={20}
                  height={20}
                />
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
                    <img
                      src="data:image/png;base64,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"
                      width={20}
                      height={20}
                    />
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
            <button>리뷰</button>
            <button>추천영화</button>
            <MovieReviews id={data.id} />
            {/* <Recommendedmovies id={data.id} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
