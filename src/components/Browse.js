import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";

import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovies();
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
