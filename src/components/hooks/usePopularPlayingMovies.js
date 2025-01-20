import { useDispatch, useSelector } from "react-redux";
import { SPI_OPtions } from "../Utils/constants";
import { addPopularPlaying } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();
  const popularPlaying = useSelector((store) => store.movies.popularPlaying);

  const getPopularPlayingData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const data = await fetch(url, SPI_OPtions);
    const popular_playing = await data.json();
    dispatch(addPopularPlaying(popular_playing.results));
  };

  useEffect(() => {
    !popularPlaying && getPopularPlayingData();
  }, []);
};
export default usePopularPlayingMovies;
