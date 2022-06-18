import React from "react";
import { movies } from "../data";

function Movies() {

    const movieData = movies.map((movie) => (
      <div key={movie.title}>
        <h1>Name: {movie.title}</h1>
        <h3>Time: {movie.time}</h3>
        <h4>Genres: </h4>
        <ul>
          {movie.genres.map((genre) =>(
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    ))

  return (<div>
    <h1>Movies Page</h1>
    <div>{movieData}</div>
    </div>
  )
}

export default Movies;
