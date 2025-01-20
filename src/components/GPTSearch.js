import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMoviesSuggestion from "./GPTMoviesSuggestion";
import { BG_URL } from "./Utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="bg" />
      </div>
      <GPTSearchBar />
      <GPTMoviesSuggestion />
    </div>
  );
};

export default GPTSearch;
