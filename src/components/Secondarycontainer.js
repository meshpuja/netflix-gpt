import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowplaying && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowplaying} />
          <MovieList title={"Popular"} movies={movies.popularPlaying} />
          <MovieList title={"Upcoming movie"} movies={movies.upcoming} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
        </div>
      </div>
    )
  );
};

export default Secondarycontainer;
