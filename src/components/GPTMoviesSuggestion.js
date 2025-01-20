import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMoviesSuggestion = () => {
  const { movieName, movieData } = useSelector((store) => store.gpt);
  if (movieName == null) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieName.map((e, index) => (
        <div>
          <MovieList key={e} title={e} movies={movieData[index]} />
        </div>
      ))}
    </div>
  );
};

export default GPTMoviesSuggestion;
