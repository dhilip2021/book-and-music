import React from 'react'
import Home from "../../assets/icon/home.png"
import { Link } from 'react-router-dom'
import BookList  from './bookList'
function book() {
  return (
    <div className='bg-image-book'>
        <div className='textCenter'>
        <h1 className='titleBook'>Choose your favorite Book</h1>
      <Link to="/"><img src={Home} alt='Book' style={{width:75, height:75}} /></Link>
        </div>
      <BookList />

    </div>
  )
}

export default book
