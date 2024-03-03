import React, { useState } from "react";
import { useSearchMovie } from "../../Hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenreQuery";
//경로2가지임
//nav바에서 클릭할때 온경우 => popularMovie
//keyword를 입력해서 온경우  => keyword와 관련된 영화들을 보여줌
const Moives = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  console.log(keyword);
  const { data, isLoading, isError, error } = useSearchMovie({ keyword, page });
  console.log("검색한 영화데이터", data);
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
        <Col xs={12}>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="정렬 기준">
              <Dropdown.Item>인기많은순</Dropdown.Item>
              <Dropdown.Item>인기적은순</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="장르별 검색">
              <Dropdown.Item>인기많은순</Dropdown.Item>
              <Dropdown.Item>인기적은순</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Row>
            {data?.results?.map((movie, index) => (
              <Col key={index} lg={2} md={6} xs={12}>
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
