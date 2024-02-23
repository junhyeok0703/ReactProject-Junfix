import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Detail = ({ data }) => {
  if (!data || !data.backdrop_path) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Container>
        <div
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data.backdrop_path})`,
          }}
        ></div>
        <Row>{/* ... rest of your code ... */}</Row>
      </Container>
    </div>
  );
};

export default Detail;
