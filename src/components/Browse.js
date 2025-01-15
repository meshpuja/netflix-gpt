import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";

import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularPlayingMovies from "./hooks/usePopularPlayingMovies";
import useTopRatedPlayingMovies from "./hooks/useTopRatedPlayingMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
const Browse = () => {
  console.log("useNowPlayingMovies");
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTopRatedPlayingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <Secondarycontainer />
      {/*
maincontainer
video background
video title
secondary container
movielist *n
cards *n
*/}
    </div>
  );
};

export default Browse;
