import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=6ea75112';

// const movie1 ={
// "Title": "Batman Begins",
// "Year": "2005",
// "imdbID": "tt0372784",
// "Type": "movie",
// "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwODg3ODI0NV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
// }

const App = () => {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async (title) => {
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();

// console.log(data.Search);

if (data.Search) {
setMovies(data.Search);
} else {
setMovies([]);
}
};

useEffect(() => {
searchMovies('Batman');
}, []);

return (
// <h1>App</h1>

<div className="app">

    <h1>MovieLand</h1>

    <div className="search">

        <input placeholder="Search for movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchTerm)}
        />

    </div>


    {
    movies?.length > 0
    ?     (
        <div className="container">
            {movies.map((movie) => (
            <MovieCard movie={movie} />
            ))}
        </div>
        ) : (
        <div className="empty">
            <h1>No Movies Found</h1>
        </div>
        )
    }

</div>
);

};

export default App;