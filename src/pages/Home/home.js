import React from "react";

import Book from "../../assets/icon/book.png";
import Music from "../../assets/icon/music.png";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="bg-image-home">
      <h1 className="title">Welcome Our Book & playing Music</h1>
      <div className="icon-temp">
        <Link to="/book">
          <img src={Book} alt="Book" style={{ width: 200, height: 200 }} />
          <h4 className="txt-h4">Reading Book</h4>
        </Link>
        <Link to="/music">
          {" "}
          <img src={Music} alt="music" style={{ width: 200, height: 200 }} />
          <h4 className="txt-h4">playing  Music</h4>
        </Link>
      </div>
    </div>
  );
}

export default index;
