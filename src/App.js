import React, {useEffect, useState} from "react";
import './app.css';
import Card from "./MovieCard";

const API_KEY = "http://www.omdbapi.com/?apikey=8324cc95";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies("Spiderman")
    }, []);

    return (<div className="app">
        <h1>Movie Land </h1>
        <div className="search">
            <input type="text"
                   placeholder="search for movies"
                   onChange={
                       (e) => setSearchTerm(e.target.value)
                   }
            />
            <button onClick={() => searchMovies(searchTerm)}>search
            </button>
        </div>
        {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <Card movie={movie}/>
                    ))}
                </div>)
            : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
    </div>);
}
export default App;