import { useDispatch, useSelector } from "react-redux";
import { SPI_OPtions } from "../Utils/constants";
import { addTopRatedPlaying } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRatedPlayingMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRated);

  const getTopRatedPlayingData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const data = await fetch(url, SPI_OPtions);
    const top_playing = await data.json();
    dispatch(addTopRatedPlaying(top_playing.results));
  };

  useEffect(() => {
    !topRated && getTopRatedPlayingData();
  }, []);
};
export default useTopRatedPlayingMovies;
