import React, { useState } from "react";
import { useSearchMovie } from "../../Hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";

//경로2가지임
//nav바에서 클릭할때 온경우 => popularMovie
//keyword를 입력해서 온경우  => keyword와 관련된 영화들을 보여줌
const Moives = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  console.log(keyword);
  const { data, isLoading, isError, error } = useSearchMovie({ keyword, page });
  console.log("hel", data);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    <div class="lds-dual-ring"></div>;
  }
  if (isError) {
    <Alert> {error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results?.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Moives;
