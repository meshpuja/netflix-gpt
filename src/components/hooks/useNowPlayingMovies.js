import { useDispatch, useSelector } from "react-redux";
import { SPI_OPtions } from "../Utils/constants";
import { addNowPlaying } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingData = useSelector((store) => store.movies.nowplaying);
  const getNowPlayingData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const data = await fetch(url, SPI_OPtions);
    const now_playing = await data.json();
    dispatch(addNowPlaying(now_playing.results));
  };

  useEffect(() => {
    if (!nowPlayingData) getNowPlayingData();
  }, []);
};
export default useNowPlayingMovies;
