import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import language from "./Utils/language";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { open_AI, SPI_OPtions } from "./Utils/constants";
import { addMoviesToGpt } from "./Utils/gptSlice";
const genAI = new GoogleGenerativeAI(open_AI);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const GPTSearchBar = () => {
  const searchTxt = useRef(null);
  const dispatch = useDispatch();
  const fetchMovieResult = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const data = await fetch(url, SPI_OPtions);
    const jsonData = await data.json();
    //  console.log(jsonData);
    return jsonData.results;
  };
  const handleOnclick = async () => {
    const gptSearchQuery =
      "Act as the movie recommendation system and suggest some movies for query" +
      searchTxt.current.value +
      ". only give me names of 5 movies comma separaed like the examples given ahead. Example result:Gadar, sholey, don, golmal, koi mil gaya";
    const data = await model.generateContent(`${gptSearchQuery}`);
    const res = await data.response;
    const movieData = res.text().split(",");

    const promiseArray = movieData.map((movie) => fetchMovieResult(movie));
    const result = await Promise.all(promiseArray);
    dispatch(
      addMoviesToGpt({ movieName: res.text().split(","), movieData: result })
    );
    console.log(result);
  };
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12 w-full md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTxt}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[langKey].placeHolder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-500 text-white rounded-lg"
          onClick={handleOnclick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
