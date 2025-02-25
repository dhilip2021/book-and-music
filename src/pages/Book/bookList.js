import React from "react";
import Book1 from "../../assets/images/book1.jpg";
import Book2 from "../../assets/images/book2.jpg";
import Book3 from "../../assets/images/book3.jpg";
import Book4 from "../../assets/images/book4.jpg";
import Book5 from "../../assets/images/book5.jpg";
import { Box, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

const bookListData = [
  {
    id:1,
    name: "Tormented Obsession",
    img: Book1,
    author: "Anna Zaires",
  },
  {
    id:2,
    name: "The Hidden House in Tenerife",
    img: Book2,
    author: "Shay Porat",
  },
  {
    id:3,
    name: "How to Stay Calm in a Chaotic World",
    img: Book3,
    author: "Ray Harmon",
  },
  {
    id:4,
    name: "Northern Wolf",
    img: Book4,
    author: "Daniel Greene",
  },
  {
    id:5,
    name: "Bodega Botanica Tales: Jose",
    img: Book5,
    author: "Maria Rodriguez Bross",
  },
];
function bookList() {
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
              {bookListData.map((list, index) => (
        <div className="book-box">
          <img src={list.img} alt="art" />
          <p className="book-title">{list.name}</p>
          <p className="book-author">Author : {list.author}</p>
          <Link to={`/bookFlipPage/${list.id}`}>
          <Box textAlign={"center"} marginBottom={2}>

          <Button variant="contained">Read</Button>
          </Box>
          </Link>
         
        </div>
      ))}
              </Box>
              

            </Grid2>
     
      </Grid2>
   
  );
}

export default bookList;
