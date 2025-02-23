import React from "react";
import AR from "../../assets/images/ar_rahman.jpg";
import ILAI from "../../assets/images/ilayaraja.jpg";
import YUVAN from "../../assets/images/yuvan.jpg";

const musicListData = [
  {
    name: "A.R Rahman Songs",
    img: AR,
    date: "22-Sep-2024",
  },
  {
    name: "Ilayaraja Songs",
    img: ILAI,
    date: "22-Sep-2024",
  },
  {
    name: "Yuvan Songs",
    img: YUVAN,
    date: "22-Sep-2024",
  },
  {
    name: "A.R Rahman Songs",
    img: AR,
    date: "22-Sep-2024",
  },
  {
    name: "A.R Rahman Songs",
    img: AR,
    date: "22-Sep-2024",
  },
];
function musicList() {
  return (
    <div className="music-division">
      {musicListData.map((list, index) => (
        <div className="box">
          <img src={list.img} alt="art" />
          <p>{list.name}</p>
          <p>created : {list.date}</p>
        </div>
      ))}
    </div>
  );
}

export default musicList;
