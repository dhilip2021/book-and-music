import React from "react";
import Home from "../../assets/icon/home.png";
import { Link } from "react-router-dom";
import MusicList from "./musicList";
function music() {
  return (
    <div className="bg-image-music">
      <div className="textCenter">
        <h1 className="titleBook">Play your favorite Songs</h1>
        <Link to="/">
          <img src={Home} alt="Book" style={{ width: 75, height: 75 }} />
        </Link>
      </div>
      <div>
        <MusicList />
      </div>
    </div>
  );
}

export default music;
