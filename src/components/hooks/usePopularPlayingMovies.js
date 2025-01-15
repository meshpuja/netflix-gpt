import { useDispatch } from "react-redux";
import { SPI_OPtions } from "../Utils/constants";
import { addPopularPlaying } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();
  const getPopularPlayingData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const data = await fetch(url, SPI_OPtions);
    const popular_playing = await data.json();
    dispatch(addPopularPlaying(popular_playing.results));
  };

  useEffect(() => {
    getPopularPlayingData();
  }, []);
};
export default usePopularPlayingMovies;
