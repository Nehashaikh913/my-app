import { Route, Routes } from 'react-router-dom';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from './Components/MovieCard';
import TodoWrapper from './Components/TodoWrapper';

// const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=849bae48"

function App() {

  // movie
  // const [movies,setMovies] = useState([])
  // const [searchTerm,setSearchTerm] = useState("");

  // console.log(searchTerm)

  // const searchMovies = async (title) => {
  //   try {
  //     const response = await axios.get(`${API_URL}&s=${title}`);
  //     setMovies(response.data.Search);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   searchMovies('spiderman');
  // }, []);
  // movie
  return (
    <div className="app">

      {/* movie */}
      {/* <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt='search' onClick={(e) => {searchMovies(searchTerm)}} />
      </div>

    {movies?.length > 0 ? (
       <div className='container'>
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div> 
    ): (
      <div className='empty'><h2>No movies found</h2></div>
    ) }  */}
      {/* movie */}

      {/* todo */}
      <TodoWrapper />

      {/* todo */}

      {/* <Routes>
        <Route exact path='/todos/:userId' Component={Login} />
        <Route exact path='/todos' Component={Login} />
      </Routes> */}
    </div>
  );
}

export default App;
