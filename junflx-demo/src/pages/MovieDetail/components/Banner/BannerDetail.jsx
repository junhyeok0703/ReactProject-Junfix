import React from "react";

import "./Banner.style.css";

const Banner = ({ data }) => {
  console.log("배너", data);

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data?.poster_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="banner-text-area">
        <h1>{data?.title}</h1>
        <p>{data?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
