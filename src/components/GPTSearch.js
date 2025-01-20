import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMoviesSuggestion from "./GPTMoviesSuggestion";
import { BG_URL } from "./Utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="md:h-[100%] h-screen object-cover "
          src={BG_URL}
          alt="bg"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMoviesSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
