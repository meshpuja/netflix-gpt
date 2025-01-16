import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMoviesSuggestion from "./GPTMoviesSuggestion";
import { BG_URL } from "./Utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="bg" />
      </div>
      <GPTSearchBar />
      <GPTMoviesSuggestion />
    </div>
  );
};

export default GPTSearch;
