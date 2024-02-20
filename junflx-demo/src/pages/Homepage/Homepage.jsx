import React from "react";
import Banner from "./components/Banner/Banner";
import PopulaMoiveSlide from "./components/PopularMovieSlide/PopulaMoiveSlide";
import TopRatedMovieSlide from "./components/TopRatedMovie/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
//1.배너=> popoular 영화를 들고와서 첫번째 아이템 이미지을 배너에 붙일거임  -> api호출을 해야함 들고올때
//2.popular movie
//3.top rated movie
//4. upcoming movie
//homepage안에 컴포넌트폴더를 만들어서 홈페이지에 들어갈 컴포넌트들만 저장해둘거임

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopulaMoiveSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  );
};

export default Homepage;
