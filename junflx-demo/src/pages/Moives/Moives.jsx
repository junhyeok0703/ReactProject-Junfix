import React, { useEffect, useState } from "react";
import { useSearchMovie } from "../../Hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap"; // react-bootstrap에서 Alert을 임포트해야 합니다.
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useMovieGenreQuery } from "../../Hooks/useMovieGenreQuery";

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ results: [] }); // 초기 data 상태 설정
  const [filteredData, setFilteredData] = useState([]);

  const keyword = query.get("q");
  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
  } = useSearchMovie({ keyword, page });
  const {
    data: genreData,
    isLoading: genreLoading,
    isError: genreError,
  } = useMovieGenreQuery();

  useEffect(() => {
    setData(searchData);
  }, [searchData]);

  useEffect(() => {
    setFilteredData(data?.results);
  }, [data]);

  const genreFilter = (item) => {
    const filteredMovies = data.results?.filter((movie) =>
      movie.genre_ids.includes(item.id)
    );
    setFilteredData(filteredMovies);
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (searchLoading || genreLoading) {
    return <div>Loading...</div>;
  }

  if (searchError || genreError) {
    return (
      <Alert variant="danger">
        {searchError?.message || genreError?.message}
      </Alert>
    );
  }

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
                const sortedData = [...data.results]?.sort(
                  (a, b) => b.vote_average - a.vote_average
                );
                setData({ ...data, results: sortedData });
              }}
            >
              인기많은순
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                const sortedData = [...data.results]?.sort(
                  (a, b) => a.vote_average - b.vote_average
                );
                setData({ ...data, results: sortedData });
              }}
            >
              인기적은순
            </Dropdown.Item>
          </DropdownButton>

          <h1>장르</h1>
          {genreData?.map(
            (
              item // genreData가 장르 목록을 'genres' 프로퍼티에 포함하고 있다고 가정합니다.
            ) => (
              <button
                className="custom-btn btn-12"
                key={item.id}
                onClick={() => genreFilter(item)}
              >
                <span>{item.name}</span>
              </button>
            )
          )}

          <Row>
            {/* 필터링된 영화 데이터 매핑 */}
            {filteredData.map((movie, index) => (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
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
                pageCount={searchData?.total_pages}
                previousLabel="< 이전"
                breakLabel="..."
                containerClassName="pagination"
                activeClassName="active"
                forcePage={page - 1}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
