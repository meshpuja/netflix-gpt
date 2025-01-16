import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";

import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularPlayingMovies from "./hooks/usePopularPlayingMovies";
import useTopRatedPlayingMovies from "./hooks/useTopRatedPlayingMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
const Browse = () => {
  console.log("useNowPlayingMovies");
  const showGPTSEarch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTopRatedPlayingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGPTSEarch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <Secondarycontainer />
        </>
      )}

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
