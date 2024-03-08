import React, { useEffect, useState } from "react";
import { useSearchMovie } from "../../Hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenreQuery";

const Moives = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);

  const keyword = query.get("q");
  console.log(keyword);

  // 검색한 영화 데이터
  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
  } = useSearchMovie({ keyword, page });
  console.log("검색한 영화데이터", searchData);
  const [data, setData] = useState(searchData);
  useEffect(() => {
    setData(searchData);
  }, [searchData]);
  // 장르 영화 데이터
  const {
    data: genreData,
    isLoading: genreLoading,
    isError: genreError,
  } = useMovieGenreQuery();
  console.log("장르 영화데이터", genreData.id);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (searchLoading || genreLoading) {
    return <div class="lds-dual-ring"></div>;
  }

  if (searchError || genreError) {
    return <Alert> {searchError?.message || genreError?.message}</Alert>;
  }
  const genreFilter = (itemname) => {
    console.log("비교", data.results);
    const newdata = data.results.filter((item) => itemname.name === item.name);

    setData({ ...data, results: newdata });
    console.log("뉴데이터", data);
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <DropdownButton
            id="dropdown-basic-button"
            variant="danger"
            title="정렬 기준"
          >
            <Dropdown.Item
              onClick={() => {
                const sortedData = [...data.results].sort(
                  (a, b) => b.vote_average - a.vote_average
                );
                setData({ ...data, results: sortedData });
              }}
            >
              인기많은순
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                const sortedData = [...data.results].sort(
                  (a, b) => a.vote_average - b.vote_average
                );
                setData({ ...data, results: sortedData });
              }}
            >
              인기적은순
            </Dropdown.Item>
          </DropdownButton>

          <h1>장르</h1>
          {genreData.map((item) => (
            <button
              class="custom-btn btn-12"
              key={item}
              onClick={() => genreFilter(item)}
            >
              <span>{item.name}</span>
            </button>
          ))}
          <Row>
            {/* 검색한 영화 데이터 매핑 */}
            {data?.results?.map((movie, index) => (
              <Col key={index} lg={2} md={6} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}

            {/* 장르 영화 데이터 매핑 */}
            {genreData?.results?.map((movie, index) => (
              <Col key={index} lg={2} md={6} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactPaginate
                nextLabel="다음 >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={searchData?.total_pages || genreData?.total_pages}
                previousLabel="< 이전"
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
                className=""
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Moives;
