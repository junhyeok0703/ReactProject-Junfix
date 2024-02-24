import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Banner/BannerDetail";

const Detail = ({ data }) => {
  console.log("안녕", data);
  return (
    <div>
      <Container>
        <Banner data={data} />
        <Row>
          <Col>
            <img
              className="w-80"
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`}
            />
          </Col>
          <Row>
            <Col>
              {data?.genres?.name?.map((genre, index) => (
                <Col key={index}>{`hello${genre}`}</Col>
              ))}
            </Col>
            <Col>title</Col>
            <Col>내용</Col>

            <Col>평점</Col>
            <Col>본사람</Col>
            <Col>몇세이용가</Col>

            <Col>대충내용</Col>

            <Col>Budget</Col>
            <Col>숫자</Col>

            <Col>Revenue</Col>
            <Col>숫자</Col>

            <Col>Release Date</Col>
            <Col>날짜</Col>

            <Row>
              <Col>run time</Col>
              <Col>117분</Col>
            </Row>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
