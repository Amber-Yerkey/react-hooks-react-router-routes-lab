import React from "react";
import { actors } from "../data";

function Actors() {

  const newActors = actors.map((actor) => (
    <div key={actor.name}>
      <h1>Name: {actor.name}</h1>
      <h3>Movies: </h3>
      <ul>
        {actor.movies.map((actMovie) => (
          <li key={actMovie}>{actMovie}</li>
        ))}
      </ul>
      </div>
  ))


  return <div>
    <h1>Actors Page</h1>
    {newActors}
  </div>;
}

export default Actors;
