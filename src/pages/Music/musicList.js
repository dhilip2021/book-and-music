import React from "react";
import AR from "../../assets/images/ar_rahman.jpg";
import ILAI from "../../assets/images/ilayaraja.jpg";
import YUVAN from "../../assets/images/yuvan.jpg";
import SPB from "../../assets/images/spb.jpg";
import CHITRA from "../../assets/images/chitra.jpg";
import { Box, Grid2 } from "@mui/material";

const musicListData = [
  {
    id:1,
    name: "A.R Rahman Songs",
    img: AR,
    date: "22-Sep-2024",
  },
  {
    id:2,
    name: "Ilayaraja Songs",
    img: ILAI,
    date: "22-Sep-2024",
  },
  {
    id:3,
    name: "Yuvan Songs",
    img: YUVAN,
    date: "22-Sep-2024",
  },
  {
    id:4,
    name: "S.P.B Songs",
    img: SPB,
    date: "22-Sep-2024",
  },
  {
    id:5,
    name: "chitra Songs",
    img: CHITRA,
    date: "22-Sep-2024",
  },
];
function musicList() {
  return (
    <Grid2 container spacing={0}>
      <Grid2
              item
              xs={12}
              md={2}
              sm={12}
              display={"grid"}
              sx={{ placeItems: "start", my: "auto" }}
            >
              <Box className="music-division">
              {musicListData.map((list, index) => (
        <div className="box">
          <img src={list.img} alt="art" />
          <p className="music-title">{list.name}</p>
          <p>created : {list.date}</p>
        </div>
      ))}
              </Box>

            </Grid2>
     
      </Grid2>
   
  );
}

export default musicList;
