import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${"https://wallpapers.com/images/high/vantablack-background-1920-x-1080-2jce1nl3275dp7p2.webp"})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is test descriptionThis is test descriptionThis is test
          descriptionThis is test descriptionThis is test descriptionThis is
          test descriptionThis is test descriptionThis is test descriptionThis
          is test descriptionThis is test descriptionThis is test
          descriptionThis is test descriptionThis is test descriptionThis is
          test descriptionThis is test descriptionThis is test description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
