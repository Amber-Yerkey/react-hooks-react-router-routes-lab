import React from "react";
import { directors } from "../data";

function Directors() {

  const dirData = directors.map((director) => (
    <div key={director.name}>
      <h1>Name: {director.name}</h1>
      <ul>
        {director.movies.map((dMovie) => (
          <li key={dMovie}>{dMovie}</li>
        ))}
      </ul>
    </div>
  ))


  return <div>
    <h1>Directors Page</h1>
    {dirData}
    </div>;
}

export default Directors;
