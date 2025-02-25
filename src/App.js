import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Book from "./pages/Book/book";
import Music from "./pages/Music/music";
import BookFlipPage from "./pages/Book/bookFlipPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/music" element={<Music />} />
        <Route path="/bookFlipPage/:id" element={<BookFlipPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
