import "./App.css";
import React, { useState } from "react";

import { moviesData } from "./comp/Data";
import { Movielist } from "./Movielist";
import Add from "./comp/Add";

function App() {
  const [MovieData, setMovieData] = useState(moviesData);
  // ici on va debuter les fonctions
  const handledelete = (ID) => {
    setMovieData(MovieData.filter((e) => e.id !== ID));
  };

  const handleseen = (movieId) => {
    console.log("movieId", movieId);

    setMovieData(
      MovieData.map((movie) =>
        movie.id == movieId ? { ...movie, seen: !movie.seen } : movie
      )
    );
  };

  const addFilm = (newMovie) => {
    setMovieData([...MovieData, newMovie]);
  };

  return (
    <div className="App">
      <Movielist
        MovieData={MovieData}
        handledelete={handledelete}
        handleseen={handleseen}
      />
      <Add addFilm={addFilm} />
    </div>
  );
}

export default App;
