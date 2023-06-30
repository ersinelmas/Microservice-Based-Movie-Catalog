import logo from './logo.svg';
import './App.css';
import PopularMovies from './components/PopularMovies';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TopRatedMovies from './components/TopRatedMovies';
import VotedMovies from './components/VotedMovies';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/homePage" element={<HomePage></HomePage>} />
          <Route
            path="/popularMovies"
            element={<PopularMovies></PopularMovies>}
          />
          <Route
            path="/topRatedMovies"
            element={<TopRatedMovies></TopRatedMovies>}
          />
          <Route path="/votedMovies" element={<VotedMovies></VotedMovies>} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
